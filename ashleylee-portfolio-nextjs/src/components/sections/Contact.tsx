import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const Contact: React.FC = () => {
  const contactMethods = [
    {
      name: 'Email',
      href: 'mailto:ashleyloreal.lee@gmail.com',
      description: 'Send me an email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ashleylee-vigneau',
      description: 'Connect on LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com/alyrlee',
      description: 'View my code',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="bg-surface-light border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-text mb-4">Contact</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology and product management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.href}
              target={method.name !== 'Email' ? '_blank' : undefined}
              rel={method.name !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                  {method.name}
                </h3>
                <p className="text-text-light text-sm">
                  {method.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-accent border border-border rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-text mb-2">Quick Response</h3>
            <p className="text-text-light mb-4">
              I typically respond to emails within 24 hours. For urgent matters, 
              feel free to reach out on LinkedIn.
            </p>
            <Button
              variant="primary"
              href="mailto:ashleyloreal.lee@gmail.com"
              ariaLabel="Send email to Ashley"
            >
              Send Email
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
