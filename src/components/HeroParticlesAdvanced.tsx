import React, { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import * as THREE from "three";

interface HeroParticlesProps {
  parentRef: React.RefObject<HTMLDivElement>;
}

const HeroParticles: React.FC<HeroParticlesProps> = ({ parentRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  let scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer;
  let particles: THREE.Points;
  let clock = new THREE.Clock();

  const particleSize = 4;
  const whiteColor = new THREE.Color(1.0, 1.0, 1.0); // Change to white color

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = parentRef.current;

    if (!canvas || !parent) return;

    const width = parent.offsetWidth;
    const height = parent.offsetHeight;

    // 🎬 Initialize Scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 300;
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(width, height);

    // ✨ Create Particles
    const particleCount = isMobile ? 1000 : 2000; // Increased particle count
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const opacities = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);

    // Set particles to white color (RGB: 1.0, 1.0, 1.0)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 400;

      velocities[i * 3] = (Math.random() - 0.5) * 0.5;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.5;

      opacities[i] = Math.random();

      // Fixed white color (RGB: 1.0, 1.0, 1.0)
      colors[i * 3] = whiteColor.r; // Red
      colors[i * 3 + 1] = whiteColor.g; // Green
      colors[i * 3 + 2] = whiteColor.b; // Blue
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

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 🎡 Animation
    const animate = () => {
      const delta = clock.getDelta();
      const positionAttr = particles.geometry.getAttribute("position");
      const velocityAttr = particles.geometry.getAttribute("velocity");
      const opacityAttr = particles.geometry.getAttribute("opacity");

      for (let i = 0; i < particleCount; i++) {
        positionAttr.array[i * 3] += velocityAttr.array[i * 3] * delta * 100;
        positionAttr.array[i * 3 + 1] += velocityAttr.array[i * 3 + 1] * delta * 100;
        positionAttr.array[i * 3 + 2] += velocityAttr.array[i * 3 + 2] * delta * 100;

        opacityAttr.array[i] = Math.abs(
          Math.sin(clock.getElapsedTime() * 2 + i * 0.1)
        );
      }

      positionAttr.needsUpdate = true;
      opacityAttr.needsUpdate = true;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // 🖱️ Mouse Interaction
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / width - 0.5) * 200;
      const y = -(event.clientY / height - 0.5) * 200;
      particles.position.set(x, y, 0);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (renderer) {
        renderer.dispose();
      }
    };
  }, [parentRef, isMobile]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default HeroParticles;
