import { Suspense, lazy } from 'react';
import SectionLoader from './SectionLoader';

// Lazy load the components
const About = lazy(() => import('@/components/About'));
const Founder = lazy(() => import('@/components/Founder'));
const Programs = lazy(() => import('@/components/Programs'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Gallery = lazy(() => import('@/components/Gallery'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Contact = lazy(() => import('@/components/Contact'));
const Affiliations = lazy(() => import('@/components/Affiliations'));
const Footer = lazy(() => import('@/components/Footer'));

const MainContent = () => {
  return (
    <div className="relative z-20">
      {/* Sections */}
      <section id="aboutSection">
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
      </section>

      <section id="founderSection">
        <Suspense fallback={<SectionLoader />}>
          <Founder />
        </Suspense>
      </section>

      <section id="programsSection">
        <Suspense fallback={<SectionLoader />}>
          <Programs />
        </Suspense>
      </section>

      <section id="testimonialsSection">
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
      </section>

      <section id="gallerySection">
        <Suspense fallback={<SectionLoader />}>
          <Gallery />
        </Suspense>
      </section>

      <section id="faqSection">
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
      </section>

      <section id="contactSection">
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </section>

      <section id="affiliationsSection">
        <Suspense fallback={<SectionLoader />}>
          <Affiliations />
        </Suspense>
      </section>

      {/* Ensure footer is always rendered */}
      <section id="footerSection">
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </section>
    </div>
  );
};

export default MainContent;
