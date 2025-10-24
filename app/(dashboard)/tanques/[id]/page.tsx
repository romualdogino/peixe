'use client'

import { useState, useEffect } from 'react'
import { useRequireAuth } from '@/app/hooks/useRequireAuth'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'

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
    data_fim: string | null
    quantidade_inicial: number
    quantidade_atual: number | null
    peso_inicial_g: number
    peso_atual: number | null
    status: string
  } | null
  registros_recentes?: Array<{
    id: string
    data: string
    temperatura_agua: number
    quantidade_kg: number | null
    mortalidade: number | null
  }>
  biometrias_recentes?: Array<{
    id: string
    data_amostra: string
    peso_total_kg: number
    comprimento_medio_cm: number
  }>
}

export default function TanqueDetailsPage() {
  useRequireAuth()
  const params = useParams()
  const router = useRouter()
  const [tanque, setTanque] = useState<Tanque | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const id = params.id as string

  useEffect(() => {
    if (id) {
      fetchTanque()
    }
  }, [id])

const fetchTanque = async () => {
  try {
    setLoading(true)
    setError('')
    
    console.log('🔄 Buscando tanque ID:', id)
    
    const response = await fetch(`/api/tanques/${id}`)
    
    console.log('📊 Status da resposta:', response.status)
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Tanque não encontrado')
      }
      throw new Error('Erro ao carregar tanque')
    }

    const data = await response.json()
    console.log('📦 Dados recebidos:', data)
    
    if (data.success) {
      setTanque(data.data)
    } else {
      throw new Error(data.error || 'Erro ao carregar dados')
    }
  } catch (error) {
    console.error('❌ Erro detalhado:', error)
    setError(error instanceof Error ? error.message : 'Erro desconhecido')
  } finally {
    setLoading(false)
  }
}

  const handleDelete = async () => {
    if (!tanque) return

    if (!confirm(`Tem certeza que deseja excluir o tanque "${tanque.nome}"? Esta ação não pode ser desfeita.`)) {
      return
    }

    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/tanques/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Erro ao excluir tanque')
      }

      router.push('/tanques')
      
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
            <p className="text-gray-600">Carregando tanque...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Erro ao carregar</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={fetchTanque}
              className="btn-primary"
            >
              Tentar Novamente
            </button>
            <Link
              href="/tanques"
              className="btn-secondary"
            >
              Voltar para Tanques
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (!tanque) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Tanque não encontrado</h2>
          <Link
            href="/tanques"
            className="btn-primary"
          >
            Voltar para Tanques
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            <Link href="/tanques" className="hover:text-primary-600 transition-colors">
              Tanques
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{tanque.nome}</span>
          </div>
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold text-gray-900">{tanque.nome}</h1>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(tanque.status)}`}>
              {getStatusLabel(tanque.status)}
            </span>
            {tanque.ciclo_atual && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                Em Produção
              </span>
            )}
          </div>
          <p className="text-gray-600 mt-1">
            {tanque.codigo_interno && `Código: ${tanque.codigo_interno}`} • {getTipoLabel(tanque.tipo)} • {tanque.volume_m3}m³
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Link
            href={`/tanques/${id}/editar`}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span>Editar</span>
          </Link>
          <button
            onClick={handleDelete}
            className="btn-secondary border-red-300 text-red-700 hover:bg-red-50 inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span>Excluir</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Informações Principais */}
        <div className="lg:col-span-2 space-y-6">
          {/* Informações do Tanque */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações do Tanque</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Nome</label>
                <p className="text-gray-900 mt-1">{tanque.nome}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Código Interno</label>
                <p className="text-gray-900 mt-1">{tanque.codigo_interno || 'Não informado'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Tipo</label>
                <p className="text-gray-900 mt-1">{getTipoLabel(tanque.tipo)}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Status</label>
                <p className="text-gray-900 mt-1">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tanque.status)}`}>
                    {getStatusLabel(tanque.status)}
                  </span>
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Volume</label>
                <p className="text-gray-900 mt-1">{tanque.volume_m3} m³</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Área</label>
                <p className="text-gray-900 mt-1">{tanque.area_m2 ? `${tanque.area_m2} m²` : 'Não informada'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Material</label>
                <p className="text-gray-900 mt-1">{tanque.tipo_material || 'Não informado'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Localização</label>
                <p className="text-gray-900 mt-1">{tanque.localizacao || 'Não informada'}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Data de Instalação</label>
                <p className="text-gray-900 mt-1">
                  {tanque.data_instalacao ? new Date(tanque.data_instalacao).toLocaleDateString('pt-BR') : 'Não informada'}
                </p>
              </div>
            </div>
          </div>

          {/* Ciclo Atual */}
          {tanque.ciclo_atual && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Ciclo de Produção Atual</h2>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  tanque.ciclo_atual.status === 'ativo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {tanque.ciclo_atual.status === 'ativo' ? 'Ativo' : 'Finalizado'}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Espécie</label>
                  <p className="text-gray-900 mt-1">{tanque.ciclo_atual.especie || 'Não informada'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Data de Início</label>
                  <p className="text-gray-900 mt-1">
                    {new Date(tanque.ciclo_atual.data_inicio).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Quantidade Atual</label>
                  <p className="text-gray-900 mt-1">
                    {tanque.ciclo_atual.quantidade_atual ? `${tanque.ciclo_atual.quantidade_atual} peixes` : 'Não informada'}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Peso Médio</label>
                  <p className="text-gray-900 mt-1">
                    {tanque.ciclo_atual.peso_atual ? `${(tanque.ciclo_atual.peso_atual / 1000).toFixed(2)} kg` : 'Não informado'}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex space-x-3">
                <Link
                  href={`/ciclos-producao/${tanque.ciclo_atual.id}`}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  Ver Detalhes do Ciclo
                </Link>
                <Link
                  href="/registros-diarios/novo"
                  className="inline-flex items-center px-4 py-2 border border-primary-300 rounded-lg text-sm font-medium text-primary-700 bg-white hover:bg-primary-50 transition-colors duration-200"
                >
                  Novo Registro Diário
                </Link>
              </div>
            </div>
          )}

          {/* Ações Rápidas */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <Link
                href="/registros-diarios/novo"
                className="flex flex-col items-center justify-center p-4 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200 text-center"
              >
                <svg className="w-8 h-8 text-primary-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="text-sm font-medium text-primary-700">Registro Diário</span>
              </Link>

              <Link
                href="/biometrias/nova"
                className="flex flex-col items-center justify-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 text-center"
              >
                <svg className="w-8 h-8 text-green-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-sm font-medium text-green-700">Nova Biometria</span>
              </Link>

              <Link
                href="/qualidade-agua/nova"
                className="flex flex-col items-center justify-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 text-center"
              >
                <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <span className="text-sm font-medium text-blue-700">Qualidade Água</span>
              </Link>

              {!tanque.ciclo_atual && (
                <Link
                  href="/ciclos-producao/novo"
                  className="flex flex-col items-center justify-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200 text-center"
                >
                  <svg className="w-8 h-8 text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-medium text-purple-700">Iniciar Ciclo</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar - Informações Adicionais */}
        <div className="space-y-6">
          {/* Status do Tanque */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Status do Sistema</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Tanque Ativo</span>
                <span className={`w-3 h-3 rounded-full ${tanque.isActive ? 'bg-green-500' : 'bg-red-500'}`}></span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Ciclo Ativo</span>
                <span className={`w-3 h-3 rounded-full ${tanque.ciclo_atual ? 'bg-green-500' : 'bg-gray-300'}`}></span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Pronto para Produção</span>
                <span className={`w-3 h-3 rounded-full ${
                  tanque.status === 'VAZIO' && tanque.isActive ? 'bg-green-500' : 'bg-gray-300'
                }`}></span>
              </div>
            </div>
          </div>

          {/* Registros Recentes */}
          {tanque.registros_recentes && tanque.registros_recentes.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Registros Recentes</h3>
              <div className="space-y-3">
                {tanque.registros_recentes.slice(0, 5).map((registro) => (
                  <div key={registro.id} className="flex items-center justify-between text-sm">
                    <span>{new Date(registro.data).toLocaleDateString('pt-BR')}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-600">{registro.temperatura_agua}°C</span>
                      {registro.quantidade_kg && (
                        <span className="text-gray-600">{registro.quantidade_kg}kg</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/registros-diarios"
                className="block text-center mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Ver todos os registros →
              </Link>
            </div>
          )}

          {/* Biometrias Recentes */}
          {tanque.biometrias_recentes && tanque.biometrias_recentes.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Biometrias Recentes</h3>
              <div className="space-y-3">
                {tanque.biometrias_recentes.slice(0, 3).map((biometria) => (
                  <div key={biometria.id} className="text-sm">
                    <div className="flex justify-between">
                      <span>{new Date(biometria.data_amostra).toLocaleDateString('pt-BR')}</span>
                      <span className="font-medium">{biometria.peso_total_kg}kg</span>
                    </div>
                    <div className="text-gray-600">
                      {biometria.comprimento_medio_cm}cm médio
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/biometrias"
                className="block text-center mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Ver todas as biometrias →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}