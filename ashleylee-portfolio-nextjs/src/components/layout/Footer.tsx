import React from 'react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-light border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-text-light">
            © 2025 Ashley Lee-Vigneau. All rights reserved.
          </p>
          
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="mailto:ashleyloreal.lee@gmail.com"
              className="text-sm text-text-light hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              aria-label="Send email to Ashley"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/ashleylee-vigneau"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-light hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              aria-label="Visit Ashley's LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/alyrlee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-light hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              aria-label="Visit Ashley's GitHub profile"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
