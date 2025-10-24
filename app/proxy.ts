import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from './lib/auth'

// Rotas públicas que não requerem autenticação
const publicRoutes = [
  '/',
  '/login', 
  '/register',
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/me',
  '/api/dashboard', // ✅ ADICIONAR TEMPORARIAMENTE para debug
  '/api/debug/jwt-test'
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value

  console.log('🔐 Middleware - Rota:', pathname)
  console.log('🔐 Middleware - Token no cookie:', !!token)

  // Permitir rotas públicas
  if (publicRoutes.some(route => pathname === route || pathname.startsWith(route))) {
    console.log('🔐 Middleware - Rota pública, permitindo acesso')
    return NextResponse.next()
  }

  // Para TODAS as rotas API protegidas (incluindo dashboard)
  if (pathname.startsWith('/api/') && !publicRoutes.some(route => pathname.startsWith(route))) {
    console.log('🔐 Middleware - Rota API protegida:', pathname)
    
    const authHeader = request.headers.get('authorization')
    const finalToken = token || authHeader?.replace('Bearer ', '')
    
    console.log('🔐 Middleware - Token final:', finalToken ? `${finalToken.substring(0, 20)}...` : 'NULL')

    if (!finalToken) {
      console.log('❌ Middleware - Token não encontrado, retornando 401')
      return NextResponse.json({ error: 'Token de autenticação necessário' }, { status: 401 })
    }

    try {
      const decoded = verifyToken(finalToken)
      console.log('✅ Middleware - Token válido para usuário:', decoded.email)
      
      // 🚨 CORREÇÃO CRÍTICA: Adicionar headers para TODAS as APIs protegidas
      const requestHeaders = new Headers(request.headers)
      requestHeaders.set('x-user-id', decoded.userId)
      requestHeaders.set('x-user-email', decoded.email)
      requestHeaders.set('x-user-role', decoded.role)

      console.log('🔐 Middleware - Headers injetados para', pathname, ':', {
        userId: decoded.userId,
        email: decoded.email,
        role: decoded.role
      })

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      })
    } catch (error) {
      console.log('❌ Middleware - Token inválido:', error)
      return NextResponse.json({ 
        error: 'Token inválido ou expirado'
      }, { status: 401 })
    }
  }

  // Para rotas de página protegidas (não API)
  if (!pathname.startsWith('/api/')) {
    console.log('🔐 Middleware - Rota de página:', pathname)
    
    if (!token) {
      console.log('🔐 Middleware - Redirecionando para login')
      return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
      verifyToken(token)
      console.log('✅ Middleware - Token válido, permitindo acesso à página')
    } catch (error) {
      console.log('❌ Middleware - Token inválido, redirecionando para login')
      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('token')
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}