'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import * as THREE from 'three';

const fragmentShader = `
  uniform float time;
  
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / 1000.0;
    float r = random(st + time * 0.1);
    float g = random(st + time * 0.1 + 100.0);
    float b = random(st + time * 0.1 + 200.0);
    
    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;

function NoisePlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time = { value: state.clock.elapsedTime };
    }
  });

  return (
    <mesh scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 }
        }}
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas>
      <OrthographicCamera makeDefault position={[0, 0, 1]} zoom={50} />
      <NoisePlane />
    </Canvas>
  );
} 