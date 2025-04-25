
import { useEffect } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import CTAButton from './CTAButton';
import MartialArtistSVG from './MartialArtistSVG';

const NavBar = () => {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="gsai-container py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-3" aria-label="Ghatak Sports Academy Home">
            {isMobile ? (
              <img src="/favicon_io/android-chrome-192x192.png" alt="GSAI Logo" className="h-8 w-8 rounded-full" />
            ) : (
              <MartialArtistSVG />
            )}
            <span className="font-bold text-xl text-white">
              <span className="text-gsai-red">Ghatak</span>
              <span className="text-gsai-gold"> Sports Academy</span>
            </span>
          </a>
        </div>

        {/* Navigation Links (Desktop) */}
        {!isMobile && (
          <nav className="hidden md:flex space-x-6" aria-label="Main navigation">
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#programs" className="text-gray-300 hover:text-white transition">Programs</a>
            <a href="#gallery" className="text-gray-300 hover:text-white transition">Gallery</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition">FAQ</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </nav>
        )}

        {/* CTA Button and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {!isMobile && (
            <CTAButton label="Join Now" href="https://forms.gle/LTYn59kPWkQgC3VR7" />
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Open menu">
                  <Menu className="h-6 w-6 text-white hover:text-gray-300 transition-colors" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gsai-gray-800 text-white">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>
                    Explore the academy and find what you need.
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6" aria-label="Mobile navigation">
                  <a href="#about" className="hover:text-gsai-red transition">About</a>
                  <a href="#programs" className="hover:text-gsai-red transition">Programs</a>
                  <a href="#gallery" className="hover:text-gsai-red transition">Gallery</a>
                  <a href="#faq" className="hover:text-gsai-red transition">FAQ</a>
                  <a href="#contact" className="hover:text-gsai-red transition">Contact</a>
                  <CTAButton label="Join Now" href="https://forms.gle/LTYn59kPWkQgC3VR7" />
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
