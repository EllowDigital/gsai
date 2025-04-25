import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import CTAButton from "./CTAButton";
import MartialArtistSVG from "./MartialArtistSVG"; // Still unused
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="gsai-container py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <a
          href="/"
          className="flex items-center space-x-3"
          aria-label="Go to homepage"
        >
          <img
            src="/favicon_io/android-chrome-192x192.png"
            alt="GSAI Logo"
            className="h-8 w-8 rounded-full"
          />
          <span className="font-bold text-xl text-white">
            <span className="text-gsai-red">Ghatak</span>
            <span className="text-gsai-gold"> Sports Academy</span>
          </span>
        </a>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav
            className="hidden md:flex space-x-6"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        )}

        {/* CTA and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {!isMobile && (
            <CTAButton
              label="Join Now"
              href="https://forms.gle/LTYn59kPWkQgC3VR7"
            />
          )}

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open mobile menu"
                  className="transition-colors hover:text-gray-300"
                >
                  <Menu className="h-6 w-6 text-white" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gsai-gray-800 text-white"
              >
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>
                    Explore the academy and find what you need.
                  </SheetDescription>
                </SheetHeader>
                <motion.nav
                  className="flex flex-col space-y-5 mt-6"
                  aria-label="Mobile navigation"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {NAV_LINKS.map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      className="hover:text-gsai-red transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                  <CTAButton
                    label="Join Now"
                    href="https://forms.gle/LTYn59kPWkQgC3VR7"
                  />
                </motion.nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
