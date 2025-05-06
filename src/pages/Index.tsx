
import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import { Helmet } from 'react-helmet-async';
import MainContent from '@/components/MainContent';
import { useLocation } from 'react-router-dom';
import '@/styles/section-styles.css';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Handle direct navigation to a section via URL hash or state
  useEffect(() => {
    // Handle URL hash navigation
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # character
      scrollToSection(sectionId);
    }
    
    // Handle navigation from state (used when coming from another page)
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      scrollToSection(sectionId);
    }

    // Simulate loading for smoother transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.hash, location.state]);

  // Helper function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Short delay to ensure everything is loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Add focus for accessibility and to ensure the browser's attention
          element.setAttribute('tabindex', '-1');
          element.focus({ preventScroll: true });
        }, 200);
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Ghatak Sports Academy | Premier International Martial Arts Training in India</title>
        <meta name="description"
          content="Join Ghatak Sports Academy - India's elite international standard martial arts training center. Expert coaching in karate, taekwondo, MMA, boxing, and more with world-class facilities." />
        <link rel="canonical" href="https://ghatakgsai.netlify.app" />
        {/* Structured data added through Helmet */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "SportsOrganization",
            "name": "Ghatak Sports Academy India",
            "url": "https://ghatakgsai.netlify.app",
            "logo": "https://ghatakgsai.netlify.app/images/logo.png",
            "description": "India's premier international standard martial arts training academy offering world-class training in karate, taekwondo, boxing, MMA, and self-defense with international accreditation.",
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
            "sameAs": [
              "https://www.facebook.com/ghatakgsai",
              "https://www.instagram.com/ghatak_gsai",
              "https://twitter.com/ghatakgsai"
            ]
          }
        `}</script>

        {/* Add preload for critical resources */}
        <link rel="preload" href="/images/logo.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Add optimized performance settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
      </Helmet>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20"
            >
              <img 
                src="/images/logo.png" 
                alt="Loading" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans min-h-screen bg-black w-full max-w-[100vw] overflow-x-hidden"
          >
            <NavBar />
            <main id="main-content" className="w-full overflow-x-hidden">
              <div className="relative z-10 w-full">
                <Hero />
              </div>
              <MainContent />
            </main>
            
            <div className="fixed bottom-6 right-6 z-50 hidden md:block">
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-3 rounded-full bg-gsai-red/90 text-white backdrop-blur-sm border border-white/10"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 15-6-6-6 6"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
