import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '/public/logo.jpeg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Services', 'Team', 'Testimonials', 'Contact'];

  // ✅ FIXED: Use exact ID (NO lowercase)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const top = element.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? 'bg-white/100 backdrop-blur-xl shadow-lg border-b border-gray-200/50'
        : 'bg-white/100 backdrop-blur-lg border-b border-gray-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img src={Logo} alt="logo" className="h-12 w-auto" />
          </motion.div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((text) => (
              <button
                key={text}
                onClick={() => scrollToSection(text)} // ✅ FIX HERE
                className="text-gray-600 font-medium transition hover:text-[#1C18F5]"
              >
                {text}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('Contact')}
              className="px-5 py-2.5 rounded-xl bg-[#1C18F5] text-white font-medium 
              shadow-md hover:shadow-lg hover:shadow-[#1C18F5]/40 transition"
            >
              Get Started
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#1C18F5]"
            >
              {isOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full px-6 pt-4 pb-6"
          >
            <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl p-6 flex flex-col gap-5">

              {navItems.map((text) => (
                <button
                  key={text}
                  onClick={() => {
                    scrollToSection(text); // ✅ FIX HERE
                    setIsOpen(false);
                  }}
                  className="text-gray-700 font-medium text-lg hover:text-[#1C18F5]"
                >
                  {text}
                </button>
              ))}

              <button
                onClick={() => {
                  scrollToSection('Contact');
                  setIsOpen(false);
                }}
                className="mt-2 px-5 py-3 rounded-xl bg-[#1C18F5] text-white font-semibold"
              >
                Get Started 🚀
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
