import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Preloader from './components/Preloader'; // Import the Preloader

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., API call, assets loading, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the preloader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return (
    <>
      {isLoading && <Preloader />} {/* Show preloader while loading */}
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
