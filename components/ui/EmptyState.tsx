// app/components/ui/EmptyState.tsx
import { AlertTriangle, Info, CheckCircle } from 'lucide-react'

interface EmptyStateProps {
  title: string
  description: string
  icon?: 'alert' | 'info' | 'success'
  action?: React.ReactNode
}

export function EmptyState({ title, description, icon = 'info', action }: EmptyStateProps) {
  const icons = {
    alert: <AlertTriangle className="h-12 w-12 text-yellow-500" />,
    info: <Info className="h-12 w-12 text-blue-500" />,
    success: <CheckCircle className="h-12 w-12 text-green-500" />
  }

  return (
    <div className="text-center p-8">
      <div className="mx-auto mb-4">
        {icons[icon]}
      </div>
      <h3 className="text-sm font-medium text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      {action && (
        <div className="mt-4">
          {action}
        </div>
      )}
    </div>
  )
}