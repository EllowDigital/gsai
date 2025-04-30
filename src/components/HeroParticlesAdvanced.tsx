
import React, { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import * as THREE from "three";

interface HeroParticlesProps {
  parentRef: React.RefObject<HTMLDivElement>;
}

const HeroParticlesAdvanced: React.FC<HeroParticlesProps> = ({ parentRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  
  const particleSize = 4;
  const whiteColor = new THREE.Color(1.0, 1.0, 1.0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = parentRef.current;

    if (!canvas || !parent) return;

    const width = parent.offsetWidth;
    const height = parent.offsetHeight;

    // Initialize Scene
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    cameraRef.current.position.z = 300;
    rendererRef.current = new THREE.WebGLRenderer({ canvas, alpha: true });
    rendererRef.current.setSize(width, height);

    // Create Particles
    const particleCount = isMobile ? 1000 : 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const opacities = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);

    // Set particles to white color
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 400;

      velocities[i * 3] = (Math.random() - 0.5) * 0.5;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.5;

      opacities[i] = Math.random();

      colors[i * 3] = whiteColor.r;
      colors[i * 3 + 1] = whiteColor.g;
      colors[i * 3 + 2] = whiteColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("opacity", new THREE.BufferAttribute(opacities, 1));

    const material = new THREE.PointsMaterial({
      size: particleSize,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
    });

    particlesRef.current = new THREE.Points(geometry, material);
    sceneRef.current.add(particlesRef.current);

    // Animation
    const animate = () => {
      if (!particlesRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      
      const delta = clockRef.current.getDelta();
      const positionAttr = particlesRef.current.geometry.getAttribute("position") as THREE.BufferAttribute;
      const velocityAttr = particlesRef.current.geometry.getAttribute("velocity") as THREE.BufferAttribute;
      const opacityAttr = particlesRef.current.geometry.getAttribute("opacity") as THREE.BufferAttribute;

      for (let i = 0; i < particleCount; i++) {
        positionAttr.array[i * 3] += velocityAttr.array[i * 3] * delta * 100;
        positionAttr.array[i * 3 + 1] += velocityAttr.array[i * 3 + 1] * delta * 100;
        positionAttr.array[i * 3 + 2] += velocityAttr.array[i * 3 + 2] * delta * 100;

        opacityAttr.array[i] = Math.abs(
          Math.sin(clockRef.current.getElapsedTime() * 2 + i * 0.1)
        );
      }

      positionAttr.needsUpdate = true;
      opacityAttr.needsUpdate = true;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      requestAnimationFrame(animate);
    };

    animate();

    // Mouse Interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!particlesRef.current) return;
      const x = (event.clientX / width - 0.5) * 200;
      const y = -(event.clientY / height - 0.5) * 200;
      particlesRef.current.position.set(x, y, 0);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Handle resize
    const handleResize = () => {
      if (!parent || !cameraRef.current || !rendererRef.current) return;
      
      const newWidth = parent.offsetWidth;
      const newHeight = parent.offsetHeight;
      
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (sceneRef.current && particlesRef.current) {
        sceneRef.current.remove(particlesRef.current);
      }
      particlesRef.current = null;
      rendererRef.current = null;
      cameraRef.current = null;
      sceneRef.current = null;
    };
  }, [parentRef, isMobile]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default HeroParticlesAdvanced;
