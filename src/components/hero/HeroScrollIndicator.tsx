import { motion } from "framer-motion";

const HeroScrollIndicator = () => {
  return (
    <motion.div
      className="absolute left-1/2 transform -translate-x-1/2 bottom-8 sm:bottom-12 md:bottom-16 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 10, 0], // Bounce effect
      }}
      transition={{
        delay: 1.2,
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      aria-hidden="true"
    >
      <span className="text-xs text-white/80 mb-2 font-medium">Scroll Down</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white/80"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </motion.div>
  );
};

export default HeroScrollIndicator;
