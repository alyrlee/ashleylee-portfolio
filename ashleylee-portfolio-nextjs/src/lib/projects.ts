export interface Project {
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

export const projects: Project[] = [
  {
    id: 'healthcare-data-pipeline',
    title: 'Healthcare Data Pipeline',
    role: 'Data Engineer • Azure Synapse, Data Factory, Power BI',
    technologies: ['Azure Synapse', 'Data Factory', 'Power BI', 'Python', 'PySpark'],
    achievements: [
      'Built comprehensive Azure-based data pipeline for healthcare analytics',
      'Implemented Bronze-Silver-Gold data architecture with automated ETL processes',
      'Created interactive Power BI dashboards for patient risk analysis and condition distribution'
    ],
    links: {
      github: 'https://github.com/alyrlee/healthcare-data-pipeline',
      liveDemo: 'https://github.com/alyrlee/healthcare-data-pipeline'
    }
  },
  {
    id: 'ai-engineer-challenge',
    title: 'The AI Engineer Challenge',
    role: 'AI Developer • OpenAI API, Next.js, Vercel',
    technologies: ['OpenAI API', 'Next.js', 'Vercel', 'React', 'TypeScript'],
    achievements: [
      'Built and deployed first LLM-powered application using OpenAI API',
      'Implemented AI-assisted development workflow with modern web technologies',
      'Created interactive AI application with real-time responses and user engagement'
    ],
    links: {
      github: 'https://github.com/alyrlee/The-AI-Engineer-Challenge',
      liveDemo: 'https://github.com/alyrlee/The-AI-Engineer-Challenge'
    }
  },
  {
    id: 'data-science-tools',
    title: 'Data Science Tools and Ecosystem',
    role: 'Data Scientist • Python, Jupyter, Machine Learning',
    technologies: ['Python', 'Jupyter', 'Pandas', 'NumPy', 'Scikit-learn'],
    achievements: [
      'Developed comprehensive data science toolkit and ecosystem',
      'Created reusable components for data analysis and machine learning workflows',
      'Built interactive notebooks and documentation for data science best practices'
    ],
    links: {
      github: 'https://github.com/alyrlee/Data-Science-Tools-and-Ecosystem'
    }
  },
  {
    id: 'bellabeat-analysis',
    title: 'Bellabeat Product Analysis',
    role: 'Data Analyst • R, Tableau, Statistical Analysis',
    technologies: ['R', 'Tableau', 'Statistical Analysis', 'Data Visualization'],
    achievements: [
      'Conducted comprehensive product analysis for Bellabeat fitness tracking devices',
      'Performed statistical analysis on user behavior and product usage patterns',
      'Created data-driven insights and recommendations for product optimization'
    ],
    links: {
      github: 'https://github.com/alyrlee/bellabeat-product-analysis'
    }
  },
  {
    id: 'snap-client',
    title: 'Snap Client Application',
    role: 'Full-Stack Developer • React, Node.js, API Integration',
    technologies: ['React', 'Node.js', 'JavaScript', 'API Integration'],
    achievements: [
      'Developed client-side application for Snap location services',
      'Implemented real-time location tracking and user interface components',
      'Built responsive web application with modern React patterns and state management'
    ],
    links: {
      github: 'https://github.com/alyrlee/snap-client'
    }
  },
  {
    id: 'snap-locator-api',
    title: 'Snap Locator API',
    role: 'Backend Developer • Node.js, Express, Database Design',
    technologies: ['Node.js', 'Express', 'Database Design', 'REST API'],
    achievements: [
      'Designed and implemented RESTful API for location-based services',
      'Built scalable backend architecture with proper error handling and validation',
      'Created comprehensive API documentation and testing suite'
    ],
    links: {
      github: 'https://github.com/alyrlee/snap_locator_api'
    }
  }
]
