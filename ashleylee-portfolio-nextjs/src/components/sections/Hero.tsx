import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/img/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-brand-700/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Product Manager for{' '}
              <span className="text-brand-300 bg-gradient-to-r from-brand-300 to-brand-100 bg-clip-text text-transparent">
                Healthcare & Data Platforms
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-200 max-w-2xl mb-8"
            >
              I build systems that scale—modernizing platforms, streamlining ops, and shipping features that move metrics.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                ariaLabel="View featured projects section"
                className="bg-brand-700 hover:bg-brand-600 text-white"
              >
                See Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#contact"
                ariaLabel="Go to contact section"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900"
              >
                Get in touch
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Headshot Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center md:justify-end mt-8 md:mt-0"
          >
            <div className="relative">
              <Image
                src="/assets/img/headshot.jpg"
                alt="Ashley Lee-Vigneau, Product Manager, professional headshot"
                width={288}
                height={288}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl object-cover shadow-2xl ring-4 ring-white/20"
                priority
              />
              <motion.div
                className="absolute inset-0 rounded-2xl ring-4 ring-white/20"
                animate={{ 
                  boxShadow: [
                    '0 0 0 0 rgba(60, 92, 255, 0.4)',
                    '0 0 0 10px rgba(60, 92, 255, 0)',
                    '0 0 0 0 rgba(60, 92, 255, 0)'
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
