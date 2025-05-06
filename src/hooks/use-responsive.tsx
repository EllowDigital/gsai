
import { useState, useEffect } from 'react';

// Breakpoint configuration
const breakpoints = {
  xs: 400,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1400,
};

type BreakpointKey = keyof typeof breakpoints;

/**
 * Hook that returns the current breakpoint based on window width
 * @returns Current breakpoint key ('xs', 'sm', 'md', 'lg', 'xl', '2xl')
 */
export function useBreakpoint() {
  // Initialize with default value based on viewport width
  const getInitialBreakpoint = (): BreakpointKey => {
    // If window is not available (SSR), default to 'md'
    if (typeof window === 'undefined') return 'md';
    
    const width = window.innerWidth;
    
    if (width < breakpoints.xs) return 'xs';
    if (width < breakpoints.sm) return 'xs';
    if (width < breakpoints.md) return 'sm';
    if (width < breakpoints.lg) return 'md';
    if (width < breakpoints.xl) return 'lg';
    if (width < breakpoints['2xl']) return 'xl';
    return '2xl';
  };

  const [breakpoint, setBreakpoint] = useState<BreakpointKey>(getInitialBreakpoint);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < breakpoints.xs) {
        setBreakpoint('xs');
      } else if (width < breakpoints.sm) {
        setBreakpoint('xs');
      } else if (width < breakpoints.md) {
        setBreakpoint('sm');
      } else if (width < breakpoints.lg) {
        setBreakpoint('md');
      } else if (width < breakpoints.xl) {
        setBreakpoint('lg');
      } else if (width < breakpoints['2xl']) {
        setBreakpoint('xl');
      } else {
        setBreakpoint('2xl');
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away to set initial size
    handleResize();
    
    // Clean up on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures effect runs only on mount and unmount

  return breakpoint;
}

/**
 * Hook that checks if the current breakpoint matches or is larger than the specified breakpoint
 * @param breakpoint - The breakpoint to check against ('sm', 'md', 'lg', 'xl', '2xl')
 * @returns Boolean indicating whether current width is above the specified breakpoint
 */
export function useMediaQuery(breakpoint: BreakpointKey) {
  // We get the px value for the desired breakpoint
  const minWidth = breakpoints[breakpoint];
  
  // State to hold the matched state
  const [matches, setMatches] = useState<boolean>(() => {
    // If window is not available (SSR), return false by default
    if (typeof window === 'undefined') return false;
    return window.innerWidth >= minWidth;
  });

  useEffect(() => {
    // If window is not available, exit early
    if (typeof window === 'undefined') return;
    
    // Handler to call on window resize
    const handleResize = () => {
      setMatches(window.innerWidth >= minWidth);
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away to set initial matched state
    handleResize();
    
    // Clean up on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [minWidth]); // Only re-run effect if minWidth changes

  return matches;
}

/**
 * Hook that returns true if the screen is considered mobile
 * @param maxWidth - Maximum width to consider as mobile (default: 'md' breakpoint)
 * @returns Boolean indicating whether current device is mobile
 */
export function useMobileDetect(maxWidth: BreakpointKey = 'md') {
  // We invert the matches value to get isMobile
  const isMobile = !useMediaQuery(maxWidth);
  
  // Additional mobile detection based on user agent for more accuracy
  const [hasTouchScreen, setHasTouchScreen] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    
    // Check for touch support
    const hasTouch = Boolean(
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0
    );
    
    // Basic UA detection for mobile
    const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    return hasTouch && mobileUA;
  });
  
  // We consider a device mobile if it either has a small viewport OR has touch capabilities + mobile UA
  return isMobile || hasTouchScreen;
}
