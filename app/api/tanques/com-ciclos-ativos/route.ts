// app/api/tanques/com-ciclos-ativos/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'

export async function GET() {
  try {
    const tanques = await prisma.tanque.findMany({
      where: {
        isActive: true,
        status: 'ATIVO',
        ciclo_atual_id: { not: null }
      },
      include: {
        ciclo_atual: {
          select: {
            especie: true,
            quantidade_atual: true,
            peso_atual: true
          }
        }
      },
      orderBy: { nome: 'asc' }
    })

    return NextResponse.json(tanques)
  } catch (error) {
    console.error('Erro ao buscar tanques com ciclos ativos:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar tanques com ciclos ativos' },
      { status: 500 }
    )
  }
}