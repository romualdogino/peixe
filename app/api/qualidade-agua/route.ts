import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse } from '@/app/types'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const tanqueId = searchParams.get('tanqueId')
    const parametro = searchParams.get('parametro')
    const dataInicio = searchParams.get('dataInicio')
    const dataFim = searchParams.get('dataFim')

    const where: any = {}
    
    if (tanqueId) {
      where.tanque_id = tanqueId
    }
    
    if (dataInicio || dataFim) {
      where.data_analise = {}
      if (dataInicio) where.data_analise.gte = new Date(dataInicio)
      if (dataFim) where.data_analise.lte = new Date(dataFim)
    }

    const qualidadeAgua = await prisma.qualidadeAgua.findMany({
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
        data_analise: 'desc'
      }
    })

    // Filtrar por parâmetro se especificado
    let data = qualidadeAgua
    if (parametro) {
      data = qualidadeAgua.filter(item => {
        const value = item[parametro as keyof typeof item]
        return value !== null && value !== undefined
      })
    }

    const response: ApiResponse = {
      success: true,
      data
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Get qualidade agua error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao buscar dados de qualidade da água' },
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
      data_analise,
      hora_coleta,
      fonte_agua,
      metodo_coleta,
      oxigenio_dissolvido,
      ph,
      amonia,
      nitrito,
      nitrato,
      tds,
      orp,
      ec,
      salppm,
      sal,
      sg,
      temperatura,
      transparencia_cm,
      notas
    } = body

    // Validar campos obrigatórios
    if (!tanque_id || !data_analise || !oxigenio_dissolvido || !ph || !amonia || !nitrito || !temperatura) {
      return NextResponse.json(
        { success: false, error: 'Tanque, data, OD, pH, amônia, nitrito e temperatura são obrigatórios' },
        { status: 400 }
      )
    }

    // Preparar dados garantindo que campos number sejam numbers
    const data = {
      tanque_id,
      data_analise: new Date(data_analise),
      hora_coleta: hora_coleta || null,
      fonte_agua: fonte_agua || null,
      metodo_coleta: metodo_coleta || null,
      oxigenio_dissolvido: parseFloat(oxigenio_dissolvido),
      ph: parseFloat(ph),
      amonia: parseFloat(amonia),
      nitrito: parseFloat(nitrito),
      temperatura: parseFloat(temperatura),
      // Campos opcionais - usar null se não fornecidos
      nitrato: nitrato ? parseFloat(nitrato) : 0,
      tds: tds ? parseFloat(tds) : 0,
      orp: orp ? parseFloat(orp) : 0,
      ec: ec ? parseFloat(ec) : 0,
      salppm: salppm ? parseFloat(salppm) : 0,
      sal: sal ? parseFloat(sal) : 0,
      sg: sg ? parseFloat(sg) : 0,
      transparencia_cm: transparencia_cm ? parseInt(transparencia_cm) : 0,
      notas: notas || null,
      responsavel_id: userId || null
    }

    const qualidadeAgua = await prisma.qualidadeAgua.create({
      data,
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
      data: qualidadeAgua,
      message: 'Análise de qualidade da água registrada com sucesso'
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Create qualidade agua error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao registrar análise de qualidade da água' },
      { status: 500 }
    )
  }
}