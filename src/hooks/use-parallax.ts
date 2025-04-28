import { useEffect, useState, useRef, RefObject } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  disabled?: boolean;
}

export function useParallax<T extends HTMLElement>(
  options: ParallaxOptions = {}
): RefObject<T> {
  const {
    speed = 0.2,
    direction = "vertical",
    reverse = false,
    disabled = false,
  } = options;

  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const multiplier = reverse ? -1 : 1;

  // Intersection Observer to check if the element is in the viewport
  useEffect(() => {
    if (disabled) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [disabled]);

  // Handle scroll event and calculate parallax offset
  useEffect(() => {
    if (disabled || !isInView) return;

    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const viewportCenter = windowHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      // Apply parallax effect
      setOffset(distanceFromCenter * speed * multiplier);
    };

    // Use requestAnimationFrame for smoother scrolling
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed, reverse, disabled, isInView, multiplier]);

  // Apply transform to the element based on scroll position
  useEffect(() => {
    if (disabled || !ref.current) return;

    const transform =
      direction === "vertical"
        ? `translateY(${offset}px)`
        : `translateX(${offset}px)`;

    const element = ref.current;
    element.style.transform = transform;
    element.style.transition = "transform 0.1s ease-out";
    element.style.willChange = "transform";
  }, [offset, direction, disabled]);

  return ref;
}
