
import React, { useState, useEffect, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Preloader from './components/Preloader'; 
import PWA from './pwa';

// Lazy load pages
const Index = React.lazy(() => import("./pages/Index"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const Terms = React.lazy(() => import("./pages/Terms"));

// Create QueryClient with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  }
});

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Check if page is being reloaded
    const navigationEntries = performance.getEntriesByType("navigation");
    const isReload = navigationEntries.length > 0 && 
                     (navigationEntries[0] as PerformanceNavigationTiming).type === "reload";
    
    if (isReload) {
      setShowPreloader(false);
      setContentLoaded(true);
      return;
    }

    // Critical resources to preload
    const preloadImages = ['/images/logo.png', '/images/founder.webp', '/images/india.png'];
    let loadedCount = 0;
    let minWaitComplete = false;
    
    // Use Promise.all with timeout for better performance
    Promise.all(
      preloadImages.map(
        src => new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Continue even if image fails
        })
      )
    ).then(() => {
      if (minWaitComplete) {
        setShowPreloader(false);
        setTimeout(() => setContentLoaded(true), 300);
      } else {
        loadedCount = preloadImages.length;
      }
    });

    // Minimum loading time for better UX
    setTimeout(() => {
      minWaitComplete = true;
      if (loadedCount === preloadImages.length) {
        setShowPreloader(false);
        setTimeout(() => setContentLoaded(true), 300);
      }
    }, 1500);

    // Fallback in case images don't load
    const fallbackTimer = setTimeout(() => {
      setShowPreloader(false);
      setTimeout(() => setContentLoaded(true), 300);
    }, 2500);

    return () => clearTimeout(fallbackTimer);
  }, []);
  
  // Track page load metrics
  useEffect(() => {
    if (contentLoaded) {
      const recordPageMetrics = () => {
        // Report Core Web Vitals
        if (window.performance && 'PerformanceObserver' in window) {
          try {
            // This is just for logging - metrics object is not used elsewhere
            const performanceEntries = performance.getEntriesByType('navigation');
            
            if ('getEntriesByName' in performance) {
              const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
              if (navEntry) {
                const pageLoadTime = navEntry.loadEventEnd - navEntry.startTime;
                console.log(`Full page load: ${pageLoadTime.toFixed(0)}ms`);
              }
            }
            
            // Log performance in console for debugging
            console.log('Performance metrics collected');
          } catch (err) {
            console.error('Error measuring performance:', err);
          }
        }
      };
      
      // Wait for the page to be fully loaded
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
      <Preloader isVisible={showPreloader} />

      {(contentLoaded || !showPreloader) && (
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Suspense fallback={
                <div className="w-full h-screen flex items-center justify-center bg-black" aria-label="Loading page">
                  <div className="animate-pulse-glow w-12 h-12 rounded-full bg-gsai-red" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
            <PWA />
          </TooltipProvider>
        </QueryClientProvider>
      )}
    </HelmetProvider>
  );
};

export default App;
