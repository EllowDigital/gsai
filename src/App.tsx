import React, { useState, useEffect, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from './components/Preloader'; // Ensure correct import
import PWA from './pwa'; // Correctly imported your PWA component

// Lazy load pages
const Index = React.lazy(() => import("./pages/Index"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Initial loading state:', isLoading);

    // Skip preloader if it's a reload
    if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
      setIsLoading(false);
      return;
    }

    // Show preloader for 2 seconds
    const timer = setTimeout(() => {
      console.log('Preloader is now hidden');
      setIsLoading(false);
    }, 2000); // 2 seconds for testing

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  console.log('isLoading state:', isLoading);

  return (
    <>
      {isLoading && <Preloader />} {/* Show preloader while loading */}

      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* Wrap <Routes> inside <Suspense> for lazy-loaded components */}
            <Suspense fallback={<div>Loading content...</div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>

          {/* Add the PWA updater here */}
          <PWA />
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
