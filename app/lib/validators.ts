import { TipoTanque, StatusTanque, Turno, Role, MovTanqueTipo } from '../types'

export class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

export const validateEnum = <T extends string>(value: string, enumObject: any, fieldName: string): T => {
  if (!Object.values(enumObject).includes(value)) {
    throw new ValidationError(`${fieldName} inválido: ${value}`)
  }
  return value as T
}

export const validateTanqueFilters = (filters: any) => {
  const validated: any = {}
  
  if (filters.status) {
    validated.status = validateEnum<StatusTanque>(filters.status, StatusTanque, 'Status')
  }
  
  if (filters.tipo) {
    validated.tipo = validateEnum<TipoTanque>(filters.tipo, TipoTanque, 'Tipo')
  }
  
  return validated
}

export const validateTurno = (turno: string): Turno => {
  return validateEnum<Turno>(turno, Turno, 'Turno')
}

export const validateRole = (role: string): Role => {
  return validateEnum<Role>(role, Role, 'Role')
}

export const validateMovTanqueTipo = (tipo: string): MovTanqueTipo => {
  return validateEnum<MovTanqueTipo>(tipo, MovTanqueTipo, 'Tipo de movimentação')
}