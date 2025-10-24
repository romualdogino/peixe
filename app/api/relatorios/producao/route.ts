import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse } from '@/app/types'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const dataInicio = searchParams.get('dataInicio')
    const dataFim = searchParams.get('dataFim')
    const tanqueId = searchParams.get('tanqueId')

    const where: any = {}
    
    if (dataInicio || dataFim) {
      where.data_inicio = {}
      if (dataInicio) where.data_inicio.gte = new Date(dataInicio)
      if (dataFim) where.data_inicio.lte = new Date(dataFim)
    }
    
    if (tanqueId) {
      where.tanque_id = tanqueId
    }

    // Buscar ciclos no período
    const ciclos = await prisma.cicloProducao.findMany({
      where,
      include: {
        tanque: {
          select: {
            nome: true,
            volume_m3: true
          }
        }
      },
      orderBy: {
        data_inicio: 'desc'
      }
    })

    // Calcular métricas consolidadas
    const metricas = {
      totalCiclos: ciclos.length,
      ciclosAtivos: ciclos.filter(c => !c.data_fim).length,
      ciclosFinalizados: ciclos.filter(c => c.data_fim).length,
      producaoTotalKg: ciclos.reduce((sum, c) => sum + (c.peso_atual || 0) * (c.quantidade_atual || 0) / 1000, 0),
      mortalidadeTotal: ciclos.reduce((sum, c) => sum + (c.mortes || 0), 0),
      alimentacaoTotal: ciclos.reduce((sum, c) => sum + (c.alimentacao_total_kg || 0), 0),
      custoTotal: ciclos.reduce((sum, c) => sum + (c.custo_total || 0), 0)
    }

    const response: ApiResponse = {
      success: true,
      data: {
        ciclos,
        metricas
      }
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Get relatorio producao error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao gerar relatório de produção' },
      { status: 500 }
    )
  }
}