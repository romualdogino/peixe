// app/(dashboard)/registros-diarios/novo/page.tsx
import { RegistroDiarioForm } from '@/components/registros-diarios/RegistroDiarioForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novo Registro Diário - Sistema de Piscicultura',
  description: 'Registre o monitoramento diário dos tanques'
}

export default function NovoRegistroDiarioPage() {
  return (
    <div className="container mx-auto py-6">
      <RegistroDiarioForm />
    </div>
  )
}