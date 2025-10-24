import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { verifyToken } from '@/app/lib/auth'
import { ApiResponse } from '@/app/types'

export async function GET(request: NextRequest) {
  try {
    // Obter token do header Authorization
    const authHeader = request.headers.get('authorization')
    
    console.log('🔐 Me API - Authorization header:', authHeader ? 'Present' : 'Missing')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, error: 'Token de autenticação necessário' },
        { status: 401 }
      )
    }

    const token = authHeader.replace('Bearer ', '')
    
    console.log('🔐 Me API - Token received:', token.substring(0, 20) + '...')

    try {
      // Verificar token
      const decoded = verifyToken(token)
      console.log('🔐 Me API - Token válido para:', decoded.email)

      // Buscar usuário
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          image: true,
          isActive: true,
          createdAt: true,
          lastLogin: true
        }
      })

      if (!user) {
        console.log('❌ Me API - Usuário não encontrado:', decoded.userId)
        return NextResponse.json(
          { success: false, error: 'Usuário não encontrado' },
          { status: 404 }
        )
      }

      if (!user.isActive) {
        console.log('❌ Me API - Usuário inativo:', user.email)
        return NextResponse.json(
          { success: false, error: 'Usuário inativo' },
          { status: 401 }
        )
      }

      const response: ApiResponse<{ user: typeof user }> = {
        success: true,
        data: { user }
      }

      console.log('✅ Me API - Retornando dados do usuário:', user.email)

      return NextResponse.json(response)
    } catch (tokenError) {
      console.error('❌ Me API - Erro no token:', tokenError)
      return NextResponse.json(
        { success: false, error: 'Token inválido ou expirado' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('❌ Me API - Erro interno:', error)

    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}