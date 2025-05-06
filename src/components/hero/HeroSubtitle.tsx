
import { useDeviceType } from "@/hooks/use-device-type";
import { motion } from "framer-motion";

const HeroSubtitle = () => {
  const deviceType = useDeviceType();
  
  // Enhanced text shadow for better readability across devices
  const textShadowStyle = deviceType === "mobile" 
    ? "0 2px 4px rgba(0, 0, 0, 0.8)"
    : "1px 1px 6px rgba(0, 0, 0, 0.7)";
    
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-8 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4 text-center leading-relaxed"
        style={{
          textShadow: textShadowStyle,
          background: "linear-gradient(90deg, #ffffff, #f0f0f0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Empowering Lives Through World-Class Martial Arts
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="text-xs xs:text-sm sm:text-base md:text-lg text-gsai-gold mb-6 max-w-xs sm:max-w-sm md:max-w-md mx-auto text-center font-medium"
        style={{
          textShadow: textShadowStyle,
        }}
      >
        <span className="px-2 py-1 bg-black/50 rounded-full backdrop-blur-sm inline-block">
          Internationally Recognized Training • Top-Level Coaching • Global Competitions
        </span>
      </motion.p>
    </div>
  );
};

export default HeroSubtitle;
