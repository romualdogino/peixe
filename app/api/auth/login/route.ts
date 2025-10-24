import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { verifyPassword, generateToken, AuthError } from '@/app/lib/auth'
import { ApiResponse, LoginRequest } from '@/app/types'

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json()
    const { email, password } = body

    console.log('🔐 Login attempt for:', email)

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
      console.log('❌ Usuário não encontrado:', email)
      throw new AuthError('Credenciais inválidas')
    }

    if (!user.isActive) {
      console.log('❌ Usuário inativo:', email)
      throw new AuthError('Usuário inativo')
    }

    // Verificar senha
    const isValidPassword = await verifyPassword(password, user.password)
    if (!isValidPassword) {
      console.log('❌ Senha inválida para:', email)
      throw new AuthError('Credenciais inválidas')
    }

    // Atualizar último login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }
    })

    // Gerar token
    const tokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role || 'OPERADOR'
    }
    
    console.log('🔐 Gerando token para:', user.email)
    const token = generateToken(tokenPayload)

    // Remover password da resposta
    const { password: _, ...userWithoutPassword } = user

    const response: ApiResponse<{ user: typeof userWithoutPassword; token: string }> = {
      success: true,
      data: {
        user: userWithoutPassword,
        token
      }
    }

    // Criar resposta e adicionar cookie
    const nextResponse = NextResponse.json(response)
    
    // Configurar cookie HTTP-only
    nextResponse.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 dias
      path: '/',
    })

    console.log('✅ Login bem-sucedido para:', user.email)

    return nextResponse
  } catch (error) {
    console.error('❌ Login error:', error)

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