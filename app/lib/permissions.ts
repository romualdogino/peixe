import { Role } from '../types'

export const hasPermission = (userRole: Role, requiredRole: Role): boolean => {
  const roleHierarchy: Record<Role, number> = {
    OPERADOR: 1,
    VETERINARIO: 2,
    GESTOR: 3,
    ADMIN: 4,
  }

  return roleHierarchy[userRole] >= roleHierarchy[requiredRole]
}

export const canAccess = (userRole: Role, resource: string, action: string): boolean => {
  const permissions: Record<Role, Record<string, string[]>> = {
    OPERADOR: {
      tanques: ['read'],
      registros: ['create', 'read'],
      biometrias: ['read'],
    },
    VETERINARIO: {
      tanques: ['read'],
      registros: ['create', 'read'],
      biometrias: ['create', 'read', 'update'],
      saude: ['create', 'read', 'update'],
    },
    GESTOR: {
      tanques: ['create', 'read', 'update'],
      registros: ['create', 'read', 'update'],
      biometrias: ['create', 'read', 'update'],
      saude: ['create', 'read', 'update'],
      ciclos: ['create', 'read', 'update'],
      estoque: ['create', 'read', 'update'],
    },
    ADMIN: {
      '*': ['*'],
    },
  }

  const userPermissions = permissions[userRole]

  // Admin tem acesso total
  if (userRole === 'ADMIN') return true

  // Verificar permissões específicas
  if (userPermissions['*']?.includes('*')) return true

  const resourcePermissions = userPermissions[resource]
  if (!resourcePermissions) return false

  return resourcePermissions.includes('*') || resourcePermissions.includes(action)
}

export const getRoleLabel = (role: Role): string => {
  const labels: Record<Role, string> = {
    ADMIN: 'Administrador',
    GESTOR: 'Gestor',
    VETERINARIO: 'Veterinário',
    OPERADOR: 'Operador',
  }
  return labels[role]
}

export const getRoleColor = (role: Role): string => {
  const colors: Record<Role, string> = {
    ADMIN: 'bg-red-100 text-red-800',
    GESTOR: 'bg-blue-100 text-blue-800',
    VETERINARIO: 'bg-green-100 text-green-800',
    OPERADOR: 'bg-gray-100 text-gray-800',
  }
  return colors[role]
}