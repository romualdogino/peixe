import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { hashPassword, generateToken } from '@/app/lib/auth'
import { ApiResponse, RegisterRequest } from '@/app/types'

export async function POST(request: NextRequest) {
  try {
    const body: RegisterRequest = await request.json()
    const { name, email, password, role } = body

    // Validar campos obrigatórios
    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { success: false, error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Verificar se usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'Email já cadastrado' },
        { status: 409 }
      )
    }

    // Hash da senha
    const hashedPassword = await hashPassword(password)

    // Criar usuário
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        permissions: [] // Permissões padrão baseadas no role
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        image: true,
        isActive: true,
        createdAt: true
      }
    })

    // Gerar token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role || 'OPERADOR'
    })

    const response: ApiResponse<{ user: typeof user; token: string }> = {
      success: true,
      data: {
        user,
        token
      }
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)

    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}