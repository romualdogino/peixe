import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse } from '@/app/types'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const tanqueId = searchParams.get('tanqueId')
    const dataInicio = searchParams.get('dataInicio')
    const dataFim = searchParams.get('dataFim')

    const where: any = {}
    
    if (tanqueId) {
      where.tanque_id = tanqueId
    }
    
    if (dataInicio || dataFim) {
      where.data_amostra = {}
      if (dataInicio) where.data_amostra.gte = new Date(dataInicio)
      if (dataFim) where.data_amostra.lte = new Date(dataFim)
    }

    const biometrias = await prisma.biometria.findMany({
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
        data_amostra: 'desc'
      }
    })

    const response: ApiResponse = {
      success: true,
      data: biometrias
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Get biometrias error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao buscar biometrias' },
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
      data_amostra,
      idade_lote_dias,
      tamanho_amostra,
      peso_total_kg,
      peso_minimo,
      peso_maximo,
      comprimento_medio_cm,
      comprimento_minimo,
      comprimento_maximo,
      altura_minima,
      altura_maxima,
      desvio_padrao_peso,
      desvio_padrao_comprimento,
      observacoes,
      recomendacoes
    } = body

    // Validar campos obrigatórios
    if (!tanque_id || !data_amostra || !tamanho_amostra || !peso_total_kg || !comprimento_medio_cm) {
      return NextResponse.json(
        { success: false, error: 'Tanque, data, tamanho amostra, peso total e comprimento médio são obrigatórios' },
        { status: 400 }
      )
    }

    const biometria = await prisma.biometria.create({
      data: {
        tanque_id,
        data_amostra: new Date(data_amostra),
        idade_lote_dias: idade_lote_dias ? parseInt(idade_lote_dias) : undefined,
        tamanho_amostra: parseInt(tamanho_amostra),
        peso_total_kg: parseFloat(peso_total_kg),
        peso_minimo: peso_minimo ? parseFloat(peso_minimo) : undefined,
        peso_maximo: peso_maximo ? parseFloat(peso_maximo) : undefined,
        comprimento_medio_cm: parseFloat(comprimento_medio_cm),
        comprimento_minimo: comprimento_minimo ? parseFloat(comprimento_minimo) : undefined,
        comprimento_maximo: comprimento_maximo ? parseFloat(comprimento_maximo) : undefined,
        altura_minima: altura_minima ? parseFloat(altura_minima) : undefined,
        altura_maxima: altura_maxima ? parseFloat(altura_maxima) : undefined,
        desvio_padrao_peso: desvio_padrao_peso ? parseFloat(desvio_padrao_peso) : undefined,
        desvio_padrao_comprimento: desvio_padrao_comprimento ? parseFloat(desvio_padrao_comprimento) : undefined,
        observacoes,
        recomendacoes,
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

    // Atualizar peso atual no ciclo
    const tanque = await prisma.tanque.findUnique({
      where: { id: tanque_id },
      include: { ciclo_atual: true }
    })

    if (tanque?.ciclo_atual) {
      const peso_medio_gramas = (parseFloat(peso_total_kg) * 1000) / parseInt(tamanho_amostra)
      
      await prisma.cicloProducao.update({
        where: { id: tanque.ciclo_atual.id },
        data: {
          peso_atual: peso_medio_gramas
        }
      })
    }

    const response: ApiResponse = {
      success: true,
      data: biometria,
      message: 'Biometria registrada com sucesso'
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Create biometria error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao registrar biometria' },
      { status: 500 }
    )
  }
}