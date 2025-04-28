
import React, { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroParticlesProps {
  parentRef: React.RefObject<HTMLDivElement>;
}

const HeroParticlesSimple: React.FC<HeroParticlesProps> = ({ parentRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !parentRef.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = parentRef.current.offsetWidth;
    let height = parentRef.current.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const particleCount = isMobile ? 40 : 80;
    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      gravity: number;
      opacity: number;
      color: string;

      constructor(x?: number, y?: number) {
        this.x = x ?? Math.random() * width;
        this.y = y ?? Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
        this.gravity = 0.03 + Math.random() * 0.02; // gentle downward pull
        this.opacity = Math.random() * 0.8 + 0.2;
        const colors = ["#FFD700", "#FFFFFF", "#FF6600"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX + Math.sin(this.y * 0.01) * 0.1; // swaying effect
        this.y += this.speedY + this.gravity;

        // Bounce off bottom edge
        if (this.y > height) {
          this.y = 0;
        }

        // Wrap around horizontally
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
      }

      draw() {
        if (ctx) {
          ctx.beginPath();
          ctx.globalAlpha = this.opacity;
          ctx.fillStyle = this.color;
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }
    }

    const addParticleAt = (x: number, y: number) => {
      for (let i = 0; i < 5; i++) {
        particles.push(new Particle(x, y));
      }
    };

    // Init particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawConnections = () => {
      if (!ctx) return;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 70) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(255,255,255,0.08)";
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawConnections();
      requestAnimationFrame(animate);
    };

    // Resize listener
    const handleResize = () => {
      if (!parentRef.current || !canvas) return;
      
      width = parentRef.current.offsetWidth;
      height = parentRef.current.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Touch/click interaction
    const handleInteraction = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      let clientX = 0;
      let clientY = 0;

      if ("touches" in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const x = clientX - rect.left;
      const y = clientY - rect.top;
      addParticleAt(x, y);
    };

    canvas.addEventListener("click", handleInteraction);
    canvas.addEventListener("touchstart", handleInteraction);
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      canvas.removeEventListener("click", handleInteraction);
      canvas.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("resize", handleResize);
    };
  }, [parentRef, isMobile]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default HeroParticlesSimple;
