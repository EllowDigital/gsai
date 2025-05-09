
import { MouseEvent, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import throttle from "lodash.throttle";

interface CTAButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  className?: string;
}

const CTAButton = ({
  label,
  onClick,
  href,
  variant = "primary",
  icon,
  className = "",
}: CTAButtonProps) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    x.set(0.5);
    y.set(0.5);
  }, []);

  const handleMouseMove = throttle(
    (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width);
      y.set((e.clientY - rect.top) / rect.height);
    },
    16,
    { leading: true, trailing: true }
  );

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  const handleMouseEnter = () => setHovered(true);

  const handleMouseDown = () => setPressed(true);
  const handleMouseUp = () => setPressed(false);

  const clickHandler = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (href && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const ButtonBase = href ? motion.a : motion.button;

  // Updated color variants with enhanced contrast and luxurious feel
  const variantStyles = {
    primary: "bg-gradient-to-r from-gsai-red to-gsai-red-dark text-white",
    secondary: "bg-gradient-to-r from-gsai-gold to-gsai-gold-dark text-black"
  };

  const baseClasses = `
    relative inline-flex items-center justify-center
    px-6 py-3 rounded-md font-bold text-base tracking-wide
    overflow-hidden shadow-lg group text-center
    transition-all duration-300 hover:shadow-xl
    ${variantStyles[variant]}
    ${className}
    sm:px-8 sm:py-4 sm:text-lg
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black
    ${variant === "primary" ? "focus:ring-gsai-red" : "focus:ring-gsai-gold"}
  `;

  // More pronounced shine effect for better visual feedback
  const shineClasses = `
    absolute top-0 left-[-100%] w-[250%] h-full
    bg-gradient-to-r from-transparent via-white/40 to-transparent
    transform rotate-[25deg] pointer-events-none z-10
    transition-transform duration-700
    ${hovered ? "translate-x-[80%]" : ""}
  `;

  return (
    <ButtonBase
      className={baseClasses}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
        transform: pressed ? "scale(0.97)" : "scale(1)",
        boxShadow: hovered 
          ? variant === "primary" 
            ? "0 10px 30px -5px rgba(234, 56, 76, 0.7), 0 0 15px rgba(234, 56, 76, 0.4)" 
            : "0 10px 30px -5px rgba(218, 165, 32, 0.7), 0 0 15px rgba(218, 165, 32, 0.4)"
          : "0 4px 15px -3px rgba(0, 0, 0, 0.5)"
      }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        scale: hovered ? 1.03 : 1,
        transition: { duration: 0.2 } 
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={clickHandler}
      {...(href ? { href } : {})}
      aria-label={label}
    >
      <div className={shineClasses} />
      
      {/* Inner content with 3D effect */}
      <div className="relative z-20 flex items-center justify-center">
        {icon && (
          <motion.span 
            className="mr-2 relative z-20"
            animate={{ 
              rotateY: hovered ? [0, 10, 0, -10, 0] : 0
            }}
            transition={{
              duration: 2,
              repeat: hovered ? Infinity : 0,
              repeatType: "loop"
            }}
          >
            {icon}
          </motion.span>
        )}
        <span className="relative z-20 tracking-wide">{label}</span>
      </div>

      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-80"
        style={{
          background: variant === "primary"
            ? "linear-gradient(120deg, #ea384c, #c41e30, #ea384c)"
            : "linear-gradient(120deg, #daa520, #b8860b, #daa520)",
          backgroundSize: "200% 100%"
        }}
        animate={{
          backgroundPosition: hovered ? ["0% 50%", "100% 50%"] : "0% 50%"
        }}
        transition={{
          duration: 2,
          repeat: hovered ? Infinity : 0,
          repeatType: "reverse"
        }}
      />

      {/* Enhanced pulse effect on hover */}
      {hovered && (
        <motion.div
          className="absolute inset-0 rounded-md pointer-events-none"
          initial={{ opacity: 0.6, scale: 0.8 }}
          animate={{ 
            opacity: 0,
            scale: 1.2,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeOut",
          }}
          style={{
            background: variant === "primary" 
              ? "rgba(234, 56, 76, 0.5)" 
              : "rgba(218, 165, 32, 0.5)",
          }}
        />
      )}

      {/* Subtle border effect */}
      <motion.div
        className="absolute inset-0 rounded-md border pointer-events-none"
        style={{
          borderColor: variant === "primary" 
            ? "rgba(234, 56, 76, 0.3)" 
            : "rgba(218, 165, 32, 0.3)",
        }}
        animate={{
          opacity: hovered ? 1 : 0,
        }}
      />
    </ButtonBase>
  );
};

export default CTAButton;
