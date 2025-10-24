// app/api/ciclos/iniciar/route.ts (VERSÃO COMPLETA APÓS MIGRAÇÃO)
import { NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const {
      tanque_id,
      especie,
      origem_lote,
      data_inicio,
      quantidade_inicial,
      peso_inicial_g,
      data_prevista_saida,
      observacoes // ✅ Agora incluído após migração
    } = body

    // Validar dados obrigatórios
    if (!tanque_id || !especie || !quantidade_inicial || !peso_inicial_g) {
      return NextResponse.json(
        { error: 'Dados obrigatórios faltando' },
        { status: 400 }
      )
    }

    // Verificar se o tanque existe e está disponível
    const tanque = await prisma.tanque.findUnique({
      where: { 
        id: tanque_id,
        isActive: true 
      }
    })

    if (!tanque) {
      return NextResponse.json(
        { error: 'Tanque não encontrado ou inativo' },
        { status: 404 }
      )
    }

    // Verificar se o tanque já tem um ciclo ativo
    if (tanque.ciclo_atual_id) {
      return NextResponse.json(
        { error: 'Tanque já possui um ciclo de produção ativo' },
        { status: 400 }
      )
    }

    // Verificar se o tanque está com status ATIVO
    if (tanque.status !== 'ATIVO') {
      return NextResponse.json(
        { error: 'Tanque não está ativo para iniciar novo ciclo' },
        { status: 400 }
      )
    }

    // Criar o ciclo de produção (com observacoes)
    const ciclo = await prisma.cicloProducao.create({
      data: {
        tanque_id,
        especie,
        origem_lote,
        data_inicio: new Date(data_inicio),
        quantidade_inicial: parseInt(quantidade_inicial),
        quantidade_atual: parseInt(quantidade_inicial),
        peso_inicial_g: parseFloat(peso_inicial_g),
        peso_atual: parseFloat(peso_inicial_g),
        data_prevista_saida: data_prevista_saida ? new Date(data_prevista_saida) : null,
        status: 'ativo',
        observacoes // ✅ Agora funciona
      }
    })

    // Atualizar o tanque com o ciclo atual
    await prisma.tanque.update({
      where: { id: tanque_id },
      data: { 
        ciclo_atual_id: ciclo.id,
        status: 'ATIVO'
      }
    })

    return NextResponse.json({
      success: true,
      ciclo,
      message: 'Ciclo de produção iniciado com sucesso'
    })

  } catch (error) {
    console.error('Erro ao iniciar ciclo:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor ao iniciar ciclo' },
      { status: 500 }
    )
  }
}