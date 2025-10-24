import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse } from '@/app/types'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const tanqueId = searchParams.get('tanqueId')

    const ciclos = await prisma.cicloProducao.findMany({
      where: {
        ...(status && { status }),
        ...(tanqueId && { tanque_id: tanqueId })
      },
      include: {
        tanque: {
          select: {
            nome: true,
            codigo_interno: true,
            volume_m3: true
          }
        }
      },
      orderBy: {
        data_inicio: 'desc'
      }
    })

    const response: ApiResponse = {
      success: true,
      data: ciclos
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Get ciclos error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao buscar ciclos de produção' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id')
    const body = await request.json()

    const {
      tanque_id,
      especie,
      origem_lote,
      data_inicio,
      quantidade_inicial,
      peso_inicial_g,
      data_prevista_saida
    } = body

    // Validar campos obrigatórios
    if (!tanque_id || !especie || !data_inicio || !quantidade_inicial || !peso_inicial_g) {
      return NextResponse.json(
        { success: false, error: 'Tanque, espécie, data início, quantidade e peso são obrigatórios' },
        { status: 400 }
      )
    }

    // Verificar se o tanque está disponível
    const tanque = await prisma.tanque.findUnique({
      where: { id: tanque_id },
      include: { ciclo_atual: true }
    })

    if (!tanque) {
      return NextResponse.json(
        { success: false, error: 'Tanque não encontrado' },
        { status: 404 }
      )
    }

    if (tanque.ciclo_atual) {
      return NextResponse.json(
        { success: false, error: 'Tanque já possui um ciclo ativo' },
        { status: 409 }
      )
    }

    // Criar ciclo
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
        data_prevista_saida: data_prevista_saida ? new Date(data_prevista_saida) : undefined,
        status: 'ativo'
      }
    })

    // Atualizar tanque com ciclo atual
    await prisma.tanque.update({
      where: { id: tanque_id },
      data: {
        ciclo_atual_id: ciclo.id,
        status: 'ATIVO'
      }
    })

    const response: ApiResponse = {
      success: true,
      data: ciclo,
      message: 'Ciclo de produção iniciado com sucesso'
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Create ciclo error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao iniciar ciclo de produção' },
      { status: 500 }
    )
  }
}