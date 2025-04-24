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

// Loading fallback with animation
const SectionLoader = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="animate-pulse-glow w-10 h-10 rounded-full bg-gsai-red"></div>
  </div>
);

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure components mount after the initial render for better UX
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="font-sans min-h-screen bg-black overflow-x-hidden">
      <NavBar />

      {/* Hero section */}
      <div className="relative">
        <Hero />
      </div>

      {/* Content sections with lazy loading */}
      <div className="relative">
        {isMounted && (
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
        )}

        {isMounted && (
          <Suspense fallback={<SectionLoader />}>
            <Founder />
          </Suspense>
        )}

        {isMounted && (
          <Suspense fallback={<SectionLoader />}>
            <Programs />
          </Suspense>
        )}

        {isMounted && (
          <Suspense fallback={<SectionLoader />}>
            <Gallery />
          </Suspense>
        )}

        {isMounted && (
          <Suspense fallback={<SectionLoader />}>
            <FAQ />
          </Suspense>
        )}

        {isMounted && (
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        )}

        {isMounted && (
          <Suspense fallback={<SectionLoader />}>
            <Affiliations />
          </Suspense>
        )}

        {isMounted && (
          <Suspense fallback={<SectionLoader />}>
            <Footer />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Index;
