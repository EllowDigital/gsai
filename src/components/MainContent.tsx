
import { Suspense, lazy, useEffect, useState } from 'react';
import SectionLoader from './SectionLoader';

// Lazy load the components with priority
const About = lazy(() => import('@/components/About'));
const Founder = lazy(() => import('@/components/Founder'));
const Programs = lazy(() => import('@/components/Programs'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Gallery = lazy(() => import('@/components/Gallery'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Contact = lazy(() => import('@/components/Contact'));
const Affiliations = lazy(() => import('@/components/Affiliations'));
const Footer = lazy(() => import('@/components/Footer'));

// Observer options for better performance
const observerOptions = {
  rootMargin: '100px 0px',
  threshold: 0.1
};

const MainContent = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    about: false,
    founder: false,
    programs: false,
    testimonials: false,
    gallery: false,
    faq: false,
    contact: false,
    affiliations: false,
    footer: false
  });

  // Set up lazy loading based on scroll position
  useEffect(() => {
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setVisibleSections(prev => ({
            ...prev,
            [sectionId]: true
          }));
          
          // Once section is visible, stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe section placeholders
    const sections = document.querySelectorAll('[data-section-target]');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Preload all sections after a short delay for smoother UX
    const timer = setTimeout(() => {
      setVisibleSections({
        about: true,
        founder: true,
        programs: true,
        testimonials: true,
        gallery: true,
        faq: true,
        contact: true,
        affiliations: true,
        footer: true
      });
    }, 1500);

    // Cleanup
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative z-20">
      {/* About Section */}
      <section id="about" data-section-target="about">
        <Suspense fallback={<SectionLoader />}>
          {visibleSections.about && <About />}
        </Suspense>
      </section>

      {/* Founder Section */}
      <section id="founderSection" data-section-target="founder">
        <Suspense fallback={<SectionLoader />}>
          {visibleSections.founder && <Founder />}
        </Suspense>
      </section>

      {/* Programs Section */}
      <section id="programs" data-section-target="programs">
        <Suspense fallback={<SectionLoader />}>
          {visibleSections.programs && <Programs />}
        </Suspense>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" data-section-target="testimonials">
        <Suspense fallback={<SectionLoader />}>
          {visibleSections.testimonials && <Testimonials />}
        </Suspense>
      </section>

      {/* Gallery Section */}
      <section id="gallery" data-section-target="gallery">
        <Suspense fallback={<SectionLoader />}>
          {visibleSections.gallery && <Gallery />}
        </Suspense>
      </section>

      {/* FAQ Section */}
      <section id="faq" data-section-target="faq">
        <Suspense fallback={<SectionLoader />}>
          {visibleSections.faq && <FAQ />}
        </Suspense>
      </section>

      {/* Contact Section */}
      <section id="contact" data-section-target="contact">
        <Suspense fallback={<SectionLoader />}>
          {visibleSections.contact && <Contact />}
        </Suspense>
      </section>

      {/* Affiliations Section */}
      <section id="affiliationsSection" data-section-target="affiliations">
        <Suspense fallback={<SectionLoader />}>
          {visibleSections.affiliations && <Affiliations />}
        </Suspense>
      </section>

      {/* Footer - always visible */}
      <section id="footerSection" data-section-target="footer">
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </section>
    </div>
  );
};

export default MainContent;
