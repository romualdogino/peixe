// app/components/dashboard/DashboardHeader.tsx
'use client'

import { useEffect, useState } from 'react'

interface DashboardStats {
  totalTanques: number
  tanquesAtivos: number
  tanquesProducao: number
  proximasBiometrias: number
  alertasCriticos: number
}

export function DashboardHeader() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/dashboard/stats')
        const data = await response.json()
        setStats(data)
      } catch (error) {
        console.error('Erro ao buscar estatísticas:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-lg p-4 h-20"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Dashboard da Piscicultura
      </h1>
      <p className="text-gray-600 mb-6">
        Visão geral em tempo real da operação
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard
          title="Total de Tanques"
          value={stats?.totalTanques || 0}
          icon="🏊"
          color="blue"
        />
        <StatCard
          title="Tanques Ativos"
          value={stats?.tanquesAtivos || 0}
          icon="✅"
          color="green"
        />
        <StatCard
          title="Em Produção"
          value={stats?.tanquesProducao || 0}
          icon="🐟"
          color="purple"
        />
        <StatCard
          title="Biometrias Recentes"
          value={stats?.proximasBiometrias || 0}
          icon="📊"
          color="orange"
        />
        <StatCard
          title="Alertas Críticos"
          value={stats?.alertasCriticos || 0}
          icon="⚠️"
          color="red"
        />
      </div>
    </div>
  )
}

function StatCard({ 
  title, 
  value, 
  icon, 
  color 
}: { 
  title: string
  value: number
  icon: string
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red'
}) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    purple: 'bg-purple-50 border-purple-200',
    orange: 'bg-orange-50 border-orange-200',
    red: 'bg-red-50 border-red-200'
  }

  return (
    <div className={`rounded-lg p-4 text-center border-2 ${colorClasses[color]}`}>
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600 mt-1">{title}</div>
    </div>
  )
}