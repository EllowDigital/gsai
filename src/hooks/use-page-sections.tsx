
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
              entry.target.classList.add('animate-fade-in', 'opacity-100');
              entry.target.classList.remove('opacity-0');
              // Unobserve after animation to improve performance
              observer.unobserve(entry.target);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    // Observe all sections with the class 'section-animate'
    document.querySelectorAll('.section-animate').forEach((section) => {
      observer.observe(section);
    });

    return observer;
  }, []);

  // Handle visibility of sections on page load - improved for speed
  useEffect(() => {
    setIsMounted(true);

    const sectionIds = [
      'about', 'founder', 'programs', 'testimonials', 
      'gallery', 'faq', 'contact', 'affiliations', 'footer'
    ];

    // Make all sections visible immediately instead of staggered
    setVisibleSections(
      sectionIds.reduce((acc, id) => ({ ...acc, [id]: true }), {})
    );
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
