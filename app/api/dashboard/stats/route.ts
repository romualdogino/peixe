// app/api/dashboard/stats/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'

export async function GET() {
  try {
    const [
      totalTanques,
      tanquesAtivos,
      ciclosAtivos,
      biometriasPendentes,
      alertasQualidade
    ] = await prisma.$transaction([
      // Total de tanques
      prisma.tanque.count({
        where: { isActive: true }
      }),
      
      // Tanques ativos
      prisma.tanque.count({
        where: { 
          status: 'ATIVO',
          isActive: true 
        }
      }),
      
      // Tanques com ciclos ativos
      prisma.tanque.count({
        where: {
          status: 'ATIVO',
          isActive: true,
          ciclo_atual_id: { not: null }
        }
      }),
      
      // Biometrias dos últimos 7 dias (para "próximas")
      prisma.biometria.count({
        where: {
          data_amostra: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          }
        }
      }),
      
      // Alertas de qualidade de água
      prisma.qualidadeAgua.count({
        where: {
          OR: [
            { oxigenio_dissolvido: { lt: 4 } },
            { ph: { lt: 6.5 } },
            { ph: { gt: 8.5 } },
            { amonia: { gt: 0.5 } }
          ]
        }
      })
    ])

    return NextResponse.json({
      totalTanques,
      tanquesAtivos,
      tanquesProducao: ciclosAtivos,
      proximasBiometrias: biometriasPendentes,
      alertasCriticos: alertasQualidade
    })
  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar estatísticas do dashboard' },
      { status: 500 }
    )
  }
}