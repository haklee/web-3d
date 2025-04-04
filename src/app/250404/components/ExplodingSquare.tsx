'use client';

import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const COLORS = [
  '#3B82F6', // bright blue
  '#10B981', // emerald green
  '#F59E0B', // amber
  '#EF4444', // red
  '#8B5CF6', // violet
  '#EC4899', // pink
  '#06B6D4', // cyan
  '#22C55E', // green
  '#F97316', // orange
  '#D946EF', // fuchsia
];

interface ExplodingSquareProps {
  position: [number, number, number];
  onClick: () => void;
}

export default function ExplodingSquare({ position, onClick }: ExplodingSquareProps) {
  const meshRef = useRef<Mesh>(null);
  const [isExploding, setIsExploding] = useState(false);
  const [scale, setScale] = useState(1);
  const [color, setColor] = useState(COLORS[Math.floor(Math.random() * COLORS.length)]);
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    if (!isExploding) {
      setIsExploding(true);
      onClick();
    }
  };

  useFrame((_, delta) => {
    if (isExploding && meshRef.current) {
      setScale((prev) => {
        const newScale = prev + delta * 5;
        if (newScale > 3) {
          setIsVisible(false);
          return 1;
        }
        return newScale;
      });
    }
  });

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsExploding(false);
        setScale(1);
        setColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      onClick={handleClick}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={color}
        transparent
        opacity={isExploding ? 1 - (scale - 1) / 2 : 1}
      />
    </mesh>
  );
} 