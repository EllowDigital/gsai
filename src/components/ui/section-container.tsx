
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionContainerProps extends HTMLMotionProps<'section'> {
  id: string;
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
  motionProps?: HTMLMotionProps<'section'>;
}

/**
 * A reusable section container with built-in animation capabilities
 * and standardized structure for consistent design across the site.
 */
export function SectionContainer({
  id,
  className,
  children,
  animate = true,
  motionProps,
  ...props
}: SectionContainerProps) {
  const defaultAnimations = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const combinedMotionProps = {
    ...defaultAnimations,
    ...motionProps
  };

  return (
    <motion.section
      id={id}
      className={cn(
        "relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden",
        className
      )}
      {...(animate ? combinedMotionProps : {})}
      {...props}
      aria-labelledby={`${id}-heading`}
    >
      {children}
    </motion.section>
  );
}
