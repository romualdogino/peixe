import { NextResponse } from 'next/server'
import { ApiResponse } from '@/app/types'

export async function POST() {
  try {
    const response: ApiResponse = {
      success: true,
      message: 'Logout realizado com sucesso'
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Logout error:', error)
    
    return NextResponse.json(
      { success: false, error: 'Erro ao fazer logout' },
      { status: 500 }
    )
  }
}