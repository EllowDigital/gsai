
import { useEffect, useRef } from 'react';
import { ParticleProps } from './HeroParticles';

const HeroParticlesSimple = ({ parentRef }: ParticleProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    radius: number;
    color: string;
    vx: number;
    vy: number;
    alpha: number;
  }>>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !parentRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    contextRef.current = ctx;

    const resizeCanvas = () => {
      if (!canvas || !parentRef.current) return;
      
      canvas.width = parentRef.current.clientWidth;
      canvas.height = parentRef.current.clientHeight;
    };

    // Initial setup
    resizeCanvas();
    createParticles();

    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    // Start animation
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [parentRef]);

  const createParticles = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const width = canvas.width;
    const height = canvas.height;
    const particles = [];
    const colors = ['#ff5500', '#ffcc00', '#ffffff', '#ff0000'];
    const particleCount = Math.min(width * height / 10000, 80); // Adjust density based on screen size
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.5
      });
    }
    
    particlesRef.current = particles;
  };

  const animate = () => {
    if (!contextRef.current || !canvasRef.current) return;
    
    const ctx = contextRef.current;
    const canvas = canvasRef.current;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particlesRef.current.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Boundary check - wrap around
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.globalAlpha = particle.alpha;
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Draw connections between particles
      connectParticles(particle);
    });
    
    // Continue animation
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const connectParticles = (particle: {
    x: number;
    y: number;
    alpha: number;
  }) => {
    if (!contextRef.current) return;
    
    const ctx = contextRef.current;
    const connectionRadius = 100; // Maximum distance for connection
    
    particlesRef.current.forEach(otherParticle => {
      if (particle === otherParticle) return;
      
      const dx = particle.x - otherParticle.x;
      const dy = particle.y - otherParticle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < connectionRadius) {
        // Draw line with opacity based on distance
        const opacity = 1 - (distance / connectionRadius);
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(otherParticle.x, otherParticle.y);
        ctx.strokeStyle = `rgba(255,85,0,${opacity * 0.2})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    });
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
};

export default HeroParticlesSimple;
