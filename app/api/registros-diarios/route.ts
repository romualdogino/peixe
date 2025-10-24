// app/api/registros-diarios/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
// import { getServerSession } from 'next-auth'


export async function POST(request: Request) {
  try {
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

    // Validar dados obrigatórios
    if (!tanque_id || !data || !temperatura_agua) {
      return NextResponse.json(
        { error: 'Tanque, data e temperatura da água são obrigatórios' },
        { status: 400 }
      )
    }

    // Verificar se o tanque existe e está ativo
    const tanque = await prisma.tanque.findUnique({
      where: { 
        id: tanque_id,
        isActive: true 
      },
      include: {
        ciclo_atual: true
      }
    })

    if (!tanque) {
      return NextResponse.json(
        { error: 'Tanque não encontrado ou inativo' },
        { status: 404 }
      )
    }

    // Verificar se já existe registro para este tanque na mesma data e turno
    const registroExistente = await prisma.registroDiario.findFirst({
      where: {
        tanque_id,
        data: new Date(data),
        turno: turno || null
      }
    })

    if (registroExistente) {
      return NextResponse.json(
        { error: 'Já existe um registro para este tanque na data e turno selecionados' },
        { status: 400 }
      )
    }

    // TODO: Obter usuário da sessão quando auth estiver implementado
    // const session = await getServerSession()
    // const responsavel_id = session?.user?.id

    // Criar o registro diário
    const registro = await prisma.registroDiario.create({
      data: {
        tanque_id,
        data: new Date(data),
        turno: turno || null,
        temperatura_agua: parseFloat(temperatura_agua),
        quantidade_kg: quantidade_kg ? parseFloat(quantidade_kg) : null,
        fracionamento: fracionamento ? parseInt(fracionamento) : null,
        tipo_racao: tipo_racao || null,
        racao_marca: racao_marca || null,
        racao_codigo: racao_codigo || null,
        sobras: sobras || false,
        mortalidade: mortalidade ? parseInt(mortalidade) : null,
        causa_morte: causa_morte || null,
        horas_aeracao: horas_aeracao ? parseFloat(horas_aeracao) : null,
        observacoes: observacoes || null,
        eventos_adversos: eventos_adversos || null,
        responsavel_id: null // TODO: Adicionar quando auth estiver pronto
      },
      include: {
        tanque: {
          select: {
            nome: true,
            codigo_interno: true,
            ciclo_atual: {
              select: {
                especie: true,
                quantidade_atual: true
              }
            }
          }
        }
      }
    })

    return NextResponse.json({
      success: true,
      registro,
      message: 'Registro diário criado com sucesso'
    })

  } catch (error) {
    console.error('Erro ao criar registro diário:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor ao criar registro diário' },
      { status: 500 }
    )
  }
}

// GET para listar registros
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const tanque_id = searchParams.get('tanque_id')
    const data = searchParams.get('data')

    const where: any = {}

    if (tanque_id) {
      where.tanque_id = tanque_id
    }

    if (data) {
      where.data = {
        gte: new Date(data + 'T00:00:00.000Z'),
        lte: new Date(data + 'T23:59:59.999Z')
      }
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
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        data: 'desc'
      },
      take: 50
    })

    return NextResponse.json(registros)
  } catch (error) {
    console.error('Erro ao buscar registros:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar registros diários' },
      { status: 500 }
    )
  }
}