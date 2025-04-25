
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { ParticleProps } from './HeroParticles';

const HeroParticlesAdvanced = ({ parentRef }: ParticleProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !parentRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      parentRef.current.clientWidth / parentRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(parentRef.current.clientWidth, parentRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
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
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      alphaTest: 0.01,
      depthWrite: false,
    });

    // Points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Animation
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsedTime * 0.05;
        particlesRef.current.rotation.x = elapsedTime * 0.03;
      }

      if (sceneRef.current && cameraRef.current && rendererRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      requestAnimationFrame(tick);
    };

    tick();

    const handleResize = () => {
      if (!parentRef.current || !rendererRef.current || !cameraRef.current) return;

      // Update camera
      cameraRef.current.aspect = parentRef.current.clientWidth / parentRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();

      // Update renderer
      rendererRef.current.setSize(parentRef.current.clientWidth, parentRef.current.clientHeight);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      
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
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [parentRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      aria-hidden="true"
    />
  );
};

export default HeroParticlesAdvanced;
