
import React from 'react';

const HeroScrollIndicator = () => {
  return (
    <div
      className="mt-8 sm:mt-12 md:mt-16"
      style={{
        animation: "bounce 2s infinite",
      }}
    >
      <a
        href="#about"
        className="text-white/70 hover:text-white transition-colors duration-300"
        style={{
          display: "block",
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
  );
};

export default HeroScrollIndicator;
