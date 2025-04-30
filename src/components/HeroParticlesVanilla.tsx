import { useEffect, useRef, RefObject } from "react";

interface HeroParticlesProps {
  parentRef: RefObject<HTMLDivElement>;
}

const HeroParticlesVanilla = ({ parentRef }: HeroParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const parentElement = parentRef.current;

    if (!container || !parentElement) return;

    const containerWidth = parentElement.offsetWidth;
    const containerHeight = parentElement.offsetHeight;

    // Define the number of particles based on screen size
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

      // Apply styles to particle
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

    const animateParticles = () => {
      particles.forEach(particle => {
        const x = parseFloat(particle.dataset.x || '0');
        const y = parseFloat(particle.dataset.y || '0');
        const vx = parseFloat(particle.dataset.vx || '0');
        const vy = parseFloat(particle.dataset.vy || '0');

        // Update position with velocity
        let newX = x + vx;
        let newY = y + vy;

        // Boundary check (loop particles around)
        newX = newX > containerWidth ? 0 : newX < 0 ? containerWidth : newX;
        newY = newY > containerHeight ? 0 : newY < 0 ? containerHeight : newY;

        // Update particle position
        particle.style.left = `${newX}px`;
        particle.style.top = `${newY}px`;

        // Store updated position
        particle.dataset.x = newX.toString();
        particle.dataset.y = newY.toString();
      });

      // Request next animation frame
      animationFrameId = requestAnimationFrame(animateParticles);
    };

    animateParticles();

    // Handle window resize
    const handleResize = () => {
      const newWidth = parentElement.offsetWidth;
      const newHeight = parentElement.offsetHeight;

      particles.forEach(particle => {
        const x = parseFloat(particle.dataset.x || '0');
        const y = parseFloat(particle.dataset.y || '0');

        // Reposition particles that are outside the new dimensions
        if (x > newWidth) particle.dataset.x = (x % newWidth).toString();
        if (y > newHeight) particle.dataset.y = (y % newHeight).toString();
      });
    };

    window.addEventListener('resize', handleResize);

    // Cursor interaction (attraction/repulsion)
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const rect = parentElement.getBoundingClientRect();

      particles.forEach(particle => {
        const x = parseFloat(particle.dataset.x || '0');
        const y = parseFloat(particle.dataset.y || '0');
        const dx = mouseX - rect.left - x;
        const dy = mouseY - rect.top - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Attraction/repulsion effect based on proximity
        if (dist < 100) {
          const force = 0.05 / Math.max(1, dist);
          particle.dataset.vx = (parseFloat(particle.dataset.vx || '0') - dx * force).toString();
          particle.dataset.vy = (parseFloat(particle.dataset.vy || '0') - dy * force).toString();
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
