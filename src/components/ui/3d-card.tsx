
import React from "react";
import { cn } from "@/lib/utils";

export interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string; 
  rotationIntensity?: number;
  depthIntensity?: number;
  shadow?: boolean;
  glare?: boolean;
  border?: boolean;
  intensity?: number;
}

const Card3D = ({
  children,
  className,
  innerClassName,
  rotationIntensity = 10,
  depthIntensity = 10,
  shadow = false,
  glare = false,
  border = false,
  intensity = 10,
}: Card3DProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 });
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Use either rotationIntensity or intensity (for backward compatibility)
      const rotateIntensity = rotationIntensity || intensity;
      const rotateY = ((mouseX - centerX) / (rect.width / 2)) * rotateIntensity;
      const rotateX = ((mouseY - centerY) / (rect.height / 2)) * -rotateIntensity;

      setRotation({ x: rotateX, y: rotateY });
    },
    [rotationIntensity, intensity]
  );

  const handleMouseLeave = React.useCallback(() => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  }, []);

  const handleMouseEnter = React.useCallback(() => {
    setIsHovered(true);
  }, []);

  const transform = isHovered
    ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
    : "perspective(1000px) rotateX(0) rotateY(0)";

  const transitionDuration = isHovered ? "0.1s" : "0.5s";
  const cardStyleProps = {
    transform,
    transition: `transform ${transitionDuration} ease-out`,
    transformStyle: "preserve-3d" as const,
    boxShadow: shadow && isHovered ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : undefined,
  };

  const contentStyleProps = {
    transform: isHovered
      ? `translateZ(${depthIntensity}px)`
      : "translateZ(0)",
    transition: `transform ${transitionDuration} ease-out`,
    transformStyle: "preserve-3d" as const,
  };

  let cardClasses = cn(
    "card-3d w-full rounded-xl bg-transparent",
    border && "border border-gray-200 dark:border-gray-800",
    className
  );

  if (glare) {
    cardClasses += " relative overflow-hidden";
    // Note: We would implement glare effect here if needed
  }

  return (
    <div
      ref={cardRef}
      className={cardClasses}
      style={cardStyleProps}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div
        className={cn("w-full h-full tilt-card-inner overflow-hidden", innerClassName)}
        style={contentStyleProps}
      >
        {children}
      </div>
      {glare && isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: "linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.15) 40%, rgba(255, 255, 255, 0.2) 60%, transparent 80%)",
            transform: `translateX(${rotation.y * 3}px) translateY(${rotation.x * 3}px)`,
            transition: "transform 0.2s ease-out",
          }}
        />
      )}
    </div>
  );
};

export default Card3D;
