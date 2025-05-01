
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/components/ThemeProvider";
import { useDeviceType } from "@/hooks/use-device-type";

interface HeroParticlesAdvancedProps {
  parentRef: React.RefObject<HTMLDivElement>;
}

const HeroParticlesAdvanced = ({ parentRef }: HeroParticlesAdvancedProps) => {
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const frameIdRef = useRef<number>(0);
  const { theme } = useTheme() || { theme: "dark" }; // Fix the theme property access
  const deviceType = useDeviceType();
  
  // Adjust particle count based on device type for better performance
  const getParticleCount = () => {
    switch (deviceType) {
      case "mobile": return 75;
      case "tablet": return 150;
      default: return 250;
    }
  };

  useEffect(() => {
    if (!parentRef.current) return;
    
    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Initialize camera with responsive FOV
    const aspectRatio = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;
    
    // Initialize renderer with better performance settings
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: deviceType === "desktop", // Only use antialias on desktop
      precision: deviceType === "mobile" ? "mediump" : "highp", // Lower precision on mobile
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // Limit pixel ratio
    renderer.setSize(parentRef.current.clientWidth, parentRef.current.clientHeight);
    parentRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Create particles
    const particleCount = getParticleCount();
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    const primaryColor = theme === "dark" ? new THREE.Color(0xea384c) : new THREE.Color(0xea384c);
    const secondaryColor = theme === "dark" ? new THREE.Color(0xdaa520) : new THREE.Color(0xdaa520);
    const tertiaryColor = theme === "dark" ? new THREE.Color(0xffffff) : new THREE.Color(0xffffff);
    
    const colorOptions = [primaryColor, secondaryColor, tertiaryColor];
    
    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 10;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
      
      // Color
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      // Size
      sizes[i] = Math.random() * 0.1 + 0.05;
    }
    
    // Set attributes properly
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Create material
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      vertexColors: true,
      opacity: 0.8,
      // Remove depthTest as it's not a valid parameter for PointsMaterialParameters
    });
    
    // Create points
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    
    // Animation function
    const animate = () => {
      if (!particleSystem) return;
      
      particleSystem.rotation.x += 0.0003;
      particleSystem.rotation.y += 0.0005;
      
      // Safely update positions for animation
      const positionAttribute = particles.getAttribute('position') as THREE.BufferAttribute;
      const positionArray = positionAttribute.array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Update Float32Array safely - fix the array access
        const currentY = positionArray[i3 + 1];
        // Use the current value directly without updating it first
        positionArray[i3 + 1] = currentY + Math.sin(Date.now() * 0.001 + i * 0.1) * 0.001;
      }
      
      positionAttribute.needsUpdate = true;
      
      // Render the scene
      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!parentRef.current || !camera || !renderer) return;
      
      const width = parentRef.current.clientWidth;
      const height = parentRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameIdRef.current);
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
        
        if (parentRef.current && rendererRef.current.domElement) {
          parentRef.current.removeChild(rendererRef.current.domElement);
        }
      }
    };
  }, [parentRef, theme, deviceType]);
  
  return null;
};

export default HeroParticlesAdvanced;
