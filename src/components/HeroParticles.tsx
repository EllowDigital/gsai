
import HeroParticlesSimple from "./HeroParticlesSimple";
import HeroParticlesVanilla from "./HeroParticlesVanilla";
import HeroParticlesAdvanced from "./HeroParticlesAdvanced";
import { useDeviceType } from "@/hooks/use-device-type";

// No need for props as we'll handle the div reference internally in each component
const HeroParticles = () => {
  const deviceType = useDeviceType();

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
