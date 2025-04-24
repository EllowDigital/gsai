import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import HeroParticlesSimple from "./HeroParticlesSimple";
import HeroParticlesAdvanced from "./HeroParticlesAdvanced";

interface HeroParticlesProps {
  parentRef: React.RefObject<HTMLDivElement>;
}

const HeroParticles: React.FC<HeroParticlesProps> = ({ parentRef }) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <HeroParticlesSimple parentRef={parentRef} />
  ) : (
    <HeroParticlesAdvanced parentRef={parentRef} />
  );
};

export default HeroParticles;