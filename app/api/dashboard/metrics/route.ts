// app/api/dashboard/metrics/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'

export async function GET() {
  try {
    const [
      totalCiclos,
      biomassaTotal,
      alimentacaoHoje,
      mortalidadeTotal
    ] = await prisma.$transaction([
      // Total de ciclos ativos
      prisma.cicloProducao.count({
        where: { 
          status: 'ativo',
          data_fim: null 
        }
      }),
      
      // Biomassa total estimada
      prisma.cicloProducao.aggregate({
        where: { 
          status: 'ativo',
          data_fim: null 
        },
        _sum: {
          quantidade_atual: true,
          peso_atual: true
        }
      }),
      
      // Alimentação de hoje
      prisma.registroDiario.aggregate({
        where: {
          data: {
            gte: new Date(new Date().setHours(0, 0, 0, 0))
          }
        },
        _sum: {
          quantidade_kg: true
        }
      }),
      
      // Mortalidade dos últimos 7 dias
      prisma.registroDiario.aggregate({
        where: {
          data: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          }
        },
        _sum: {
          mortalidade: true
        }
      })
    ])

    const biomassaKg = (biomassaTotal._sum.peso_atual || 0) * (biomassaTotal._sum.quantidade_atual || 0) / 1000
    
    return NextResponse.json({
      ciclosAtivos: totalCiclos,
      biomassaTotal: `${(biomassaKg / 1000).toFixed(1)}t`, // Converter para toneladas
      alimentacaoHoje: `${alimentacaoHoje._sum.quantidade_kg || 0}kg`,
      mortalidadeSemana: mortalidadeTotal._sum.mortalidade || 0
    })
  } catch (error) {
    console.error('Erro ao buscar métricas:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar métricas do dashboard' },
      { status: 500 }
    )
  }
}