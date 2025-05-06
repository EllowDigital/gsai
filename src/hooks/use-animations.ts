
import { useEffect, useState, useRef, RefObject } from 'react';
import { useInView } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';

interface UseAnimationOptions {
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
  triggerOnce?: boolean;
  id?: string;
}

/**
 * A hook for managing element visibility animations with accessibility considerations.
 * Integrates with global state for coordinating animations across components.
 */
export function useAnimation<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  once = true,
  rootMargin = "0px",
  triggerOnce = true,
  id
}: UseAnimationOptions = {}) {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    margin: rootMargin,
    amount: threshold
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const setVisibleSection = useAppStore(state => state.setVisibleSection);
  const prefersReducedMotion = useReducedMotion();

  // Effect to track element visibility status
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setShouldAnimate(true);
      if (once) {
        setHasAnimated(true);
      }
      
      // Update global state if section ID provided
      if (id) {
        setVisibleSection(id, true);
      }
    } else if (!isInView && !once && hasAnimated) {
      setShouldAnimate(false);
    }
  }, [isInView, hasAnimated, once, id, setVisibleSection]);

  return { ref, isInView, shouldAnimate, prefersReducedMotion };
}

/**
 * Hook to detect user's preference for reduced motion
 */
function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook for smooth scroll animation with accessibility considerations
 */
export function useSmoothScroll() {
  const prefersReducedMotion = useReducedMotion();
  
  const scrollToSection = (id: string, options = { offset: 80 }) => {
    const element = document.getElementById(id);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.pageYOffset - options.offset;

    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });

    // Set focus for accessibility
    element.setAttribute('tabindex', '-1');
    element.focus({ preventScroll: true });
  };

  return { scrollToSection };
}
