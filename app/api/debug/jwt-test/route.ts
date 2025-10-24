import { NextRequest, NextResponse } from 'next/server'
import { generateToken, verifyToken } from '@/app/lib/auth'

export async function GET(request: NextRequest) {
  try {
    // Testar geração de token
    const testPayload = {
      userId: 'test-user-id',
      email: 'test@example.com',
      role: 'ADMIN'
    }

    console.log('🔐 JWT Test - Secret:', process.env.JWT_SECRET ? 'SET' : 'NOT SET')
    console.log('🔐 JWT Test - Secret length:', process.env.JWT_SECRET?.length)

    const token = generateToken(testPayload)
    console.log('🔐 JWT Test - Token generated:', token.substring(0, 50) + '...')

    // Testar verificação do token
    const decoded = verifyToken(token)
    console.log('🔐 JWT Test - Token verified:', decoded)

    return NextResponse.json({
      success: true,
      jwtSecret: process.env.JWT_SECRET ? `Set (${process.env.JWT_SECRET.length} chars)` : 'Not set',
      tokenGenerated: true,
      tokenVerified: true,
      decoded
    })

  } catch (error) {
    console.error('❌ JWT Test - Error:', error)
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      jwtSecret: process.env.JWT_SECRET ? `Set (${process.env.JWT_SECRET.length} chars)` : 'Not set'
    }, { status: 500 })
  }
}