import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const HeroParticlesAdvanced = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js scene
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const newScene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    // Fix - using renderer.setClearColor with the proper type
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Position camera
    camera.position.z = 5;

    // Add particles
    const particleCount = 2000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 15;
      positions[i + 1] = (Math.random() - 0.5) * 15;
      positions[i + 2] = (Math.random() - 0.5) * 15;

      // Color
      const particleType = Math.random();
      if (particleType < 0.5) {
        // Red particles
        colors[i] = 0.92;     // R
        colors[i + 1] = 0.22; // G
        colors[i + 2] = 0.29; // B
      } else {
        // Gold particles
        colors[i] = 0.85;     // R
        colors[i + 1] = 0.65; // G
        colors[i + 2] = 0.13; // B
      }

      // Size
      sizes[i / 3] = Math.random() * 6 + 2;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    newScene.add(particleSystem);

    // Animation
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      particleSystem.rotation.x += 0.0005;
      particleSystem.rotation.y += 0.0010;
      renderer.render(newScene, camera);
      return animationId;
    };

    const animationId = animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    setScene(newScene);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      // Clean up 3D objects
      particleSystem.geometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" />;
};

export default HeroParticlesAdvanced;
