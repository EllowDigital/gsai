
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  animationType?: 'wave' | 'fade' | 'reveal';
  delay?: number;
  staggerChildren?: number;
  duration?: number;
  textElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

/**
 * Animated text component with different animation types
 * @param text - The text to animate
 * @param className - Additional classes
 * @param once - Whether to animate only once
 * @param animationType - Type of animation (wave, fade, reveal)
 * @param delay - Delay before animation starts
 * @param staggerChildren - Stagger time between letters/words
 * @param duration - Duration of the animation
 * @param textElement - HTML element to render as
 */
export function AnimatedText({
  text,
  className,
  once = true,
  animationType = 'wave',
  delay = 0,
  staggerChildren = 0.02,
  duration = 0.5,
  textElement: Element = 'span'
}: AnimatedTextProps) {
  // Split text into words for reveal animation, or letters for wave/fade
  const items = animationType === 'reveal' ? text.split(' ') : text.split('');
  
  // Animation variants based on type
  const animations = {
    wave: {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { 
          delay: i * staggerChildren + delay,
          duration,
          ease: "easeOut" 
        }
      })
    },
    fade: {
      hidden: { opacity: 0 },
      visible: (i: number) => ({
        opacity: 1,
        transition: {
          delay: i * staggerChildren + delay,
          duration,
          ease: "easeInOut" 
        }
      })
    },
    reveal: {
      hidden: { opacity: 0, y: 100 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * staggerChildren + delay,
          duration: duration * 1.5,
          ease: [0.33, 1, 0.68, 1]
        }
      })
    }
  };

  const selectedAnimation = animations[animationType];

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      <Element className="inline-block">
        {items.map((item, i) => (
          <motion.span
            key={`${item}-${i}`}
            custom={i}
            variants={selectedAnimation}
            className={animationType === 'reveal' ? 'inline-block mr-1' : ''}
          >
            {item}
            {animationType === 'reveal' && i !== items.length - 1 ? ' ' : ''}
          </motion.span>
        ))}
      </Element>
    </motion.div>
  );
}
