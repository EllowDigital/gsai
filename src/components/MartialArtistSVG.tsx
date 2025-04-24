
import React from 'react';

const MartialArtistSVG: React.FC = () => {
  return (
    <svg 
      viewBox="0 0 300 500" 
      className="w-full h-full animate-martial-artist"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <path d="M150 100 L150 300" stroke="#ea384c" strokeWidth="8" strokeLinecap="round" />
      
      {/* Head */}
      <circle cx="150" cy="70" r="40" fill="#333" />
      
      {/* Arms */}
      <path className="arm-right" d="M150 150 L220 180" stroke="#ea384c" strokeWidth="8" strokeLinecap="round" />
      <path className="arm-left" d="M150 150 L80 180" stroke="#ea384c" strokeWidth="8" strokeLinecap="round" />
      
      {/* Legs */}
      <path className="leg-right" d="M150 300 L200 400" stroke="#333" strokeWidth="8" strokeLinecap="round" />
      <path className="leg-kicking" d="M150 300 L50 250" stroke="#333" strokeWidth="8" strokeLinecap="round" />
      
      {/* Belt */}
      <path d="M120 200 L180 200" stroke="#DAA520" strokeWidth="12" strokeLinecap="round" />
      
      {/* Hands */}
      <circle className="hand-right" cx="220" cy="180" r="10" fill="#333" />
      <circle className="hand-left" cx="80" cy="180" r="10" fill="#333" />
      
      {/* Feet */}
      <ellipse className="foot-right" cx="200" cy="400" rx="15" ry="8" fill="#333" />
      <ellipse className="foot-kicking" cx="50" cy="250" rx="15" ry="8" fill="#333" />
    </svg>
  );
};

export default MartialArtistSVG;
