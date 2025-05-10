
/**
 * Utility functions for performance optimization
 */

// Reusable type for debounce and throttle functions
type AnyFunction = (...args: any[]) => any;

/**
 * Checks if the device is a low-end device based on hardware concurrency and memory
 * @returns boolean indicating if the device is low-end
 */
export function isLowEndDevice(): boolean {
  if (typeof window === 'undefined') return false;

  // Check hardware concurrency (CPU cores)
  const lowCpuCores = navigator.hardwareConcurrency !== undefined && 
                      navigator.hardwareConcurrency <= 4;

  // Check device memory (if available)
  // @ts-ignore - deviceMemory is not in the standard TypeScript navigator type
  const lowMemory = navigator.deviceMemory !== undefined && 
                   // @ts-ignore - deviceMemory is not in the standard TypeScript navigator type
                   navigator.deviceMemory <= 4;

  // Check if it's a mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // If mobile with low specs or has low memory explicitly reported, consider it low end
  return (isMobile && lowCpuCores) || lowMemory === true;
}

/**
 * Debounces a function to limit how often it's called
 * @param func The function to debounce
 * @param wait Milliseconds to wait between calls
 * @param immediate Whether to call the function on the leading edge
 * @returns Debounced function
 */
export function debounce<F extends AnyFunction>(
  func: F,
  wait: number = 300,
  immediate: boolean = false
): {
  (...args: Parameters<F>): ReturnType<F> | undefined;
  cancel: () => void;
} {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let result: any;

  const debouncedFunction = function(this: any, ...args: any[]) {
    const context = this;
    
    const later = function() {
      timeout = null;
      if (!immediate) result = func.apply(context, args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(later, wait);
    
    if (callNow) {
      result = func.apply(context, args);
    }
    
    return result;
  };
  
  debouncedFunction.cancel = function() {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  return debouncedFunction as any;
}

/**
 * Throttles a function to limit how often it's called
 * @param func The function to throttle
 * @param wait Milliseconds to wait between calls
 * @param options Configuration options
 * @returns Throttled function
 */
export function throttle<F extends AnyFunction>(
  func: F,
  wait: number = 300,
  options: { leading?: boolean; trailing?: boolean } = {}
): {
  (...args: Parameters<F>): ReturnType<F> | undefined;
  cancel: () => void;
} {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let previous = 0;
  const { leading = true, trailing = true } = options;
  let result: any;

  const throttledFunction = function(this: any, ...args: any[]) {
    const now = Date.now();
    const context = this;
    
    if (!previous && leading === false) {
      previous = now;
    }
    
    const remaining = wait - (now - previous);
    
    if (remaining <= 0 || remaining > wait) {
      if (timeout !== null) {
        clearTimeout(timeout);
        timeout = null;
      }
      
      previous = now;
      result = func.apply(context, args);
    } else if (timeout === null && trailing) {
      timeout = setTimeout(function() {
        previous = leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
      }, remaining);
    }
    
    return result;
  };
  
  throttledFunction.cancel = function() {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    previous = 0;
  };
  
  return throttledFunction as any;
}

/**
 * Optimizes images for better loading performance
 * @param imageSrc Image source URL
 * @returns Promise that resolves when image is loaded
 */
export function preloadImage(imageSrc: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${imageSrc}`));
  });
}

/**
 * Optimizes animation frame rate for low-end devices
 * @param callback Animation frame callback
 * @param skipFrames Number of frames to skip on low-end devices
 * @returns Optimized requestAnimationFrame callback
 */
export function optimizedRequestAnimationFrame(
  callback: FrameRequestCallback,
  skipFrames: number = 2
): number {
  let frameCount = 0;
  
  const wrappedCallback: FrameRequestCallback = (timestamp) => {
    frameCount += 1;
    
    if (isLowEndDevice()) {
      // Skip frames on low-end devices to reduce CPU usage
      if (frameCount % skipFrames === 0) {
        callback(timestamp);
      }
    } else {
      // Run every frame on high-end devices
      callback(timestamp);
    }
    
    requestAnimationFrame(wrappedCallback);
  };
  
  return requestAnimationFrame(wrappedCallback);
}

/**
 * Cancels an animation frame request
 * @param requestId The ID returned by optimizedRequestAnimationFrame
 */
export function cancelOptimizedAnimationFrame(requestId: number): void {
  cancelAnimationFrame(requestId);
}
