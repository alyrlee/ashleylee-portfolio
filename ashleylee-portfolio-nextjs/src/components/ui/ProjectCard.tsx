import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

interface Project {
  id: string
  title: string
  role: string
  technologies: string[]
  achievements: string[]
  links: {
    caseStudy?: string
    slides?: string
    liveDemo?: string
    github?: string
  }
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { title, role, technologies, achievements, links } = project
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className="bg-surface border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 group"
    >
      {/* Header */}
      <header className="mb-4">
        <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-light">
          {role}
        </p>
      </header>

      {/* Achievements */}
      <ul className="space-y-2 mb-4" role="list">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start">
            <span 
              className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2 mr-3" 
              aria-hidden="true"
            />
            <span className="text-text text-sm">
              {achievement}
            </span>
          </li>
        ))}
      </ul>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
              idx === 0 
                ? 'bg-primary/10 text-primary border border-primary/20' 
                : 'bg-surface-light text-text border border-border'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Links */}
      <footer className="flex flex-wrap gap-3">
        {links.caseStudy && (
          <Button
            variant="ghost"
            size="sm"
            href={links.caseStudy}
            ariaLabel={`View case study for ${title}`}
            className="text-sm"
          >
            Case study
          </Button>
        )}
        {links.slides && (
          <Button
            variant="ghost"
            size="sm"
            href={links.slides}
            ariaLabel={`View slides for ${title}`}
            className="text-sm"
          >
            Slides
          </Button>
        )}
        {links.liveDemo && (
          <Button
            variant="ghost"
            size="sm"
            href={links.liveDemo}
            ariaLabel={`View live demo for ${title}`}
            className="text-sm"
          >
            Live demo
          </Button>
        )}
        {links.github && (
          <Button
            variant="ghost"
            size="sm"
            href={links.github}
            ariaLabel={`View GitHub repository for ${title}`}
            className="text-sm"
          >
            GitHub
          </Button>
        )}
      </footer>
    </motion.article>
  )
}

export default ProjectCard
