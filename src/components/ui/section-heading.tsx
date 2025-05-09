
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  id?: string;
  animated?: boolean;
}

/**
 * A reusable section heading component with consistent styling
 * and animation capabilities for section titles and subtitles.
 */
export function SectionHeading({ 
  title, 
  subtitle, 
  alignment = 'center', 
  className,
  titleClassName,
  subtitleClassName,
  id,
  animated = true
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  const Wrapper = animated ? motion.div : 'div';
  const Title = animated ? motion.h2 : 'h2';
  const Subtitle = animated ? motion.p : 'p';

  const animationProps = animated ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5 }
  } : {};

  return (
    <Wrapper 
      className={cn("max-w-3xl mb-12", alignmentClasses[alignment], className)}
      {...animationProps}
    >
      <Title 
        id={id}
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4",
          alignment === 'center' ? 'mx-auto' : '',
          titleClassName
        )}
        {...(animated ? {
          ...animationProps,
          transition: { duration: 0.5, delay: 0.1 }
        } : {})}
      >
        {title}
      </Title>
      
      {subtitle && (
        <Subtitle 
          className={cn(
            "text-lg text-gray-300 max-w-2xl",
            alignment === 'center' ? 'mx-auto' : '',
            subtitleClassName
          )}
          {...(animated ? {
            ...animationProps,
            transition: { duration: 0.5, delay: 0.2 }
          } : {})}
        >
          {subtitle}
        </Subtitle>
      )}
    </Wrapper>
  );
}
