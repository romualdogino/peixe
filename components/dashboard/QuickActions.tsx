// app/components/dashboard/QuickActions.tsx
'use client'

import { Plus, Utensils, Calculator, FileText, TestTube, Heart, BarChart3, Fish } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Action {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  color: string
  bgColor: string
  hoverColor: string
}

export function QuickActions() {
  const router = useRouter()

  const actions: Action[] = [
    {
      title: 'Iniciar Ciclo',
      description: 'Iniciar novo ciclo de produção',
      icon: <Fish className="h-5 w-5" />,
      href: '/ciclos/iniciar',
      color: 'text-teal-700',
      bgColor: 'bg-teal-50',
      hoverColor: 'hover:bg-teal-100'
    },

    {
      title: 'Novo Tanque',
      description: 'Adicionar novo tanque à fazenda',
      icon: <Plus className="h-5 w-5" />,
      href: '/tanques/novo',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      title: 'Registrar Alimentação',
      description: 'Registrar alimentação diária',
      icon: <Utensils className="h-5 w-5" />,
      href: '/registros/novo',
      color: 'text-green-700',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    {
      title: 'Nova Biometria',
      description: 'Realizar amostragem de biometria',
      icon: <Calculator className="h-5 w-5" />,
      href: '/biometrias/novo',
      color: 'text-purple-700',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100'
    },
    {
      title: 'Qualidade da Água',
      description: 'Registrar análise de água',
      icon: <TestTube className="h-5 w-5" />,
      href: '/qualidade-agua/novo',
      color: 'text-cyan-700',
      bgColor: 'bg-cyan-50',
      hoverColor: 'hover:bg-cyan-100'
    },
    {
      title: 'Controle de Saúde',
      description: 'Registrar saúde dos peixes',
      icon: <Heart className="h-5 w-5" />,
      href: '/saude/novo',
      color: 'text-pink-700',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100'
    },
    {
      title: 'Relatório Diário',
      description: 'Gerar relatório operacional',
      icon: <FileText className="h-5 w-5" />,
      href: '/relatorios/diario',
      color: 'text-orange-700',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100'
    },
    {
      title: 'Movimentação',
      description: 'Entrada/saída de peixes',
      icon: <BarChart3 className="h-5 w-5" />,
      href: '/movimentacoes/novo',
      color: 'text-indigo-700',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:bg-indigo-100'
    }
  ]

  const handleActionClick = (href: string) => {
    router.push(href)
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold text-gray-900">Ações Rápidas</h2>
        <p className="text-sm text-gray-600 mt-1">
          Acesse rapidamente as funcionalidades mais usadas
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleActionClick(action.href)}
              className={`${action.bgColor} ${action.hoverColor} ${action.color} rounded-lg p-4 text-left transition-all duration-200 border border-transparent hover:border-current/20 hover:shadow-md group`}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${action.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                  {action.icon}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm group-hover:underline">
                    {action.title}
                  </p>
                  <p className="text-xs opacity-80 mt-1 leading-tight">
                    {action.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Links alternativos para fallback */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex flex-wrap gap-3 justify-center">
            {actions.slice(0, 4).map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className={`text-xs px-3 py-2 rounded-full ${action.bgColor} ${action.color} font-medium hover:shadow-sm transition-shadow`}
              >
                {action.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}