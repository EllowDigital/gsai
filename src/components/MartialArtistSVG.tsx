import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const MartialArtistSVG: React.FC = () => {
  const isMobile = useIsMobile();
  const strokeWidth = isMobile ? 6 : 10;
  const [kick, setKick] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setKick((prev) => !prev); // Toggle kick state
    }, 1500); // Every 1.5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      viewBox="0 0 300 500"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto" }}
    >
      {/* Body */}
      <path
        d="M150 100 L150 300"
        stroke="#ea384c"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Head */}
      <circle cx="150" cy="70" r="40" fill="#333" />

      {/* Arms */}
      <path
        d="M150 150 L190 180"
        stroke="#ea384c"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M150 150 L110 180"
        stroke="#ea384c"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Legs */}
      <path
        d="M150 300 L200 400"
        stroke="#333"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d={kick ? "M150 300 L80 220" : "M150 300 L50 250"} // Animated Kick
        stroke="#333"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className="kicking-leg"
      />

      {/* Belt */}
      <path d="M120 200 L180 200" stroke="#DAA520" strokeWidth="12" strokeLinecap="round" />

      {/* Hands */}
      <circle cx="190" cy="180" r="12" fill="#333" />
      <circle cx="110" cy="180" r="12" fill="#333" />

      {/* Feet */}
      <ellipse cx="200" cy="400" rx="15" ry="8" fill="#333" />
      <ellipse cx={kick ? "80" : "50"} cy={kick ? "220" : "250"} rx="15" ry="8" fill="#333" />
    </svg>
  );
};

export default MartialArtistSVG;