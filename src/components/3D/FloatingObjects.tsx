import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function FloatingSphere({ position, speed, theme }: { position: [number, number, number]; speed: number; theme: 'light' | 'dark' }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01;
      meshRef.current.rotation.y += speed * 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color={theme === 'dark' ? '#3b82f6' : '#2563eb'}
        emissive={theme === 'dark' ? '#1e40af' : '#3b82f6'}
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function FloatingCube({ position, speed, theme }: { position: [number, number, number]; speed: number; theme: 'light' | 'dark' }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01;
      meshRef.current.rotation.y += speed * 0.01;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.6, 0.6, 0.6]} />
      <meshStandardMaterial
        color={theme === 'dark' ? '#9333ea' : '#a855f7'}
        emissive={theme === 'dark' ? '#6b21a8' : '#9333ea'}
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function FloatingTorus({ position, speed, theme }: { position: [number, number, number]; speed: number; theme: 'light' | 'dark' }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01;
      meshRef.current.rotation.z += speed * 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.7) * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.4, 0.2, 16, 100]} />
      <meshStandardMaterial
        color={theme === 'dark' ? '#10b981' : '#059669'}
        emissive={theme === 'dark' ? '#047857' : '#10b981'}
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function FloatingObjects({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <FloatingSphere position={[-3, 0, -2]} speed={0.5} theme={theme} />
      <FloatingSphere position={[3, 1, -3]} speed={0.7} theme={theme} />
      <FloatingCube position={[-1, -1, -1]} speed={0.6} theme={theme} />
      <FloatingCube position={[2, 0, -2]} speed={0.4} theme={theme} />
      <FloatingTorus position={[0, 1, -1]} speed={0.8} theme={theme} />
      <FloatingTorus position={[-2, -0.5, -3]} speed={0.5} theme={theme} />
    </>
  );
}

