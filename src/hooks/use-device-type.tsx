import { useEffect, useState } from "react";

// Custom hook to detect device type (mobile, tablet, or desktop)
export const useDeviceType = (): "mobile" | "tablet" | "desktop" => {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    // Function to determine the device type based on window width
    const getDeviceType = () => {
      const width = window.innerWidth;
      if (width <= 767) return "mobile";
      if (width <= 1024) return "tablet";
      return "desktop";
    };

    // Update device type on initial render
    const currentDeviceType = getDeviceType();
    setDeviceType(currentDeviceType);

    // Update device type on window resize
    const handleResize = () => {
      const newDeviceType = getDeviceType();
      if (newDeviceType !== deviceType) {
        setDeviceType(newDeviceType);
      }
    };

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [deviceType]); // Re-run effect only when deviceType changes

  return deviceType;
};
