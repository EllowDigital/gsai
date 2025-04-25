import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function that combines multiple class names and merges conflicting Tailwind classes.
 *
 * @param inputs - A list of class names or expressions to combine.
 * @returns A single merged string of class names.
 */
export function cn(...inputs: ClassValue[]): string {
  // Combine class names using clsx and merge conflicting Tailwind classes with twMerge
  return twMerge(clsx(...inputs));
}
