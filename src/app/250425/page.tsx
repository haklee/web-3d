"use client";

import Link from "next/link";
import Scene from "./components/Scene";

export default function Project250425() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-5xl mx-auto px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-12 text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          Back to Projects
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Project 250425
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Conway&apos;s Game of Life in 3D
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 bg-white dark:bg-gray-800 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Project Content</h2>
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-xl mb-6 overflow-hidden">
              <Scene />
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                This interactive 3D implementation of Conway&apos;s Game of Life
                features a 30x30 grid where each cell is represented as a cube.
                Living cells glow white against a dark background, creating a
                mesmerizing cellular automaton simulation. The game follows the
                classic rules of Conway&apos;s Game of Life, where cells live,
                die, or are born based on their neighbors.
              </p>
              <h3 className="text-lg font-semibold mt-6 mb-3">Features</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Interactive 3D grid with orthographic view</li>
                <li>
                  • Click cells to toggle them between alive (white) and dead
                  (dark)
                </li>
                <li>• Play/Pause controls to control the simulation</li>
                <li>• Reset to generate a new random pattern</li>
                <li>• Clear to start with an empty grid</li>
                <li>• Smooth animation with optimized rendering</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-3">Project Details</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Created: April 25, 2025</li>
                <li>Type: Cellular Automaton</li>
                <li>Status: Complete</li>
              </ul>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold mb-3">Technologies</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Next.js</li>
                <li>Three.js</li>
                <li>React Three Fiber</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
