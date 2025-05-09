
import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimatedTextProps = {
  text: string | ReactNode;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: 'typewriter' | 'wordByWord' | 'characterByCharacter' | 'fadeIn';
} & HTMLMotionProps<'div'>;

const defaultAnimations = {
  typewriter: {
    initial: { width: "0%" },
    animate: { width: "100%" },
    transition: { duration: 1, ease: "easeInOut" }
  },
  wordByWord: (delay: number = 0) => ({
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.75,
      delay: delay
    }
  }),
  characterByCharacter: (delay: number = 0) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.3,
      delay: delay
    }
  }),
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

/**
 * AnimatedText component for creating various text animation effects
 * with customizable animation types, timing, and styling.
 */
export function AnimatedText({
  text,
  el: Element = 'p',
  className,
  once = true,
  repeatDelay = 0,
  animation = 'fadeIn',
  ...props
}: AnimatedTextProps) {
  // Handle string vs React element differently
  const isString = typeof text === 'string';
  const words = isString ? text.split(' ') : [];
  const characters = isString ? text.split('') : [];
  
  const container: Variants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04,
        repeatDelay,
        repeat: once ? 0 : Infinity
      }
    }
  };

  if (animation === 'typewriter') {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <motion.div
          className="w-full h-full bg-clip-text whitespace-nowrap"
          initial="initial"
          whileInView="animate"
          viewport={{ once }}
          variants={defaultAnimations.typewriter}
          {...props}
        >
          {text}
        </motion.div>
      </div>
    );
  }

  if (animation === 'wordByWord' && isString) {
    return (
      <motion.div
        className={cn("flex flex-wrap", className)}
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once }}
        {...props}
      >
        {words.map((word, i) => (
          <div key={`${word}-${i}`} className="overflow-hidden mr-[0.25em]">
            <motion.span
              className="inline-block"
              variants={{
                initial: { y: '100%', opacity: 0 },
                animate: { y: 0, opacity: 1 }
              }}
              transition={{
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.75,
                delay: i * 0.1
              }}
            >
              {word}
            </motion.span>
          </div>
        ))}
      </motion.div>
    );
  }

  if (animation === 'characterByCharacter' && isString) {
    return (
      <motion.div
        className={cn("flex", className)}
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once }}
        {...props}
      >
        {characters.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            variants={{
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Default fade in animation
  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once }}
      variants={defaultAnimations.fadeIn}
      {...props}
    >
      <Element>{text}</Element>
    </motion.div>
  );
}
