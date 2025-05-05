
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroParticlesAdvanced = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Use the correct method for transparency
    renderer.setClearColorHex(0x000000, 0); // Fixed property
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particle geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    
    const positionArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      // Position (spread across the scene)
      positionArray[i] = (Math.random() - 0.5) * 10;
      
      // Colors (red to gold gradient)
      if (i % 3 === 0) {
        colorArray[i] = Math.random() * 0.5 + 0.5; // Red component (0.5-1.0)
      } else if (i % 3 === 1) {
        colorArray[i] = Math.random() * 0.3; // Green component (0-0.3)
      } else {
        colorArray[i] = Math.random() * 0.1; // Blue component (0-0.1)
      }
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    // Material setup with correct properties
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    
    // Create the particle system
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    pointsRef.current = particles;
    
    // Camera position
    camera.position.z = 3;
    
    // Animation
    const animate = () => {
      if (!pointsRef.current) return;
      
      pointsRef.current.rotation.x += 0.0001;
      pointsRef.current.rotation.y += 0.0003;
      
      // Render
      if (rendererRef.current && cameraRef.current) {
        rendererRef.current.render(scene, cameraRef.current);
      }
      
      // Next frame
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (particlesGeometry) {
        particlesGeometry.dispose();
      }
      
      if (particlesMaterial) {
        particlesMaterial.dispose();
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div ref={containerRef} className="absolute inset-0 z-0" />;
};

export default HeroParticlesAdvanced;
