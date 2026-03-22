"use-client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-full bg-white/25 backdrop-blur-3xl border-2 border-white/40 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)]">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="text-gray-800 font-bold text-xl tracking-tighter cursor-pointer"
            >
              Hemanta<span className="text-[#4DA8DA]">.Regmi</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 px-3 py-2 rounded-full text-sm font-medium transition-all cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="bg-white/40 hover:bg-white/60 backdrop-blur-2xl text-gray-800 hover:text-[#4DA8DA] px-5 py-2 rounded-full text-sm font-bold transition-all border-2 border-white/50 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(77,168,218,0.3)] hover:border-[#4DA8DA]/30 flex items-center gap-2 cursor-pointer"
            >
              Contact Me <span>&rarr;</span>
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 inline-flex items-center justify-center p-2 rounded-md focus:outline-none cursor-pointer"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 px-4"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-2xl bg-white/25 backdrop-blur-3xl border-2 border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)]">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 block px-3 py-2 rounded-xl text-base font-medium transition-all cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
