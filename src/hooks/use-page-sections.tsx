
import { useState, useEffect, useCallback } from 'react';

export const usePageSections = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  const setupIntersectionObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add('animate-fade-in-up');
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0');
              observer.unobserve(entry.target);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    document.querySelectorAll('.section-animate').forEach((section) => {
      observer.observe(section);
    });

    return observer;
  }, []);

  useEffect(() => {
    setIsMounted(true);

    const sectionIds = ['about', 'founder', 'programs', 'testimonials', 'gallery', 'faq', 'contact', 'affiliations', 'footer'];

    const scheduleVisibility = (index: number) => {
      if (index >= sectionIds.length) return;

      const scheduleNext = () => {
        setTimeout(() => scheduleVisibility(index + 1), 200);
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          setVisibleSections(prev => ({
            ...prev,
            [sectionIds[index]]: true
          }));
          scheduleNext();
        }, { timeout: 1000 });
      } else {
        setTimeout(() => {
          setVisibleSections(prev => ({
            ...prev,
            [sectionIds[index]]: true
          }));
          scheduleNext();
        }, 200 * index);
      }
    };

    scheduleVisibility(0);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = setupIntersectionObserver();

    return () => {
      observer.disconnect();
    };
  }, [isMounted, setupIntersectionObserver]);

  return { isMounted, visibleSections };
};
