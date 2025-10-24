import AuthProvider from '@/app/contexts/AuthContext'
import AuthGuard from '../../components/auth/AuthGuard'
import DashboardLayout from '../../components/layout/DashboardLayout'

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <AuthGuard>
        <DashboardLayout>
          {children}
        </DashboardLayout>
      </AuthGuard>
    </AuthProvider>
  )
}