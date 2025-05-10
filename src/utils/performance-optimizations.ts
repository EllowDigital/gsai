
/**
 * Debounce function to limit the rate at which a function can fire
 * @param func The function to debounce
 * @param wait Wait time in ms
 * @param immediate Whether to invoke the function immediately
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait = 300,
  immediate = false
): { 
  (...args: Parameters<T>): ReturnType<T> | undefined;
  cancel: () => void; 
} {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  const debounced = function(this: any, ...args: Parameters<T>) {
    const context = this;
    
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) return func.apply(context, args);
  };
  
  debounced.cancel = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  return debounced;
}

/**
 * Throttle function to limit the rate at which a function can fire
 * @param func The function to throttle
 * @param wait Wait time in ms
 * @param options Throttle options
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait = 300,
  options: { leading?: boolean; trailing?: boolean } = {}
): { 
  (...args: Parameters<T>): ReturnType<T> | undefined;
  cancel: () => void; 
} {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let previous = 0;
  const { leading = true, trailing = true } = options;
  
  const throttled = function(this: any, ...args: Parameters<T>) {
    const now = Date.now();
    if (!previous && !leading) previous = now;
    
    const remaining = wait - (now - previous);
    const context = this;
    
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      
      previous = now;
      return func.apply(context, args);
    }
    
    if (!timeout && trailing) {
      timeout = setTimeout(() => {
        previous = !leading ? 0 : Date.now();
        timeout = null;
        func.apply(context, args);
      }, remaining);
    }
  };
  
  throttled.cancel = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    previous = 0;
  };
  
  return throttled;
}

/**
 * Preload images to improve performance
 * @param images Array of image URLs to preload
 */
export function preloadImages(images: string[]): void {
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

/**
 * Apply critical CSS inline to improve First Contentful Paint
 * @param css CSS string to apply
 */
export function applyCriticalCSS(css: string): void {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }
}

/**
 * Check if the device is a low-end device based on memory and CPU
 * @returns Boolean indicating if it's a low-end device
 */
export function isLowEndDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  
  // Check device memory (if available)
  const lowMemory = 'deviceMemory' in navigator && 
    // @ts-ignore - deviceMemory exists but TypeScript doesn't know about it
    (navigator.deviceMemory as number) < 4;
  
  // Check for slow connection
  let slowConnection = false;
  
  // Use optional chaining to avoid TypeScript errors
  // @ts-ignore - Some browsers support this
  if (navigator.connection) {
    // @ts-ignore - Some browsers support this
    const conn = navigator.connection;
    slowConnection = conn.saveData || 
      // @ts-ignore - Some browsers support this
      conn.effectiveType === 'slow-2g' || 
      // @ts-ignore - Some browsers support this
      conn.effectiveType === '2g' || 
      // @ts-ignore - Some browsers support this
      conn.effectiveType === '3g';
  }
  
  // Check for hardware concurrency
  const lowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  return lowMemory || slowConnection || lowCPU;
}
