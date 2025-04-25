
import React, { Suspense, lazy, useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';

// Lazy load components for better performance
const About = lazy(() => import('@/components/About'));
const Founder = lazy(() => import('@/components/Founder'));
const Programs = lazy(() => import('@/components/Programs'));
const Gallery = lazy(() => import('@/components/Gallery'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Contact = lazy(() => import('@/components/Contact'));
const Affiliations = lazy(() => import('@/components/Affiliations'));
const Footer = lazy(() => import('@/components/Footer'));

// Enhanced Loading fallback with animation
const SectionLoader = () => (
  <div className="w-full py-16 flex items-center justify-center">
    <div className="animate-pulse-glow w-8 h-8 rounded-full bg-gsai-red"></div>
  </div>
);

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  
  // Trigger sections to become visible with staggered timing
  useEffect(() => {
    setIsMounted(true);
    
    const sectionIds = ['about', 'founder', 'programs', 'gallery', 'faq', 'contact', 'affiliations', 'footer'];
    
    sectionIds.forEach((section, index) => {
      setTimeout(() => {
        setVisibleSections(prev => ({
          ...prev,
          [section]: true
        }));
      }, index * 200); // Stagger the sections appearance
    });
  }, []);

  // Set up intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    // Observe all sections with animation classes
    document.querySelectorAll('.section-animate').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.section-animate').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [isMounted]);

  return (
    <div className="font-sans min-h-screen bg-black overflow-x-hidden">
      <NavBar />

      {/* Hero section always visible */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Content sections with progressive loading */}
      <div className="relative z-20">
        <div id="aboutSection" className="section-animate opacity-0">
          {(isMounted && visibleSections.about) && (
            <Suspense fallback={<SectionLoader />}>
              <About />
            </Suspense>
          )}
        </div>

        <div id="founderSection" className="section-animate opacity-0">
          {(isMounted && visibleSections.founder) && (
            <Suspense fallback={<SectionLoader />}>
              <Founder />
            </Suspense>
          )}
        </div>

        <div id="programsSection" className="section-animate opacity-0">
          {(isMounted && visibleSections.programs) && (
            <Suspense fallback={<SectionLoader />}>
              <Programs />
            </Suspense>
          )}
        </div>

        <div id="gallerySection" className="section-animate opacity-0">
          {(isMounted && visibleSections.gallery) && (
            <Suspense fallback={<SectionLoader />}>
              <Gallery />
            </Suspense>
          )}
        </div>

        <div id="faqSection" className="section-animate opacity-0">
          {(isMounted && visibleSections.faq) && (
            <Suspense fallback={<SectionLoader />}>
              <FAQ />
            </Suspense>
          )}
        </div>

        <div id="contactSection" className="section-animate opacity-0">
          {(isMounted && visibleSections.contact) && (
            <Suspense fallback={<SectionLoader />}>
              <Contact />
            </Suspense>
          )}
        </div>

        <div id="affiliationsSection" className="section-animate opacity-0">
          {(isMounted && visibleSections.affiliations) && (
            <Suspense fallback={<SectionLoader />}>
              <Affiliations />
            </Suspense>
          )}
        </div>

        <div id="footerSection" className="section-animate opacity-0">
          {(isMounted && visibleSections.footer) && (
            <Suspense fallback={<SectionLoader />}>
              <Footer />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
