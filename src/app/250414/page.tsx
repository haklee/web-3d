'use client';

import Link from "next/link";
import Scene from "./components/Scene";

export default function Project250414() {
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
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Project 250414
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              A 3D web project created on April 14, 2025
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 bg-white dark:bg-gray-800 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Project Content</h2>
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-xl mb-6 overflow-hidden">
              <Scene />
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                This interactive 3D scene demonstrates a dice implementation using React Three Fiber and Drei&apos;s MeshPortalMaterial. Each face of the dice is rendered with a different number of dots (1-6) using MeshPortalMaterial for a unique visual effect. The dice can be rotated and zoomed, and each face changes color when hovered over.
              </p>
              <h3 className="text-lg font-semibold mt-6 mb-3">Interaction Guide</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Click and drag to rotate the dice</li>
                <li>• Scroll to zoom in/out</li>
                <li>• Hover over faces to see the color change effect</li>
                <li>• Each face uses MeshPortalMaterial for a unique visual effect</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-3">Project Details</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Created: April 14, 2025</li>
                <li>Type: 3D Web Experience</li>
                <li>Status: Complete</li>
              </ul>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-3">Technologies</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Next.js</li>
                <li>Three.js</li>
                <li>React Three Fiber</li>
                <li>Drei (MeshPortalMaterial)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 