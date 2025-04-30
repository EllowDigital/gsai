
import { useEffect, useRef, RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
  animationType?: 'fade' | 'slide' | 'zoom' | 'flip';
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

/**
 * Enhanced hook to add scroll-triggered animations to elements with improved performance.
 */
export const useScrollAnimation = <T extends HTMLElement>(options: ScrollAnimationOptions = {}): RefObject<T> => {
  const elementRef = useRef<T>(null);

  // Destructuring options with default values
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -5% 0px',
    once = true,
    delay = 0,
    animationType = 'fade',
    direction = 'up',
    duration = 300
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add appropriate initial animation classes
    element.classList.add('scroll-animate');
    
    // Apply style for faster animations
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    element.style.willChange = 'opacity, transform';
    
    // Set initial invisible state but make sure it's not displayed: none
    element.style.opacity = '0';
    element.style.visibility = 'hidden';
    
    // Apply transform based on animation type and direction
    if (animationType === 'fade') {
      element.style.transform = 'translateY(10px)';
    } else if (animationType === 'slide') {
      if (direction === 'up') element.style.transform = 'translateY(20px)';
      if (direction === 'down') element.style.transform = 'translateY(-20px)';
      if (direction === 'left') element.style.transform = 'translateX(20px)';
      if (direction === 'right') element.style.transform = 'translateX(-20px)';
    } else if (animationType === 'zoom') {
      element.style.transform = 'scale(0.95)';
    } else if (animationType === 'flip') {
      element.style.transform = 'perspective(400px) rotateX(10deg)';
    }

    // Apply delay if specified
    if (delay > 0) {
      element.style.transitionDelay = `${delay}ms`;
    }

    // Intersection Observer to trigger animations when the element enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            
            // Show element with animation
            target.style.visibility = 'visible';
            target.style.opacity = '1';
            target.style.transform = 'translateY(0) scale(1) rotateX(0)';
            
            // Clean up properties after animation completes
            setTimeout(() => {
              if (target && once) {
                target.style.willChange = 'auto';
              }
            }, duration + delay);

            // If 'once' is true, stop observing after first visibility
            if (once) {
              observer.unobserve(target);
            }
          } else if (!once) {
            // Reset the element if it leaves viewport and 'once' is false
            const target = entry.target as HTMLElement;
            target.style.visibility = 'hidden';
            target.style.opacity = '0';
            
            // Reset transform based on animation type
            if (animationType === 'fade') {
              target.style.transform = 'translateY(10px)';
            } else if (animationType === 'slide') {
              if (direction === 'up') target.style.transform = 'translateY(20px)';
              if (direction === 'down') target.style.transform = 'translateY(-20px)';
              if (direction === 'left') target.style.transform = 'translateX(20px)';
              if (direction === 'right') target.style.transform = 'translateX(-20px)';
            } else if (animationType === 'zoom') {
              target.style.transform = 'scale(0.95)';
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    // Start observing the element
    observer.observe(element);

    return () => {
      // Cleanup observer on component unmount
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, once, delay, animationType, direction, duration]);

  return elementRef;
};

export default useScrollAnimation;
