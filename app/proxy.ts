import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/auth'

// Rotas públicas que não requerem autenticação
const publicRoutes = [
  '/',
  '/login', 
  '/register',
  '/api/auth/login',
  '/api/auth/register'
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value

  console.log('🔐 Middleware - Rota:', pathname, 'Token:', !!token)

  // Permitir rotas públicas
  if (publicRoutes.some(route => pathname === route || pathname.startsWith(route))) {
    console.log('🔐 Middleware - Rota pública, permitindo acesso')
    return NextResponse.next()
  }

  // Para rotas API protegidas
  if (pathname.startsWith('/api/') && !publicRoutes.some(route => pathname.startsWith(route))) {
    console.log('🔐 Middleware - Rota API protegida:', pathname)
    
    if (!token) {
      console.log('🔐 Middleware - Token não encontrado, retornando 401')
      return NextResponse.json({ error: 'Token de autenticação necessário' }, { status: 401 })
    }

    try {
      const decoded = verifyToken(token)
      console.log('🔐 Middleware - Token válido para usuário:', decoded.email)
      
      // Adicionar headers de usuário para as rotas API
      const requestHeaders = new Headers(request.headers)
      requestHeaders.set('x-user-id', decoded.userId)
      requestHeaders.set('x-user-email', decoded.email)
      requestHeaders.set('x-user-role', decoded.role)

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      })
    } catch (error) {
      console.log('🔐 Middleware - Token inválido:', error)
    }
  }
}