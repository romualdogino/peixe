'use client'

import { useRequireAuth } from '@/app/hooks/useRequireAuth'

export default function AjudaPage() {
  useRequireAuth()

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Ajuda & Suporte</h1>
          <p className="text-gray-600">Encontre ajuda para usar o sistema</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600">Página de ajuda em desenvolvimento...</p>
        </div>
      </div>
    </div>
  )
}