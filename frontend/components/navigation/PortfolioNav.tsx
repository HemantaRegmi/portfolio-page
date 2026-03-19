"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/common/Icon";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types/portfolio";

interface PortfolioNavProps {
  items: NavItem[];
}

export function PortfolioNav({ items }: PortfolioNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onNavClick = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-4 transition-all duration-300",
        isScrolled ? "pt-4" : "pt-6",
      )}
    >
      <div className="mx-auto max-w-6xl rounded-full border border-white/70 bg-white/45 px-4 py-2 shadow-[0_8px_24px_rgba(12,49,92,0.14)] backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="text-lg font-extrabold tracking-tight text-slate-900"
            onClick={onNavClick}
          >
            Hemanta<span className="text-sky-500">.Regmi</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white/70 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-bold text-slate-900 transition hover:border-sky-300 hover:text-sky-600 md:inline-flex"
          >
            Contact Me
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex rounded-xl p-2 text-slate-800 transition hover:bg-white/60 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            <Icon name={isOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>

        <nav
          id="mobile-nav"
          className={cn(
            "grid overflow-hidden transition-all duration-300 md:hidden",
            isOpen ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
          aria-label="Mobile"
        >
          <div className="min-h-0 rounded-2xl border border-white/70 bg-white/60 p-2 backdrop-blur-xl">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onNavClick}
                className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={onNavClick}
              className="mt-1 flex items-center justify-between rounded-xl bg-sky-500 px-3 py-2 text-sm font-bold text-white"
            >
              Contact Me
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
