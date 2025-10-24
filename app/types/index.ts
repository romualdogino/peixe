import { Role, TipoTanque, StatusTanque, Turno, MovTanqueTipo } from '../generated/prisma'

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  name: string
  email: string
  password: string
  role: Role
}

export interface UserResponse {
  id: string
  name: string
  email: string
  role: Role
  image?: string
  isActive: boolean
  createdAt?: Date
  lastLogin?: Date
}

// Types para filtros
export interface TanqueFilters {
  status?: StatusTanque
  tipo?: TipoTanque
  withCiclo?: boolean
}

export interface RegistroDiarioFilters {
  data?: string
  turno?: Turno
  tanqueId?: string
}

// Re-export Prisma enums
export { Role, TipoTanque, StatusTanque, Turno, MovTanqueTipo }