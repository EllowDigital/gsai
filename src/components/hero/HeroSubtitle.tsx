import React from 'react';

const HeroSubtitle = () => {
  return (
    <p
      className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
      style={{
        animation: "fade-in 1s ease-out forwards", // Slight tweak to make it smoother
        textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)", // Increased shadow for more depth
      }}
    >
      Empowering Lives Through Martial Arts
    </p>
  );
};

export default HeroSubtitle;
