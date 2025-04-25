
import { useEffect, useRef, RefObject } from "react";

interface HeroParticlesProps {
  parentRef: RefObject<HTMLDivElement>;
}

const HeroParticlesVanilla = ({ parentRef }: HeroParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !parentRef.current) return;

    const container = containerRef.current;
    const parentElement = parentRef.current;
    const containerWidth = parentElement.offsetWidth;
    const containerHeight = parentElement.offsetHeight;

    // Create particles
    const particleCount = window.innerWidth < 768 ? 50 : 100;
    const particles: HTMLDivElement[] = [];
    
    // Clean any previous particles
    container.innerHTML = '';
    
    // Create particle elements
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      
      // GSAI color scheme
      const colors = ['#ff0000', '#ffcc00', '#ffffff'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Random size and position
      const size = Math.random() * 5 + 2;
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      const depth = Math.random() * 5;
      
      // Apply styles
      particle.className = 'gsai-particle';
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = '50%';
      particle.style.backgroundColor = randomColor;
      particle.style.boxShadow = `0 0 ${size * 2}px ${randomColor}`;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.opacity = (0.3 + Math.random() * 0.7).toString();
      particle.style.zIndex = Math.floor(depth).toString();
      particle.style.transform = `translateZ(${depth * 50}px)`;
      
      // Store initial position and velocity
      particle.dataset.vx = (Math.random() - 0.5).toString();
      particle.dataset.vy = (Math.random() - 0.5).toString();
      particle.dataset.x = x.toString();
      particle.dataset.y = y.toString();
      
      container.appendChild(particle);
      particles.push(particle);
    }
    
    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      particles.forEach(p => {
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
    
    // Handle window resize
    const handleResize = () => {
      if (parentElement) {
        const newWidth = parentElement.offsetWidth;
        const newHeight = parentElement.offsetHeight;
        
        particles.forEach(p => {
          // Reposition particles that would be outside new dimensions
          const x = parseFloat(p.dataset.x || '0');
          const y = parseFloat(p.dataset.y || '0');
          
          if (x > newWidth) p.dataset.x = (x % newWidth).toString();
          if (y > newHeight) p.dataset.y = (y % newHeight).toString();
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cursor interaction - optional
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const rect = parentElement.getBoundingClientRect();
      
      particles.forEach(p => {
        const x = parseFloat(p.dataset.x || '0');
        const y = parseFloat(p.dataset.y || '0');
        const dx = mouseX - rect.left - x;
        const dy = mouseY - rect.top - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Apply subtle attraction/repulsion based on distance
        if (dist < 100) {
          const force = 0.05 / Math.max(1, dist);
          p.dataset.vx = (parseFloat(p.dataset.vx || '0') - dx * force).toString();
          p.dataset.vy = (parseFloat(p.dataset.vy || '0') - dy * force).toString();
        }
      });
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [parentRef]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 perspective-1000 overflow-hidden"
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    />
  );
};

export default HeroParticlesVanilla;
