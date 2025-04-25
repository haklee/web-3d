'use client';

import Link from 'next/link';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/${project.id}`}
      className="group block p-8 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-500/10 bg-white dark:bg-gray-800"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            {project.description}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {project.date}
          </span>
          <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </span>
        </div>
      </div>
    </Link>
  );
} 