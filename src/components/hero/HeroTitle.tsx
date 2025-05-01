
import { useDeviceType } from "@/hooks/use-device-type";

const HeroTitle = () => {
  const deviceType = useDeviceType();
  
  // Apply different styles based on device type
  const titleSize = deviceType === "mobile" 
    ? "text-3xl xs:text-4xl" 
    : "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl";
  
  const textShadow = deviceType === "mobile"
    ? "0 0 10px rgba(255, 255, 255, 0.2)"
    : "0 0 20px rgba(255, 255, 255, 0.2)";
  
  return (
    <h1 className={`${titleSize} font-bold text-white mb-2 sm:mb-4 text-center px-2 sm:px-4`}>
      {/* Top line: Welcome to */}
      <div
        className="relative block mx-auto transform-gpu"
        style={{
          animation: "float 3s ease-in-out infinite",
          textShadow: textShadow,
        }}
      >
        Welcome to
      </div>

      {/* Academy Name */}
      <div
        className="mt-1 sm:mt-2 relative mx-auto transform-gpu"
        style={{
          animation: "float 3s ease-in-out infinite",
          animationDelay: "0.2s",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
        }}
      >
        {/* Ghatak */}
        <span
          className="text-gsai-red inline-block"
          style={{
            textShadow: "0 0 15px rgba(255, 0, 0, 0.5)",
            animation: "pulse-glow 2s infinite",
          }}
        >
          Ghatak{" "}
        </span>

        {/* Sports Academy */}
        <span className="text-white mx-1 sm:mx-2 inline-block">
          Sports<br className="sm:hidden" /> Academy
        </span>

        {/* India™ */}
        <span
          className="text-gsai-gold inline-block"
          style={{
            textShadow: "0 0 15px rgba(255, 204, 0, 0.5)",
            animation: "pulse-glow 2.5s infinite",
          }}
        >
          India™
        </span>

        {/* Decorative star - only show on larger screens */}
        {deviceType !== "mobile" && (
          <div
            className="absolute -top-4 -right-4 w-8 h-8 sm:-top-6 sm:-right-6 sm:w-12 sm:h-12 opacity-70 hidden md:block"
            style={{
              animation: "float 3s ease-in-out infinite",
              animationDelay: "0.5s",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-full h-full text-gsai-gold"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
        )}
      </div>
    </h1>
  );
};

export default HeroTitle;
