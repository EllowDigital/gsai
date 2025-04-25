
import { Suspense, lazy, useEffect, useState, useCallback } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import { Helmet } from 'react-helmet-async';

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
  <div className="w-full py-16 flex items-center justify-center" aria-label="Loading section">
    <div className="animate-pulse-glow w-8 h-8 rounded-full bg-gsai-red"></div>
  </div>
);

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  
  // Optimized observer setup
  const setupIntersectionObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use this pattern to avoid closures that reference old state
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

    // Observe all sections with animation classes
    document.querySelectorAll('.section-animate').forEach((section) => {
      observer.observe(section);
    });

    return observer;
  }, []);
  
  // Handle section visibility with staggered timing
  useEffect(() => {
    setIsMounted(true);
    
    const sectionIds = ['about', 'founder', 'programs', 'gallery', 'faq', 'contact', 'affiliations', 'footer'];
    
    // Use requestIdleCallback for non-critical operations
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

  // Set up intersection observer for animations
  useEffect(() => {
    if (!isMounted) return;
    
    const observer = setupIntersectionObserver();

    return () => {
      observer.disconnect();
    };
  }, [isMounted, setupIntersectionObserver]);

  return (
    <>
      <Helmet>
        <title>Ghatak Sports Academy | Top Martial Arts Training in India</title>
        <meta name="description" 
              content="Join Ghatak Sports Academy - India's premier martial arts training center. Expert coaching in karate, taekwondo, self-defense, and more." />
        <link rel="canonical" href="https://ghatakgsai.netlify.app" />
        {/* Structured data added through Helmet */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "SportsOrganization",
            "name": "Ghatak Sports Academy India",
            "url": "https://ghatakgsai.netlify.app",
            "logo": "https://ghatakgsai.netlify.app/images/logo.png",
            "description": "India's premier martial arts training academy offering classes in karate, taekwondo, boxing, MMA, and self-defense.",
            "telephone": "+91 6394135988",
            "email": "ghatakgsai@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Naubasta Pulia, Takrohi Road, Amrai Gaon",
              "addressLocality": "Lucknow",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "226021",
              "addressCountry": "IN"
            },
            "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 06:00-20:00",
            "foundingDate": "2019-01-01",
            "foundingLocation": "Lucknow, India"
          }
        `}</script>
      </Helmet>

      <div className="font-sans min-h-screen bg-black overflow-x-hidden">
        <NavBar />

        {/* Main Content - Landmark for accessibility */}
        <main id="main-content">
          {/* Hero section always visible */}
          <div className="relative z-10">
            <Hero />
          </div>

          {/* Content sections with progressive loading */}
          <div className="relative z-20">
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
          </div>
        </main>

        <footer id="footerSection" className="section-animate opacity-0">
          {(isMounted && visibleSections.footer) && (
            <Suspense fallback={<SectionLoader />}>
              <Footer />
            </Suspense>
          )}
        </footer>
      </div>
    </>
  );
};

export default Index;
