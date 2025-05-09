
import { useState, KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

interface SkipLinkProps {
  skipTo: string;
  label?: string;
  className?: string;
}

/**
 * Accessibility component that allows keyboard users to skip navigation
 * and go directly to main content.
 */
export function SkipLink({
  skipTo = "main-content",
  label = "Skip to content",
  className,
}: SkipLinkProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleSkip = () => {
    const element = document.getElementById(skipTo);
    if (element) {
      element.setAttribute("tabindex", "-1");
      element.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSkip();
    }
  };

  return (
    <a
      href={`#${skipTo}`}
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-gsai-red",
        isFocused && "ring-2 ring-gsai-red",
        className
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={(e) => {
        e.preventDefault();
        handleSkip();
      }}
      onKeyDown={handleKeyDown}
    >
      {label}
    </a>
  );
}
