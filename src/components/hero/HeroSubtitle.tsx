
import { useDeviceType } from "@/hooks/use-device-type";
import { useTheme } from "@/components/ThemeProvider";

const HeroSubtitle = () => {
  const deviceType = useDeviceType();
  const { colors } = useTheme();
  
  // Enhanced text shadow for better readability across devices
  const textShadowStyle = deviceType === "mobile" 
    ? "0 1px 4px rgba(0, 0, 0, 0.7)"
    : "1px 1px 5px rgba(0, 0, 0, 0.6)";
    
  return (
    <p
      className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-3 sm:mb-4 md:mb-6 lg:mb-8 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4 text-center font-medium"
      style={{
        animation: "fade-in 0.8s ease-out forwards",
        textShadow: textShadowStyle,
        color: colors.accent,
      }}
    >
      Empowering Lives Through Martial Arts
    </p>
  );
};

export default HeroSubtitle;
