
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import CTAButton from "./CTAButton";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
      navigate('/', { state: { scrollTo: href.substring(1) } });
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3 group" 
          aria-label="Homepage"
        >
          <img
            src="/favicon_io/android-chrome-192x192.png"
            alt="GSAI Logo"
            className="h-10 w-10 rounded-full object-cover shadow-lg transition-transform group-hover:scale-105"
          />
          <span className="font-extrabold text-lg sm:text-xl text-white drop-shadow-sm whitespace-nowrap">
            <span className="text-gsai-red">G</span>
            <span className="text-gsai-gold">SA</span>
            <span className="text-white">I</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="text-gray-300 hover:text-white font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gsai-red after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {label}
            </button>
          ))}
          <CTAButton
            label="Join Now"
            href="https://forms.gle/LTYn59kPWkQgC3VR7"
            className="bg-gsai-red hover:bg-gsai-red/90 text-white shadow-lg hover:shadow-gsai-red/20 transition-all"
          />
        </nav>

        {/* Mobile Nav */}
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
            <SheetContent side="right" className="bg-black/95 border-gsai-red/20">
              <SheetHeader>
                <SheetTitle className="text-white text-xl font-bold">Menu</SheetTitle>
              </SheetHeader>
              <motion.nav
                className="flex flex-col gap-6 mt-8"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {NAV_LINKS.map(({ label, href }) => (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className="text-left text-gray-300 hover:text-gsai-red text-lg transition-colors flex items-center gap-2 w-full px-2 py-1 rounded-lg hover:bg-white/5"
                  >
                    {label}
                  </button>
                ))}
                <CTAButton
                  label="Join Now"
                  href="https://forms.gle/LTYn59kPWkQgC3VR7"
                  className="mt-4 w-full bg-gsai-red hover:bg-gsai-red/90 text-white shadow-lg"
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
