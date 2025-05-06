
/**
 * Performance monitoring and optimization utilities
 * 
 * These functions help track, analyze, and improve application performance.
 */

/**
 * Measures a specific operation with the Performance API
 * 
 * @param name - The name of the performance mark
 * @param fn - The function to measure
 * @returns The result of the function execution
 */
export function measurePerformance<T>(name: string, fn: () => T): T {
  // Start performance measurement
  performance.mark(`${name}-start`);
  
  // Execute the function
  const result = fn();
  
  // End performance measurement
  performance.mark(`${name}-end`);
  performance.measure(name, `${name}-start`, `${name}-end`);
  
  // Log the measurement for development
  if (process.env.NODE_ENV === 'development') {
    const entries = performance.getEntriesByName(name);
    if (entries.length > 0) {
      console.log(`⚡️ ${name}: ${entries[0].duration.toFixed(2)}ms`);
    }
  }
  
  return result;
}

/**
 * Reports Web Vitals to analytics or console
 * 
 * @param metric - The metric object from web-vitals
 */
export function reportWebVitals(metric: any): void {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`📊 ${metric.name}: ${metric.value}`);
  }
  
  // Here you would send to your analytics service
  // Example: Analytics.send({ name: metric.name, value: metric.value });
}

/**
 * Creates a debounced version of a function
 * 
 * @param fn - The function to debounce
 * @param delay - The delay in milliseconds
 * @returns A debounced version of the function
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}

/**
 * Sets up performance observers for monitoring
 */
export function setupPerformanceObservers(): () => void {
  const observers: PerformanceObserver[] = [];
  
  try {
    // Create LCP observer
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      reportWebVitals({
        name: 'LCP',
        value: lastEntry.startTime,
        metric: lastEntry
      });
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    observers.push(lcpObserver);
    
    // Create FID observer
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      reportWebVitals({
        name: 'FID',
        value: lastEntry.processingStart - lastEntry.startTime,
        metric: lastEntry
      });
    });
    fidObserver.observe({ type: 'first-input', buffered: true });
    observers.push(fidObserver);
    
    // Create CLS observer
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      let cls = 0;
      entries.forEach(entry => {
        if (!(entry instanceof LayoutShift)) return;
        if (entry.hadRecentInput) return;
        cls += entry.value;
      });
      reportWebVitals({
        name: 'CLS',
        value: cls,
        metric: { value: cls }
      });
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });
    observers.push(clsObserver);
    
  } catch (e) {
    console.warn('Performance metrics could not be collected', e);
  }
  
  // Return disconnect function
  return () => observers.forEach(observer => observer.disconnect());
}
