import RegisterForm from '@/components/auth/RegisterForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cadastro - Fish Farm Manager',
  description: 'Crie sua conta no sistema de gestão de piscicultura',
}

export default function RegisterPage() {
  return <RegisterForm />
}