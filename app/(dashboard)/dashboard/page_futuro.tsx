// app/(dashboard)/dashboard/page.tsx
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { MetricsGrid } from '@/components/dashboard/MetricsGrid'
import { ChartsSection } from '@/components/dashboard/ChartsSection'
import { AlertsSection } from '@/components/dashboard/AlertsSection'
import { QuickActions } from '@/components/dashboard/QuickActions'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      <DashboardHeader />
      <MetricsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartsSection />
        </div>
        <div>
          <AlertsSection />
        </div>
      </div>
      <QuickActions />
    </div>
  )
}