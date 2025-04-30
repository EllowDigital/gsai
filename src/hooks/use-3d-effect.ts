import { useState, useEffect, useRef, MouseEvent } from "react";

interface Use3DEffectOptions {
  intensity?: number;
  perspective?: number;
  smooth?: number;
  scale?: boolean;
  shadow?: boolean;
}

export function use3DEffect<T extends HTMLElement = HTMLDivElement>(
  options: Use3DEffectOptions = {}
) {
  const {
    intensity = 20,
    perspective = 1000,
    smooth = 0.1,
    scale = true,
    shadow = true,
  } = options;

  const ref = useRef<T>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const frameRef = useRef<number>(0);
  const prevRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setPosition({ x, y });
  };

  // Reset position when mouse leaves
  useEffect(() => {
    if (!isHovered) {
      setPosition({ x: 0, y: 0 });
    }
  }, [isHovered]);

  // Update 3D transform based on position
  useEffect(() => {
    if (!isHovered) return;

    const updatePosition = () => {
      prevRef.current.x += (position.x - prevRef.current.x) * smooth;
      prevRef.current.y += (position.y - prevRef.current.y) * smooth;

      if (ref.current) {
        const rotateX = prevRef.current.y * intensity;
        const rotateY = -prevRef.current.x * intensity;

        ref.current.style.transform = `
          perspective(${perspective}px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
          ${scale ? " scale3d(1.05, 1.05, 1.05)" : ""}
        `;

        if (shadow) {
          ref.current.style.boxShadow = `
            ${-rotateY / 2}px ${rotateX / 2}px 30px rgba(0, 0, 0, 0.25)
          `;
        }
      }

      frameRef.current = requestAnimationFrame(updatePosition);
    };

    frameRef.current = requestAnimationFrame(updatePosition);

    return () => cancelAnimationFrame(frameRef.current);
  }, [position, intensity, perspective, smooth, scale, shadow, isHovered]);

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return {
    ref,
    style: {
      transformStyle: "preserve-3d",
      transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out",
    },
    handleMouseEnter: () => setIsHovered(true),
    handleMouseLeave: () => setIsHovered(false),
    handleMouseMove,
  };
}
