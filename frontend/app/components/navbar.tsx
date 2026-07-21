"use client";

import { motion } from "motion/react";
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
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hero = document.querySelector("#home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsOverHero(entry.isIntersecting),
      { rootMargin: "-96px 0px 0px 0px", threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
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
      aria-label="Primary navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full backdrop-blur-3xl border-2 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] transition-colors duration-300 ${
            isOverHero
              ? "bg-black/25 border-white/30"
              : "bg-white/25 border-white/40"
          }`}
        >
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className={`font-bold text-xl tracking-tighter cursor-pointer transition-colors duration-300 ${
                isOverHero ? "text-white" : "text-gray-800"
              }`}
            >
              Hemanta
              <span
                className={`transition-colors duration-300 ${
                  isOverHero ? "text-white" : "text-[#0b5f8a]"
                }`}
              >
                .Regmi
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    isOverHero
                      ? "text-white hover:bg-black/20 hover:text-white"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                  }`}
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
              className={`backdrop-blur-2xl px-5 py-2 rounded-full text-sm font-bold transition-all border-2 border-white/50 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(77,168,218,0.3)] flex items-center gap-2 cursor-pointer ${
                isOverHero
                  ? "bg-black/20 hover:bg-black/30 text-white hover:text-white"
                  : "bg-white/40 hover:bg-white/60 text-gray-800 hover:text-[#0b5f8a] hover:border-[#0b5f8a]/30"
              }`}
            >
              Contact Me <span>&rarr;</span>
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center p-2 rounded-md cursor-pointer transition-colors ${
                isOverHero
                  ? "text-white hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
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
          id="mobile-navigation"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 px-4"
        >
          <div
            className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-2xl backdrop-blur-3xl border-2 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] ${
              isOverHero
                ? "bg-black/30 border-white/30"
                : "bg-white/25 border-white/40"
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`block px-3 py-2 rounded-xl text-base font-medium transition-all cursor-pointer ${
                  isOverHero
                    ? "text-white hover:bg-black/20 hover:text-white"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                }`}
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
