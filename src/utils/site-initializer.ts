
import { detectWebGLSupport } from './webglDetection';
import { setupMobileOptimizations } from './mobile-optimizations';

/**
 * Initialize the site with various optimizations
 */
export function initializeSite() {
  console.log('Site initialized with optimizations');
  
  // Mobile-specific optimizations
  if (typeof window !== 'undefined' && 
      (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    setupMobileOptimizations();
  }
  
  // Set up proper viewport for all devices to ensure proper scrolling
  ensureProperViewport();
  
  // Fix CSS scrolling issues
  fixScrollingIssues();
  
  // Add additional performance monitors if needed
  setupPerformanceMonitoring();
  
  // Check WebGL support for 3D elements
  detectWebGLSupport();
}

/**
 * Ensures the viewport meta tag is correctly set for proper scrolling
 */
function ensureProperViewport() {
  if (typeof document === 'undefined') return;
  
  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta) {
    viewportMeta.setAttribute(
      'content', 
      'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, shrink-to-fit=no, user-scalable=yes'
    );
  }
}

/**
 * Fixes common CSS issues that prevent proper scrolling
 */
function fixScrollingIssues() {
  if (typeof document === 'undefined') return;
  
  // Apply CSS fixes for scrolling issues
  const style = document.createElement('style');
  style.textContent = `
    html, body {
      overflow-x: hidden;
      overflow-y: auto;
      width: 100%;
      height: auto;
      min-height: 100vh;
      position: relative;
      -webkit-overflow-scrolling: touch;
      touch-action: manipulation;
      scroll-behavior: smooth;
    }
    
    #root {
      min-height: 100vh;
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
    
    .section-container {
      width: 100%;
      overflow-x: hidden;
      overflow-y: visible;
    }
  `;
  
  document.head.appendChild(style);
  
  // Fix vh units on mobile
  const setVhProperty = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  setVhProperty();
  window.addEventListener('resize', setVhProperty);
  window.addEventListener('orientationchange', setVhProperty);
  
  // Enable smooth scrolling
  document.documentElement.style.scrollBehavior = 'smooth';
}

/**
 * Sets up performance monitoring for the site
 */
function setupPerformanceMonitoring() {
  // Record initial site load metrics when page loads
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (performance.getEntriesByType) {
        const navEntries = performance.getEntriesByType('navigation');
        if (navEntries.length > 0) {
          const navTiming = navEntries[0] as PerformanceNavigationTiming;
          console.log('Performance metrics:', {
            pageLoad: Math.round(navTiming.loadEventEnd - navTiming.startTime),
            domContentLoaded: Math.round(navTiming.domContentLoadedEventEnd - navTiming.startTime)
          });
        }
      }
    }, 0);
  });
}
