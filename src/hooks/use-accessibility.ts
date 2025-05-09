
import { useState, useEffect, useCallback, KeyboardEvent as ReactKeyboardEvent } from 'react';

/**
 * Hook to manage keyboard navigation
 * @returns Functions and state for keyboard navigation
 */
export function useKeyboardNavigation() {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [navigationEnabled, setNavigationEnabled] = useState(false);
  
  /**
   * Enable keyboard navigation
   */
  const enableNavigation = useCallback(() => {
    setNavigationEnabled(true);
  }, []);
  
  /**
   * Disable keyboard navigation
   */
  const disableNavigation = useCallback(() => {
    setNavigationEnabled(false);
    setFocusedIndex(-1);
  }, []);
  
  /**
   * Handle arrow key navigation
   */
  const handleKeyboardNavigation = useCallback((e: ReactKeyboardEvent | KeyboardEvent, itemsLength: number) => {
    if (!navigationEnabled) return;
    
    const key = e.key;
    
    switch (key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        setFocusedIndex(prev => (prev + 1) % itemsLength);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        setFocusedIndex(prev => (prev - 1 + itemsLength) % itemsLength);
        break;
      default:
        break;
    }
  }, [navigationEnabled]);
  
  return {
    focusedIndex,
    setFocusedIndex,
    navigationEnabled,
    enableNavigation,
    disableNavigation,
    handleKeyboardNavigation
  };
}

/**
 * Hook to manage focus trap within a component
 * @param triggerRef - Ref to the element that triggers the trap
 * @param containerRef - Ref to the container to trap focus within
 * @param isActive - Whether the focus trap is active
 */
export function useFocusTrap(isActive: boolean = false) {
  const [lastActiveElement, setLastActiveElement] = useState<HTMLElement | null>(null);
  
  // Handle keydown events for focus trap
  const handleTabKey = useCallback((e: KeyboardEvent) => {
    if (!isActive) return;
    
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    // Handle shift+tab
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } 
    // Handle tab
    else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }, [isActive]);
  
  // Enable and disable focus trap
  useEffect(() => {
    if (isActive) {
      setLastActiveElement(document.activeElement as HTMLElement);
      
      // Add event listener for tab key
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') handleTabKey(e);
        if (e.key === 'Escape' && isActive) {
          // Handle escape key if needed
        }
      };
      
      document.addEventListener('keydown', handleKeyDown as EventListener);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown as EventListener);
        if (lastActiveElement) {
          setTimeout(() => {
            lastActiveElement.focus();
          }, 0);
        }
      };
    }
  }, [isActive, handleTabKey, lastActiveElement]);
  
  return {
    restoreFocus: () => {
      if (lastActiveElement) {
        lastActiveElement.focus();
      }
    }
  };
}

/**
 * Hook for managing skip links
 * @returns Methods for handling skip links
 */
export function useSkipLinks() {
  useEffect(() => {
    const handleSkipLinkClick = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && (e.target as HTMLElement).classList.contains('skip-link')) {
        e.preventDefault();
        const targetId = (e.target as HTMLAnchorElement).getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.tabIndex = -1;
            targetElement.focus();
          }
        }
      }
    };
    
    document.addEventListener('keydown', handleSkipLinkClick as EventListener);
    return () => document.removeEventListener('keydown', handleSkipLinkClick as EventListener);
  }, []);
  
  return {
    createSkipLink: (targetId: string, label: string = "Skip to content") => ({
      href: `#${targetId}`,
      className: "skip-link sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-white text-black px-4 py-2 rounded",
      children: label,
    })
  };
}
