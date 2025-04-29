
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Card3DProps = {
  children: React.ReactNode;
  className?: string;
  border?: boolean;
  intensity?: number;
  shadow?: boolean;
  glare?: boolean;
  borderRadius?: number;
  borderColor?: string;
  perspective?: number;
};

const Card3D = ({
  children,
  className,
  border = false,
  intensity = 10,
  shadow = false,
  glare = false,
  borderRadius = 8,
  borderColor = "rgba(255, 255, 255, 0.15)",
  perspective = 1000,
}: Card3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * intensity * -1;
    const rotateY = ((x - centerX) / centerX) * intensity;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <div
      ref={cardRef}
      className={cn("relative transition-transform duration-200 ease-out", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotate({ x: 0, y: 0 });
      }}
      style={{
        perspective: `${perspective}px`,
      }}
    >
      <div
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(0)`,
          transition: "transform 0.2s ease-out",
          transformStyle: "preserve-3d" as React.CSSProperties["transformStyle"],
          borderRadius: `${borderRadius}px`,
          border: border ? `1px solid ${borderColor}` : "none",
          boxShadow: shadow
            ? `0 10px 30px -10px rgba(0, 0, 0, 0.3), 
               0 5px 10px -5px rgba(0, 0, 0, 0.2)`
            : "none",
        }}
      >
        {children}
        
        {glare && isHovered && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: `${borderRadius}px`,
              background: `radial-gradient(
                circle at ${(rotate.y / intensity) * 50 + 50}% ${
                (rotate.x / intensity) * 50 + 50
              }%,
                rgba(255, 255, 255, 0.15) 0%,
                rgba(255, 255, 255, 0) 60%)`,
              pointerEvents: "none",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Card3D;
