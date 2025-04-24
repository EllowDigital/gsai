import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import * as THREE from "three";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise"; // Perlin Noise for Heat Distortion

interface HeroParticlesProps {
  parentRef: React.RefObject<HTMLDivElement>;
}

const HeroParticles: React.FC<HeroParticlesProps> = ({ parentRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  const [particleCount, setParticleCount] = useState(isMobile ? 300 : 500);

  let scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    particles: THREE.Points,
    clock = new THREE.Clock();
  let explosionActive = false,
    explosionTime = 0,
    electromagneticActive = false;
  let mouse = new THREE.Vector2();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !parentRef.current) return;

    const width = parentRef.current.offsetWidth;
    const height = parentRef.current.offsetHeight;

    // 🎬 Initialize Scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 300;
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // ✨ Create Particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const deepRed = new THREE.Color(0x8B0000); // Deep Red
    const gold = new THREE.Color(0xFFD700); // Gold
    const white = new THREE.Color(0xFFFFFF); // White

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 400;

      velocities[i * 3] = (Math.random() - 0.5) * 0.5;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.5;

      // Use deep red, gold, or white for particle colors based on some criteria
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = deepRed.r;
        colors[i * 3 + 1] = deepRed.g;
        colors[i * 3 + 2] = deepRed.b;
      } else if (colorChoice < 0.66) {
        colors[i * 3] = gold.r;
        colors[i * 3 + 1] = gold.g;
        colors[i * 3 + 2] = gold.b;
      } else {
        colors[i * 3] = white.r;
        colors[i * 3 + 1] = white.g;
        colors[i * 3 + 2] = white.b;
      }
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 🎡 Animation Function
    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      const positionAttr = particles.geometry.getAttribute("position");
      const velocityAttr = particles.geometry.getAttribute("velocity");
      const colorAttr = particles.geometry.getAttribute("color");

      for (let i = 0; i < particleCount; i++) {
        const x = positionAttr.array[i * 3];
        const y = positionAttr.array[i * 3 + 1];
        const z = positionAttr.array[i * 3 + 2];

        if (!explosionActive && !electromagneticActive) {
          // Gravity Pull (toward center)
          velocityAttr.array[i * 3] += (0 - x) * 0.0005;
          velocityAttr.array[i * 3 + 1] += (0 - y) * 0.0005;
          velocityAttr.array[i * 3 + 2] += (0 - z) * 0.0005;
        }

        if (explosionActive) {
          // Shockwave Ripple Effect
          const shockwaveFactor = Math.sin((elapsed - explosionTime) * 3) * 3;
          velocityAttr.array[i * 3] += shockwaveFactor * (Math.random() - 0.5);
          velocityAttr.array[i * 3 + 1] += shockwaveFactor * (Math.random() - 0.5);
          velocityAttr.array[i * 3 + 2] += shockwaveFactor * (Math.random() - 0.5);
        }

        if (electromagneticActive) {
          // Electromagnetic Attraction & Repulsion
          velocityAttr.array[i * 3] += Math.sin(elapsed) * 0.02;
          velocityAttr.array[i * 3 + 1] += Math.cos(elapsed) * 0.02;
          velocityAttr.array[i * 3 + 2] += Math.sin(elapsed * 0.5) * 0.02;
        }

        // Friction-Based Slowdown
        velocityAttr.array[i * 3] *= 0.99;
        velocityAttr.array[i * 3 + 1] *= 0.99;
        velocityAttr.array[i * 3 + 2] *= 0.99;

        // Heat Distortion Effect (Perlin Noise)
        const noise = new ImprovedNoise();
        const distortion = noise.noise(x * 0.01, y * 0.01, elapsed * 0.05);
        velocityAttr.array[i * 3] += distortion * 0.01;
        velocityAttr.array[i * 3 + 1] += distortion * 0.01;
        velocityAttr.array[i * 3 + 2] += distortion * 0.01;

        // Particle position update
        positionAttr.array[i * 3] += velocityAttr.array[i * 3] * delta * 100;
        positionAttr.array[i * 3 + 1] += velocityAttr.array[i * 3 + 1] * delta * 100;
        positionAttr.array[i * 3 + 2] += velocityAttr.array[i * 3 + 2] * delta * 100;

        // Reset particles that move out of bounds to create looping effect
        if (x > 400 || x < -400) positionAttr.array[i * 3] = (Math.random() - 0.5) * 400;
        if (y > 400 || y < -400) positionAttr.array[i * 3 + 1] = (Math.random() - 0.5) * 400;
        if (z > 400 || z < -400) positionAttr.array[i * 3 + 2] = (Math.random() - 0.5) * 400;
      }

      positionAttr.needsUpdate = true;
      colorAttr.needsUpdate = true;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // 🖱️ Mouse Click for Explosion Effect + Electromagnetic Toggle
    const handleMouseClick = (event: MouseEvent) => {
      if (!explosionActive) {
        explosionActive = true;
        explosionTime = clock.getElapsedTime();
        setTimeout(() => {
          explosionActive = false;
          electromagneticActive = true;
          setTimeout(() => {
            electromagneticActive = false;
          }, 1500);
        }, 1000);
      }

      // Capture mouse position for interaction
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("click", handleMouseClick);
    };
  }, [parentRef, isMobile, particleCount]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default HeroParticles;
