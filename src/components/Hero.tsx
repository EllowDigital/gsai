
import { useRef, useEffect, useState, useCallback } from "react";
import HeroParticles from "./HeroParticles";
import CTAButton from "./CTAButton";
import HeroTitle from "./hero/HeroTitle";
import HeroSubtitle from "./hero/HeroSubtitle";
import HeroScrollIndicator from "./hero/HeroScrollIndicator";
import { use3DEffect } from "@/hooks/use-3d-effect";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const contentEffect = use3DEffect({
    intensity: 10,
    perspective: 1200,
    smooth: 0.15,
  });

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
    contactSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-8 lg:px-16"
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
        ref={contentEffect.ref}
        onMouseEnter={contentEffect.handleMouseEnter}
        onMouseLeave={contentEffect.handleMouseLeave}
        onMouseMove={contentEffect.handleMouseMove}
        className={`relative text-center z-40 flex flex-col items-center transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Removed the glass-card and all associated styles */}
        <div className="w-full max-w-4xl mx-auto">
          <HeroTitle />
          <HeroSubtitle />

          <div
            className="transform-gpu transition-transform duration-300 mb-12"
            style={{
              animation: "float 3s ease-in-out infinite 0.4s",
              transform: `perspective(1000px) rotateY(${mousePosition.x * 0.05}deg) rotateX(${mousePosition.y * -0.05}deg)`,
            }}
          >
            <CTAButton
              label="Join Now"
              href="https://forms.gle/LTYn59kPWkQgC3VR7"
              onClick={scrollToContact}
              icon={
                <svg className="w-5 h-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
            />
          </div>

          {/* Centered Scroll Indicator with extra space */}
          <HeroScrollIndicator />
        </div>
      </div>

      {/* 3D floating decorative elements */}
      <div className="absolute hidden lg:block">
        <div
          className="absolute -top-20 -right-20 w-40 h-40 opacity-20"
          style={{
            animation: "float 8s ease-in-out infinite",
            transform: `translateX(${mousePosition.x * 0.1}px) translateY(${mousePosition.y * 0.1}px) rotate(${mousePosition.x}deg)`,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-gsai-red/30 to-transparent blur-xl"></div>
        </div>

        <div
          className="absolute top-40 -left-20 w-32 h-32 opacity-20"
          style={{
            animation: "float 6s ease-in-out infinite 1s",
            transform: `translateX(${mousePosition.x * -0.2}px) translateY(${mousePosition.y * -0.2}px)`,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-gsai-gold/30 to-transparent blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
