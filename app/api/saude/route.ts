import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse } from '@/app/types'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const tanqueId = searchParams.get('tanqueId')

    const where: any = {}
    
    if (tanqueId) {
      where.tanque_id = tanqueId
    }
    
    // Filtro por status (ativos = sem data de diagnóstico ou tratamento em andamento)
    if (status === 'ativo') {
      where.OR = [
        { data_diagnostico: null },
        { resultado: null }
      ]
    }

    const registrosSaude = await prisma.registroSaude.findMany({
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
        data_registro: 'desc'
      }
    })

    const response: ApiResponse = {
      success: true,
      data: registrosSaude
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Get saude error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao buscar registros de saúde' },
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
      data_registro,
      sintomas,
      percentual_afetado,
      diagnostico,
      patologia_codigo,
      produto,
      dosagem,
      dias_tratamento,
      dias_carencia,
      resultado,
      data_diagnostico
    } = body

    // Validar campos obrigatórios
    if (!tanque_id || !data_registro) {
      return NextResponse.json(
        { success: false, error: 'Tanque e data são obrigatórios' },
        { status: 400 }
      )
    }

    const registroSaude = await prisma.registroSaude.create({
      data: {
        tanque_id,
        data_registro: new Date(data_registro),
        sintomas,
        percentual_afetado: percentual_afetado ? parseFloat(percentual_afetado) : undefined,
        diagnostico,
        patologia_codigo,
        produto,
        dosagem,
        dias_tratamento: dias_tratamento ? parseInt(dias_tratamento) : undefined,
        dias_carencia: dias_carencia ? parseInt(dias_carencia) : undefined,
        resultado,
        data_diagnostico: data_diagnostico ? new Date(data_diagnostico) : undefined,
        usuario_id: userId || undefined
      },
      include: {
        tanque: {
          select: {
            nome: true
          }
        }
      }
    })

    const response: ApiResponse = {
      success: true,
      data: registroSaude,
      message: 'Registro de saúde criado com sucesso'
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Create saude error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao criar registro de saúde' },
      { status: 500 }
    )
  }
}