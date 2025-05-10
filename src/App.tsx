
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

  // Fix mobile scrolling issue by ensuring proper viewport settings
  useEffect(() => {
    // Set proper viewport meta tag for mobile
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, shrink-to-fit=no, user-scalable=yes');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, shrink-to-fit=no, user-scalable=yes';
      document.head.appendChild(meta);
    }

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Fix issues with height calculations on mobile
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    updateVh();
    
    // Add styles to ensure content is scrollable
    const style = document.createElement('style');
    style.textContent = `
      html, body {
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
        position: relative;
        -webkit-overflow-scrolling: touch;
        touch-action: manipulation;
        height: auto;
        min-height: 100vh;
        min-height: calc(var(--vh, 1vh) * 100);
      }
      #root {
        min-height: 100vh;
        min-height: calc(var(--vh, 1vh) * 100);
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
        overflow-y: auto;
      }
      .section-container {
        width: 100%;
        overflow-x: hidden;
        overflow-y: visible;
      }
    `;
    document.head.appendChild(style);

    // Handle resize events for responsive layout
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
      updateVh();
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // Remove any touch event listeners that might be blocking scrolling
    const preventDefaultForScrollKeys = (e) => {
      if ([32, 33, 34, 35, 36, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
        return false;
      }
    };
    
    // Enable scrolling by removing any listeners that prevent default scrolling
    document.removeEventListener('touchmove', preventDefault, { passive: false });
    document.removeEventListener('keydown', preventDefaultForScrollKeys, { passive: false });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
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

// Helper function to prevent default event behavior
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.returnValue = false;
}

export default App;
