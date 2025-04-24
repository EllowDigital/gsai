import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = useMemo(() => [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ], []);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 80);
      setVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-black bg-opacity-90 backdrop-blur-md shadow-md py-2" : "py-6",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo with image */}
        <a href="#hero" className="flex items-center space-x-3">
          <img
            src="/images/logo.png" // Replace with your logo path
            alt="Ghatak SAI Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-2xl font-bold text-white">
            <span className="text-gsai-red">G</span>hatak
            <span className="text-gsai-gold">SAI</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="text-white hover:text-gsai-red transition-colors duration-300 font-medium"
            >
              {name}
            </a>
          ))}
          <a href="https://forms.gle/LTYn59kPWkQgC3VR7" className="gsai-btn animate-pulse-glow">
            Join Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className={cn("w-6 h-6 transition-transform duration-300", menuOpen && "rotate-90")}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out mx-4 mt-2 glass-card",
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 invisible"
        )}
      >
        <div className="flex flex-col space-y-3 p-4">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-gsai-red transition-colors duration-300 py-2 px-4 rounded"
            >
              {name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="gsai-btn text-center"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
