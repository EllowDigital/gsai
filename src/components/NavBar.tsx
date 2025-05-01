
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useDeviceType } from "@/hooks/use-device-type";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const deviceType = useDeviceType();
  const isMobile = deviceType === "mobile";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    if (!isHomePage) {
      navigate("/", { state: { scrollTo: href.substring(1) } });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 group"
          aria-label="Homepage"
        >
          <img
            src="/favicon_io/android-chrome-192x192.png"
            alt="GSAI Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover shadow-lg transition-transform group-hover:scale-105"
          />
          <span className="font-extrabold text-base sm:text-lg text-white drop-shadow-sm whitespace-nowrap">
            <span className="text-gsai-red">G</span>
            <span className="text-gsai-gold">SA</span>
            <span className="text-white">I</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-8 items-center">
          {NAV_LINKS.map(({ label, href }) => (
            <Button
              key={href}
              onClick={() => handleNavClick(href)}
              variant="ghost"
              className="text-gray-300 hover:text-black hover:bg-white font-medium transition-colors relative px-2 lg:px-3 py-1 lg:py-2 h-auto after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gsai-red after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              {label}
            </Button>
          ))}
          <CTAButton
            label="Join Now"
            href="https://forms.gle/LTYn59kPWkQgC3VR7"
            variant="primary"
            className="ml-2"
          />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open mobile menu"
                className="text-white hover:text-gray-300 transition p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-black/95 border-gsai-red/20 text-white w-[80vw] max-w-sm"
              aria-labelledby="menu-header"
              aria-describedby="sheet-description"
            >
              {/* Close Button */}
              <SheetClose asChild>
                <button
                  aria-label="Close"
                  className="absolute top-4 right-4 text-white hover:text-gsai-red transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </SheetClose>

              <SheetHeader>
                <SheetTitle
                  id="menu-header"
                  className="text-white text-xl font-bold"
                >
                  Menu
                </SheetTitle>
                <p id="sheet-description" className="sr-only">
                  Navigation menu. Use the buttons below to navigate through the
                  site sections.
                </p>
              </SheetHeader>

              <motion.nav
                className="flex flex-col gap-6 mt-8"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {NAV_LINKS.map(({ label, href }) => (
                  <Button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    variant="ghost"
                    className="text-left justify-start text-gray-300 hover:text-gsai-red text-lg transition-colors flex items-center gap-2 w-full px-2 py-3 rounded-lg hover:bg-white/10 h-auto"
                  >
                    {label}
                  </Button>
                ))}
                <CTAButton
                  label="Join Now"
                  href="https://forms.gle/LTYn59kPWkQgC3VR7"
                  variant="primary"
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
