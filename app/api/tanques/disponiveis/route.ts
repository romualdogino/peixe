// app/api/tanques/disponiveis/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'

export async function GET() {
  try {
    const tanquesDisponiveis = await prisma.tanque.findMany({
      where: {
        isActive: true,
        status: 'ATIVO',
        ciclo_atual_id: null // Apenas tanques sem ciclo ativo
      },
      select: {
        id: true,
        nome: true,
        codigo_interno: true,
        volume_m3: true,
        tipo: true,
        localizacao: true
      },
      orderBy: { nome: 'asc' }
    })

    return NextResponse.json(tanquesDisponiveis)
  } catch (error) {
    console.error('Erro ao buscar tanques disponíveis:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar tanques disponíveis' },
      { status: 500 }
    )
  }
}