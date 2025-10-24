class ApiClient {
  private getToken(): string | null {
    if (typeof window === 'undefined') return null
    
    // Tentar obter token do cookie primeiro
    const getCookie = (name: string): string | null => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop()?.split(';').shift() || null
      return null
    }

    return getCookie('token') || localStorage.getItem('token')
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const token = this.getToken()

    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    }

    const response = await fetch(`/api${endpoint}`, config)

    if (response.status === 401) {
      // Token inválido, limpar e redirecionar
      this.clearAuth()
      window.location.href = '/login'
      throw new Error('Token inválido')
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  }

  private clearAuth() {
    localStorage.removeItem('token')
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  }

  // Métodos específicos
  async getDashboard() {
    return this.request('/dashboard')
  }

  async getTanques() {
    return this.request('/tanques')
  }

  // ... outros métodos
}

export const apiClient = new ApiClient()