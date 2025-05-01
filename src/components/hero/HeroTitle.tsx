import { useDeviceType } from "@/hooks/use-device-type";

const HeroTitle = () => {
  const deviceType = useDeviceType();

  const titleSize =
    deviceType === "mobile"
      ? "text-3xl xs:text-4xl"
      : "text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl";

  const textShadow =
    deviceType === "mobile"
      ? "0 0 10px rgba(255, 255, 255, 0.2)"
      : "0 0 20px rgba(255, 255, 255, 0.2)";

  return (
    <div className="text-center px-2 sm:px-4 mx-auto w-full">
      {/* Top Line */}
      <div
        className={`${titleSize} font-bold text-white mb-2 sm:mb-4`}
        style={{
          animation: "float 3s ease-in-out infinite",
          textShadow,
        }}
      >
        Welcome to
      </div>

      {/* Title */}
      <div
        className={`${titleSize} font-bold mt-1 sm:mt-2 relative inline-block text-center leading-tight`}
        style={{
          animation: "float 3s ease-in-out infinite",
          animationDelay: "0.2s",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
        }}
      >
        <span
          className="text-gsai-red"
          style={{
            textShadow: "0 0 15px rgba(255, 0, 0, 0.5)",
            animation: "pulse-glow 2s infinite",
          }}
        >
          Ghatak{" "}
        </span>

        <span className="text-white">
          Sports<br className="sm:hidden" /> Academy{" "}
        </span>

        <span
          className="text-gsai-gold"
          style={{
            textShadow: "0 0 15px rgba(255, 204, 0, 0.5)",
            animation: "pulse-glow 2.5s infinite",
          }}
        >
          India™
        </span>

        {/* Star icon */}
        {deviceType !== "mobile" && (
          <div
            className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 opacity-70 hidden md:block"
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
    </div>
  );
};

export default HeroTitle;
