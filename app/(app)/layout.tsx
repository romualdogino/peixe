import AuthProvider from '@/app/contexts/AuthContext'
import AuthGuard from '@/components/auth/AuthGuard'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <AuthGuard requireAuth={false}>
        {children}
      </AuthGuard>
    </AuthProvider>
  )
}