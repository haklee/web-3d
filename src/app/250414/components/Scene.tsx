'use client';

import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshPortalMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FACE_COLORS = {
  1: '#FF6B6B', // Coral Red
  2: '#4ECDC4', // Turquoise
  3: '#45B7D1', // Sky Blue
  4: '#96CEB4', // Sage Green
  5: '#FFEEAD', // Cream
  6: '#D4A5A5', // Dusty Rose
};

function Dot({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
}

function PortalScene({ children, bg = '#f0f0f0' }: { children?: React.ReactNode; bg?: string }) {
  return (
    <>
      <color attach="background" args={[bg]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {children}
    </>
  );
}

function DiceFace({ number, rotation, position }: { number: number; rotation: [number, number, number]; position: [number, number, number] }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.1;
    }
  });

  const dots = useMemo(() => {
    const positions: [number, number, number][] = [];
    switch (number) {
      case 1:
        positions.push([0, 0, 0.51]);
        break;
      case 2:
        positions.push([-0.3, 0.3, 0.51], [0.3, -0.3, 0.51]);
        break;
      case 3:
        positions.push([-0.3, 0.3, 0.51], [0, 0, 0.51], [0.3, -0.3, 0.51]);
        break;
      case 4:
        positions.push([-0.3, 0.3, 0.51], [0.3, 0.3, 0.51], [-0.3, -0.3, 0.51], [0.3, -0.3, 0.51]);
        break;
      case 5:
        positions.push([-0.3, 0.3, 0.51], [0.3, 0.3, 0.51], [0, 0, 0.51], [-0.3, -0.3, 0.51], [0.3, -0.3, 0.51]);
        break;
      case 6:
        positions.push([-0.3, 0.3, 0.51], [0.3, 0.3, 0.51], [-0.3, 0, 0.51], [0.3, 0, 0.51], [-0.3, -0.3, 0.51], [0.3, -0.3, 0.51]);
        break;
    }
    return positions;
  }, [number]);

  return (
    <group rotation={rotation} position={position}>
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1, 1, 0.1]} />
        <MeshPortalMaterial resolution={256} blur={0.1}>
          <PortalScene bg={hovered ? '#3B82F6' : FACE_COLORS[number as keyof typeof FACE_COLORS]}>
            {dots.map((pos: [number, number, number], i: number) => (
              <Dot key={i} position={pos} />
            ))}
          </PortalScene>
        </MeshPortalMaterial>
      </mesh>
    </group>
  );
}

function Dice() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <DiceFace number={1} rotation={[0, 0, 0]} position={[0, 0, -0.5]} />
      <DiceFace number={2} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.5, 0]} />
      <DiceFace number={3} rotation={[0, Math.PI / 2, 0]} position={[-0.5, 0, 0]} />
      <DiceFace number={4} rotation={[0, -Math.PI / 2, 0]} position={[0.5, 0, 0]} />
      <DiceFace number={5} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} />
      <DiceFace number={6} rotation={[Math.PI, 0, 0]} position={[0, 0, 0.5]} />
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Dice />
      <OrbitControls enableZoom={true} enablePan={false} />
    </Canvas>
  );
} 