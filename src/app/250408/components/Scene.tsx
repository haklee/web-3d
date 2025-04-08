'use client';

import { useState, useCallback } from 'react';
import { Canvas, ThreeEvent } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { convexHull } from './convexHull';

interface Point {
  x: number;
  y: number;
  z: number;
}

function generateRandomPoint(): Point {
  return {
    x: (Math.random() - 0.5) * 10,
    y: (Math.random() - 0.5) * 10,
    z: 0
  };
}

function Points({ points }: { points: Point[] }) {
  return (
    <>
      {points.map((point, index) => (
        <mesh key={index} position={[point.x, point.y, point.z]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#3B82F6" />
        </mesh>
      ))}
    </>
  );
}

function Hull({ points }: { points: Point[] }) {
  if (points.length < 3) return null;

  const hullPoints = convexHull(points);
  const geometry = new THREE.BufferGeometry();
  
  // Create line segments by connecting consecutive points
  const vertices: number[] = [];
  for (let i = 0; i < hullPoints.length; i++) {
    const current = hullPoints[i];
    const next = hullPoints[(i + 1) % hullPoints.length];
    
    // Add both points to create a line segment
    vertices.push(current.x, current.y, current.z);
    vertices.push(next.x, next.y, next.z);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  return (
    <lineSegments>
      <primitive object={geometry} />
      <lineBasicMaterial color="#10B981" linewidth={2} />
    </lineSegments>
  );
}

function SceneContent({ points, onAddPoint }: { points: Point[], onAddPoint: (point: Point) => void }) {
  const handleClick = useCallback((event: ThreeEvent<MouseEvent>) => {
    const { point } = event;
    onAddPoint({ x: point.x, y: point.y, z: 0 });
  }, [onAddPoint]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Points points={points} />
      <Hull points={points} />
      <mesh onClick={handleClick}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0} />
      </mesh>
      <OrbitControls />
    </>
  );
}

export default function Scene() {
  const [points, setPoints] = useState<Point[]>(() => 
    Array.from({ length: 7 }, generateRandomPoint)
  );

  const handleAddPoint = useCallback((point: Point) => {
    setPoints(prev => [...prev, point]);
  }, []);

  const handleReset = useCallback(() => {
    setPoints(Array.from({ length: 7 }, generateRandomPoint));
  }, []);

  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        style={{ background: '#ffffff' }}
      >
        <SceneContent points={points} onAddPoint={handleAddPoint} />
      </Canvas>
      <button
        onClick={handleReset}
        className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Reset
      </button>
    </div>
  );
} 