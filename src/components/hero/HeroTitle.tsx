import React from 'react';

const HeroTitle = () => {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 text-center px-4">
      <div
        className="relative inline-block transform-gpu"
        style={{
          animation: "float 3s ease-in-out infinite",
          textShadow: "0 0 20px rgba(255, 255, 255, 0.2)", // Improved text shadow
        }}
      >
        Welcome to
      </div>
      <div
        className="mt-2 relative transform-gpu"
        style={{
          animation: "float 3s ease-in-out infinite 0.2s",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)", // Enhanced shadow for more depth
        }}
      >
        <span
          className="text-gsai-red"
          style={{
            textShadow: "0 0 15px rgba(255, 0, 0, 0.5)", // Stronger red glow
            display: "inline-block",
            animation: "pulse-glow 2s infinite",
          }}
        >
          Ghatak{" "}
        </span>
        <span className="text-white mx-2"> Sports Academy</span> {/* Added mx-2 for spacing */}
        <span
          className="text-gsai-gold"
          style={{
            textShadow: "0 0 15px rgba(255, 204, 0, 0.5)", // Stronger gold glow
            display: "inline-block",
            animation: "pulse-glow 2.5s infinite",
          }}
        >
          India™
        </span>

        <div
          className="absolute -top-6 -right-6 w-12 h-12 opacity-70 hidden md:block"
          style={{
            animation: "float 3s ease-in-out infinite 0.5s",
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
