'use client';

import { useState, useCallback, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

interface Point {
  x: number;
  y: number;
}

// Halton sequence generator
function halton(index: number, base: number): number {
  let result = 0;
  let f = 1 / base;
  let i = index;
  while (i > 0) {
    result += f * (i % base);
    i = Math.floor(i / base);
    f /= base;
  }
  return result;
}

function generateHaltonPoints(count: number, seed: number): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < count; i++) {
    points.push({
      x: halton(i + seed, 2) * 2 - 1, // Scale to [-1, 1]
      y: halton(i + seed, 3) * 2 - 1  // Scale to [-1, 1]
    });
  }
  return points;
}

function Points({ points }: { points: Point[] }) {
  return (
    <>
      {points.map((point, index) => (
        <mesh key={index} position={[point.x * 5, point.y * 5, 0]}>
          <circleGeometry args={[0.1, 32]} />
          <meshBasicMaterial color="#3B82F6" />
        </mesh>
      ))}
    </>
  );
}

function SceneContent({ points }: { points: Point[] }) {
  return (
    <>
      <Points points={points} />
      <gridHelper args={[10, 10]} />
    </>
  );
}

export default function Scene() {
  const [pointCount, setPointCount] = useState(100);
  const [seed, setSeed] = useState(0);

  const points = useMemo(() => 
    generateHaltonPoints(pointCount, seed),
    [pointCount, seed]
  );

  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: '#ffffff' }}
      >
        <SceneContent points={points} />
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-4 p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Number of Points: {pointCount}
          </label>
          <input
            type="range"
            min="10"
            max="1000"
            value={pointCount}
            onChange={(e) => setPointCount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Random Seed: {seed}
          </label>
          <input
            type="number"
            min="0"
            max="1000"
            value={seed}
            onChange={(e) => setSeed(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
} 