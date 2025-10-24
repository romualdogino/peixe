import LoginForm from '@/components/auth/LoginForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - Fish Farm Manager',
  description: 'Faça login no sistema de gestão de piscicultura',
}

export default function LoginPage() {
  return <LoginForm />
}