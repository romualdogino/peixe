'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/contexts/AuthContext'
import AuthLoading from './AuthLoading'


interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
  redirectTo?: string
}

export default function AuthGuard({ 
  children, 
  requireAuth = true, 
  redirectTo = '/login' 
}: AuthGuardProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (requireAuth && !user) {
        router.push(redirectTo)
      } else if (!requireAuth && user) {
        router.push('/dashboard')
      }
    }
  }, [user, loading, requireAuth, redirectTo, router])

  if (loading) {
    return <AuthLoading />
  }

  if (requireAuth && !user) {
    return null
  }

  if (!requireAuth && user) {
    return null
  }

  return <>{children}</>
}