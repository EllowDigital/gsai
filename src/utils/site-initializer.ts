
import { setupMobileOptimizations } from './mobile-optimizations';
import { preloadImages, applyCriticalCSS } from './performance-optimizations';

/**
 * Critical CSS applied immediately to prevent FOUC and optimize First Contentful Paint
 */
const criticalCSS = `
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    overscroll-behavior-y: none;
  }
  
  @keyframes pulseLoader {
    0%, 100% {
      opacity: 0.5;
      transform: scale(0.95);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .initial-loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    z-index: 9999;
  }
  
  .loader-icon {
    width: 70px;
    height: 70px;
    animation: pulseLoader 1.5s ease-in-out infinite;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/**
 * Critical images to preload immediately
 */
const criticalImages = [
  '/images/logo.png',
];

/**
 * Initialize the website by applying optimizations and performance improvements
 */
export function initializeSite(): void {
  try {
    // Apply critical CSS first for faster initial render
    applyCriticalCSS(criticalCSS);
    
    // Setup mobile optimizations
    if (typeof navigator !== 'undefined' && 
        (navigator.userAgent.match(/Android/i) || 
         navigator.userAgent.match(/iPhone|iPad|iPod/i))) {
      setupMobileOptimizations();
    }
    
    // Preload critical images
    preloadImages(criticalImages);
    
    // Add browsers hints for key resources
    if (typeof document !== 'undefined') {
      // Preconnect to key domains
      ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'].forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    }
    
    // Monitor for errors and log them
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        console.error('Runtime error caught:', {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        });
      });
    }
    
    console.log('Site initialized with optimizations');
  } catch (err) {
    console.error('Error during site initialization:', err);
  }
}
