import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse } from '@/app/types'

interface RouteParams {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params

    const ciclo = await prisma.cicloProducao.findUnique({
      where: { id },
      include: {
        tanque: {
          select: {
            nome: true,
            codigo_interno: true,
            volume_m3: true,
            tipo: true
          }
        }
      }
    })

    if (!ciclo) {
      return NextResponse.json(
        { success: false, error: 'Ciclo não encontrado' },
        { status: 404 }
      )
    }

    // Buscar métricas adicionais
    const metricas = await prisma.registroDiario.aggregate({
      where: {
        tanque_id: ciclo.tanque_id,
        data: {
          gte: ciclo.data_inicio,
          lte: ciclo.data_fim || new Date()
        }
      },
      _sum: {
        quantidade_kg: true,
        mortalidade: true
      },
      _avg: {
        temperatura_agua: true
      }
    })

    const response: ApiResponse = {
      success: true,
      data: {
        ...ciclo,
        metricas
      }
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Get ciclo error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao buscar ciclo' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params
    const body = await request.json()

    const ciclo = await prisma.cicloProducao.update({
      where: { id },
      data: {
        ...body,
        data_fim: body.data_fim ? new Date(body.data_fim) : undefined,
        data_prevista_saida: body.data_prevista_saida ? new Date(body.data_prevista_saida) : undefined,
        quantidade_atual: body.quantidade_atual ? parseInt(body.quantidade_atual) : undefined,
        peso_atual: body.peso_atual ? parseFloat(body.peso_atual) : undefined,
        mortes: body.mortes ? parseInt(body.mortes) : undefined,
        alimentacao_total_kg: body.alimentacao_total_kg ? parseFloat(body.alimentacao_total_kg) : undefined,
        custo_total: body.custo_total ? parseFloat(body.custo_total) : undefined
      }
    })

    // Se encerrou o ciclo, liberar o tanque
    if (body.data_fim) {
      await prisma.tanque.update({
        where: { ciclo_atual_id: id },
        data: {
          ciclo_atual_id: null,
          status: 'VAZIO'
        }
      })
    }

    const response: ApiResponse = {
      success: true,
      data: ciclo,
      message: 'Ciclo atualizado com sucesso'
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Update ciclo error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao atualizar ciclo' },
      { status: 500 }
    )
  }
}