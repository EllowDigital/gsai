
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroParticlesProps {
  parentRef: React.RefObject<HTMLDivElement>;
}

const HeroParticles: React.FC<HeroParticlesProps> = ({ parentRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Particle animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      connected: number[];
    }> = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      if (canvas && parentRef.current) {
        canvas.width = parentRef.current.offsetWidth;
        canvas.height = parentRef.current.offsetHeight;
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      // Reduce particle count on mobile for better performance
      const densityFactor = isMobile ? 30000 : 15000;
      const particleCount = Math.floor((canvas.width * canvas.height) / densityFactor);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * (isMobile ? 2 : 3) + 1,
          color: `rgba(234, 56, 76, ${Math.random() * 0.5 + 0.3})`, // Red theme color with varying opacity
          speedX: Math.random() * 1.5 - 0.75, // Reduced speed for better performance
          speedY: Math.random() * 1.5 - 0.75, // Reduced speed for better performance
          connected: [],
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Connect particles - reduce connection distance on mobile
        const connectionDistance = isMobile ? 60 : 100;
        particle.connected = [];
        
        // Skip some connections on mobile for performance
        const skipFactor = isMobile ? 2 : 1;
        if (i % skipFactor === 0) {
          for (let j = i + 1; j < particles.length; j += skipFactor) {
            const dx = particles[j].x - particle.x;
            const dy = particles[j].y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < connectionDistance) {
              particle.connected.push(j);
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(234, 56, 76, ${1 - distance / connectionDistance})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [parentRef, isMobile]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default HeroParticles;
