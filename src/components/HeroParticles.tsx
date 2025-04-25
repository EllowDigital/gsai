
import { useIsMobile } from "@/hooks/use-mobile";
import HeroParticlesSimple from "./HeroParticlesSimple";
import HeroParticlesAdvanced from "./HeroParticlesAdvanced";
import { RefObject } from "react";

interface HeroParticlesProps {
  parentRef: RefObject<HTMLDivElement>;
}

const HeroParticles = ({ parentRef }: HeroParticlesProps) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <HeroParticlesSimple parentRef={parentRef} />
  ) : (
    <HeroParticlesAdvanced parentRef={parentRef} />
  );
};

export default HeroParticles;
