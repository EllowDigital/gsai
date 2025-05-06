
import { useState, useEffect, Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import Preloader from './components/Preloader';
import PWA from './pwa';
import { SkipLink } from './components/ui/skip-link';
// Import react-toastify styles without the toast function
import "react-toastify/dist/ReactToastify.css";

// Optimized lazy loading with priority
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const RefundPolicy = lazy(() => import("./pages/refundpolicy"));

// Optimized QueryClient configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      gcTime: 300000,
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  }
});

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  // Handle resize events for responsive layout
  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Check if it's a page reload
    const navigationEntries = performance.getEntriesByType("navigation");
    const isReload = navigationEntries.length > 0 &&
      (navigationEntries[0] as PerformanceNavigationTiming).type === "reload";

    if (isReload) {
      // Skip preloader on reload for better UX
      setShowPreloader(false);
      setContentLoaded(true);
      return;
    }

    // Faster preloading of critical assets
    const preloadImages = ['/images/logo.png'];
    let loadedCount = 0;
    let minWaitComplete = false;

    // Preload critical images
    Promise.all(
      preloadImages.map(src => new Promise(resolve => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve; // Continue even if image fails
      }))
    ).then(() => {
      if (minWaitComplete) {
        setShowPreloader(false);
        setTimeout(() => setContentLoaded(true), 100);
      } else {
        loadedCount = preloadImages.length;
      }
    });

    // Shorter minimum wait time - even shorter on mobile devices
    const waitTime = deviceWidth < 768 ? 500 : 800;
    setTimeout(() => {
      minWaitComplete = true;
      if (loadedCount === preloadImages.length) {
        setShowPreloader(false);
        setTimeout(() => setContentLoaded(true), 100);
      }
    }, waitTime);

    // Shorter fallback timer - even shorter on mobile devices
    const fallbackTimer = setTimeout(() => {
      setShowPreloader(false);
      setTimeout(() => setContentLoaded(true), 100);
    }, deviceWidth < 768 ? 1200 : 1500);

    return () => clearTimeout(fallbackTimer);
  }, [deviceWidth]);

  // Performance metrics collection
  useEffect(() => {
    if (contentLoaded) {
      const recordPageMetrics = () => {
        if (window.performance && 'PerformanceObserver' in window) {
          try {
            const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            if (navEntry) {
              const pageLoadTime = navEntry.loadEventEnd - navEntry.startTime;
              console.log(`Full page load: ${pageLoadTime.toFixed(0)}ms`);
            }
          } catch (err) {
            console.error('Error measuring performance:', err);
          }
        }
      };

      if (document.readyState === 'complete') {
        recordPageMetrics();
      } else {
        window.addEventListener('load', recordPageMetrics, { once: true });
        return () => window.removeEventListener('load', recordPageMetrics);
      }
    }
  }, [contentLoaded]);

  return (
    <HelmetProvider>
      <ThemeProvider>
        {/* Skip link for keyboard accessibility */}
        <SkipLink skipTo="main-content" />
        
        <Preloader isVisible={showPreloader} />
        {(contentLoaded || !showPreloader) && (
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Suspense fallback={
                  <div className="w-full h-screen flex items-center justify-center bg-black" role="alert" aria-busy="true">
                    <div className="animate-pulse-glow w-12 h-12 rounded-full bg-gsai-red">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                }>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/refund-policy" element={<RefundPolicy />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </BrowserRouter>
              <PWA />
            </TooltipProvider>
          </QueryClientProvider>
        )}
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
