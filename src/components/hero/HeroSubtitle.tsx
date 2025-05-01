
import { useDeviceType } from "@/hooks/use-device-type";

const HeroSubtitle = () => {
  const deviceType = useDeviceType();
  
  // Adjust text shadow based on device type for better readability
  const textShadowStyle = deviceType === "mobile" 
    ? "0 1px 3px rgba(0, 0, 0, 0.6)"
    : "1px 1px 4px rgba(0, 0, 0, 0.5)";
    
  return (
    <p
      className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-3 sm:mb-4 md:mb-6 lg:mb-8 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4"
      style={{
        animation: "fade-in 0.8s ease-out forwards",
        textShadow: textShadowStyle,
      }}
    >
      Empowering Lives Through Martial Arts
    </p>
  );
};

export default HeroSubtitle;
