import React from 'react';

const HeroScrollIndicator = () => (
  <div className="relative flex flex-col items-center justify-end mt-auto mb-16">
    <a
      href="#about"
      className="block text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
      aria-label="Scroll down to about section"
    >
      <svg
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
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

export default HeroScrollIndicator;
