import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse } from '@/app/types'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const tipo = searchParams.get('tipo')
    const withCiclo = searchParams.get('withCiclo') === 'true'

    const tanques = await prisma.tanque.findMany({
      where: {
        isActive: true,
        ...(status && { status }),
        ...(tipo && { tipo })
      },
      include: {
        ...(withCiclo && {
          ciclo_atual: {
            select: {
              id: true,
              especie: true,
              data_inicio: true,
              quantidade_atual: true,
              peso_atual: true
            }
          }
        }),
        _count: {
          select: {
            registros_diarios: {
              where: {
                data: {
                  gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                }
              }
            }
          }
        }
      },
      orderBy: {
        nome: 'asc'
      }
    })

    const response: ApiResponse = {
      success: true,
      data: tanques
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Get tanques error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao buscar tanques' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id')
    const body = await request.json()

    const { 
      nome, 
      codigo_interno, 
      volume_m3, 
      area_m2, 
      tipo, 
      tipo_material, 
      localizacao, 
      data_instalacao 
    } = body

    // Validar campos obrigatórios
    if (!nome || !volume_m3 || !tipo) {
      return NextResponse.json(
        { success: false, error: 'Nome, volume e tipo são obrigatórios' },
        { status: 400 }
      )
    }

    const tanque = await prisma.tanque.create({
      data: {
        nome,
        codigo_interno,
        volume_m3: parseFloat(volume_m3),
        area_m2: area_m2 ? parseFloat(area_m2) : undefined,
        tipo,
        tipo_material,
        localizacao,
        data_instalacao: data_instalacao ? new Date(data_instalacao) : undefined,
        status: 'VAZIO'
      },
      include: {
        ciclo_atual: true
      }
    })

    const response: ApiResponse = {
      success: true,
      data: tanque,
      message: 'Tanque criado com sucesso'
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Create tanque error:', error)

    // Erro de unique constraint
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        { success: false, error: 'Já existe um tanque com este nome ou código' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Erro ao criar tanque' },
      { status: 500 }
    )
  }
}