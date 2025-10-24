// app/components/dashboard/MetricsGrid.tsx
'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

interface MetricsData {
  ciclosAtivos: string
  biomassaTotal: string
  alimentacaoHoje: string
  mortalidadeSemana: number
}

export function MetricsGrid() {
  const [metrics, setMetrics] = useState<MetricsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const response = await fetch('/api/dashboard/metrics')
        const data = await response.json()
        setMetrics(data)
      } catch (error) {
        console.error('Erro ao buscar métricas:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    )
  }

  const displayMetrics = [
    {
      title: 'Ciclos Ativos',
      value: metrics?.ciclosAtivos || '0',
      change: 0,
      trend: 'stable' as const,
      description: 'Ciclos em andamento'
    },
    {
      title: 'Biomassa Total',
      value: metrics?.biomassaTotal || '0t',
      change: 2.1,
      trend: 'up' as const,
      description: 'Peso total estimado'
    },
    {
      title: 'Alimentação Hoje',
      value: metrics?.alimentacaoHoje || '0kg',
      change: -0.5,
      trend: 'down' as const,
      description: 'Ração consumida hoje'
    },
    {
      title: 'Mortalidade Semana',
      value: metrics?.mortalidadeSemana?.toString() || '0',
      change: 0,
      trend: 'stable' as const,
      description: 'Últimos 7 dias'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayMetrics.map((metric, index) => (
        <MetricCard key={index} metric={metric} />
      ))}
    </div>
  )
}

function MetricCard({ metric }: { 
  metric: {
    title: string
    value: string
    change: number
    trend: 'up' | 'down' | 'stable'
    description: string
  } 
}) {
  const trendIcons = {
    up: <TrendingUp className="h-4 w-4 text-green-500" />,
    down: <TrendingDown className="h-4 w-4 text-red-500" />,
    stable: <Minus className="h-4 w-4 text-gray-500" />
  }

  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    stable: 'text-gray-600'
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-gray-600">{metric.title}</p>
        <div className={`flex items-center ${trendColors[metric.trend]}`}>
          {trendIcons[metric.trend]}
          <span className="ml-1 text-sm font-medium">
            {metric.change > 0 ? '+' : ''}{metric.change}%
          </span>
        </div>
      </div>
      <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
      <p className="text-sm text-gray-500 mt-1">{metric.description}</p>
    </div>
  )
}