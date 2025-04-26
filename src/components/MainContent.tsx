import { Suspense, lazy } from 'react';
import SectionLoader from './SectionLoader';

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
  isMounted: boolean;
  visibleSections: Record<string, boolean>;
}

const MainContent = ({ isMounted, visibleSections }: MainContentProps) => {
  return (
    <div className="relative z-20">
      {/* Sections */}
      <section id="aboutSection" className="section-animate opacity-0">
        {(isMounted && visibleSections.about) && (
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
        )}
      </section>

      <section id="founderSection" className="section-animate opacity-0">
        {(isMounted && visibleSections.founder) && (
          <Suspense fallback={<SectionLoader />}>
            <Founder />
          </Suspense>
        )}
      </section>

      <section id="programsSection" className="section-animate opacity-0">
        {(isMounted && visibleSections.programs) && (
          <Suspense fallback={<SectionLoader />}>
            <Programs />
          </Suspense>
        )}
      </section>

      <section id="testimonialsSection" className="section-animate opacity-0">
        {(isMounted && visibleSections.testimonials) && (
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
        )}
      </section>

      <section id="gallerySection" className="section-animate opacity-0">
        {(isMounted && visibleSections.gallery) && (
          <Suspense fallback={<SectionLoader />}>
            <Gallery />
          </Suspense>
        )}
      </section>

      <section id="faqSection" className="section-animate opacity-0">
        {(isMounted && visibleSections.faq) && (
          <Suspense fallback={<SectionLoader />}>
            <FAQ />
          </Suspense>
        )}
      </section>

      <section id="contactSection" className="section-animate opacity-0">
        {(isMounted && visibleSections.contact) && (
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        )}
      </section>

      <section id="affiliationsSection" className="section-animate opacity-0">
        {(isMounted && visibleSections.affiliations) && (
          <Suspense fallback={<SectionLoader />}>
            <Affiliations />
          </Suspense>
        )}
      </section>

      <section id="footerSection" className="section-animate opacity-0">
        {(isMounted && visibleSections.footer) && (
          <Suspense fallback={<SectionLoader />}>
            <Footer />
          </Suspense>
        )}
      </section>
    </div>
  );
};

export default MainContent;
