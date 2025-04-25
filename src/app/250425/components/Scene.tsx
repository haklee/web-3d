'use client';

import { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const GRID_SIZE = 30;
const CELL_SIZE = 1;
const UPDATE_INTERVAL = 0.1; // seconds

interface GameOfLifeRef {
  play: () => void;
  pause: () => void;
  reset: () => void;
  clear: () => void;
}

const GameOfLife = forwardRef<GameOfLifeRef>((props, ref) => {
  const [grid, setGrid] = useState<number[]>(() => {
    const initialGrid = new Array(GRID_SIZE * GRID_SIZE).fill(0);
    for (let i = 0; i < initialGrid.length; i++) {
      initialGrid[i] = Math.random() > 0.7 ? 1 : 0;
    }
    return initialGrid;
  });

  const [isRunning, setIsRunning] = useState(true);
  const timeRef = useRef(0);

  useImperativeHandle(ref, () => ({
    play: () => setIsRunning(true),
    pause: () => setIsRunning(false),
    reset: () => {
      const newGrid = new Array(GRID_SIZE * GRID_SIZE).fill(0);
      for (let i = 0; i < newGrid.length; i++) {
        newGrid[i] = Math.random() > 0.7 ? 1 : 0;
      }
      setGrid(newGrid);
    },
    clear: () => setGrid(new Array(GRID_SIZE * GRID_SIZE).fill(0))
  }));

  useFrame((state, delta) => {
    if (!isRunning) return;
    
    timeRef.current += delta;
    if (timeRef.current >= UPDATE_INTERVAL) {
      timeRef.current = 0;
      updateGrid();
    }
  });

  const updateGrid = () => {
    setGrid(prevGrid => {
      const newGrid = [...prevGrid];
      for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
          const index = y * GRID_SIZE + x;
          const neighbors = countNeighbors(prevGrid, x, y);
          const cell = prevGrid[index];

          if (cell === 1 && (neighbors < 2 || neighbors > 3)) {
            newGrid[index] = 0;
          } else if (cell === 0 && neighbors === 3) {
            newGrid[index] = 1;
          }
        }
      }
      return newGrid;
    });
  };

  const countNeighbors = (grid: number[], x: number, y: number) => {
    let count = 0;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0) continue;
        const nx = (x + dx + GRID_SIZE) % GRID_SIZE;
        const ny = (y + dy + GRID_SIZE) % GRID_SIZE;
        count += grid[ny * GRID_SIZE + nx];
      }
    }
    return count;
  };

  const toggleCell = (x: number, y: number) => {
    setGrid(prevGrid => {
      const newGrid = [...prevGrid];
      const index = y * GRID_SIZE + x;
      newGrid[index] = prevGrid[index] === 1 ? 0 : 1;
      return newGrid;
    });
  };

  return (
    <group>
      {grid.map((cell, index) => {
        const x = (index % GRID_SIZE) - GRID_SIZE / 2;
        const z = Math.floor(index / GRID_SIZE) - GRID_SIZE / 2;
        return (
          <mesh
            key={index}
            position={[x * CELL_SIZE, 0, z * CELL_SIZE]}
            onClick={() => toggleCell(index % GRID_SIZE, Math.floor(index / GRID_SIZE))}
          >
            <boxGeometry args={[CELL_SIZE * 0.9, CELL_SIZE * 0.9, CELL_SIZE * 0.9]} />
            <meshStandardMaterial
              color={cell === 1 ? '#ffffff' : '#1f2937'}
              metalness={0.5}
              roughness={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
});

GameOfLife.displayName = 'GameOfLife';

export default function Scene() {
  const gameRef = useRef<GameOfLifeRef>(null);

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          onClick={() => gameRef.current?.play()}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Play
        </button>
        <button
          onClick={() => gameRef.current?.pause()}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Pause
        </button>
        <button
          onClick={() => gameRef.current?.reset()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Reset
        </button>
        <button
          onClick={() => gameRef.current?.clear()}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Clear
        </button>
      </div>
      <Canvas
        orthographic
        camera={{
          position: [0, 50, 0],
          zoom: 10,
          near: 0.1,
          far: 1000,
        }}
        style={{ background: '#0f172a' }}
      >
        <ambientLight intensity={5} />
        <GameOfLife ref={gameRef} />
        <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}