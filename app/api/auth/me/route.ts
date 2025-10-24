// app/api/auth/me/route.ts - Deve estar funcionando corretamente
import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/app/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!token) {
      return NextResponse.json({ success: false, error: 'Token não fornecido' }, { status: 401 })
    }

    const decoded = verifyToken(token)
    
    return NextResponse.json({
      success: true,
      data: {
        user: {
          id: decoded.userId,
          email: decoded.email,
          role: decoded.role,
          name: 'Usuário' // Buscar do banco se necessário
        }
      }
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Token inválido' }, { status: 401 })
  }
}