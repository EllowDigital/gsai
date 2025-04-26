import { useState, useEffect, useCallback } from 'react';

export const usePageSections = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  // Set up the IntersectionObserver to animate sections when they come into view
  const setupIntersectionObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame for smoother transitions
            requestAnimationFrame(() => {
              entry.target.classList.add('animate-fade-in-up', 'opacity-100');
              entry.target.classList.remove('opacity-0');
              observer.unobserve(entry.target); // Unobserve after animation
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    // Observe all sections with the class 'section-animate'
    document.querySelectorAll('.section-animate').forEach((section) => {
      observer.observe(section);
    });

    return observer;
  }, []);

  // Handle visibility of sections on page load
  useEffect(() => {
    setIsMounted(true);

    const sectionIds = [
      'about', 'founder', 'programs', 'testimonials', 'gallery', 'faq', 'contact', 'affiliations', 'footer'
    ];

    const scheduleVisibility = (index: number) => {
      if (index >= sectionIds.length) return;

      // Schedule the next section to be made visible after a delay
      const scheduleNext = () => {
        setTimeout(() => scheduleVisibility(index + 1), 200); // Delay for staggered visibility
      };

      // Check for requestIdleCallback support
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          setVisibleSections(prev => ({ ...prev, [sectionIds[index]]: true }));
          scheduleNext();
        }, { timeout: 1000 });
      } else {
        setTimeout(() => {
          setVisibleSections(prev => ({ ...prev, [sectionIds[index]]: true }));
          scheduleNext();
        }, 200 * index);
      }
    };

    scheduleVisibility(0); // Start making sections visible after page load
  }, []);

  // Set up the IntersectionObserver when the component mounts
  useEffect(() => {
    if (isMounted) {
      const observer = setupIntersectionObserver();

      return () => observer.disconnect(); // Cleanup on unmount
    }
  }, [isMounted, setupIntersectionObserver]);

  return { isMounted, visibleSections };
};
