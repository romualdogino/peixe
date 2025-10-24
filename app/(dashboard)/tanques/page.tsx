'use client'

import { useState, useEffect } from 'react'
import { useRequireAuth } from '@/app/hooks/useRequireAuth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Tanque {
  id: string
  nome: string
  codigo_interno: string | null
  volume_m3: number
  area_m2: number | null
  tipo: string
  tipo_material: string | null
  status: string
  localizacao: string | null
  data_instalacao: string | null
  isActive: boolean
  ciclo_atual?: {
    id: string
    especie: string | null
    data_inicio: string
    quantidade_atual: number | null
  } | null
}

export default function TanquesPage() {
  useRequireAuth()
  const [tanques, setTanques] = useState<Tanque[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    fetchTanques()
  }, [])

  const fetchTanques = async () => {
    try {
      setLoading(true)
      setError('')
      
      const token = localStorage.getItem('token')
      const response = await fetch('/api/tanques', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Erro ao carregar tanques')
      }

      const data = await response.json()
      
      if (data.success) {
        setTanques(data.data)
      } else {
        throw new Error(data.error || 'Erro ao carregar dados')
      }
    } catch (error) {
      console.error('Erro:', error)
      setError(error instanceof Error ? error.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string, nome: string) => {
    if (!confirm(`Tem certeza que deseja excluir o tanque "${nome}"?`)) {
      return
    }

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/tanques/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Erro ao excluir tanque')
      }

      // Atualizar lista
      setTanques(prev => prev.filter(tanque => tanque.id !== id))
      
    } catch (error) {
      console.error('Erro ao excluir:', error)
      alert('Erro ao excluir tanque. Tente novamente.')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ATIVO':
        return 'bg-green-100 text-green-800'
      case 'MANUTENCAO':
        return 'bg-yellow-100 text-yellow-800'
      case 'VAZIO':
        return 'bg-blue-100 text-blue-800'
      case 'INATIVO':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'ATIVO':
        return 'Ativo'
      case 'MANUTENCAO':
        return 'Manutenção'
      case 'VAZIO':
        return 'Vazio'
      case 'INATIVO':
        return 'Inativo'
      default:
        return status
    }
  }

  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case 'CIRCULAR':
        return 'Circular'
      case 'ESCAVADO':
        return 'Escavado'
      case 'RACETRACK':
        return 'Race Track'
      case 'QUADRADO':
        return 'Quadrado'
      default:
        return tipo
    }
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center min-h-64">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
            <p className="text-gray-600">Carregando tanques...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tanques</h1>
          <p className="text-gray-600 mt-1">
            Gerencie todos os tanques da piscicultura
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link
            href="/tanques/novo"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Novo Tanque</span>
          </Link>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 text-red-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span>{error}</span>
          </div>
          <button
            onClick={fetchTanques}
            className="mt-2 text-sm text-red-600 hover:text-red-700 font-medium"
          >
            Tentar novamente
          </button>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total</p>
              <p className="text-2xl font-bold text-gray-900">{tanques.length}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ativos</p>
              <p className="text-2xl font-bold text-gray-900">
                {tanques.filter(t => t.status === 'ATIVO').length}
              </p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Em Produção</p>
              <p className="text-2xl font-bold text-gray-900">
                {tanques.filter(t => t.ciclo_atual).length}
              </p>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Manutenção</p>
              <p className="text-2xl font-bold text-gray-900">
                {tanques.filter(t => t.status === 'MANUTENCAO').length}
              </p>
            </div>
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tanques List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Lista de Tanques</h2>
        </div>

        {tanques.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum tanque cadastrado</h3>
            <p className="text-gray-600 mb-4">Comece criando seu primeiro tanque de produção.</p>
            <Link
              href="/tanques/novo"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Criar Primeiro Tanque</span>
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {tanques.map((tanque) => (
              <div key={tanque.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-gray-900">{tanque.nome}</h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tanque.status)}`}>
                          {getStatusLabel(tanque.status)}
                        </span>
                        {tanque.ciclo_atual && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Em Produção
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                        <span>{tanque.codigo_interno && `Código: ${tanque.codigo_interno}`}</span>
                        <span>•</span>
                        <span>{getTipoLabel(tanque.tipo)}</span>
                        <span>•</span>
                        <span>{tanque.volume_m3}m³</span>
                        {tanque.localizacao && (
                          <>
                            <span>•</span>
                            <span>{tanque.localizacao}</span>
                          </>
                        )}
                      </div>
                      {tanque.ciclo_atual && (
                        <div className="mt-2 text-sm text-gray-600">
                          <span className="font-medium">Ciclo ativo:</span> {tanque.ciclo_atual.especie || 'Espécie não informada'} • 
                          Iniciado em {new Date(tanque.ciclo_atual.data_inicio).toLocaleDateString('pt-BR')} • 
                          {tanque.ciclo_atual.quantidade_atual ? ` ${tanque.ciclo_atual.quantidade_atual} peixes` : ' Quantidade não informada'}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Link
                      href={`/tanques/${tanque.id}`}
                      className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Ver
                    </Link>
                    <Link
                      href={`/tanques/${tanque.id}/editar`}
                      className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(tanque.id, tanque.nome)}
                      className="inline-flex items-center px-3 py-2 border border-red-300 rounded-lg text-sm font-medium text-red-700 bg-white hover:bg-red-50 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}