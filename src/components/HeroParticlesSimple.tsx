
import { useEffect, useRef, RefObject } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroParticlesProps {
  parentRef: RefObject<HTMLDivElement>;
}

// Simpler canvas-based particles for mobile
const HeroParticlesSimple = ({ parentRef }: HeroParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !parentRef.current) return;
    
    const width = parentRef.current.offsetWidth;
    const height = parentRef.current.offsetHeight;
    
    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Particle settings
    const particleCount = isMobile ? 50 : 100;
    const particles: Particle[] = [];
    
    // Create particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        
        // Use GSAI colors
        const colors = ['#ff0000', '#ffcc00', '#ffffff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        // Move particles
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around edges
        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;
        
        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Handle resize
    const handleResize = () => {
      if (parentRef.current) {
        canvas.width = parentRef.current.offsetWidth;
        canvas.height = parentRef.current.offsetHeight;
      }
    };
    
    // Animation loop
    let animationId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [parentRef, isMobile]);
  
  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default HeroParticlesSimple;
