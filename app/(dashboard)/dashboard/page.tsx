'use client'

import { useState, useEffect } from 'react'
import { useRequireAuth } from '@/app/hooks/useRequireAuth'
import { useAuth } from '@/app/contexts/AuthContext'
import Link from 'next/link'

interface DashboardStats {
  totalTanques: number
  tanquesAtivos: number
  ciclosAtivos: number
  alertas: number
  registrosHoje: number
  producaoTotal: number
}

interface Alerta {
  id: string
  tipo: 'qualidade' | 'saude' | 'estoque' | 'manutencao'
  titulo: string
  descricao: string
  prioridade: 'alta' | 'media' | 'baixa'
  data: string
}

interface MetricasRecentes {
  id: string
  tipo: string
  valor: string
  variacao: number
  icone: string
}

export default function DashboardPage() {
  useRequireAuth()
  const { user } = useAuth()
  const [stats, setStats] = useState<DashboardStats>({
    totalTanques: 0,
    tanquesAtivos: 0,
    ciclosAtivos: 0,
    alertas: 0,
    registrosHoje: 0,
    producaoTotal: 0
  })
  const [alertas, setAlertas] = useState<Alerta[]>([])
  const [metricasRecentes, setMetricasRecentes] = useState<MetricasRecentes[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      
      // Dados mockados temporariamente enquanto corrigimos a API
      setStats({
        totalTanques: 8,
        tanquesAtivos: 6,
        ciclosAtivos: 4,
        alertas: 2,
        registrosHoje: 12,
        producaoTotal: 1250
      })
      
      setAlertas([
        {
          id: '1',
          tipo: 'qualidade',
          titulo: 'Sistema em Desenvolvimento',
          descricao: 'API de dashboard em ajuste',
          prioridade: 'media',
          data: new Date().toISOString()
        },
        {
          id: '2',
          tipo: 'estoque',
          titulo: 'Implementação em Andamento',
          descricao: 'Integração com APIs em progresso',
          prioridade: 'baixa',
          data: new Date().toISOString()
        }
      ])
      
      setMetricasRecentes([
        {
          id: '1',
          tipo: 'Sistema',
          valor: 'Em Desenvolvimento',
          variacao: 0,
          icone: '🚧'
        },
        {
          id: '2',
          tipo: 'Funcionalidades',
          valor: '85% Concluído',
          variacao: 5,
          icone: '📈'
        }
      ])
      
    } catch (error) {
      console.error('Erro ao carregar dashboard:', error)
    } finally {
      setLoading(false)
    }
  }

  const getPrioridadeColor = (prioridade: string) => {
    switch (prioridade) {
      case 'alta':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'media':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'baixa':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getTipoIcone = (tipo: string) => {
    switch (tipo) {
      case 'qualidade':
        return '💧'
      case 'saude':
        return '🏥'
      case 'estoque':
        return '📦'
      case 'manutencao':
        return '🔧'
      default:
        return '📢'
    }
  }

  const getVariacaoColor = (variacao: number) => {
    if (variacao > 0) return 'text-green-600'
    if (variacao < 0) return 'text-red-600'
    return 'text-gray-600'
  }

  const getVariacaoIcon = (variacao: number) => {
    if (variacao > 0) return '↗️'
    if (variacao < 0) return '↘️'
    return '→'
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          <p className="text-gray-600">Carregando dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Olá, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-1">
            Bem-vindo ao sistema de gestão de piscicultura
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
            {new Date().toLocaleDateString('pt-BR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {/* Total de Tanques */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total de Tanques</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalTanques}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Link 
              href="/tanques" 
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Ver todos →
            </Link>
          </div>
        </div>

        {/* Tanques Ativos */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tanques Ativos</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.tanquesAtivos}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-green-600 font-medium">
              {((stats.tanquesAtivos / stats.totalTanques) * 100).toFixed(1)}% em operação
            </span>
          </div>
        </div>

        {/* Ciclos Ativos */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ciclos Ativos</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.ciclosAtivos}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Link 
              href="/ciclos-producao" 
              className="text-sm text-purple-600 hover:text-purple-700 font-medium"
            >
              Gerenciar ciclos →
            </Link>
          </div>
        </div>

        {/* Alertas */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Alertas</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.alertas}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className={`text-sm font-medium ${stats.alertas > 0 ? 'text-red-600' : 'text-green-600'}`}>
              {stats.alertas > 0 ? 'Necessita atenção' : 'Tudo normal'}
            </span>
          </div>
        </div>

        {/* Registros Hoje */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Registros Hoje</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.registrosHoje}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Link 
              href="/registros-diarios" 
              className="text-sm text-orange-600 hover:text-orange-700 font-medium"
            >
              Ver registros →
            </Link>
          </div>
        </div>

        {/* Produção Total */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Produção Total</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.producaoTotal}kg</p>
            </div>
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-sm text-indigo-600 font-medium">
              Em andamento
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Alertas Recentes */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Alertas Recentes</h2>
            <Link 
              href="/alertas" 
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Ver todos
            </Link>
          </div>

          <div className="space-y-4">
            {alertas.length > 0 ? (
              alertas.map((alerta) => (
                <div
                  key={alerta.id}
                  className={`p-4 rounded-xl border-2 ${getPrioridadeColor(alerta.prioridade)} transition-all duration-200 hover:shadow-md`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center text-lg">
                      {getTipoIcone(alerta.tipo)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-900">
                          {alerta.titulo}
                        </h3>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium capitalize">
                          {alerta.prioridade}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {alerta.descricao}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        {new Date(alerta.data).toLocaleString('pt-BR')}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-600">Nenhum alerta no momento</p>
                <p className="text-sm text-gray-500 mt-1">Tudo funcionando perfeitamente!</p>
              </div>
            )}
          </div>
        </div>

        {/* Métricas Recentes */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Métricas do Sistema</h2>
            <span className="text-sm text-green-600 font-medium">
              • Em desenvolvimento
            </span>
          </div>

          <div className="space-y-4">
            {metricasRecentes.map((metrica) => (
              <div
                key={metrica.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{metrica.icone}</div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {metrica.tipo}
                    </h3>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {metrica.valor}
                    </p>
                  </div>
                </div>
                <div className={`text-right ${getVariacaoColor(metrica.variacao)}`}>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium">
                      {getVariacaoIcon(metrica.variacao)}
                    </span>
                    <span className="text-sm font-medium">
                      {metrica.variacao > 0 ? '+' : ''}{metrica.variacao}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">vs. anterior</p>
                </div>
              </div>
            ))}
          </div>

          {/* Ações Rápidas */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/registros-diarios/novo"
                className="flex items-center justify-center space-x-2 p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="text-sm font-medium text-primary-700">Novo Registro</span>
              </Link>

              <Link
                href="/biometrias/nova"
                className="flex items-center justify-center space-x-2 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-sm font-medium text-green-700">Nova Biometria</span>
              </Link>

              <Link
                href="/qualidade-agua/nova"
                className="flex items-center justify-center space-x-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <span className="text-sm font-medium text-blue-700">Qualidade Água</span>
              </Link>

              <Link
                href="/relatorios"
                className="flex items-center justify-center space-x-2 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm font-medium text-purple-700">Relatórios</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Atividade Recente */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Atividade Recente</h2>
          <Link 
            href="/atividades" 
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Ver histórico completo
          </Link>
        </div>

        <div className="space-y-4">
          {/* Exemplo de atividades - em produção viria da API */}
          <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                <span className="font-medium">{user?.name}</span> acessou o sistema
              </p>
              <p className="text-xs text-gray-500 mt-1">Há alguns instantes</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                Dashboard carregado com dados de demonstração
              </p>
              <p className="text-xs text-gray-500 mt-1">Há 1 minuto</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                Sistema de autenticação configurado com sucesso
              </p>
              <p className="text-xs text-gray-500 mt-1">Há 2 minutos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}