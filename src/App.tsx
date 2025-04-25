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
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
      setShowPreloader(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Always render Preloader and control visibility inside it */}
      <Preloader isVisible={showPreloader} />

      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<div>Loading content...</div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
          <PWA />
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
