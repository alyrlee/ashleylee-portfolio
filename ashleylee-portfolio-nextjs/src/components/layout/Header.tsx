import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import ThemeToggle from '@/components/ui/ThemeToggle'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
        {/* Logo */}
        <Link 
          href="#main-content" 
          className="font-semibold text-lg text-text hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
        >
          Ashley Lee-Vigneau
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-sm">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-text hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            href="/assets/img/Ashley_Lee-Vigneau_Resume-Sept.pdf"
            ariaLabel="Download Ashley's resume (PDF)"
            className="text-sm"
          >
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg hover:bg-surface-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </motion.svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface border-t border-border shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 text-sm text-text hover:bg-surface-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm text-text-light">Theme</span>
                <ThemeToggle />
              </div>
              
              <Button
                variant="outline"
                size="sm"
                href="/assets/img/Ashley_Lee-Vigneau_Resume-Sept.pdf"
                ariaLabel="Download Ashley's resume (PDF)"
                className="w-full text-center"
              >
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
