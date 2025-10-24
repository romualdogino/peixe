'use client'

import { useRequireAuth } from '@/app/hooks/useRequireAuth'

export default function ConfiguracoesPage() {
  useRequireAuth()

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
          <p className="text-gray-600">Gerencie as configurações do sistema</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600">Página de configurações em desenvolvimento...</p>
        </div>
      </div>
    </div>
  )
}