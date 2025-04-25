import Link from "next/link";
import { ReactNode } from "react";

interface ProjectPageProps {
  title: string;
  description: string;
  interactionGuide: string[];
  technologies: string[];
  type: string;
  date: string;
  children: ReactNode;
}

export default function ProjectPage({
  title,
  description,
  interactionGuide,
  technologies,
  type,
  date,
  children,
}: ProjectPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-5xl mx-auto px-8 py-16">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 mb-12 text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          Back to Projects
        </Link>
        
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2">
              {title}
            </h1>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 bg-white dark:bg-gray-800 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Project Content</h2>
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-xl mb-6 overflow-hidden">
              {children}
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                {description}
              </p>
              <h3 className="text-lg font-semibold mt-6 mb-3">Interaction Guide</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                {interactionGuide.map((guide, index) => (
                  <li key={index}>• {guide}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-3">Project Details</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Created: {date}</li>
                <li>Type: {type}</li>
              </ul>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-3">Technologies</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 