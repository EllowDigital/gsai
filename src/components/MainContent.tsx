
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

interface MainContentProps {
  isMounted?: boolean;
  visibleSections?: Record<string, boolean>;
}

const MainContent: React.FC<MainContentProps> = () => {
  return (
    <div className="relative z-20">
      {/* Sections */}
      <section id="about">
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
      </section>

      <section id="founderSection">
        <Suspense fallback={<SectionLoader />}>
          <Founder />
        </Suspense>
      </section>

      <section id="programs">
        <Suspense fallback={<SectionLoader />}>
          <Programs />
        </Suspense>
      </section>

      <section id="testimonials">
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
      </section>

      <section id="gallery">
        <Suspense fallback={<SectionLoader />}>
          <Gallery />
        </Suspense>
      </section>

      <section id="faq">
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
      </section>

      <section id="contact">
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
