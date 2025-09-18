export type Theme = 'light' | 'dark'

export interface ThemeColors {
  primary: string
  'primary-light': string
  'primary-dark': string
  secondary: string
  'secondary-light': string
  'secondary-dark': string
  background: string
  'background-light': string
  'background-dark': string
  text: string
  'text-light': string
  'text-dark': string
  accent: string
  'accent-light': string
  'accent-dark': string
  surface: string
  'surface-light': string
  'surface-dark': string
  border: string
  'border-light': string
  'border-dark': string
}

export const lightTheme: ThemeColors = {
  primary: '#2238cc',
  'primary-light': '#3c5cff',
  'primary-dark': '#1a2d99',
  secondary: '#3c5cff',
  'secondary-light': '#6699ff',
  'secondary-dark': '#2238cc',
  background: '#ffffff',
  'background-light': '#f8fafc',
  'background-dark': '#f1f5f9',
  text: '#1e293b',
  'text-light': '#64748b',
  'text-dark': '#0f172a',
  accent: '#f5f8ff',
  'accent-light': '#ffffff',
  'accent-dark': '#e6efff',
  surface: '#ffffff',
  'surface-light': '#f8fafc',
  'surface-dark': '#f1f5f9',
  border: '#e2e8f0',
  'border-light': '#f1f5f9',
  'border-dark': '#cbd5e1',
}

export const darkTheme: ThemeColors = {
  primary: '#3c5cff',
  'primary-light': '#6699ff',
  'primary-dark': '#2238cc',
  secondary: '#2238cc',
  'secondary-light': '#3c5cff',
  'secondary-dark': '#1a2d99',
  background: '#0f172a',
  'background-light': '#1e293b',
  'background-dark': '#0a0f33',
  text: '#f1f5f9',
  'text-light': '#cbd5e1',
  'text-dark': '#ffffff',
  accent: '#1e293b',
  'accent-light': '#334155',
  'accent-dark': '#0f172a',
  surface: '#1e293b',
  'surface-light': '#334155',
  'surface-dark': '#0f172a',
  border: '#334155',
  'border-light': '#475569',
  'border-dark': '#1e293b',
}

export const applyTheme = (theme: Theme) => {
  const colors = theme === 'light' ? lightTheme : darkTheme
  
  Object.entries(colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--color-${key}`, value)
  })
  
  document.documentElement.setAttribute('data-theme', theme)
}

export const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light'
  
  const stored = localStorage.getItem('theme') as Theme
  return stored || 'light'
}

export const storeTheme = (theme: Theme) => {
  if (typeof window === 'undefined') return
  localStorage.setItem('theme', theme)
}
