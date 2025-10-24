import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse } from '@/app/types'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const tanqueId = searchParams.get('tanqueId')

    const where: any = {}
    if (tanqueId) {
      where.tanque_id = tanqueId
    }

    // Buscar dados para análise de desempenho
    const [ciclos, biometrias, qualidadeAgua] = await Promise.all([
      // Ciclos de produção
      prisma.cicloProducao.findMany({
        where,
        include: {
          tanque: {
            select: {
              nome: true
            }
          }
        },
        orderBy: {
          data_inicio: 'desc'
        }
      }),

      // Biometrias para análise de crescimento
      prisma.biometria.findMany({
        where,
        orderBy: {
          data_amostra: 'asc'
        },
        take: 100 // Limitar para performance
      }),

      // Qualidade da água para correlações
      prisma.qualidadeAgua.findMany({
        where,
        orderBy: {
          data_analise: 'desc'
        },
        take: 50
      })
    ])

    // Calcular indicadores de desempenho
    const indicadores = ciclos.map(ciclo => {
      const biometriasCiclo = biometrias.filter(b => 
        b.tanque_id === ciclo.tanque_id && 
        new Date(b.data_amostra) >= ciclo.data_inicio &&
        (ciclo.data_fim ? new Date(b.data_amostra) <= ciclo.data_fim : true)
      )

      const ganhoPeso = ciclo.peso_atual && ciclo.peso_inicial_g 
        ? ciclo.peso_atual - ciclo.peso_inicial_g
        : 0

      const taxaSobrevivencia = ciclo.quantidade_inicial && ciclo.quantidade_atual
        ? (ciclo.quantidade_atual / ciclo.quantidade_inicial) * 100
        : 0

      const conversaoAlimentar = ciclo.alimentacao_total_kg && ganhoPeso > 0
        ? ciclo.alimentacao_total_kg / (ganhoPeso * ciclo.quantidade_atual! / 1000)
        : 0

      return {
        cicloId: ciclo.id,
        especie: ciclo.especie,
        duracaoDias: ciclo.data_fim 
          ? Math.ceil((ciclo.data_fim.getTime() - ciclo.data_inicio.getTime()) / (1000 * 60 * 60 * 24))
          : Math.ceil((new Date().getTime() - ciclo.data_inicio.getTime()) / (1000 * 60 * 60 * 24)),
        ganhoPeso,
        taxaSobrevivencia,
        conversaoAlimentar,
        biometrias: biometriasCiclo.length
      }
    })

    const response: ApiResponse = {
      success: true,
      data: {
        ciclos,
        indicadores,
        qualidadeAgua: qualidadeAgua.slice(0, 10) // Últimas 10 análises
      }
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Get relatorio desempenho error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao gerar relatório de desempenho' },
      { status: 500 }
    )
  }
}