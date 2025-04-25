export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  technologies: string[];
  features?: string[];
  content?: string;
}

export interface ProjectPageProps {
  project: Project;
} 