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
 * Enhanced hook to add scroll-triggered animations to elements with improved performance.
 */
export const useScrollAnimation = <T extends HTMLElement>(options: ScrollAnimationOptions = {}): RefObject<T> => {
  const elementRef = useRef<T>(null);

  // Destructuring options with default values
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

    // Add appropriate initial animation classes
    element.classList.add('scroll-animate', `animate-${animationType}-${direction}`);

    // Apply delay if specified
    if (delay > 0) {
      element.style.transitionDelay = `${delay}ms`;
    }

    // Intersection Observer to trigger animations when the element enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              const target = entry.target as HTMLElement;

              // Add visibility class to trigger animation
              target.classList.add('visible');
              target.style.willChange = 'opacity, transform';

              // Remove will-change after animation completes to optimize performance
              setTimeout(() => {
                target.style.willChange = 'auto';
              }, 1000); // Timeout should match animation duration

              // If 'once' is true, stop observing after first visibility
              if (once) {
                observer.unobserve(target);
              }
            });
          } else if (!once) {
            requestAnimationFrame(() => {
              const target = entry.target as HTMLElement;
              target.classList.remove('visible');
            });
          }
        });
      },
      { threshold, rootMargin }
    );

    // Start observing the element
    observer.observe(element);

    return () => {
      // Cleanup observer on component unmount or when element is no longer present
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, once, delay, animationType, direction]);

  return elementRef;
};

export default useScrollAnimation;
