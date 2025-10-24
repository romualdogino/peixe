import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse } from '@/app/types'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categoria = searchParams.get('categoria')
    const estoqueBaixo = searchParams.get('estoqueBaixo') === 'true'

    const where: any = {}
    
    if (categoria) {
      where.categoria = categoria
    }
    
    if (estoqueBaixo) {
      where.estoque_atual_kg = {
        lt: 10 // Menos de 10kg
      }
    }

    const produtos = await prisma.produtoEstoque.findMany({
      where,
      orderBy: {
        nome: 'asc'
      }
    })

    const response: ApiResponse = {
      success: true,
      data: produtos
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Get estoque error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao buscar produtos em estoque' },
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
      categoria,
      tipo,
      unidade_medida,
      peso_por_unidade,
      quantidade_unidades,
      lote_numero,
      validade,
      fornecedor,
      custo_unitario
    } = body

    // Validar campos obrigatórios
    if (!nome || !tipo || !unidade_medida || !peso_por_unidade || !quantidade_unidades) {
      return NextResponse.json(
        { success: false, error: 'Nome, tipo, unidade, peso por unidade e quantidade são obrigatórios' },
        { status: 400 }
      )
    }

    const estoque_atual_kg = parseFloat(peso_por_unidade) * parseInt(quantidade_unidades)

    const produto = await prisma.produtoEstoque.create({
      data: {
        nome,
        categoria,
        tipo,
        unidade_medida,
        peso_por_unidade: parseFloat(peso_por_unidade),
        quantidade_unidades: parseInt(quantidade_unidades),
        estoque_atual_kg,
        lote_numero,
        validade: validade ? new Date(validade) : undefined,
        fornecedor,
        custo_unitario: custo_unitario ? parseFloat(custo_unitario) : undefined,
        data_ultima_entrada: new Date()
      }
    })

    const response: ApiResponse = {
      success: true,
      data: produto,
      message: 'Produto adicionado ao estoque com sucesso'
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Create estoque error:', error)

    // Erro de unique constraint
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        { success: false, error: 'Já existe um produto com este nome' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Erro ao adicionar produto ao estoque' },
      { status: 500 }
    )
  }
}

