
import HeroParticlesSimple from "./HeroParticlesSimple";
import HeroParticlesVanilla from "./HeroParticlesVanilla";
import HeroParticlesAdvanced from "./HeroParticlesAdvanced";
import { useDeviceType } from "@/hooks/use-device-type";

const HeroParticles = () => {
  const deviceType = useDeviceType();

  // Each particle component manages its own container ref internally
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
