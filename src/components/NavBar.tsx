import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300); // Delay to allow Sheet to close first
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur-lg border-b border-white/10 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3" aria-label="Homepage">
          <img
            src="/favicon_io/android-chrome-192x192.png"
            alt="GSAI Logo"
            className="h-10 w-10 rounded-full object-cover shadow-md"
          />
          <span className="font-extrabold text-lg sm:text-xl text-white drop-shadow-sm whitespace-nowrap">
            <span className="text-gsai-red">Ghatak</span>{" "}
            <span className="text-gsai-gold">Sports Academy</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-gray-300 hover:text-white font-medium transition-colors"
            >
              {label}
            </a>
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
                <SheetTitle className="text-white text-xl">
                  Menu
                </SheetTitle>
                <SheetDescription className="text-gray-400">
                  Navigate the site
                </SheetDescription>
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
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(href);
                    }}
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
