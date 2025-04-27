
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Handle navigation on click for both mobile and desktop
  const handleNavClick = (href: string) => {
    setIsOpen(false); // Close the mobile menu
    
    // If we're already on the home page, just scroll to the section
    if (isHomePage) {
      const target = document.querySelector(href);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Small delay to ensure UI updates first
      }
    } else {
      // If we're on another page, navigate to home and then to the section
      navigate('/', { state: { scrollTo: href.substring(1) } });
    }
  };

  // Handle scroll to section when redirected from another page
  useEffect(() => {
    if (isHomePage && location.state && location.state.scrollTo) {
      const sectionId = `#${location.state.scrollTo}`;
      const target = document.querySelector(sectionId);
      
      if (target) {
        // Allow time for the page to render before scrolling
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
      
      // Clean up the state so it doesn't scroll again on refresh
      window.history.replaceState({}, document.title);
    }
  }, [isHomePage, location.state]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur-lg border-b border-white/10 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="Homepage">
          <img
            src="/favicon_io/android-chrome-192x192.png"
            alt="GSAI Logo"
            className="h-10 w-10 rounded-full object-cover shadow-md"
          />
          <span className="font-extrabold text-lg sm:text-xl text-white drop-shadow-sm whitespace-nowrap">
            <span className="text-gsai-red">G</span>
            <span className="text-gsai-gold">SA</span>
            <span className="text-white">I</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              {label}
            </button>
          ))}
          <CTAButton
            label="Join Now"
            href="https://forms.gle/LTYn59kPWkQgC3VR7"
          />
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open mobile menu"
                className="text-white hover:text-gray-300 transition"
              >
                <Menu className="w-7 h-7" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/90 text-white">
              <SheetHeader>
                <SheetTitle className="text-white text-xl">Menu</SheetTitle>
              </SheetHeader>
              <motion.nav
                className="flex flex-col gap-5 mt-6"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {NAV_LINKS.map(({ label, href }) => (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className="text-left hover:text-gsai-red text-lg transition"
                  >
                    {label}
                  </button>
                ))}
                <CTAButton
                  label="Join Now"
                  href="https://forms.gle/LTYn59kPWkQgC3VR7"
                />
              </motion.nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default NavBar;
