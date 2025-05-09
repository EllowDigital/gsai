
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import MainContent from '@/components/MainContent';
import { useLocation } from 'react-router-dom';
import '@/styles/section-styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/SEO';
import { useAppStore } from '@/store/useAppStore';

const Index = () => {
  const location = useLocation();
  const isLoading = useAppStore(state => state.isLoading);
  const setLoading = useAppStore(state => state.setLoading);
  const { visibleSections } = useAppStore();

  // Handle loading state for smoother transitions
  useEffect(() => {
    // Simulate loading for smoother transitions
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [setLoading]);

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
      <SEO />
      
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
            <header>
              <NavBar />
            </header>
            
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
                aria-label="Scroll to top"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-hidden="true">
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
