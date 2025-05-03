'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { Suspense, useEffect, useState, useCallback, useRef } from 'react';
import { Vector3, Euler, Mesh } from 'three';

const GalleryImage = ({ position, imageUrl, onLoad, onClick }: { 
  position: [number, number, number], 
  imageUrl: string, 
  onLoad: () => void,
  onClick: () => void 
}) => {
  const texture = useTexture(imageUrl);
  const meshRef = useRef<Mesh>(null);
  
  useEffect(() => {
    if (texture) {
      onLoad();
    }
  }, [texture, onLoad]);

  return (
    <mesh 
      ref={meshRef}
      position={position}
      onClick={onClick}
    >
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const GalleryContent = ({ onAllImagesLoaded }: { onAllImagesLoaded: () => void }) => {
  const [images, setImages] = useState<string[]>([]);
  const [loadedImages, setLoadedImages] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { camera } = useThree();
  const originalCameraPosition = useRef<Vector3>(new Vector3(0, 0, 10));
  const originalCameraRotation = useRef<Euler>(new Euler(0, 0, 0));

  useEffect(() => {
    // Using Lorem Picsum for random images
    const imageUrls = [
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=4',
      'https://picsum.photos/800/600?random=5',
      'https://picsum.photos/800/600?random=6'
    ];
    setImages(imageUrls);
  }, []);

  const handleImageLoad = useCallback(() => {
    setLoadedImages(prev => {
      const newCount = prev + 1;
      if (newCount === images.length) {
        onAllImagesLoaded();
      }
      return newCount;
    });
  }, [images.length, onAllImagesLoaded]);

  const handleImageClick = useCallback((index: number) => {
    if (selectedImage === index) {
      // Zoom out
      camera.position.copy(originalCameraPosition.current);
      camera.rotation.copy(originalCameraRotation.current);
      setSelectedImage(null);
    } else {
      // Zoom in
      if (selectedImage === null) {
        originalCameraPosition.current.copy(camera.position);
        originalCameraRotation.current.copy(camera.rotation);
      }
      const row = Math.floor(index / 3);
      const col = index % 3;
      const targetPosition = new Vector3(
        col * 2.5 - 2.5,
        row * -2.5 + 2.5,
        2
      );
      camera.position.lerp(targetPosition, 0.5);
      camera.lookAt(targetPosition);
      setSelectedImage(index);
    }
  }, [camera, selectedImage]);

  if (images.length === 0) {
    return null;
  }

  return (
    <group>
      {images.map((image, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        return (
          <GalleryImage
            key={index}
            position={[col * 2.5 - 2.5, row * -2.5 + 2.5, 0]}
            imageUrl={image}
            onLoad={handleImageLoad}
            onClick={() => handleImageClick(index)}
          />
        );
      })}
    </group>
  );
};

const Scene = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleAllImagesLoaded = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="w-full h-screen relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="text-white">Loading images...</div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="text-red-500">{error}</div>
        </div>
      )}
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <GalleryContent onAllImagesLoaded={handleAllImagesLoaded} />
          <OrbitControls 
            enableZoom={true} 
            enablePan={true}
            minDistance={2}
            maxDistance={20}
          />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
