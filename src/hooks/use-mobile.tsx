import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Debounced resize handler
    const onResize = () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Initial check
    onResize();

    // Adding resize event listener with a debounce effect
    const resizeHandler = debounce(onResize, 200); // 200ms debounce

    window.addEventListener("resize", resizeHandler);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return isMobile;
}

// Debounce function to limit the rate of resize events
function debounce(func: Function, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
