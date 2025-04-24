
import React, { useEffect, useRef } from 'react';
import { MedalIcon, TrophyIcon, AwardIcon, Star } from 'lucide-react';
import HeroParticles from './HeroParticles';
import MartialArtistSVG from './MartialArtistSVG';
import CTAButton from './CTAButton';
import DecorativeIcons from './DecorativeIcons';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ zIndex: 1 }}
    >
      {/* Particle background */}
      <div className="absolute inset-0" style={{ zIndex: -1 }}>
        <HeroParticles parentRef={heroRef} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" style={{ zIndex: -1 }} />
      
      {/* Martial artist SVG */}
      <div className="absolute bottom-0 left-0 md:left-[10%] h-[60vh] lg:h-[70vh] opacity-70" style={{ zIndex: 1 }}>
        <MartialArtistSVG />
      </div>
      
      {/* Decorative elements */}
      <div className="relative" style={{ zIndex: 1 }}>
        <DecorativeIcons />
      </div>
      
      {/* Content */}
      <div className="gsai-container relative text-center" style={{ zIndex: 2 }}>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white animate-float">
          Welcome to
          <div className="mt-2">
            <span className="text-gsai-red">Ghatak </span>
            <span className="text-white">Sports Academy</span>
            <span className="text-gsai-gold"> India™</span>
          </div>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
          Empowering Lives Through Martial Arts
        </p>
        
        <CTAButton onClick={scrollToContact} label="Join Now" />
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/70 hover:text-white">
            <svg 
              className="w-6 h-6 sm:w-8 sm:h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
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
