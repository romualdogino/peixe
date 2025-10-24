import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse } from '@/app/types'

// GET - Listar todos os tanques
export async function GET(request: NextRequest) {
  try {
    console.log('📋 API Tanques List - Buscando todos os tanques')

    const tanques = await prisma.tanque.findMany({
      where: { isActive: true },
      include: {
        ciclo_atual: {
          select: {
            id: true,
            especie: true,
            data_inicio: true,
            status: true
          }
        }
      },
      orderBy: { nome: 'asc' }
    })

    const response: ApiResponse = {
      success: true,
      data: tanques
    }

    console.log(`✅ API Tanques List - ${tanques.length} tanques retornados`)
    return NextResponse.json(response)

  } catch (error) {
    console.error('❌ API Tanques List error:', error)
    return NextResponse.json(
      { success: false, error: 'Erro ao carregar tanques' },
      { status: 500 }
    )
  }
}

// POST - Criar novo tanque
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('🆕 API Tanques Create - Data:', body)

    // Validações básicas
    if (!body.nome || !body.volume_m3 || !body.tipo) {
      return NextResponse.json(
        { success: false, error: 'Nome, volume e tipo são obrigatórios' },
        { status: 400 }
      )
    }

    const tanque = await prisma.tanque.create({
      data: {
        nome: body.nome,
        codigo_interno: body.codigo_interno,
        volume_m3: parseFloat(body.volume_m3),
        area_m2: body.area_m2 ? parseFloat(body.area_m2) : null,
        tipo: body.tipo,
        tipo_material: body.tipo_material,
        status: body.status || 'ATIVO',
        localizacao: body.localizacao,
        data_instalacao: body.data_instalacao ? new Date(body.data_instalacao) : null,
        isActive: true
      }
    })

    const response: ApiResponse = {
      success: true,
      data: tanque,
      message: 'Tanque criado com sucesso'
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('❌ API Tanques Create error:', error)
    
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