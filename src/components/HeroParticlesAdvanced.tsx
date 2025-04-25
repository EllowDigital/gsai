
import { useRef, useEffect, RefObject } from 'react';
import * as THREE from 'three';

interface ParticleProps {
  parentRef: RefObject<HTMLDivElement>;
  count?: number;
  size?: number;
  color?: string;
  speed?: number;
  density?: number;
}

const HeroParticlesAdvanced = ({
  parentRef,
  count = 3000,
  size = 0.02,
  color = '#ffffff',
  speed = 0.05,
  density = 0.8,
}: ParticleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const frameIdRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup THREE.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
<<<<<<< HEAD
    const count = 500;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorOptions = [
      new THREE.Color('#ff0000'), // Red
      new THREE.Color('#ffcc00'), // Gold
      new THREE.Color('#ffffff'), // White
    ];

    for (let i = 0; i < count * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      // Color
      const colorIndex = Math.floor(Math.random() * colorOptions.length);
      const color = colorOptions[colorIndex];
      
      // This is the fix for the TypeScript error - convert Color to individual components
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
=======
    const particleCount = count;
    
    const posArray = new Float32Array(particleCount * 3);
    const scaleArray = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position particles in a sphere
      const x = (Math.random() - 0.5) * 5;
      const y = (Math.random() - 0.5) * 5;
      const z = (Math.random() - 0.5) * 5;
      posArray[i] = x;
      posArray[i + 1] = y;
      posArray[i + 2] = z;
      scaleArray[i / 3] = Math.random();
>>>>>>> parent of 3785fdc (Refactor: Optimize website for SEO, performance, and accessibility)
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
    
    // Create material
    const particlesMaterial = new THREE.PointsMaterial({
      size: size,
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // Create points object
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    pointsRef.current = particles;

    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      if (pointsRef.current && pointsRef.current.geometry.attributes.position) {
        const positions = pointsRef.current.geometry.attributes.position;
        const positionsArray = positions.array;
        
        for (let i = 0; i < positionsArray.length; i += 3) {
          // Use a temporary variable to avoid direct modification
          const newY = Number(positionsArray[i + 1]) + Math.sin(elapsedTime + i) * speed * 0.001;
          const newX = Number(positionsArray[i]) + Math.cos(elapsedTime + i) * speed * 0.001;
          
          // Update using set method for BufferAttribute
          positions.setXYZ(i / 3, newX, newY, positionsArray[i + 2]);
        }
        positions.needsUpdate = true;
      }

      if (pointsRef.current) {
        pointsRef.current.rotation.x = elapsedTime * 0.05;
        pointsRef.current.rotation.y = elapsedTime * 0.03;
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
<<<<<<< HEAD
      
      if (particlesRef.current) {
        if (particlesRef.current.geometry) {
          particlesRef.current.geometry.dispose();
        }
        
        if (particlesRef.current.material) {
          if (Array.isArray(particlesRef.current.material)) {
            particlesRef.current.material.forEach(material => material.dispose());
          } else {
            particlesRef.current.material.dispose();
          }
        }
      }
      
=======
      cancelAnimationFrame(frameIdRef.current);
>>>>>>> parent of 3785fdc (Refactor: Optimize website for SEO, performance, and accessibility)
      if (rendererRef.current) {
        if (containerRef.current && rendererRef.current.domElement) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current.dispose();
      }
    };
  }, [count, size, color, speed, density]);

  return <div ref={containerRef} className="absolute inset-0 z-0" />;
};

export default HeroParticlesAdvanced;
