
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// 3D Logo component with rotation animation
const LogoModel = ({ scale = 1.5, rotation = [0, 0, 0] }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Rotate the logo smoothly
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        hovered ? state.clock.elapsedTime * 0.05 % (Math.PI * 2) : 0,
        0.1
      );
    }
  });

  // Create a fallback sphere when no logo model is available
  return (
    <group
      ref={meshRef}
      scale={[scale, scale, scale]}
      rotation={rotation as [number, number, number]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Fallback sphere with GSAI colors */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color={hovered ? "#ff4500" : "#ff0000"}
          roughness={0.2}
          metalness={0.8}
          emissive={hovered ? "#ff4500" : "#330000"}
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Additional ornaments */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <torusGeometry args={[1.5, 0.2, 16, 100]} />
        <meshStandardMaterial color="#ffcc00" metalness={1} roughness={0.3} />
      </mesh>
    </group>
  );
};

// Sparkle effect background
const Background = () => (
  <Sparkles 
    count={100}
    size={6}
    scale={12}
    speed={0.3}
    color="#ffcc00"
    opacity={0.5}
  />
);

// Main ThreePreloader component
const ThreePreloader = ({ progress = 0 }) => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#000']} />
        
        {/* Lighting setup */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff0000" />
        
        {/* 3D elements */}
        <LogoModel />
        <Background />
        <Environment preset="city" />
        
        {/* Controls (disabled for production) */}
        {process.env.NODE_ENV === 'development' && (
          <OrbitControls enableZoom={false} enablePan={false} />
        )}
      </Canvas>
      
      {/* Loading progress overlay */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center">
        <div className="w-64 h-1 bg-black/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gsai-red to-gsai-gold transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-white text-sm mt-2 font-medium">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default ThreePreloader;
