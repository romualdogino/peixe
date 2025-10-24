'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { UserResponse, Role } from '../types'

interface AuthContextType {
  user: UserResponse | null
  login: (email: string, password: string) => Promise<void>
  register: (userData: RegisterData) => Promise<void>
  logout: () => void
  loading: boolean
}

interface RegisterData {
  name: string
  email: string
  password: string
  role: Role
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Função para gerenciar cookies no cliente
const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null

  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null
  return null
}

const setCookie = (name: string, value: string, days = 7) => {
  if (typeof document === 'undefined') return

  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`
}

const deleteCookie = (name: string) => {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const token = getCookie('token') || localStorage.getItem('token')

      console.log('🔐 CheckAuth - Token encontrado:', !!token)

      if (token) {
        console.log('🔐 CheckAuth - Token:', token.substring(0, 20) + '...')

        const response = await fetch('/api/auth/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })

        console.log('🔐 CheckAuth - Response status:', response.status)

        if (response.ok) {
          const data = await response.json()
          console.log('🔐 CheckAuth - Usuário carregado:', data.data.user.email)
          setUser(data.data.user)
        } else {
          const errorData = await response.json().catch(() => ({}))
          console.log('🔐 CheckAuth - Erro na resposta:', response.status, errorData)
          deleteCookie('token')
          localStorage.removeItem('token')
        }
      } else {
        console.log('🔐 CheckAuth - Nenhum token encontrado')
      }
    } catch (error) {
      console.error('🔐 CheckAuth - Erro:', error)
      deleteCookie('token')
      localStorage.removeItem('token')
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      console.log('🔐 Login - Iniciando login para:', email)

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data: any = await response.json()

      console.log('🔐 Login - Response:', data)

      if (!data.success) {
        throw new Error(data.error || 'Erro no login')
      }

      const { user: userData, token } = data.data

      console.log('🔐 Login - Salvando token...')

      // Salvar token em cookie e localStorage
      setCookie('token', token)
      localStorage.setItem('token', token)

      console.log('🔐 Login - Token salvo, atualizando estado do usuário')

      setUser(userData)

      console.log('🔐 Login - Login concluído com sucesso')
    } catch (error) {
      console.error('🔐 Login - Erro:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData: RegisterData) => {
    setLoading(true)
    try {
      console.log('🔐 Register - Iniciando registro para:', userData.email)

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      const data: any = await response.json()

      console.log('🔐 Register - Response:', data)

      if (!data.success) {
        throw new Error(data.error || 'Erro no registro')
      }

      const { user: registeredUser, token } = data.data // ← renomeado para evitar conflito

      console.log('🔐 Register - Salvando token...')

      // Salvar token em cookie e localStorage
      setCookie('token', token)
      localStorage.setItem('token', token)

      console.log('🔐 Register - Token salvo, atualizando estado do usuário')

      setUser(registeredUser) // ← usando o nome correto

      console.log('🔐 Register - Registro concluído com sucesso')
    } catch (error) {
      console.error('🔐 Register - Erro:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    console.log('🔐 Logout - Iniciando logout')

    deleteCookie('token')
    localStorage.removeItem('token')
    setUser(null)

    console.log('🔐 Logout - Token removido, usuário limpo')

    // Chamar API de logout
    fetch('/api/auth/logout', { method: 'POST' })
      .then(() => console.log('🔐 Logout - API chamada com sucesso'))
      .catch(error => console.error('🔐 Logout - Erro na API:', error))
  }

  const value = {
    user,
    login,
    register,
    logout,
    loading,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Exportação padrão para compatibilidade
export default AuthProvider