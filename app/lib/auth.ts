import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// Garantir que o JWT_SECRET existe
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key-minimum-32-chars-for-development'

if (!process.env.JWT_SECRET) {
  console.warn('⚠️  JWT_SECRET não configurado no ambiente, usando fallback')
}

export interface TokenPayload {
  userId: string
  email: string
  role: string
}

export class AuthError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AuthError'
  }
}

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 12)
}

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword)
}

export const generateToken = (payload: TokenPayload): string => {
  try {
    return jwt.sign(payload, JWT_SECRET, { 
      expiresIn: '7d',
      issuer: 'fish-farm-manager',
      audience: 'fish-farm-users'
    })
  } catch (error) {
    console.error('❌ Erro ao gerar token JWT:', error)
    throw new AuthError('Erro ao gerar token de autenticação')
  }
}

export const verifyToken = (token: string): TokenPayload => {
  try {
    console.log('🔐 verifyToken - Iniciando verificação...')
    console.log('🔐 verifyToken - Token recebido:', token ? `${token.substring(0, 20)}...` : 'NULL')
    
    if (!token) {
      console.log('❌ verifyToken - Token não fornecido')
      throw new AuthError('Token não fornecido')
    }

    // Remover "Bearer " se presente
    const cleanToken = token.replace('Bearer ', '')
    
    if (!process.env.JWT_SECRET) {
      console.log('❌ verifyToken - JWT_SECRET não configurado')
      throw new AuthError('JWT_SECRET não configurado no servidor')
    }

    console.log('🔐 verifyToken - Secret length:', process.env.JWT_SECRET.length)
    
    const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET, {
      issuer: 'fish-farm-manager',
      audience: 'fish-farm-users'
    }) as TokenPayload

    console.log('✅ verifyToken - Token válido para usuário:', decoded.email)
    
    return decoded
  } catch (error) {
    console.error('❌ verifyToken - Erro:', error)
    
    if (error instanceof jwt.JsonWebTokenError) {
      throw new AuthError(`Token JWT inválido: ${error.message}`)
    } else if (error instanceof jwt.TokenExpiredError) {
      throw new AuthError('Token JWT expirado')
    } else if (error instanceof AuthError) {
      throw error
    } else {
      throw new AuthError(`Erro ao verificar token: ${error}`)
    }
  }
}

// Exportação padrão para compatibilidade
export default {
  hashPassword,
  verifyPassword,
  generateToken,
  verifyToken,
  AuthError
}