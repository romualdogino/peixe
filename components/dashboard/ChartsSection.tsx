// app/components/dashboard/ChartsSection.tsx
'use client'

import { useEffect, useState } from 'react'

interface ChartData {
  producaoPorEspecie: { especie: string; quantidade: number }[]
  evolucaoBiomassa: { data: string; biomassa: number }[]
}

export function ChartsSection() {
  const [chartData, setChartData] = useState<ChartData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular dados de gráficos - implementar API real depois
    const mockData: ChartData = {
      producaoPorEspecie: [
        { especie: 'Tilápia', quantidade: 45 },
        { especie: 'Carpa', quantidade: 25 },
        { especie: 'Pacu', quantidade: 20 },
        { especie: 'Outros', quantidade: 10 }
      ],
      evolucaoBiomassa: [
        { data: '01/03', biomassa: 8.2 },
        { data: '08/03', biomassa: 9.1 },
        { data: '15/03', biomassa: 10.5 },
        { data: '22/03', biomassa: 11.8 },
        { data: '29/03', biomassa: 12.4 }
      ]
    }
    
    setChartData(mockData)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Métricas de Produção
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Produção por Espécie */}
        <div>
          <h3 className="text-md font-medium text-gray-700 mb-4">
            Distribuição por Espécie
          </h3>
          <div className="space-y-3">
            {chartData?.producaoPorEspecie.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{item.especie}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${item.quantidade}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium w-8">
                    {item.quantidade}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gráfico de Evolução de Biomassa */}
        <div>
          <h3 className="text-md font-medium text-gray-700 mb-4">
            Evolução da Biomassa (toneladas)
          </h3>
          <div className="flex items-end space-x-2 h-40">
            {chartData?.evolucaoBiomassa.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="bg-green-500 rounded-t w-full max-w-12"
                  style={{ height: `${(item.biomassa / 15) * 100}%` }}
                ></div>
                <span className="text-xs text-gray-500 mt-2">
                  {item.data}
                </span>
                <span className="text-xs font-medium">
                  {item.biomassa}t
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}