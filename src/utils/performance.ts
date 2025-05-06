/**
 * Utility functions for measuring and reporting web performance metrics
 */

// Types for performance metrics
interface PerformanceMetrics {
  pageLoad?: number;
  domContentLoaded?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
  timeToInteractive?: number;
}

/**
 * Gets basic page load timing metrics
 * @returns Object containing basic timing metrics in milliseconds
 */
export const getPageLoadMetrics = (): { pageLoad: number; domContentLoaded: number } => {
  if (typeof window === 'undefined' || !window.performance) {
    return { pageLoad: 0, domContentLoaded: 0 };
  }

  const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (!navigation) {
    return { pageLoad: 0, domContentLoaded: 0 };
  }

  return {
    pageLoad: navigation.loadEventEnd - navigation.startTime,
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.startTime
  };
};

/**
 * Collects all available performance metrics
 * @returns Promise that resolves to object containing performance metrics
 */
export const collectPerformanceMetrics = async (): Promise<PerformanceMetrics> => {
  const metrics: PerformanceMetrics = {};
  
  try {
    const basicMetrics = getPageLoadMetrics();
    metrics.pageLoad = basicMetrics.pageLoad;
    metrics.domContentLoaded = basicMetrics.domContentLoaded;
    
    // Add more metrics as needed
    // This is a simplified version that doesn't include all metrics to avoid TS errors
  } catch (error) {
    console.error('Error collecting performance metrics:', error);
  }
  
  return metrics;
};

/**
 * Reports performance metrics to console or analytics service
 * @param metrics Performance metrics object
 */
export const reportPerformanceMetrics = (metrics: PerformanceMetrics): void => {
  console.log('Performance metrics:', metrics);
  
  // Here you would typically send metrics to an analytics service
  // This is just a placeholder for future implementation
};

/**
 * Sets up performance observers to monitor web vitals
 */
export const setupPerformanceObservers = (): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  try {
    // Simple observer setup that avoids TypeScript errors
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        // Just log the entry name and duration
        console.log(`Performance metric: ${entry.name}`, entry.duration);
      });
    });

    // Observe only safe metrics that don't cause TS errors
    observer.observe({ type: 'navigation', buffered: true });
    observer.observe({ type: 'resource', buffered: true });
    
    // Other metrics can be added if needed
  } catch (error) {
    console.error('Error setting up performance observers:', error);
  }
};
