
import { useRef, useEffect, useState, useCallback } from "react";
import HeroParticles from "./HeroParticles";
import CTAButton from "./CTAButton";
import HeroTitle from "./hero/HeroTitle";
import HeroSubtitle from "./hero/HeroSubtitle";
import HeroScrollIndicator from "./hero/HeroScrollIndicator";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!heroRef.current) return;

    const { clientX, clientY } = e;
    const { width, height } = heroRef.current.getBoundingClientRect();

    const x = ((clientX / width) - 0.5) * 40;
    const y = ((clientY / height) - 0.5) * 40;

    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <HeroParticles parentRef={heroRef} />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black z-10"
        style={{
          transform: `translateX(${mousePosition.x * -0.02}px) translateY(${mousePosition.y * -0.02}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      <div
        className={`relative text-center z-40 flex flex-col items-center transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transform: `translateX(${mousePosition.x * 0.05}px) translateY(${mousePosition.y * 0.05}px)`,
          transition: "transform 0.3s ease-out, opacity 1s ease, translate 1s ease",
        }}
      >
        <div className="glass p-8 md:p-12 w-full max-w-4xl mx-auto">
          <HeroTitle />
          <HeroSubtitle />

          <div
            style={{
              animation: "float 3s ease-in-out infinite 0.4s",
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.05}deg) rotateX(${mousePosition.y * -0.05}deg)`,
              transition: "transform 0.3s ease-out",
            }}
            className="transform-gpu"
          >
            <CTAButton
              label="Join Now"
              href="https://forms.gle/LTYn59kPWkQgC3VR7"
              onClick={scrollToContact}
            />
          </div>

          <HeroScrollIndicator />
        </div>
      </div>
    </div>
  );
};

export default Hero;
