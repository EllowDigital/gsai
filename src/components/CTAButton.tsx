import React from 'react';

interface CTAButtonProps {
  onClick?: () => void; // Optional because it may not be needed if an href is provided
  label: string;
  href?: string; // Optional href prop for link functionality
}

const CTAButton: React.FC<CTAButtonProps> = ({ onClick, label, href }) => {
  const buttonContent = (
    <>
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-gsai-#ff0000 via-gsai-gold to-gsai-red opacity-75 blur-lg -z-10 animate-gradient-x"></span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="gsai-btn text-base sm:text-lg lg:text-xl animate-pulse-glow mt-4 sm:mt-6 relative overflow-hidden rounded-full px-6 py-3 transition-all ease-in-out hover:scale-105 hover:shadow-lg"
        aria-label={label}
        target="_blank" // Optionally open in a new tab
        rel="noopener noreferrer" // Security measure when using target="_blank"
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className="gsai-btn text-base sm:text-lg lg:text-xl animate-pulse-glow mt-4 sm:mt-6 relative overflow-hidden rounded-full px-6 py-3 transition-all ease-in-out hover:scale-105 hover:shadow-lg"
      aria-label={label}
    >
      {buttonContent}
    </button>
  );
};

export default CTAButton;
