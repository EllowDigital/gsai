
import { useRef, useEffect, useState } from 'react';
import HeroParticles from './HeroParticles';
import CTAButton from './CTAButton';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Ensure hero visibility after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Track mouse for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      
      // Calculate position from -20 to 20
      const x = ((clientX / width) - 0.5) * 40;
      const y = ((clientY / height) - 0.5) * 40;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <HeroParticles parentRef={heroRef} />
      </div>

      {/* 3D Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black z-10"
        style={{
          transform: `translateX(${mousePosition.x * -0.02}px) translateY(${mousePosition.y * -0.02}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Floating shapes */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div 
          className="absolute w-40 h-40 rounded-full bg-red-500/10 blur-xl"
          style={{
            top: '20%',
            left: '15%',
            transform: `translateX(${mousePosition.x * 0.1}px) translateY(${mousePosition.y * 0.1}px)`,
            transition: 'transform 0.3s ease-out',
            animation: 'float-slow 8s infinite ease-in-out'
          }}
        />
        <div 
          className="absolute w-60 h-60 rounded-full bg-yellow-500/10 blur-xl"
          style={{
            bottom: '15%',
            right: '10%',
            transform: `translateX(${mousePosition.x * -0.15}px) translateY(${mousePosition.y * -0.15}px)`,
            transition: 'transform 0.3s ease-out',
            animation: 'float-slow 10s infinite ease-in-out reverse'
          }}
        />
      </div>

      {/* Main content with 3D parallax effect */}
      <div 
        className={`gsai-container relative text-center z-40 flex flex-col items-center transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{
          transform: `translateX(${mousePosition.x * 0.05}px) translateY(${mousePosition.y * 0.05}px)`,
          transition: 'transform 0.3s ease-out, opacity 1s ease, translate 1s ease'
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
          <div 
            className="relative inline-block transform-gpu"
            style={{
              animation: 'float 3s ease-in-out infinite',
              textShadow: '0 0 15px rgba(255,255,255,0.2)'
            }}
          >
            Welcome to
          </div>
          <div 
            className="mt-2 relative transform-gpu"
            style={{
              animation: 'float 3s ease-in-out infinite 0.2s', 
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            <span 
              className="text-gsai-red"
              style={{ 
                textShadow: '0 0 10px rgba(255,0,0,0.5)',
                display: 'inline-block',
                animation: 'pulse-glow 2s infinite'
              }}
            >Ghatak </span>
            <span className="text-white">Sports Academy</span>
            <span 
              className="text-gsai-gold"
              style={{ 
                textShadow: '0 0 10px rgba(255,204,0,0.5)',
                display: 'inline-block',
                animation: 'pulse-glow 2.5s infinite'
              }}
            > India™</span>
            
            {/* 3D Decorative elements */}
            <div 
              className="absolute -top-6 -right-6 w-12 h-12 opacity-70 hidden md:block"
              style={{
                animation: 'float 3s ease-in-out infinite 0.5s',
                transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${mousePosition.y * -0.5}deg)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gsai-gold">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </h1>

        <p 
          className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
          style={{
            animation: 'fade-in 1s ease forwards',
            textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
          }}
        >
          Empowering Lives Through Martial Arts
        </p>

        <div 
          style={{
            animation: 'float 3s ease-in-out infinite 0.4s',
            transform: `perspective(1000px) rotateY(${mousePosition.x * 0.05}deg) rotateX(${mousePosition.y * -0.05}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
          className="transform-gpu"
        >
          <CTAButton
            label="Join Now"
            href="https://forms.gle/LTYn59kPWkQgC3VR7"
            onClick={scrollToContact}
          />
        </div>

        {/* 3D Scroll indicator */}
        <div 
          className="mt-8 sm:mt-12 md:mt-16"
          style={{
            animation: 'bounce 2s infinite'
          }}
        >
          <a 
            href="#about" 
            className="text-white/70 hover:text-white transition-colors duration-300"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.1}deg) rotateX(${mousePosition.y * -0.1}deg)`,
              transition: 'transform 0.2s ease-out',
              display: 'block'
            }}
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
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
