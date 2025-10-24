import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse } from '@/app/types'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const produtoId = searchParams.get('produtoId')
    const dataInicio = searchParams.get('dataInicio')
    const dataFim = searchParams.get('dataFim')

    const where: any = {}
    
    if (produtoId) {
      where.produto_id = produtoId
    }
    
    if (dataInicio || dataFim) {
      where.data = {}
      if (dataInicio) where.data.gte = new Date(dataInicio)
      if (dataFim) where.data.lte = new Date(dataFim)
    }

    const movimentacoes = await prisma.movimentacaoRacao.findMany({
      where,
      include: {
        produto: {
          select: {
            nome: true,
            unidade_medida: true
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
      data: movimentacoes
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Get movimentacoes error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao buscar movimentações' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id')
    const body = await request.json()

    const {
      produto_id,
      tipo_movimento,
      data,
      quantidade_kg,
      lote_id,
      observacoes
    } = body

    // Validar campos obrigatórios
    if (!produto_id || !tipo_movimento || !data || !quantidade_kg) {
      return NextResponse.json(
        { success: false, error: 'Produto, tipo de movimento, data e quantidade são obrigatórios' },
        { status: 400 }
      )
    }

    // Verificar se produto existe
    const produto = await prisma.produtoEstoque.findUnique({
      where: { id: produto_id }
    })

    if (!produto) {
      return NextResponse.json(
        { success: false, error: 'Produto não encontrado' },
        { status: 404 }
      )
    }

    // Validar saldo para saída
    if (tipo_movimento === 'SAIDA' && produto.estoque_atual_kg < parseFloat(quantidade_kg)) {
      return NextResponse.json(
        { success: false, error: 'Saldo insuficiente em estoque' },
        { status: 400 }
      )
    }

    // Criar movimentação
    const movimentacao = await prisma.movimentacaoRacao.create({
      data: {
        produto_id,
        tipo_movimento,
        data: new Date(data),
        quantidade_kg: parseFloat(quantidade_kg),
        lote_id,
        observacoes,
        responsavel_id: userId || undefined
      }
    })

    // Atualizar estoque do produto
    const novoEstoque = tipo_movimento === 'ENTRADA' 
      ? produto.estoque_atual_kg + parseFloat(quantidade_kg)
      : produto.estoque_atual_kg - parseFloat(quantidade_kg)

    await prisma.produtoEstoque.update({
      where: { id: produto_id },
      data: {
        estoque_atual_kg: novoEstoque,
        data_ultima_entrada: tipo_movimento === 'ENTRADA' ? new Date() : produto.data_ultima_entrada,
        data_ultima_saida: tipo_movimento === 'SAIDA' ? new Date() : produto.data_ultima_saida
      }
    })

    const response: ApiResponse = {
      success: true,
      data: movimentacao,
      message: 'Movimentação registrada com sucesso'
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Create movimentacao error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro ao registrar movimentação' },
      { status: 500 }
    )
  }
}