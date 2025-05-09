
import { useEffect, useRef, useState, KeyboardEvent } from 'react';

/**
 * Hook to manage keyboard navigation for accessible components
 * @param options Configuration options for keyboard navigation
 */
export function useKeyboardNavigation<T extends HTMLElement = HTMLDivElement>(
  options: {
    onArrowUp?: () => void;
    onArrowDown?: () => void;
    onArrowLeft?: () => void;
    onArrowRight?: () => void;
    onEnter?: () => void;
    onEscape?: () => void;
    onTab?: () => void;
    onSpace?: () => void;
    enabled?: boolean;
  } = {}
) {
  const ref = useRef<T>(null);
  const {
    onArrowUp,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    onEnter,
    onEscape,
    onTab,
    onSpace,
    enabled = true
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          if (onArrowUp) {
            e.preventDefault();
            onArrowUp();
          }
          break;
        case 'ArrowDown':
          if (onArrowDown) {
            e.preventDefault();
            onArrowDown();
          }
          break;
        case 'ArrowLeft':
          if (onArrowLeft) {
            e.preventDefault();
            onArrowLeft();
          }
          break;
        case 'ArrowRight':
          if (onArrowRight) {
            e.preventDefault();
            onArrowRight();
          }
          break;
        case 'Enter':
          if (onEnter) {
            e.preventDefault();
            onEnter();
          }
          break;
        case 'Escape':
          if (onEscape) {
            e.preventDefault();
            onEscape();
          }
          break;
        case 'Tab':
          if (onTab) {
            onTab();
          }
          break;
        case ' ':
          if (onSpace) {
            e.preventDefault();
            onSpace();
          }
          break;
      }
    };

    // Add event listener
    element.addEventListener('keydown', handleKeyDown as EventListener);
    
    // Clean up
    return () => {
      element.removeEventListener('keydown', handleKeyDown as EventListener);
    };
  }, [onArrowUp, onArrowDown, onArrowLeft, onArrowRight, onEnter, onEscape, onTab, onSpace, enabled]);

  return ref;
}

/**
 * Hook to manage focus trapping within components like modals
 */
export function useFocusTrap<T extends HTMLElement = HTMLDivElement>(enabled: boolean = true) {
  const containerRef = useRef<T>(null);
  
  useEffect(() => {
    if (!enabled) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    // Get all focusable elements
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      // Shift + Tab
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } 
      // Tab
      else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };
    
    // Set initial focus
    firstElement.focus();
    
    // Add event listener
    container.addEventListener('keydown', handleTabKey as EventListener);
    
    // Return focus to previous element when unmounted
    const previouslyFocused = document.activeElement as HTMLElement;
    
    return () => {
      container.removeEventListener('keydown', handleTabKey as EventListener);
      if (previouslyFocused) {
        previouslyFocused.focus();
      }
    };
  }, [enabled]);
  
  return containerRef;
}

/**
 * Hook to announce messages to screen readers
 */
export function useAnnounce() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    if (!message) return;
    
    // Create or get live region if it exists
    let liveRegion = document.getElementById('sr-live-region');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'sr-live-region';
      liveRegion.className = 'sr-only';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      document.body.appendChild(liveRegion);
    }
    
    // Set the message
    liveRegion.textContent = message;
    
    // Clear after a delay
    const timer = setTimeout(() => {
      liveRegion.textContent = '';
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [message]);
  
  return setMessage;
}
