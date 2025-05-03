
import { RefObject } from "react";
import HeroParticlesSimple from "./HeroParticlesSimple";
import HeroParticlesVanilla from "./HeroParticlesVanilla";
import HeroParticlesAdvanced from "./HeroParticlesAdvanced";
import { useDeviceType } from "@/hooks/use-device-type"; // Custom hook to detect device type

interface HeroParticlesProps {
  parentRef: RefObject<HTMLDivElement>;
}

const HeroParticles = ({ parentRef }: HeroParticlesProps) => {
  const deviceType = useDeviceType(); // returns "mobile" | "tablet" | "desktop"

  switch (deviceType) {
    case "mobile":
      return <HeroParticlesSimple />;
    case "tablet":
      return <HeroParticlesVanilla />;
    case "desktop":
    default:
      return <HeroParticlesAdvanced />;
  }
};

export default HeroParticles;
