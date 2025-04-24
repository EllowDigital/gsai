
import React, { Suspense, lazy } from 'react';
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

// Loading fallback
const SectionLoader = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="animate-pulse-glow w-10 h-10 rounded-full bg-gsai-red"></div>
  </div>
);

const Index = () => {
  return (
    <div className="font-sans min-h-screen bg-black">
      <NavBar />
      <Hero />
      
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Founder />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Programs />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Gallery />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Affiliations />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
