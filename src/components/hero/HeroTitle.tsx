const HeroTitle = () => {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 text-center px-4">
      {/* Top line: Welcome to */}
      <div
        className="relative block mx-auto transform-gpu"
        style={{
          animation: "float 3s ease-in-out infinite",
          textShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
        }}
      >
        Welcome to
      </div>

      {/* Academy Name */}
      <div
        className="mt-2 relative mx-auto transform-gpu"
        style={{
          animation: "float 3s ease-in-out infinite",
          animationDelay: "0.2s",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
        }}
      >
        {/* Ghatak */}
        <span
          className="text-gsai-red"
          style={{
            textShadow: "0 0 15px rgba(255, 0, 0, 0.5)",
            animation: "pulse-glow 2s infinite",
            display: "inline-block",
          }}
        >
          Ghatak{" "}
        </span>

        {/* Sports Academy */}
        <span className="text-white mx-2">Sports Academy</span>

        {/* India™ */}
        <span
          className="text-gsai-gold"
          style={{
            textShadow: "0 0 15px rgba(255, 204, 0, 0.5)",
            animation: "pulse-glow 2.5s infinite",
            display: "inline-block",
          }}
        >
          India™
        </span>

        {/* Decorative star */}
        <div
          className="absolute -top-6 -right-6 w-12 h-12 opacity-70 hidden md:block"
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
      </div>
    </h1>
  );
};

export default HeroTitle;
