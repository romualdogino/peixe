'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useRequireAuth } from '@/app/hooks/useRequireAuth'
import Link from 'next/link'

export default function NovoTanquePage() {
  useRequireAuth()
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  
  const [formData, setFormData] = useState({
    nome: '',
    codigo_interno: '',
    volume_m3: '',
    area_m2: '',
    tipo: 'CIRCULAR',
    tipo_material: '',
    status: 'ATIVO',
    localizacao: '',
    data_instalacao: '',
    nivel_agua_cm: '',
    isActive: true
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      // Validações básicas
      if (!formData.nome.trim()) {
        throw new Error('Nome é obrigatório')
      }
      if (!formData.volume_m3 || parseFloat(formData.volume_m3) <= 0) {
        throw new Error('Volume deve ser maior que zero')
      }

      const response = await fetch('/api/tanques', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          volume_m3: parseFloat(formData.volume_m3),
          area_m2: formData.area_m2 ? parseFloat(formData.area_m2) : null,
          nivel_agua_cm: formData.nivel_agua_cm ? parseFloat(formData.nivel_agua_cm) : null,
          data_instalacao: formData.data_instalacao || null,
          codigo_interno: formData.codigo_interno || null,
          tipo_material: formData.tipo_material || null,
          localizacao: formData.localizacao || null
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao criar tanque')
      }

      if (data.success) {
        router.push('/tanques')
      } else {
        throw new Error(data.error || 'Erro ao criar tanque')
      }
    } catch (error) {
      console.error('Erro ao criar:', error)
      setError(error instanceof Error ? error.message : 'Erro ao criar tanque')
    } finally {
      setSaving(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
          <Link href="/tanques" className="hover:text-primary-600 transition-colors">
            Tanques
          </Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">Novo Tanque</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Novo Tanque</h1>
            <p className="text-gray-600 mt-1">Cadastre um novo tanque no sistema</p>
          </div>
          
          <div className="flex space-x-3">
            <Link
              href="/tanques"
              className="btn-secondary"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              form="novo-tanque-form"
              disabled={saving}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Criando...' : 'Criar Tanque'}
            </button>
          </div>
        </div>
      </div>

      {/* Form */}
      <form id="novo-tanque-form" onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-red-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="font-medium">Erro:</span>
              <span>{error}</span>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações Básicas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Tanque *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="Ex: Tanque Principal A1"
              />
            </div>

            {/* Código Interno */}
            <div>
              <label htmlFor="codigo_interno" className="block text-sm font-medium text-gray-700 mb-2">
                Código Interno
              </label>
              <input
                type="text"
                id="codigo_interno"
                name="codigo_interno"
                value={formData.codigo_interno}
                onChange={handleChange}
                className="input-field"
                placeholder="Ex: TQ-001"
              />
            </div>

            {/* Volume */}
            <div>
              <label htmlFor="volume_m3" className="block text-sm font-medium text-gray-700 mb-2">
                Volume (m³) *
              </label>
              <input
                type="number"
                id="volume_m3"
                name="volume_m3"
                value={formData.volume_m3}
                onChange={handleChange}
                required
                min="0.1"
                step="0.1"
                className="input-field"
                placeholder="Ex: 50.0"
              />
            </div>

            {/* Área */}
            <div>
              <label htmlFor="area_m2" className="block text-sm font-medium text-gray-700 mb-2">
                Área (m²)
              </label>
              <input
                type="number"
                id="area_m2"
                name="area_m2"
                value={formData.area_m2}
                onChange={handleChange}
                min="0"
                step="0.1"
                className="input-field"
                placeholder="Ex: 25.0"
              />
            </div>

            {/* Tipo */}
            <div>
              <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Tanque *
              </label>
              <select
                id="tipo"
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                required
                className="input-field"
              >
                <option value="CIRCULAR">Circular</option>
                <option value="ESCAVADO">Escavado</option>
                <option value="RACETRACK">Race Track</option>
                <option value="QUADRADO">Quadrado</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Status *
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="input-field"
              >
                <option value="ATIVO">Ativo</option>
                <option value="MANUTENCAO">Manutenção</option>
                <option value="VAZIO">Vazio</option>
                <option value="INATIVO">Inativo</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações Adicionais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Material */}
            <div>
              <label htmlFor="tipo_material" className="block text-sm font-medium text-gray-700 mb-2">
                Material de Construção
              </label>
              <input
                type="text"
                id="tipo_material"
                name="tipo_material"
                value={formData.tipo_material}
                onChange={handleChange}
                className="input-field"
                placeholder="Ex: Alvenaria, Fibra, etc."
              />
            </div>

            {/* Localização */}
            <div>
              <label htmlFor="localizacao" className="block text-sm font-medium text-gray-700 mb-2">
                Localização
              </label>
              <input
                type="text"
                id="localizacao"
                name="localizacao"
                value={formData.localizacao}
                onChange={handleChange}
                className="input-field"
                placeholder="Ex: Setor Norte, Bloco B"
              />
            </div>

            {/* Data Instalação */}
            <div>
              <label htmlFor="data_instalacao" className="block text-sm font-medium text-gray-700 mb-2">
                Data de Instalação
              </label>
              <input
                type="date"
                id="data_instalacao"
                name="data_instalacao"
                value={formData.data_instalacao}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            {/* Nível Água */}
            <div>
              <label htmlFor="nivel_agua_cm" className="block text-sm font-medium text-gray-700 mb-2">
                Nível de Água (cm)
              </label>
              <input
                type="number"
                id="nivel_agua_cm"
                name="nivel_agua_cm"
                value={formData.nivel_agua_cm}
                onChange={handleChange}
                min="0"
                step="1"
                className="input-field"
                placeholder="Ex: 150"
              />
            </div>
          </div>

          {/* Ativo */}
          <div className="mt-6">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="text-sm font-medium text-gray-700">Tanque ativo no sistema</span>
            </label>
            <p className="text-sm text-gray-500 mt-1">
              Desmarque para criar o tanque já desativado
            </p>
          </div>
        </div>

        {/* Dicas */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-sm font-medium text-blue-800">Dicas para cadastro</h3>
              <ul className="text-sm text-blue-700 mt-1 space-y-1">
                <li>• Use nomes descritivos para facilitar a identificação</li>
                <li>• O código interno é opcional, mas ajuda na organização</li>
                <li>• Tanques "Vazios" estão prontos para novos ciclos</li>
                <li>• Use "Manutenção" para tanques em reparo</li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}