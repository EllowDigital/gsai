
import { useEffect, useState, useRef, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  disabled?: boolean;
}

export function useParallax<T extends HTMLElement>(options: ParallaxOptions = {}): RefObject<T> {
  const {
    speed = 0.2,
    direction = 'vertical',
    reverse = false,
    disabled = false
  } = options;
  
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const multiplier = reverse ? -1 : 1;

  useEffect(() => {
    if (disabled) return;
    
    const element = ref.current;
    if (!element) return;

    // Create intersection observer to check if element is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(element);

    // Handle scroll
    const handleScroll = () => {
      if (!isInView) return;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      const viewportCenter = windowHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      
      // Apply parallax effect based on distance from center
      setOffset(distanceFromCenter * speed * multiplier);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction, reverse, disabled, isInView, multiplier]);

  // Apply transform to the element
  useEffect(() => {
    if (disabled || !ref.current) return;
    
    const transform = direction === 'vertical'
      ? `translateY(${offset}px)`
      : `translateX(${offset}px)`;
    
    ref.current.style.transform = transform;
    ref.current.style.transition = 'transform 0.1s ease-out';
    ref.current.style.willChange = 'transform';
  }, [offset, direction, disabled]);

  return ref;
}
