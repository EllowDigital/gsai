
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { isWebGLSupported } from '@/utils/webglDetection';

interface ThreePreloaderProps {
  progress?: number;
}

// Animated red sphere with pulse and rotation
const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Object3D>(null);

  useFrame(({ clock }) => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    const elapsedTime = clock.getElapsedTime();
    const lerpFactor = 0.05;

    // Smooth rotation
    sphere.rotation.y += (elapsedTime * 0.15 - sphere.rotation.y) * lerpFactor;
    sphere.rotation.x += (Math.sin(elapsedTime * 0.25) * 0.15 - sphere.rotation.x) * lerpFactor;

    // Pulse effect
    const scale = 1 + Math.sin(elapsedTime * 0.8) * 0.05;
    sphere.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial 
        color="#bd0000"
        emissive="#470000"
        emissiveIntensity={0.5}
        shininess={30}
      />
    </mesh>
  );
};

// Rotating gold torus ring
const GoldRing = () => {
  const ringRef = useRef<THREE.Object3D>(null);

  useFrame(({ clock }) => {
    if (!ringRef.current) return;
    const t = clock.getElapsedTime();
    ringRef.current.rotation.z = t * 0.1;
    ringRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
  });

  return (
    <mesh ref={ringRef} rotation={[0, 0, 0]} position={[0, 0, 0]}>
      <torusGeometry args={[1.8, 0.1, 16, 64]} />
      <meshStandardMaterial 
        color="#d4af37"
        metalness={0.9}
        roughness={0.2}
      />
    </mesh>
  );
};

// 3D scene
const ThreeScene = () => (
  <>
    <ambientLight intensity={0.4} />
    <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
    <pointLight position={[-5, -5, -5]} intensity={0.5} color="#bd0000" />
    
    <AnimatedSphere />
    <GoldRing />
    
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
  </>
);

// Main preloader component
const ThreePreloader = ({ progress = 0 }: ThreePreloaderProps) => {
  const [webglSupported] = useState(isWebGLSupported());

  if (!webglSupported) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
        <div className="h-20 w-20 animate-pulse">
          <img
            src="/images/logo.png"
            alt="GSAI Logo"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="mt-6 w-40 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gsai-red to-gsai-gold rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-gsai-gold mt-2 text-sm">{Math.round(progress)}%</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="!touch-none"
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ThreeScene />
      </Canvas>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40">
        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gsai-red to-gsai-gold rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-gsai-gold text-center mt-2">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default ThreePreloader;
