import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function GET(request: NextRequest) {
  try {
    const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret'
    
    // Teste simples de JWT
    const payload = { userId: 'test', email: 'test@test.com' }
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' })
    const decoded = jwt.verify(token, JWT_SECRET)

    return NextResponse.json({
      success: true,
      message: 'JWT funcionando corretamente',
      secretLength: JWT_SECRET.length,
      token: token.substring(0, 50) + '...',
      decoded
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      secretLength: process.env.JWT_SECRET?.length || 0
    }, { status: 500 })
  }
}