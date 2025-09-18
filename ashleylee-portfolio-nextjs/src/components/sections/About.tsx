import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  const skills = [
    'Product Management',
    'Healthcare Technology',
    'Data Platforms',
    'Azure DevOps',
    'Snowflake',
    'Databricks',
    'LaunchDarkly',
    'CI/CD',
    'Microservices',
    'Agile/Scrum',
    'SAFe',
    'User Research'
  ]

  const certifications = [
    'Certified Scrum Product Owner (CSPO)',
    'Certified Scrum Master (CSM)',
    'SAFe Product Owner/Product Manager (PO/PM)'
  ]

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-text mb-6">About</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Content */}
          <div>
            <p className="text-text mb-6 leading-relaxed">
              Healthcare PM with experience across platform modernization, data pipelines, and operations workflows. 
              Certified CSPO/CSM & SAFe PO/PM. Comfort with Snowflake, Databricks, Azure DevOps, LaunchDarkly.
            </p>
            
            <p className="text-text mb-6 leading-relaxed">
              I specialize in building systems that scale—from modernizing legacy platforms to implementing 
              real-time data pipelines. My approach combines technical depth with strategic thinking to deliver 
              solutions that move metrics and drive business value.
            </p>

            {/* Certifications */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text mb-3">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-text-light"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-4">Skills & Expertise</h3>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-surface border border-border rounded-lg px-3 py-2 text-sm text-text hover:bg-surface-light transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-accent rounded-xl border border-border"
        >
          <h3 className="text-lg font-semibold text-text mb-2">Let&apos;s Work Together</h3>
          <p className="text-text-light mb-4">
            I&apos;m always interested in new opportunities and collaborations. 
            Whether you&apos;re looking for a Product Manager or want to discuss a project, 
            I&apos;d love to hear from you.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            Get in touch
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
