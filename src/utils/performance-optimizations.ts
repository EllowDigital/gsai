
/**
 * Utility functions for optimizing website performance
 */

interface DebouncedFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void;
  cancel: () => void;
}

/**
 * Creates a debounced function that delays invoking the provided function
 * until after the specified wait time has elapsed since the last invocation.
 * 
 * @param func The function to debounce
 * @param wait Wait time in milliseconds
 * @returns Debounced function with cancel method
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): DebouncedFunction<T> {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = function(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  } as DebouncedFunction<T>;

  debounced.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}

/**
 * Creates a throttled function that only invokes the provided function
 * at most once per every specified interval.
 * 
 * @param func The function to throttle
 * @param limit Limit time in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return function(...args: Parameters<T>): void {
    if (!inThrottle) {
      func(...args);
      lastRan = Date.now();
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

/**
 * Optimizes image loading by preloading important images
 * @param imageSources Array of image URLs to preload
 * @returns Promise that resolves when all images have been preloaded
 */
export function preloadImages(imageSources: string[]): Promise<void[]> {
  const imagePromises = imageSources.map(src => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => resolve(); // Resolve even on error to prevent blocking
    });
  });
  
  return Promise.all(imagePromises);
}

/**
 * Checks if the device is a low-end device based on hardware concurrency
 * @returns Boolean indicating if the device is low-end
 */
export function isLowEndDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  
  // Check hardware concurrency (CPU cores)
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
    return true;
  }
  
  // Check device memory if available (in GB)
  if ('deviceMemory' in navigator && (navigator as any).deviceMemory <= 4) {
    return true;
  }
  
  // Check if data saver is enabled
  if (navigator.connection && 'saveData' in navigator.connection && (navigator.connection as any).saveData) {
    return true;
  }
  
  return false;
}

/**
 * Adds intersection observer to lazy load elements
 * @param selector CSS selector for elements to lazy load
 * @param loadCallback Function to call when element comes into view
 */
export function setupLazyLoading(
  selector: string, 
  loadCallback: (element: Element) => void
): void {
  if (!('IntersectionObserver' in window)) {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll(selector).forEach(element => {
      loadCallback(element);
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadCallback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '100px',
    threshold: 0.01
  });

  document.querySelectorAll(selector).forEach(element => {
    observer.observe(element);
  });
}

/**
 * Applies critical CSS inline for faster initial rendering
 * @param css CSS string to apply
 */
export function applyCriticalCSS(css: string): void {
  if (typeof document === 'undefined') return;
  
  const style = document.createElement('style');
  style.innerHTML = css;
  document.head.appendChild(style);
}
