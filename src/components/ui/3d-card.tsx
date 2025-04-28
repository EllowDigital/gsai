
import React, { ReactNode } from "react";
import { use3DEffect } from "@/hooks/use-3d-effect";
import { cn } from "@/lib/utils";

interface Card3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  intensity?: number;
  glare?: boolean;
  shadow?: boolean;
  border?: boolean;
  className?: string;
  innerClassName?: string;
}

export function Card3D({
  children,
  intensity = 15,
  glare = true,
  shadow = true,
  border = true,
  className = "",
  innerClassName = "",
  ...props
}: Card3DProps) {
  const effect = use3DEffect({
    intensity,
    perspective: 1000,
    smooth: 0.1,
    scale: true,
    shadow
  });
  
  return (
    <div
      ref={effect.ref}
      onMouseEnter={effect.handleMouseEnter}
      onMouseLeave={effect.handleMouseLeave}
      onMouseMove={effect.handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-xl",
        "transition-all duration-300 ease-out",
        border && "border border-white/10 hover:border-gsai-red/30",
        shadow && "hover:shadow-2xl hover:shadow-gsai-red/20",
        className
      )}
      style={effect.style}
      {...props}
    >
      {glare && (
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            transform: "translateY(100%)",
            transition: "transform 0.5s ease-out",
          }}
        />
      )}
      
      <div className={cn("relative z-10", innerClassName)}>
        {children}
      </div>
    </div>
  );
}

export default Card3D;
