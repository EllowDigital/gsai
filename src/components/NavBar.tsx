
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      if (currentScrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine scroll direction for hide/show
      if (currentScrollY > lastScrollY) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-black bg-opacity-90 backdrop-blur-md shadow-md py-2" : "py-6",
        visible ? "translate-y-0 navbar-visible" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <span className="text-2xl font-bold text-white">
            <span className="text-gsai-red">G</span>hatak
            <span className="text-gsai-gold">SAI</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-white hover:text-gsai-red transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="gsai-btn animate-pulse-glow"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden glass-card mx-4 mt-2`}
      >
        <div className="flex flex-col space-y-3 p-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gsai-red transition-colors duration-300 py-2 px-4 rounded"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
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
