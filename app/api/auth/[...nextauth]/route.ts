import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { verifyPassword, generateToken, AuthError } from '@/app/lib/auth'
import { ApiResponse, LoginRequest } from '@/app/types'

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json()
    const { email, password } = body

    // Validar campos obrigatórios
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email e senha são obrigatórios' },
        { status: 400 }
      )
    }

    // Buscar usuário
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        role: true,
        image: true,
        isActive: true
      }
    })

    if (!user) {
      throw new AuthError('Credenciais inválidas')
    }

    if (!user.isActive) {
      throw new AuthError('Usuário inativo')
    }

    // Verificar senha
    const isValidPassword = await verifyPassword(password, user.password)
    if (!isValidPassword) {
      throw new AuthError('Credenciais inválidas')
    }

    // Atualizar último login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }
    })

    // Gerar token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role || 'OPERADOR'
    })

    // Remover password da resposta
    const { password: _, ...userWithoutPassword } = user

    const response: ApiResponse<{ user: typeof userWithoutPassword; token: string }> = {
      success: true,
      data: {
        user: userWithoutPassword,
        token
      }
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Login error:', error)

    if (error instanceof AuthError) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 401 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}