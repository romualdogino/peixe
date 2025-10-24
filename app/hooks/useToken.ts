import { useState, useEffect } from 'react'

export function useToken() {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  const saveToken = (newToken: string) => {
    localStorage.setItem('token', newToken)
    setToken(newToken)
  }

  const removeToken = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  return {
    token,
    saveToken,
    removeToken,
    isAuthenticated: !!token,
  }
}