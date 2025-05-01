
import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/use-device-type";

const HeroScrollIndicator = () => {
  const deviceType = useDeviceType();
  
  return (
    <motion.div
      className="absolute left-1/2 transform -translate-x-1/2 bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-16 flex flex-col items-center z-10"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: deviceType === "mobile" ? [0, 5, 0] : [0, 8, 0], // Smaller bounce for mobile
      }}
      transition={{
        delay: 1.2,
        duration: deviceType === "mobile" ? 1.2 : 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      aria-hidden="true"
    >
      <span className="text-xs text-white/80 mb-1 sm:mb-2 font-medium">Scroll Down</span>
      <svg
        width="20"
        height="20"
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
