
import { useEffect, useState, useRef, RefObject } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  disabled?: boolean;
}

export function useParallax<T extends HTMLElement>(
  options: ParallaxOptions = {}
): RefObject<T> {
  const {
    speed = 0.2,
    direction = "vertical",
    reverse = false,
    disabled = false,
  } = options;

  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const frameId = useRef<number | null>(null);

  const multiplier = reverse ? -1 : 1;

  // Intersection Observer to check if the element is in the viewport
  useEffect(() => {
    if (disabled) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [disabled]);

  // Handle scroll event using requestAnimationFrame for smoother performance
  useEffect(() => {
    if (disabled || !isInView || !ref.current) return;

    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const viewportCenter = windowHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      // Apply parallax effect with acceleration for smoother motion
      setOffset(distanceFromCenter * speed * multiplier);
      
      // Continue animation loop
      frameId.current = requestAnimationFrame(handleScroll);
    };

    // Start animation loop
    frameId.current = requestAnimationFrame(handleScroll);

    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, [speed, reverse, disabled, isInView, multiplier]);

  // Apply transform to the element based on scroll position
  useEffect(() => {
    if (disabled || !ref.current) return;

    const transform =
      direction === "vertical"
        ? `translateY(${offset}px)`
        : `translateX(${offset}px)`;

    const element = ref.current;
    element.style.transform = transform;
    element.style.transition = "transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)";
    element.style.willChange = "transform";
    
    return () => {
      if (element) {
        element.style.willChange = 'auto';
      }
    };
  }, [offset, direction, disabled]);

  return ref;
}
