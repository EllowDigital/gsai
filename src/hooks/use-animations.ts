
import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

/**
 * Hook for applying animations when elements come into view
 */
export const useScrollAnimation = (threshold = 0.1) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
  });

  return { ref: setRef, isInView };
};

/**
 * Hook for setting up multiple animation targets
 */
export const useMultipleAnimations = (count: number, threshold = 0.1) => {
  const [refs, setRefs] = useState<Array<HTMLElement | null>>(Array(count).fill(null));
  const [inView, setInView] = useState<boolean[]>(Array(count).fill(false));

  const updateRef = (index: number, element: HTMLElement | null) => {
    setRefs(prev => {
      const newRefs = [...prev];
      newRefs[index] = element;
      return newRefs;
    });
  };

  useEffect(() => {
    if (!refs.some(ref => ref !== null)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.findIndex(r => r === entry.target);
          if (index !== -1) {
            setInView(prev => {
              const newInView = [...prev];
              newInView[index] = entry.isIntersecting;
              return newInView;
            });
          }
        });
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    );

    refs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [refs, threshold]);

  return { refs, updateRef, inView };
};
