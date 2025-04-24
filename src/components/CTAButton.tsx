
import React from 'react';

interface CTAButtonProps {
  onClick: () => void;
  label: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ onClick, label }) => {
  return (
    <button 
      onClick={onClick} 
      className="gsai-btn text-base sm:text-lg animate-pulse-glow mt-4 sm:mt-6 relative overflow-hidden"
      aria-label={label}
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-gsai-red via-gsai-gold to-gsai-red opacity-75 blur-lg -z-10 animate-gradient-x"></span>
    </button>
  );
};

export default CTAButton;
