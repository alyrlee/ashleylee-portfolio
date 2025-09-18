'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Theme, applyTheme, getStoredTheme, storeTheme } from '@/lib/theme'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const storedTheme = getStoredTheme()
    setThemeState(storedTheme)
    applyTheme(storedTheme)
    setMounted(true)
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    applyTheme(newTheme)
    storeTheme(newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-white">{children}</div>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
