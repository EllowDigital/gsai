
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { isWebGLSupported } from '@/utils/webglDetection';

// Optimized animated sphere component with proper Three.js handling
const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Object3D>(null);
  const clock = new THREE.Clock();

  useFrame(() => {
    if (!sphereRef.current) return;

    const elapsedTime = clock.getElapsedTime();
    
    // Gently rotate the sphere using manual lerp
    const lerpFactor = 0.05;
    sphereRef.current.rotation.y += (elapsedTime * 0.15 - sphereRef.current.rotation.y) * lerpFactor;
    sphereRef.current.rotation.x += (Math.sin(elapsedTime * 0.25) * 0.15 - sphereRef.current.rotation.x) * lerpFactor;

    // Pulse scale effect
    const scale = 1 + Math.sin(elapsedTime * 0.8) * 0.05;
    sphereRef.current.scale.set(scale, scale, scale);
  });

  // Fixed material props application to avoid "__r3f" error
  return (
    <Sphere args={[1, 64, 64]} ref={sphereRef}>
      <meshPhongMaterial
        color="#bd0000" 
        emissive="#470000" 
        emissiveIntensity={0.5} 
        shininess={30}
      />
    </Sphere>
  );
};

const GoldRing = () => {
  const ringRef = useRef<THREE.Object3D>(null);
  
  useFrame(({ clock }) => {
    if (!ringRef.current) return;
    const t = clock.getElapsedTime();
    ringRef.current.rotation.z = t * 0.1;
    ringRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
  });

  // Fixed material props to avoid "__r3f" error
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

// Optimized ThreeScene component with performance optimizations
const ThreeScene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#bd0000" />
      
      <AnimatedSphere />
      <GoldRing />
      
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  );
};

interface ThreePreloaderProps {
  progress?: number;
}

// Main ThreePreloader component with performance optimizations and better fallback
const ThreePreloader = ({ progress = 0 }: ThreePreloaderProps) => {
  // Memoize WebGL support check to avoid recalculation
  const [webglSupported] = useState(isWebGLSupported());
  
  // Optimized 2D fallback for devices without WebGL
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
            className="h-full bg-gradient-to-r from-gsai-red to-gsai-gold rounded-full transition-duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gsai-gold mt-2 text-sm">{Math.round(progress)}%</p>
      </div>
    );
  }

  // Optimized 3D preloader with WebGL
  return (
    <div className="fixed inset-0 z-50 bg-black">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="!touch-none"
        dpr={[1, 2]} // Optimize for device pixel ratio
        performance={{ min: 0.5 }} // Better performance management
      >
        <ThreeScene />
      </Canvas>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40">
        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gsai-red to-gsai-gold rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gsai-gold text-center mt-2">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default ThreePreloader;
