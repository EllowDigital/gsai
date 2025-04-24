
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    // Particle animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let particles: any[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      if (canvas && heroRef.current) {
        canvas.width = heroRef.current.offsetWidth;
        canvas.height = heroRef.current.offsetHeight;
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000); // Adjust for density
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5)`,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          connected: [] as number[],
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
        
        // Connect particles
        particle.connected = [];
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            particle.connected.push(j);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(234, 56, 76, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
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
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black z-10" />
      
      <div className="gsai-container relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white animate-float">
          Welcome to
          <div className="mt-2">
            <span className="text-gsai-red">Ghatak </span>
            <span className="text-white">Sports Academy</span>
            <span className="text-gsai-gold"> India™</span>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
          Empowering Lives Through Martial Arts
        </p>
        
        <button onClick={scrollToContact} className="gsai-btn text-lg animate-pulse-glow mt-6">
          Join Now
        </button>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/70 hover:text-white">
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
