import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse } from '@/app/types'
import { verifyToken } from '@/app/lib/auth'

export async function GET(request: NextRequest) {
  try {
    // SOLUÇÃO: Buscar userId do token diretamente, não do header
    const authHeader = request.headers.get('authorization')
    let userId = request.headers.get('x-user-id') // Pode vir null do middleware

    console.log('📊 Dashboard API - Debug headers:', {
      authHeader: authHeader ? 'PRESENT' : 'MISSING',
      xUserId: userId
    })

    // Se x-user-id não veio, tentar decodificar do token
    if (!userId && authHeader) {
      try {
        const token = authHeader.replace('Bearer ', '')
        const decoded = verifyToken(token)
        userId = decoded.userId
        console.log('✅ Dashboard API - UserId obtido do token:', userId)
      } catch (error) {
        console.log('❌ Dashboard API - Erro ao decodificar token:', error)
        return NextResponse.json(
          { success: false, error: 'Token inválido' },
          { status: 401 }
        )
      }
    }

    // Se ainda não tem userId, erro
    if (!userId) {
      console.log('❌ Dashboard API - UserId não encontrado de nenhuma forma')
      return NextResponse.json(
        { success: false, error: 'Usuário não autenticado' },
        { status: 401 }
      )
    }

    console.log('🎯 Dashboard API - User ID final:', userId)

    // AGORA BUSCAR DADOS REAIS (mantenha seu código atual)
    const [
      totalTanques,
      tanquesAtivos,
      ciclosAtivos,
      registrosHoje,
      alertasQualidade,
      estoqueBaixo,
      producaoTotal
    ] = await Promise.all([
      prisma.tanque.count({ where: { isActive: true } }),
      prisma.tanque.count({ where: { isActive: true, status: 'ATIVO' } }),
      prisma.cicloProducao.count({ where: { status: 'ativo', data_fim: null } }),
      prisma.registroDiario.count({
        where: {
          data: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
            lt: new Date(new Date().setHours(23, 59, 59, 999))
          }
        }
      }),
      prisma.qualidadeAgua.count({
        where: {
          OR: [
            { oxigenio_dissolvido: { lt: 5 } },
            { ph: { lt: 6.5 } },
            { ph: { gt: 8.5 } },
            { amonia: { gt: 0.5 } }
          ],
          data_analise: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
        }
      }),
      prisma.produtoEstoque.count({ where: { estoque_atual_kg: { lt: 50 } } }),
      prisma.cicloProducao.aggregate({
        where: { status: 'ativo', data_fim: null },
        _sum: { peso_atual: true }
      }).then(result => {
        const totalPeso = result._sum.peso_atual || 0
        return totalPeso > 0 ? Math.round((totalPeso / 1000) * 1.2) : 0
      })
    ])

    // Buscar métricas e alertas (seu código atual)
    const metricasRecentes = await prisma.registroDiario.findMany({
      where: { data: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } },
      select: { data: true, temperatura_agua: true, mortalidade: true, quantidade_kg: true, tanque: { select: { nome: true } } },
      orderBy: { data: 'desc' },
      take: 10
    })

    const response: ApiResponse = {
      success: true,
      data: {
        totalTanques,
        tanquesAtivos,
        ciclosAtivos,
        registrosHoje,
        alertas: alertasQualidade + estoqueBaixo,
        producaoTotal,
        metricasRecentes,
        alertasRecentes: [], // Pode adicionar depois
        resumo: {
          qualidadeAgua: alertasQualidade,
          estoque: estoqueBaixo,
          producao: producaoTotal
        }
      }
    }

    console.log('📊 Dashboard - Dados carregados com sucesso')
    return NextResponse.json(response)

  } catch (error) {
    console.error('❌ Dashboard error:', error)
    return NextResponse.json(
      { success: false, error: 'Erro ao carregar dashboard' },
      { status: 500 }
    )
  }
}