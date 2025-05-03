
import React from "react";
import { cn } from "@/lib/utils";

export interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string; // Added this property
  rotationIntensity?: number;
  depthIntensity?: number;
}

const Card3D = ({
  children,
  className,
  innerClassName, // Added this parameter
  rotationIntensity = 10,
  depthIntensity = 10,
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

      const rotateY = ((mouseX - centerX) / (rect.width / 2)) * rotationIntensity;
      const rotateX = ((mouseY - centerY) / (rect.height / 2)) * -rotationIntensity;

      setRotation({ x: rotateX, y: rotateY });
    },
    [rotationIntensity]
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
  };

  const contentStyleProps = {
    transform: isHovered
      ? `translateZ(${depthIntensity}px)`
      : "translateZ(0)",
    transition: `transform ${transitionDuration} ease-out`,
    transformStyle: "preserve-3d" as const,
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "card-3d w-full rounded-xl bg-transparent",
        className
      )}
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
    </div>
  );
};

export default Card3D;
