
import { useState, MouseEvent } from 'react';

interface CTAButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
}

const CTAButton = ({
  label,
  onClick,
  href,
  variant = 'primary'
}: CTAButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tiltCoordinates, setTiltCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate tilt values -10 to 10 degrees
    const tiltX = (y / rect.height - 0.5) * 20;
    const tiltY = (x / rect.width - 0.5) * -20;
    
    setTiltCoordinates({ x: tiltX, y: tiltY });
  };
  
  const resetTilt = () => {
    setTiltCoordinates({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const buttonClasses = `
    relative 
    ${variant === 'primary' ? 'bg-gsai-red text-white' : 'bg-gsai-gold text-black'}
    py-3 px-6 
    rounded-md 
    font-bold 
    uppercase 
    tracking-wider
    overflow-hidden
    transform-gpu
    transition-all 
    duration-300 
    shadow-lg
  `;
  
  // 3D styles
  const buttonStyle = {
    transform: `perspective(1000px) rotateX(${tiltCoordinates.x}deg) rotateY(${tiltCoordinates.y}deg) ${isHovered ? 'scale3d(1.05, 1.05, 1.05)' : 'scale3d(1, 1, 1)'}`,
    transformStyle: 'preserve-3d' as const,
    boxShadow: isHovered
      ? `0 10px 25px rgba(0, 0, 0, 0.3), 
         0 0 20px ${variant === 'primary' ? 'rgba(234, 56, 76, 0.5)' : 'rgba(255, 204, 0, 0.5)'}`
      : `0 4px 15px rgba(0, 0, 0, 0.2)`,
  };

  // Shine effect
  const shineStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `linear-gradient(
      135deg,
      rgba(255,255,255,0.25) 0%,
      rgba(255,255,255,0) 60%
    )`,
    transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.5s ease',
  };

  // Inner shadow effect
  const innerShadowStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.3)',
    borderRadius: '0.375rem',
    opacity: 0.5,
  };

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={resetTilt}
        style={buttonStyle}
      >
        <div style={shineStyle} />
        <div style={innerShadowStyle} />
        <span style={{ position: 'relative', zIndex: 2 }}>{label}</span>
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetTilt}
      style={buttonStyle}
    >
      <div style={shineStyle} />
      <div style={innerShadowStyle} />
      <span style={{ position: 'relative', zIndex: 2 }}>{label}</span>
    </button>
  );
};

export default CTAButton;
