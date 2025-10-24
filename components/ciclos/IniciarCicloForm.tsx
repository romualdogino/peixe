// app/components/ciclos/IniciarCicloForm.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Fish, Ruler, Calendar, Package } from 'lucide-react'

interface Tanque {
  id: string
  nome: string
  codigo_interno: string | null
  volume_m3: number
  tipo: string
  localizacao: string | null
}

interface IniciarCicloFormData {
  tanque_id: string
  especie: string
  origem_lote: string
  data_inicio: string
  quantidade_inicial: string
  peso_inicial_g: string
  data_prevista_saida: string
  observacoes: string
}

export function IniciarCicloForm() {
  const router = useRouter()
  const [tanques, setTanques] = useState<Tanque[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState<IniciarCicloFormData>({
    tanque_id: '',
    especie: '',
    origem_lote: '',
    data_inicio: new Date().toISOString().split('T')[0],
    quantidade_inicial: '',
    peso_inicial_g: '',
    data_prevista_saida: '',
    observacoes: ''
  })

  // Buscar tanques disponíveis
  useEffect(() => {
    async function fetchTanquesDisponiveis() {
      try {
        const response = await fetch('/api/tanques/disponiveis')
        if (!response.ok) throw new Error('Erro ao buscar tanques')
        const data = await response.json()
        setTanques(data)
      } catch (error) {
        console.error('Erro:', error)
        setError('Erro ao carregar tanques disponíveis')
      } finally {
        setLoading(false)
      }
    }

    fetchTanquesDisponiveis()
  }, [])

  // Calcular data prevista de saída (6 meses padrão para tilápia)
  useEffect(() => {
    if (formData.data_inicio && !formData.data_prevista_saida) {
      const dataInicio = new Date(formData.data_inicio)
      const dataPrevista = new Date(dataInicio)
      dataPrevista.setMonth(dataPrevista.getMonth() + 6)
      setFormData(prev => ({
        ...prev,
        data_prevista_saida: dataPrevista.toISOString().split('T')[0]
      }))
    }
  }, [formData.data_inicio, formData.data_prevista_saida])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/ciclos/iniciar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao iniciar ciclo')
      }

      // Sucesso - redirecionar para detalhes do tanque
      router.push(`/tanques/${formData.tanque_id}`)
      router.refresh()

    } catch (error) {
      console.error('Erro ao iniciar ciclo:', error)
      setError(error instanceof Error ? error.message : 'Erro ao iniciar ciclo')
    } finally {
      setSubmitting(false)
    }
  }

  const especiesComuns = [
    'Tilápia',
    'Carpa',
    'Pacu',
    'Tambacu',
    'Tambatinga',
    'Pintado',
    'Matrinxã',
    'Pirarucu',
    'Outra'
  ]

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <span className="ml-2 text-gray-600">Carregando tanques disponíveis...</span>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <Fish className="h-6 w-6 mr-2 text-blue-600" />
            Iniciar Novo Ciclo de Produção
          </h1>
          <p className="text-gray-600 mt-1">
            Preencha os dados para iniciar um novo ciclo de produção
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Erro ao iniciar ciclo
                  </h3>
                  <p className="text-sm text-red-700 mt-1">
                    {error}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tanque */}
          <div>
            <label htmlFor="tanque_id" className="block text-sm font-medium text-gray-700 mb-2">
              Tanque *
            </label>
            <select
              id="tanque_id"
              name="tanque_id"
              value={formData.tanque_id}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Selecione um tanque</option>
              {tanques.map((tanque) => (
                <option key={tanque.id} value={tanque.id}>
                  {tanque.nome} 
                  {tanque.codigo_interno && ` (${tanque.codigo_interno})`} 
                  - {tanque.volume_m3}m³ - {tanque.tipo}
                </option>
              ))}
            </select>
            {tanques.length === 0 && (
              <p className="text-sm text-gray-500 mt-1">
                Nenhum tanque disponível para iniciar ciclo. Verifique se existem tanques ativos sem ciclo em andamento.
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Espécie */}
            <div>
              <label htmlFor="especie" className="block text-sm font-medium text-gray-700 mb-2">
                Espécie *
              </label>
              <select
                id="especie"
                name="especie"
                value={formData.especie}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione a espécie</option>
                {especiesComuns.map(especie => (
                  <option key={especie} value={especie}>{especie}</option>
                ))}
              </select>
            </div>

            {/* Origem do Lote */}
            <div>
              <label htmlFor="origem_lote" className="block text-sm font-medium text-gray-700 mb-2">
                Origem do Lote
              </label>
              <input
                type="text"
                id="origem_lote"
                name="origem_lote"
                value={formData.origem_lote}
                onChange={handleChange}
                placeholder="Ex: Alevinário XYZ, Lote 123"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Data Início */}
            <div>
              <label htmlFor="data_inicio" className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                Data de Início *
              </label>
              <input
                type="date"
                id="data_inicio"
                name="data_inicio"
                value={formData.data_inicio}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Data Prevista Saída */}
            <div>
              <label htmlFor="data_prevista_saida" className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                Data Prevista de Saída
              </label>
              <input
                type="date"
                id="data_prevista_saida"
                name="data_prevista_saida"
                value={formData.data_prevista_saida}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quantidade Inicial */}
            <div>
              <label htmlFor="quantidade_inicial" className="block text-sm font-medium text-gray-700 mb-2">
                <Package className="h-4 w-4 inline mr-1" />
                Quantidade Inicial *
              </label>
              <input
                type="number"
                id="quantidade_inicial"
                name="quantidade_inicial"
                value={formData.quantidade_inicial}
                onChange={handleChange}
                required
                min="1"
                step="1"
                placeholder="Ex: 1000"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">Número total de peixes</p>
            </div>

            {/* Peso Inicial */}
            <div>
              <label htmlFor="peso_inicial_g" className="block text-sm font-medium text-gray-700 mb-2">
                <Ruler className="h-4 w-4 inline mr-1" />
                Peso Inicial (gramas) *
              </label>
              <input
                type="number"
                id="peso_inicial_g"
                name="peso_inicial_g"
                value={formData.peso_inicial_g}
                onChange={handleChange}
                required
                min="0.1"
                step="0.1"
                placeholder="Ex: 2.5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">Peso médio individual em gramas</p>
            </div>
          </div>

          {/* Observações */}
          <div>
            <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700 mb-2">
              Observações
            </label>
            <textarea
              id="observacoes"
              name="observacoes"
              value={formData.observacoes}
              onChange={handleChange}
              rows={3}
              placeholder="Observações adicionais sobre o ciclo..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={submitting || !formData.tanque_id}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Iniciando...
                </>
              ) : (
                <>
                  <Fish className="h-4 w-4 mr-2" />
                  Iniciar Ciclo
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}