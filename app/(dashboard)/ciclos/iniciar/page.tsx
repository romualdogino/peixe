// app/(dashboard)/ciclos/iniciar/page.tsx
import { IniciarCicloForm } from '@/components/ciclos/IniciarCicloForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciar Ciclo de Produção - Sistema de Piscicultura',
  description: 'Inicie um novo ciclo de produção de peixes'
}

export default function IniciarCicloPage() {
  return (
    <div className="container mx-auto py-6">
      <IniciarCicloForm />
    </div>
  )
}