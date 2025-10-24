import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { ApiResponse } from '@/app/types'

// GET - Buscar tanque específico
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ← params é Promise!
) {
  try {
    // ⚠️ IMPORTANTE: Aguardar o params!
    const { id } = await params
    
    console.log('🔍 API Tanque Details - ID recebido:', id)

    if (!id || id === '[id]') {
      return NextResponse.json(
        { success: false, error: 'ID do tanque é obrigatório' },
        { status: 400 }
      )
    }

    console.log('🔍 API Tanque Details - Buscando tanque ID:', id)

    // Buscar tanque com todos os relacionamentos
    const tanque = await prisma.tanque.findUnique({
      where: { 
        id: id
      },
      include: {
        ciclo_atual: {
          select: {
            id: true,
            especie: true,
            data_inicio: true,
            data_fim: true,
            quantidade_inicial: true,
            quantidade_atual: true,
            peso_inicial_g: true,
            peso_atual: true,
            status: true
          }
        },
        registros_diarios: {
          take: 5,
          orderBy: { data: 'desc' },
          select: {
            id: true,
            data: true,
            temperatura_agua: true,
            quantidade_kg: true,
            mortalidade: true
          }
        },
        biometrias: {
          take: 3,
          orderBy: { data_amostra: 'desc' },
          select: {
            id: true,
            data_amostra: true,
            peso_total_kg: true,
            comprimento_medio_cm: true
          }
        },
        qualidade_agua: {
          take: 3,
          orderBy: { data_analise: 'desc' },
          select: {
            id: true,
            data_analise: true,
            oxigenio_dissolvido: true,
            ph: true,
            amonia: true
          }
        }
      }
    })

    console.log('🔍 API Tanque Details - Resultado:', tanque ? 'Encontrado' : 'Não encontrado')

    if (!tanque) {
      return NextResponse.json(
        { success: false, error: 'Tanque não encontrado' },
        { status: 404 }
      )
    }

    // Formatar a resposta
    const response: ApiResponse = {
      success: true,
      data: {
        ...tanque,
        registros_recentes: tanque.registros_diarios,
        biometrias_recentes: tanque.biometrias,
        qualidade_agua_recente: tanque.qualidade_agua
      }
    }

    console.log('✅ API Tanque Details - Dados retornados com sucesso')
    return NextResponse.json(response)

  } catch (error) {
    console.error('❌ API Tanque Details error:', error)
    return NextResponse.json(
      { success: false, error: 'Erro interno ao carregar tanque' },
      { status: 500 }
    )
  }
}

// PUT - Atualizar tanque
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // ⚠️ IMPORTANTE: Aguardar o params!
    const { id } = await params
    const body = await request.json()

    console.log('✏️ API Tanque Update - ID:', id, 'Data:', body)

    // Validar campos obrigatórios
    if (!body.nome || !body.volume_m3 || !body.tipo || !body.status) {
      return NextResponse.json(
        { success: false, error: 'Nome, volume, tipo e status são obrigatórios' },
        { status: 400 }
      )
    }

    // Verificar se o tanque existe
    const tanqueExistente = await prisma.tanque.findUnique({
      where: { id }
    })

    if (!tanqueExistente) {
      return NextResponse.json(
        { success: false, error: 'Tanque não encontrado' },
        { status: 404 }
      )
    }

    // Atualizar tanque
    const tanque = await prisma.tanque.update({
      where: { id },
      data: {
        nome: body.nome,
        codigo_interno: body.codigo_interno || null,
        volume_m3: parseFloat(body.volume_m3),
        area_m2: body.area_m2 ? parseFloat(body.area_m2) : null,
        tipo: body.tipo,
        tipo_material: body.tipo_material || null,
        status: body.status,
        localizacao: body.localizacao || null,
        data_instalacao: body.data_instalacao ? new Date(body.data_instalacao) : null,
        nivel_agua_cm: body.nivel_agua_cm ? parseFloat(body.nivel_agua_cm) : null,
        isActive: body.isActive !== undefined ? body.isActive : true
      }
    })

    const response: ApiResponse = {
      success: true,
      data: tanque,
      message: 'Tanque atualizado com sucesso'
    }

    console.log('✅ API Tanque Update - Tanque atualizado')
    return NextResponse.json(response)

  } catch (error) {
    console.error('❌ API Tanque Update error:', error)

    // Erro de unique constraint
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        { success: false, error: 'Já existe um tanque com este nome ou código' },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Erro ao atualizar tanque' },
      { status: 500 }
    )
  }
}

// DELETE - Excluir tanque (soft delete)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // ⚠️ IMPORTANTE: Aguardar o params!
    const { id } = await params

    console.log('🗑️ API Tanque Delete - ID:', id)

    // Verificar se o tanque existe
    const tanque = await prisma.tanque.findUnique({
      where: { id },
      include: {
        ciclo_atual: true
      }
    })

    if (!tanque) {
      return NextResponse.json(
        { success: false, error: 'Tanque não encontrado' },
        { status: 404 }
      )
    }

    // Verificar se o tanque tem ciclo ativo
    if (tanque.ciclo_atual) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Não é possível excluir um tanque com ciclo ativo. Finalize o ciclo primeiro.' 
        },
        { status: 400 }
      )
    }

    // Soft delete - marcar como inativo
    const tanqueAtualizado = await prisma.tanque.update({
      where: { id },
      data: { 
        isActive: false,
        status: 'INATIVO'
      }
    })

    const response: ApiResponse = {
      success: true,
      data: tanqueAtualizado,
      message: 'Tanque excluído com sucesso'
    }

    console.log('✅ API Tanque Delete - Tanque marcado como inativo')
    return NextResponse.json(response)

  } catch (error) {
    console.error('❌ API Tanque Delete error:', error)
    return NextResponse.json(
      { success: false, error: 'Erro ao excluir tanque' },
      { status: 500 }
    )
  }
}