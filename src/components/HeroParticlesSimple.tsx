import { useEffect, useRef, RefObject } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroParticlesProps {
  parentRef: RefObject<HTMLDivElement>;
}

// Simpler canvas-based particles for mobile
const HeroParticlesSimple = ({ parentRef }: HeroParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!containerRef.current || !parentRef.current) return;
    
    const container = containerRef.current;
    const parentElement = parentRef.current;
    const containerWidth = parentElement.offsetWidth;
    const containerHeight = parentElement.offsetHeight;
    
    // Create particles
    const particleCount = 30; // Reduced for mobile
    
    // Clean any previous particles
    container.innerHTML = '';
    
    // Create particle elements with minimal styles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      
      // GSAI color scheme
      const colors = ['#ff0000', '#ffcc00', '#ffffff'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Random size and position - smaller for mobile
      const size = Math.random() * 3 + 1;
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      
      // Apply minimal styles for performance
      particle.className = 'gsai-particle';
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = randomColor;
      particle.style.borderRadius = '50%';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.opacity = (0.3 + Math.random() * 0.7).toString();
      
      // Store initial position and velocity
      particle.dataset.vx = ((Math.random() - 0.5) * 0.5).toString(); // Slower movement
      particle.dataset.vy = ((Math.random() - 0.5) * 0.5).toString();
      particle.dataset.x = x.toString();
      particle.dataset.y = y.toString();
      
      container.appendChild(particle);
    }
    
    // Simple animation loop
    let animationFrameId: number;
    
    const animate = () => {
      const particles = container.querySelectorAll('.gsai-particle');
      
      particles.forEach((p: Element) => {
        if (!(p instanceof HTMLElement)) return;
        
        // Get current position and velocity
        const x = parseFloat(p.dataset.x || '0');
        const y = parseFloat(p.dataset.y || '0');
        const vx = parseFloat(p.dataset.vx || '0');
        const vy = parseFloat(p.dataset.vy || '0');
        
        // Update position
        let newX = x + vx;
        let newY = y + vy;
        
        // Boundary check
        if (newX > containerWidth) newX = 0;
        if (newX < 0) newX = containerWidth;
        if (newY > containerHeight) newY = 0;
        if (newY < 0) newY = containerHeight;
        
        // Apply new position
        p.style.left = `${newX}px`;
        p.style.top = `${newY}px`;
        
        // Store updated position
        p.dataset.x = newX.toString();
        p.dataset.y = newY.toString();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (parentElement) {
        const newWidth = parentElement.offsetWidth;
        const newHeight = parentElement.offsetHeight;
        
        const particles = container.querySelectorAll('.gsai-particle');
        particles.forEach((p: Element) => {
          if (!(p instanceof HTMLElement)) return;
          
          // Keep particles within bounds
          const x = parseFloat(p.dataset.x || '0');
          const y = parseFloat(p.dataset.y || '0');
          
          if (x > newWidth) p.dataset.x = (x % newWidth).toString();
          if (y > newHeight) p.dataset.y = (y % newHeight).toString();
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [parentRef]);
  
  return <div ref={containerRef} className="absolute inset-0 z-0" />;
};

export default HeroParticlesSimple;
