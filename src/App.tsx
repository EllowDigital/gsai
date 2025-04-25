
import React, { useState, useEffect, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from './components/Preloader'; 
import PWA from './pwa';

// Lazy load pages
const Index = React.lazy(() => import("./pages/Index"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

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

    // Preload essential assets
    const preloadImages = ['/images/logo.png', '/images/founder.webp', '/images/india.png'];
    let loadedCount = 0;

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === preloadImages.length) {
          // Minimum loading time for better UX
          setTimeout(() => {
            setShowPreloader(false);
            setTimeout(() => setContentLoaded(true), 500);
          }, 1800);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === preloadImages.length) {
          setTimeout(() => {
            setShowPreloader(false);
            setTimeout(() => setContentLoaded(true), 500);
          }, 1800);
        }
      };
    });

    // Fallback in case images don't load
    const fallbackTimer = setTimeout(() => {
      setShowPreloader(false);
      setTimeout(() => setContentLoaded(true), 500);
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <>
      <Preloader isVisible={showPreloader} />

      {(contentLoaded || !showPreloader) && (
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Suspense fallback={
                <div className="w-full h-screen flex items-center justify-center bg-black">
                  <div className="animate-pulse-glow w-12 h-12 rounded-full bg-gsai-red"></div>
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
            <PWA />
          </TooltipProvider>
        </QueryClientProvider>
      )}
    </>
  );
};

export default App;
