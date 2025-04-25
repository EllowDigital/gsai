import { MouseEvent, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import throttle from "lodash.throttle";

interface CTAButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
}

const CTAButton = ({
  label,
  onClick,
  href,
  variant = "primary",
}: CTAButtonProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = throttle(
    (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;

      x.set(relX);
      y.set(relY);
    },
    16,
    { leading: true, trailing: true }
  );

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  useEffect(() => {
    x.set(0.5);
    y.set(0.5);
  }, []);

  const commonProps = {
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: handleMouseLeave,
    "aria-label": label,
  };

  const sharedStyle = `relative inline-block py-3 px-6 rounded-md font-bold uppercase tracking-wider overflow-hidden transition-transform shadow-lg group ${
    variant === "primary" ? "bg-gsai-red text-white" : "bg-gsai-gold text-black"
  }`;

  const shineStyle = {
    position: "absolute" as const,
    top: 0,
    left: "-75%",
    width: "150%",
    height: "100%",
    background: "linear-gradient(120deg, rgba(255,255,255,0.4), rgba(255,255,255,0))",
    transform: hovered ? "translateX(100%)" : "translateX(0)",
    transition: "transform 0.8s ease-in-out",
    zIndex: 1,
    pointerEvents: "none",
  };

  const innerShadowStyle = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)",
    borderRadius: "0.375rem",
    opacity: 0.5,
    zIndex: 1,
    pointerEvents: "none",
  };

  const content = (
    <>
      <div style={shineStyle} />
      <div style={innerShadowStyle} />
      <span className="relative z-10">{label}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
        className={sharedStyle}
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: "preserve-3d",
        }}
        whileTap={{ scale: 0.96 }}
        {...commonProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={sharedStyle}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformStyle: "preserve-3d",
      }}
      whileTap={{ scale: 0.96 }}
      {...commonProps}
    >
      {content}
    </motion.button>
  );
};

export default CTAButton;
