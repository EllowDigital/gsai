
import { useEffect, useRef, RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
  animationType?: 'fade' | 'slide' | 'zoom' | 'flip';
  direction?: 'up' | 'down' | 'left' | 'right';
}

/**
 * Enhanced hook to add scroll-triggered animations to elements with improved performance
 */
export const useScrollAnimation = <T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
): RefObject<T> => {
  const elementRef = useRef<T>(null);
  const { 
    threshold = 0.1, 
    rootMargin = '0px 0px -10% 0px',
    once = true,
    delay = 0,
    animationType = 'fade',
    direction = 'up'
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add appropriate classes based on animation type
    element.classList.add('scroll-animate');
    element.classList.add(`animate-${animationType}-${direction}`);
    
    // Apply delay if specified
    if (delay > 0) {
      element.style.transitionDelay = `${delay}ms`;
    }
    
    // Use Intersection Observer API for better performance than scroll listeners
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Use requestAnimationFrame to optimize the timing of class changes
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              (entry.target as HTMLElement).classList.add('visible');
              // Add will-change before animation starts
              (entry.target as HTMLElement).style.willChange = 'opacity, transform';
              
              // Set a timeout to remove will-change after animation completes
              setTimeout(() => {
                (entry.target as HTMLElement).style.willChange = 'auto';
              }, 1000); // Typical animation duration
              
              if (once) {
                observer.unobserve(entry.target);
              }
            });
          } else if (!once) {
            requestAnimationFrame(() => {
              (entry.target as HTMLElement).classList.remove('visible');
            });
          }
        });
      },
      { threshold, rootMargin }
    );

    // Batch DOM operations
    requestAnimationFrame(() => {
      observer.observe(element);
    });

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, once, delay, animationType, direction]);

  return elementRef;
};

export default useScrollAnimation;
