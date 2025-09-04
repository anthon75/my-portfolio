export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  codeUrl?: string
}

export interface ProjectsProps {
  title?: string
  subtitle?: string
  projects: Project[]
  showViewAllButton?: boolean
  onViewAll?: () => void
  className?: string
}
