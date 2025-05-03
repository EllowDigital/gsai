
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroParticlesAdvanced = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Use renderer.setClearColor with alpha channel instead of setClearColor
    renderer.setClearColor(0x000000, 0);

    // Add renderer to DOM
    if (mountRef.current) {
      mountRef.current.innerHTML = '';
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create particles
    const particleCount = window.innerWidth < 768 ? 500 : 1000;
    const particles = new THREE.BufferGeometry();
    
    // Create arrays for positions, velocities, and colors
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    
    // Define colors for particles using THREE.Color
    const redColor = new THREE.Color(0xea384c); // Using hex value directly
    const goldColor = new THREE.Color(0xDAA520); // Using hex value directly

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
      
      // Velocity
      velocities[i] = (Math.random() - 0.5) * 0.01;
      velocities[i + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i + 2] = (Math.random() - 0.5) * 0.01;
      
      // Color - alternate between red and gold
      const color = Math.random() > 0.5 ? redColor : goldColor;
      particleColors[i] = color.r;
      particleColors[i + 1] = color.g;
      particleColors[i + 2] = color.b;
    }
    
    // Add attributes to geometry
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Create material
    const particleMaterial = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.05 : 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    // Create points
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update particle positions
      const positionsArray = particles.attributes.position.array as Float32Array;
      const velocitiesArray = particles.attributes.velocity.array as Float32Array;
      
      for (let i = 0; i < positionsArray.length; i += 3) {
        positionsArray[i] += velocitiesArray[i];
        positionsArray[i + 1] += velocitiesArray[i + 1];
        positionsArray[i + 2] += velocitiesArray[i + 2];
        
        // Loop particles back if they go out of bounds
        if (positionsArray[i] > 5 || positionsArray[i] < -5) {
          velocitiesArray[i] *= -1;
        }
        if (positionsArray[i + 1] > 5 || positionsArray[i + 1] < -5) {
          velocitiesArray[i + 1] *= -1;
        }
        if (positionsArray[i + 2] > 5 || positionsArray[i + 2] < -5) {
          velocitiesArray[i + 2] *= -1;
        }
      }
      
      // Update BufferGeometry
      particles.attributes.position.needsUpdate = true;
      
      // Rotate particle system
      particleSystem.rotation.y += 0.001;
      
      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default HeroParticlesAdvanced;
