import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse, Turno } from '@/app/types'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const data = searchParams.get('data')
    const turno = searchParams.get('turno') as Turno | null
    const tanqueId = searchParams.get('tanqueId')

    // Construir where clause com tipos corretos
    const where: any = {}

    if (data) {
      where.data = {
        gte: new Date(data + 'T00:00:00'),
        lt: new Date(data + 'T23:59:59')
      }
    }

    if (turno && Object.values(Turno).includes(turno)) {
      where.turno = turno
    }

    if (tanqueId) {
      where.tanque_id = tanqueId
    }

    const registros = await prisma.registroDiario.findMany({
      where,
      include: {
        tanque: {
          select: {
            nome: true,
            codigo_interno: true
          }
        },
        responsavel: {
          select: {
            name: true
          }
        }
      },
      orderBy: {
        data: 'desc'
      }
    })

    const response: ApiResponse = {
      success: true,
      data: registros
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Get registros error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao buscar registros' },
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
      data,
      turno,
      temperatura_agua,
      quantidade_kg,
      fracionamento,
      tipo_racao,
      racao_marca,
      racao_codigo,
      sobras,
      mortalidade,
      causa_morte,
      horas_aeracao,
      observacoes,
      eventos_adversos
    } = body

    // Validar campos obrigatórios
    if (!tanque_id || !data || !temperatura_agua) {
      return NextResponse.json(
        { success: false, error: 'Tanque, data e temperatura são obrigatórios' },
        { status: 400 }
      )
    }

    // Validar turno se fornecido
    if (turno && !Object.values(Turno).includes(turno)) {
      return NextResponse.json(
        { success: false, error: 'Turno inválido' },
        { status: 400 }
      )
    }

    const registro = await prisma.registroDiario.create({
      data: {
        tanque_id,
        data: new Date(data),
        turno: turno as Turno,
        temperatura_agua: parseFloat(temperatura_agua),
        quantidade_kg: quantidade_kg ? parseFloat(quantidade_kg) : undefined,
        fracionamento: fracionamento ? parseInt(fracionamento) : undefined,
        tipo_racao,
        racao_marca,
        racao_codigo,
        sobras,
        mortalidade: mortalidade ? parseInt(mortalidade) : undefined,
        causa_morte,
        horas_aeracao: horas_aeracao ? parseFloat(horas_aeracao) : undefined,
        observacoes,
        eventos_adversos,
        responsavel_id: userId || undefined
      },
      include: {
        tanque: {
          select: {
            nome: true
          }
        }
      }
    })

    // Atualizar ciclo atual se houver mortalidade
    if (mortalidade && mortalidade > 0) {
      const tanque = await prisma.tanque.findUnique({
        where: { id: tanque_id },
        include: { ciclo_atual: true }
      })

      if (tanque?.ciclo_atual) {
        await prisma.cicloProducao.update({
          where: { id: tanque.ciclo_atual.id },
          data: {
            mortes: {
              increment: parseInt(mortalidade)
            },
            quantidade_atual: {
              decrement: parseInt(mortalidade)
            }
          }
        })
      }
    }

    const response: ApiResponse = {
      success: true,
      data: registro,
      message: 'Registro diário criado com sucesso'
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Create registro error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao criar registro diário' },
      { status: 500 }
    )
  }
}