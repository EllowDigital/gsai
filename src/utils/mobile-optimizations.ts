
/**
 * Mobile-specific optimizations to improve touch interactions and scrolling
 */

interface SwipeDetectionOptions {
  minSwipeDistance: number;
  maxSwipeTime: number;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
}

/**
 * Prevents the 300ms touch delay on mobile devices
 */
export function removeTouchDelay(): void {
  if (typeof document === 'undefined') return;
  
  // Add touch-action CSS to improve responsiveness
  const style = document.createElement('style');
  style.textContent = `
    * {
      touch-action: manipulation;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Prevents pull-to-refresh behavior while allowing regular scrolling
 */
export function preventPullToRefresh(): void {
  if (typeof document === 'undefined') return;
  
  // Add overscroll-behavior to prevent pull-to-refresh
  const style = document.createElement('style');
  style.textContent = `
    body {
      overscroll-behavior-y: contain;
    }
  `;
  document.head.appendChild(style);
  
  // Add event listener to prevent bounce effect on iOS Safari
  document.addEventListener('touchmove', (e) => {
    // Only prevent if we're at the top of the page and moving downwards
    if (window.scrollY === 0 && e.touches[0].clientY > 0) {
      e.preventDefault();
    }
  }, { passive: false });
}

/**
 * Fixes vh units on mobile browsers
 */
export function fixVhUnits(): void {
  if (typeof document === 'undefined') return;
  
  const setVhProperty = () => {
    // Get the viewport height and multiply by 1% to get a value for 1vh unit
    const vh = window.innerHeight * 0.01;
    // Set the value in the --vh custom property
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  // Set the value on initial load
  setVhProperty();
  
  // Update the value on resize and orientation change
  window.addEventListener('resize', setVhProperty);
  window.addEventListener('orientationchange', setVhProperty);
}

/**
 * Adds swipe detection to an element
 * @param element Target element to attach swipe detection
 * @param options Swipe detection options
 */
export function addSwipeDetection(
  element: HTMLElement, 
  options: SwipeDetectionOptions
): () => void {
  if (!element) return () => {};
  
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;
  
  const onTouchStart = (e: TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
    touchStartTime = Date.now();
  };
  
  const onTouchEnd = (e: TouchEvent) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const touchTime = Date.now() - touchStartTime;
    
    // Check if the touch was too slow to be considered a swipe
    if (touchTime > options.maxSwipeTime) return;
    
    const horizontalDistance = touchEndX - touchStartX;
    const verticalDistance = touchEndY - touchStartY;
    
    // Determine if horizontal or vertical swipe based on which distance is greater
    if (Math.abs(horizontalDistance) > Math.abs(verticalDistance)) {
      // Horizontal swipe
      if (horizontalDistance > options.minSwipeDistance) {
        // Right swipe
        if (options.onSwipeRight) options.onSwipeRight();
      } else if (horizontalDistance < -options.minSwipeDistance) {
        // Left swipe
        if (options.onSwipeLeft) options.onSwipeLeft();
      }
    } else {
      // Vertical swipe
      if (verticalDistance > options.minSwipeDistance) {
        // Down swipe
        if (options.onSwipeDown) options.onSwipeDown();
      } else if (verticalDistance < -options.minSwipeDistance) {
        // Up swipe
        if (options.onSwipeUp) options.onSwipeUp();
      }
    }
  };
  
  element.addEventListener('touchstart', onTouchStart, { passive: true });
  element.addEventListener('touchend', onTouchEnd, { passive: true });
  
  // Return cleanup function
  return () => {
    element.removeEventListener('touchstart', onTouchStart);
    element.removeEventListener('touchend', onTouchEnd);
  };
}

/**
 * Optimizes touch feedback for better user experience
 */
export function optimizeTouchFeedback(): void {
  if (typeof document === 'undefined') return;
  
  const style = document.createElement('style');
  style.textContent = `
    @media (hover: none) {
      a:active,
      button:active,
      [role="button"]:active {
        opacity: 0.7;
        transform: scale(0.98);
        transition: transform 0.1s ease, opacity 0.1s ease;
      }
    }
    
    /* Proper touch target sizes for mobile */
    @media (max-width: 767px) {
      a, button, [role="button"] {
        min-height: 44px;
        min-width: 44px;
        padding: 8px;
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * Setup all mobile optimizations
 */
export function setupMobileOptimizations(): void {
  removeTouchDelay();
  preventPullToRefresh();
  fixVhUnits();
  optimizeTouchFeedback();
}
