import { useRef, useEffect, useState } from 'react';
import HeroParticles from './HeroParticles';
import CTAButton from './CTAButton';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ensure hero visibility after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black z-10" />

      {/* Main content */}
      <div className={`gsai-container relative text-center z-40 flex flex-col items-center transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white animate-float">
          <div className="relative inline-block">
            Welcome to
          </div>
          <div className="mt-2 relative">
            <span className="text-gsai-red">Ghatak </span>
            <span className="text-white">Sports Academy</span>
            <span className="text-gsai-gold"> India™</span>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 opacity-70 hidden md:block">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gsai-gold animate-float" style={{animationDelay: '0.2s'}}>
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto animate-fade-in">
          Empowering Lives Through Martial Arts
        </p>

        <div className="animate-float" style={{animationDelay: '0.4s'}}>
          <CTAButton
            label="Join Now"
            href="https://forms.gle/LTYn59kPWkQgC3VR7"
            onClick={scrollToContact}
          />
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 sm:mt-12 md:mt-16 animate-bounce">
          <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300">
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
