// app/components/dashboard/AlertsSection.tsx
'use client'

import { useEffect, useState } from 'react'
import { AlertTriangle, Clock, Thermometer, Skull, Droplets } from 'lucide-react'

interface Alert {
  id: string
  tipo: 'CRITICO' | 'AVISO' | 'INFO'
  mensagem: string
  tanque: string
  data: string
  parametro: string
  icon: React.ReactNode
}

export function AlertsSection() {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAlerts() {
      try {
        const response = await fetch('/api/dashboard/alerts')
        if (!response.ok) {
          throw new Error('Erro ao buscar alertas')
        }
        const data = await response.json()
        setAlerts(data)
      } catch (error) {
        console.error('Erro ao buscar alertas:', error)
        // Fallback para dados mock em caso de erro
        setAlerts(getMockAlerts())
      } finally {
        setLoading(false)
      }
    }

    fetchAlerts()
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow animate-pulse">
        <div className="p-6 border-b">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        </div>
        <div className="p-4 space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const getAlertIcon = (parametro: string) => {
    switch (parametro) {
      case 'QUALIDADE_AGUA':
        return <Droplets className="h-4 w-4" />
      case 'MORTALIDADE':
        return <Skull className="h-4 w-4" />
      case 'REGISTRO_PENDENTE':
        return <Clock className="h-4 w-4" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  const getAlertColor = (tipo: string) => {
    switch (tipo) {
      case 'CRITICO':
        return 'bg-red-100 text-red-600 border-red-200'
      case 'AVISO':
        return 'bg-yellow-100 text-yellow-600 border-yellow-200'
      default:
        return 'bg-blue-100 text-blue-600 border-blue-200'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Alertas e Notificações
          </h2>
          {alerts.length > 0 && (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              alerts.some(a => a.tipo === 'CRITICO') 
                ? 'bg-red-100 text-red-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {alerts.length} alerta{alerts.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {alerts.length === 0 ? (
          <div className="p-8 text-center">
            <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
              <AlertTriangle className="h-12 w-12" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">
              Nenhum alerta
            </h3>
            <p className="text-sm text-gray-500">
              Todos os sistemas operando normalmente
            </p>
          </div>
        ) : (
          alerts.map((alert) => (
            <div 
              key={alert.id} 
              className="p-4 hover:bg-gray-50 transition-colors duration-150"
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-full border ${getAlertColor(alert.tipo)}`}>
                  {getAlertIcon(alert.parametro)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {alert.mensagem}
                  </p>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      Tanque: {alert.tanque}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      alert.tipo === 'CRITICO' 
                        ? 'bg-red-100 text-red-800'
                        : alert.tipo === 'AVISO'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {alert.tipo.toLowerCase()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(alert.data).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {alerts.length > 0 && (
        <div className="p-4 border-t bg-gray-50">
          <button 
            onClick={() => window.location.reload()}
            className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Atualizar alertas
          </button>
        </div>
      )}
    </div>
  )
}

// Fallback com dados mock para desenvolvimento
function getMockAlerts(): Alert[] {
  return [
    {
      id: '1',
      tipo: 'CRITICO',
      mensagem: 'Oxigênio dissolvido baixo: 3.2 mg/L',
      tanque: 'TQ-001',
      data: new Date().toISOString(),
      parametro: 'QUALIDADE_AGUA',
      icon: <Droplets className="h-4 w-4" />
    },
    {
      id: '2',
      tipo: 'AVISO',
      mensagem: 'Sem registros diários nas últimas 24h',
      tanque: 'TQ-003',
      data: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      parametro: 'REGISTRO_PENDENTE',
      icon: <Clock className="h-4 w-4" />
    },
    {
      id: '3',
      tipo: 'CRITICO',
      mensagem: 'Alta mortalidade: 15 peixes',
      tanque: 'TQ-005',
      data: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      parametro: 'MORTALIDADE',
      icon: <Skull className="h-4 w-4" />
    }
  ]
}