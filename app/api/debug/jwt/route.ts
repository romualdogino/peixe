import { NextRequest, NextResponse } from 'next/server'
import { verifyToken, generateToken } from '@/app/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!token) {
      return NextResponse.json({
        success: false,
        error: 'No token provided',
        env: {
          JWT_SECRET: process.env.JWT_SECRET ? 'Set' : 'Not set',
          NODE_ENV: process.env.NODE_ENV
        }
      })
    }

    try {
      const decoded = verifyToken(token)
      
      return NextResponse.json({
        success: true,
        decoded,
        env: {
          JWT_SECRET: process.env.JWT_SECRET ? 'Set' : 'Not set',
          NODE_ENV: process.env.NODE_ENV
        }
      })
    } catch (error) {
      return NextResponse.json({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        env: {
          JWT_SECRET: process.env.JWT_SECRET ? 'Set' : 'Not set',
          NODE_ENV: process.env.NODE_ENV
        }
      })
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Internal server error',
      env: {
        JWT_SECRET: process.env.JWT_SECRET ? 'Set' : 'Not set',
        NODE_ENV: process.env.NODE_ENV
      }
    })
  }
}