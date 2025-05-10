
import { motion } from "framer-motion";
import { useDeviceType } from "@/hooks/use-device-type";

const HeroScrollIndicator = () => {
  const deviceType = useDeviceType();

  return (
    <motion.div
      className="fixed inset-x-0 bottom-5 xs:bottom-6 sm:bottom-8 md:bottom-12 flex justify-center z-30 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: deviceType === "mobile" ? [0, 4, 0] : [0, 6, 0],
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
      <div className="flex flex-col items-center">
        <span className="text-xs sm:text-sm text-white/80 mb-1 sm:mb-2 font-medium tracking-wide">
          Scroll Down
        </span>
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
      </div>
    </motion.div>
  );
};

export default HeroScrollIndicator;
