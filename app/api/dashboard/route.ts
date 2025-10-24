import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse } from '@/app/types'

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id') // ← apenas uma declaração

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Usuário não autenticado' },
        { status: 401 }
      )
    }

    // Buscar dados em paralelo para melhor performance
    const [
      totalTanques,
      tanquesAtivos,
      ciclosAtivos,
      registrosHoje,
      alertasQualidade,
      estoqueBaixo
    ] = await Promise.all([
      // Total de tanques
      prisma.tanque.count({
        where: { isActive: true }
      }),

      // Tanques ativos
      prisma.tanque.count({
        where: { 
          isActive: true,
          status: 'ATIVO'
        }
      }),

      // Ciclos ativos
      prisma.cicloProducao.count({
        where: { 
          status: 'ativo',
          data_fim: null
        }
      }),

      // Registros do dia
      prisma.registroDiario.count({
        where: {
          data: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
            lt: new Date(new Date().setHours(23, 59, 59, 999))
          }
        }
      }),

      // Alertas de qualidade da água
      prisma.qualidadeAgua.count({
        where: {
          OR: [
            { oxigenio_dissolvido: { lt: 5 } }, // OD baixo
            { ph: { lt: 6.5 } }, // pH ácido
            { ph: { gt: 8.5 } }, // pH alcalino
            { amonia: { gt: 0.5 } } // Amônia alta
          ]
        }
      }),

      // Produtos com estoque baixo
      prisma.produtoEstoque.count({
        where: {
          estoque_atual_kg: { lt: 10 } // Menos de 10kg
        }
      })
    ])

    // Métricas recentes
    const metricasRecentes = await prisma.registroDiario.findMany({
      where: {
        data: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Últimos 7 dias
        }
      },
      select: {
        data: true,
        temperatura_agua: true,
        mortalidade: true,
        quantidade_kg: true,
        tanque: {
          select: {
            nome: true
          }
        }
      },
      orderBy: {
        data: 'desc'
      },
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
        producaoTotal: 0, // Placeholder - calcular baseado nos ciclos
        metricasRecentes,
        resumo: {
          qualidadeAgua: alertasQualidade,
          estoque: estoqueBaixo
        }
      }
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Dashboard error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao carregar dashboard' },
      { status: 500 }
    )
  }
}