import React, { useRef } from 'react';
import HeroParticles from './HeroParticles';
// import MartialArtistSVG from './MartialArtistSVG';
import CTAButton from './CTAButton';
// import DecorativeIcons from './DecorativeIcons';

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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <HeroParticles parentRef={heroRef} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black z-10" />

      {/* Martial artist SVG
      <div className="absolute bottom-0 left-0 md:left-[10%] h-[60vh] lg:h-[70vh] opacity-70 z-20">
        <MartialArtistSVG />
      </div> */}

      {/* Decorative elements
      <div className="relative z-30">
        <DecorativeIcons />
      </div> */}

      {/* Main content */}
      <div className="gsai-container relative text-center z-40 flex flex-col items-center">
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

        {/* <CTAButton onClick={scrollToContact} label="Join Now" /> */}
        <CTAButton
          label="Join Now"
          href="https://forms.gle/LTYn59kPWkQgC3VR7"
        />


        {/* Scroll indicator */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <a href="#about" className="text-white/70 hover:text-white animate-bounce">
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
