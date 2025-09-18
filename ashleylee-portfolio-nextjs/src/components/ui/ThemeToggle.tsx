import React from 'react'
import dynamic from 'next/dynamic'

const ThemeToggleClient = dynamic(() => import('./ThemeToggleClient'), {
  ssr: false,
  loading: () => (
    <div className="p-2 rounded-lg w-10 h-10">
      <div className="w-6 h-6 bg-gray-300 rounded animate-pulse" />
    </div>
  )
})

const ThemeToggle: React.FC = () => {
  return <ThemeToggleClient />
}

export default ThemeToggle