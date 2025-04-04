'use client';

import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import ExplodingSquare from './ExplodingSquare';

const GRID_SIZE = 6;
const SPACING = 1.2;

export default function Scene() {
  const squares = [];
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      const x = (col - (GRID_SIZE - 1) / 2) * SPACING;
      const y = (row - (GRID_SIZE - 1) / 2) * SPACING;
      squares.push(
        <ExplodingSquare
          key={`${row}-${col}`}
          position={[x, y, 0]}
          onClick={() => {}}
        />
      );
    }
  }

  return (
    <Canvas
      camera={{
        position: [3, 2, 3],
        fov: 50,
        near: 0.1,
        far: 1000,
      }}
      style={{ background: '#ffffff' }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Environment preset="city" />
      <group rotation={[-Math.PI / 6, Math.PI / 4, 0]}>
        {squares}
      </group>
    </Canvas>
  );
} 