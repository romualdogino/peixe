// app/components/registros-diarios/RegistroDiarioForm.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, Calendar, Thermometer, Utensils, Skull, Wind, AlertTriangle } from 'lucide-react'

interface Tanque {
  id: string
  nome: string
  codigo_interno: string | null
  ciclo_atual: {
    especie: string
    quantidade_atual: number
    peso_atual: number
  } | null
}

interface RegistroDiarioFormData {
  tanque_id: string
  data: string
  turno: string
  temperatura_agua: string
  quantidade_kg: string
  fracionamento: string
  tipo_racao: string
  racao_marca: string
  racao_codigo: string
  sobras: boolean
  mortalidade: string
  causa_morte: string
  horas_aeracao: string
  observacoes: string
  eventos_adversos: string
}

export function RegistroDiarioForm() {
  const router = useRouter()
  const [tanques, setTanques] = useState<Tanque[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState<RegistroDiarioFormData>({
    tanque_id: '',
    data: new Date().toISOString().split('T')[0],
    turno: 'MANHA',
    temperatura_agua: '',
    quantidade_kg: '',
    fracionamento: '',
    tipo_racao: '',
    racao_marca: '',
    racao_codigo: '',
    sobras: false,
    mortalidade: '',
    causa_morte: '',
    horas_aeracao: '',
    observacoes: '',
    eventos_adversos: ''
  })

  // Buscar tanques com ciclos ativos
  useEffect(() => {
    async function fetchTanques() {
      try {
        const response = await fetch('/api/tanques/com-ciclos-ativos')
        if (!response.ok) throw new Error('Erro ao buscar tanques')
        const data = await response.json()
        setTanques(data)
      } catch (error) {
        console.error('Erro:', error)
        setError('Erro ao carregar tanques')
      } finally {
        setLoading(false)
      }
    }

    fetchTanques()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/registros-diarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao criar registro diário')
      }

      // Sucesso - redirecionar para dashboard
      router.push('/dashboard')
      router.refresh()

    } catch (error) {
      console.error('Erro ao criar registro:', error)
      setError(error instanceof Error ? error.message : 'Erro ao criar registro diário')
    } finally {
      setSubmitting(false)
    }
  }

  const tiposRacao = [
    'Ração Inicial (0.5-1.0mm)',
    'Ração Crescimento (1.5-2.0mm)',
    'Ração Engorda (2.5-3.0mm)',
    'Ração Final (3.5-4.0mm)',
    'Farelo de Soja',
    'Outra'
  ]

  const causasMorte = [
    'Baixo Oxigênio',
    'Doença Bacteriana',
    'Doença Fúngica',
    'Parasitas',
    'Predação',
    'Estresse',
    'Outra'
  ]

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <span className="ml-2 text-gray-600">Carregando tanques...</span>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <Calendar className="h-6 w-6 mr-2 text-blue-600" />
            Registro Diário de Produção
          </h1>
          <p className="text-gray-600 mt-1">
            Preencha os dados do monitoramento diário do tanque
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Erro ao criar registro
                  </h3>
                  <p className="text-sm text-red-700 mt-1">
                    {error}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    {tanque.ciclo_atual && ` - ${tanque.ciclo_atual.especie}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Data */}
            <div>
              <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                Data *
              </label>
              <input
                type="date"
                id="data"
                name="data"
                value={formData.data}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Turno */}
            <div>
              <label htmlFor="turno" className="block text-sm font-medium text-gray-700 mb-2">
                Turno
              </label>
              <select
                id="turno"
                name="turno"
                value={formData.turno}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="MANHA">Manhã</option>
                <option value="TARDE">Tarde</option>
                <option value="NOITE">Noite</option>
              </select>
            </div>

            {/* Temperatura da Água */}
            <div>
              <label htmlFor="temperatura_agua" className="block text-sm font-medium text-gray-700 mb-2">
                <Thermometer className="h-4 w-4 inline mr-1" />
                Temperatura da Água (°C) *
              </label>
              <input
                type="number"
                id="temperatura_agua"
                name="temperatura_agua"
                value={formData.temperatura_agua}
                onChange={handleChange}
                required
                min="0"
                max="40"
                step="0.1"
                placeholder="Ex: 28.5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Seção de Alimentação */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Utensils className="h-5 w-5 mr-2 text-green-600" />
              Alimentação
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Quantidade de Ração */}
              <div>
                <label htmlFor="quantidade_kg" className="block text-sm font-medium text-gray-700 mb-2">
                  Quantidade (kg)
                </label>
                <input
                  type="number"
                  id="quantidade_kg"
                  name="quantidade_kg"
                  value={formData.quantidade_kg}
                  onChange={handleChange}
                  min="0"
                  step="0.1"
                  placeholder="Ex: 5.5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Fracionamento */}
              <div>
                <label htmlFor="fracionamento" className="block text-sm font-medium text-gray-700 mb-2">
                  Fracionamento
                </label>
                <input
                  type="number"
                  id="fracionamento"
                  name="fracionamento"
                  value={formData.fracionamento}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  placeholder="Ex: 3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Tipo de Ração */}
              <div>
                <label htmlFor="tipo_racao" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Ração
                </label>
                <select
                  id="tipo_racao"
                  name="tipo_racao"
                  value={formData.tipo_racao}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecione...</option>
                  {tiposRacao.map(tipo => (
                    <option key={tipo} value={tipo}>{tipo}</option>
                  ))}
                </select>
              </div>

              {/* Sobras */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sobras"
                  name="sobras"
                  checked={formData.sobras}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="sobras" className="ml-2 block text-sm text-gray-700">
                  Houve sobras de ração?
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {/* Marca da Ração */}
              <div>
                <label htmlFor="racao_marca" className="block text-sm font-medium text-gray-700 mb-2">
                  Marca da Ração
                </label>
                <input
                  type="text"
                  id="racao_marca"
                  name="racao_marca"
                  value={formData.racao_marca}
                  onChange={handleChange}
                  placeholder="Ex: Guabi, Fri-Ribe, etc."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Código da Ração */}
              <div>
                <label htmlFor="racao_codigo" className="block text-sm font-medium text-gray-700 mb-2">
                  Código/Lote Ração
                </label>
                <input
                  type="text"
                  id="racao_codigo"
                  name="racao_codigo"
                  value={formData.racao_codigo}
                  onChange={handleChange}
                  placeholder="Ex: Lote 123, Código XYZ"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Seção de Saúde */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Skull className="h-5 w-5 mr-2 text-red-600" />
              Saúde e Mortalidade
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Mortalidade */}
              <div>
                <label htmlFor="mortalidade" className="block text-sm font-medium text-gray-700 mb-2">
                  Mortalidade (número de peixes)
                </label>
                <input
                  type="number"
                  id="mortalidade"
                  name="mortalidade"
                  value={formData.mortalidade}
                  onChange={handleChange}
                  min="0"
                  placeholder="Ex: 2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Causa da Morte */}
              <div>
                <label htmlFor="causa_morte" className="block text-sm font-medium text-gray-700 mb-2">
                  Causa da Morte
                </label>
                <select
                  id="causa_morte"
                  name="causa_morte"
                  value={formData.causa_morte}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecione...</option>
                  {causasMorte.map(causa => (
                    <option key={causa} value={causa}>{causa}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Seção de Operação */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <Wind className="h-5 w-5 mr-2 text-blue-600" />
              Operação e Aeração
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Horas de Aeração */}
              <div>
                <label htmlFor="horas_aeracao" className="block text-sm font-medium text-gray-700 mb-2">
                  Horas de Aeração
                </label>
                <input
                  type="number"
                  id="horas_aeracao"
                  name="horas_aeracao"
                  value={formData.horas_aeracao}
                  onChange={handleChange}
                  min="0"
                  max="24"
                  step="0.5"
                  placeholder="Ex: 8.5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Observações e Eventos Adversos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                placeholder="Observações gerais sobre o tanque..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Eventos Adversos */}
            <div>
              <label htmlFor="eventos_adversos" className="block text-sm font-medium text-gray-700 mb-2">
                Eventos Adversos
              </label>
              <textarea
                id="eventos_adversos"
                name="eventos_adversos"
                value={formData.eventos_adversos}
                onChange={handleChange}
                rows={3}
                placeholder="Problemas, falhas, situações atípicas..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
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
                  Salvando...
                </>
              ) : (
                <>
                  <Calendar className="h-4 w-4 mr-2" />
                  Salvar Registro
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}