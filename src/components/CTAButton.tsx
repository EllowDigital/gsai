import { MouseEvent, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import throttle from "lodash.throttle";

interface CTAButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

const CTAButton = ({
  label,
  onClick,
  href,
  variant = "primary",
  icon,
}: CTAButtonProps) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const [hovered, setHovered] = useState(false);

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

  const clickHandler = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (href && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const ButtonBase = href ? motion.a : motion.button;

  const baseClasses = `
    relative inline-flex items-center justify-center
    px-6 py-3 rounded-md font-bold uppercase tracking-wide
    overflow-hidden shadow-lg group text-center
    transition-transform duration-300
    ${variant === "primary" ? "bg-gsai-red text-white" : "bg-gsai-gold text-black"}
  `;

  const shineClasses = `
    absolute top-0 left-[-75%] w-[150%] h-full
    bg-gradient-to-r from-white/40 to-transparent
    pointer-events-none z-10
    ${hovered ? "animate-shine" : ""}
  `;

  return (
    <ButtonBase
      className={baseClasses}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformStyle: "preserve-3d",
      }}
      whileTap={{ scale: 0.96 }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={clickHandler}
      {...(href ? { href } : {})}
      aria-label={label}
    >
      <div className={shineClasses} />
      <div className="absolute inset-0 rounded-md shadow-inner opacity-50 pointer-events-none z-10" />
      {icon && <span className="mr-2 relative z-20">{icon}</span>}
      <span className="relative z-20">{label}</span>
    </ButtonBase>
  );
};

export default CTAButton;
