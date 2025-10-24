// app/api/dashboard/alerts/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'

export async function GET() {
  try {
    // 1. Alertas de qualidade de água crítica
    const qualidadeAlerts = await prisma.qualidadeAgua.findMany({
      where: {
        OR: [
          { oxigenio_dissolvido: { lt: 4 } },
          { ph: { lt: 6.5 } },
          { ph: { gt: 8.5 } },
          { amonia: { gt: 0.5 } }
        ]
      },
      include: {
        tanque: {
          select: { nome: true, codigo_interno: true }
        }
      },
      orderBy: { data_analise: 'desc' },
      take: 10
    })

    // 2. Tanques sem registros diários recentes (últimas 24h)
    const tanquesSemRegistros = await prisma.tanque.findMany({
      where: {
        status: 'ATIVO',
        isActive: true,
        registros_diarios: {
          none: {
            data: {
              gte: new Date(Date.now() - 24 * 60 * 60 * 1000)
            }
          }
        }
      },
      select: {
        id: true,
        nome: true,
        codigo_interno: true
      }
    })

    // 3. Tanques com alta mortalidade recente
    const altaMortalidade = await prisma.registroDiario.findMany({
      where: {
        data: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000)
        },
        mortalidade: { gt: 10 } // Mais de 10 mortes no dia
      },
      include: {
        tanque: {
          select: { nome: true, codigo_interno: true }
        }
      },
      orderBy: { mortalidade: 'desc' }
    })

    // Transformar dados para formato padronizado
    const alerts = [
      ...qualidadeAlerts.map(qa => ({
        id: qa.id,
        tipo: 'CRITICO' as const,
        mensagem: getQualidadeAlertMessage(qa),
        tanque: qa.tanque.nome,
        data: qa.data_analise,
        parametro: 'QUALIDADE_AGUA',
        icon: '🔬'
      })),
      
      ...tanquesSemRegistros.map(t => ({
        id: t.id,
        tipo: 'AVISO' as const,
        mensagem: 'Sem registros diários nas últimas 24h',
        tanque: t.nome,
        data: new Date(),
        parametro: 'REGISTRO_PENDENTE',
        icon: '⏰'
      })),
      
      ...altaMortalidade.map(rm => ({
        id: rm.id,
        tipo: 'CRITICO' as const,
        mensagem: `Alta mortalidade: ${rm.mortalidade} peixes`,
        tanque: rm.tanque.nome,
        data: rm.data,
        parametro: 'MORTALIDADE',
        icon: '💀'
      }))
    ]

    return NextResponse.json(alerts.slice(0, 10)) // Limitar a 10 alertas

  } catch (error) {
    console.error('Erro ao buscar alertas:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar alertas do dashboard' },
      { status: 500 }
    )
  }
}

function getQualidadeAlertMessage(qualidade: any): string {
  const issues = []
  
  if (qualidade.oxigenio_dissolvido < 4) {
    issues.push(`Oxigênio baixo: ${qualidade.oxigenio_dissolvido} mg/L`)
  }
  if (qualidade.ph < 6.5) {
    issues.push(`pH ácido: ${qualidade.ph}`)
  }
  if (qualidade.ph > 8.5) {
    issues.push(`pH alcalino: ${qualidade.ph}`)
  }
  if (qualidade.amonia > 0.5) {
    issues.push(`Amônia alta: ${qualidade.amonia} mg/L`)
  }
  
  return `Parâmetros críticos: ${issues.join(', ')}`
}