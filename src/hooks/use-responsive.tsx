
import { useState, useEffect } from 'react';

interface ResponsiveConfig {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

type BreakpointKey = keyof ResponsiveConfig;

const defaultBreakpoints: ResponsiveConfig = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

interface DeviceInfo {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLandscape: boolean;
  isPortrait: boolean;
  breakpoint: BreakpointKey;
  hasTouchScreen: boolean;
  supportsHover: boolean;
  prefersReducedMotion: boolean;
  prefersColorScheme: 'dark' | 'light' | 'no-preference';
}

/**
 * Custom hook for responsive design that provides comprehensive device information
 * @param customBreakpoints Optional custom breakpoints configuration
 * @returns Device information object including size, orientation, capabilities, etc.
 */
export function useResponsive(customBreakpoints?: Partial<ResponsiveConfig>): DeviceInfo {
  // Merge custom breakpoints with defaults
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };
  
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(() => {
    // Set initial values (will be updated in useEffect)
    const width = typeof window !== 'undefined' ? window.innerWidth : 0;
    const height = typeof window !== 'undefined' ? window.innerHeight : 0;
    
    // Determine breakpoint based on width
    let currentBreakpoint: BreakpointKey = 'xs';
    for (const bp of Object.keys(breakpoints) as BreakpointKey[]) {
      if (width >= breakpoints[bp]) {
        currentBreakpoint = bp;
      }
    }
    
    return {
      width,
      height,
      isMobile: width < breakpoints.md,
      isTablet: width >= breakpoints.md && width < breakpoints.lg,
      isDesktop: width >= breakpoints.lg,
      isLandscape: width > height,
      isPortrait: height >= width,
      breakpoint: currentBreakpoint,
      hasTouchScreen: false, // Will be updated in useEffect
      supportsHover: true,  // Will be updated in useEffect
      prefersReducedMotion: false, // Will be updated in useEffect
      prefersColorScheme: 'light', // Will be updated in useEffect
    };
  });
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Function to update device info based on current window dimensions and settings
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Determine current breakpoint
      let currentBreakpoint: BreakpointKey = 'xs';
      for (const bp of Object.keys(breakpoints) as BreakpointKey[]) {
        if (width >= breakpoints[bp]) {
          currentBreakpoint = bp;
        }
      }
      
      // Check for touch screen capability
      const hasTouchScreen = 
        ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0) || 
        // @ts-ignore - For older browsers
        (navigator.msMaxTouchPoints > 0);
      
      // Check if device supports hover
      const supportsHover = window.matchMedia('(hover: hover)').matches;
      
      // Check reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Check color scheme preference
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      let colorScheme: 'dark' | 'light' | 'no-preference' = 'light';
      
      if (darkModeMediaQuery.media === 'not all') {
        colorScheme = 'no-preference';
      } else {
        colorScheme = darkModeMediaQuery.matches ? 'dark' : 'light';
      }
      
      setDeviceInfo({
        width,
        height,
        isMobile: width < breakpoints.md,
        isTablet: width >= breakpoints.md && width < breakpoints.lg,
        isDesktop: width >= breakpoints.lg,
        isLandscape: width > height,
        isPortrait: height >= width,
        breakpoint: currentBreakpoint,
        hasTouchScreen,
        supportsHover,
        prefersReducedMotion,
        prefersColorScheme: colorScheme,
      });
    };
    
    // Initial update
    updateDeviceInfo();
    
    // Add event listeners for resize and orientation change
    window.addEventListener('resize', updateDeviceInfo);
    window.addEventListener('orientationchange', updateDeviceInfo);
    
    // Update when color scheme or reduced motion preferences change
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (darkModeMediaQuery.addEventListener) {
      darkModeMediaQuery.addEventListener('change', updateDeviceInfo);
      motionMediaQuery.addEventListener('change', updateDeviceInfo);
    } else if (darkModeMediaQuery.addListener) {
      // For older browsers
      darkModeMediaQuery.addListener(updateDeviceInfo);
      motionMediaQuery.addListener(updateDeviceInfo);
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
      
      if (darkModeMediaQuery.removeEventListener) {
        darkModeMediaQuery.removeEventListener('change', updateDeviceInfo);
        motionMediaQuery.removeEventListener('change', updateDeviceInfo);
      } else if (darkModeMediaQuery.removeListener) {
        darkModeMediaQuery.removeListener(updateDeviceInfo);
        motionMediaQuery.removeListener(updateDeviceInfo);
      }
    };
  }, [breakpoints]);
  
  return deviceInfo;
}
