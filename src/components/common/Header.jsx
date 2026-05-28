"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`absolute top-5 md:top-10 left-1 md:left-10 right-0 z-50 transition-all duration-300 `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <div className="relative w-60 md:w-90 h-20 flex items-center">
          <a href="#" className="absolute left-[-35px] sm:left-0 top-1/2 -translate-y-1/2 group">
            <img
              className="h-80 sm:h-105 w-auto object-contain hover:scale-105 transition-transform duration-300"
              src="/icon/hero.png"
              alt="Aether Logo"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        {/* <nav className="hidden md:flex items-center gap-8">
          {["Markets", "Dashboard", "Swap", "Analytics", "Governance"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors duration-200 py-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-primary to-brand-secondary group-hover:w-full transition-all duration-300" />
              </a>
            )
          )}
        </nav> */}

        {/* Actions */}
        {/* <div className="hidden md:flex items-center gap-4">
          <button suppressHydrationWarning className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors py-2 px-4">
            Sign In
          </button>
          <button suppressHydrationWarning className="relative group overflow-hidden rounded-full py-2.5 px-6 bg-gradient-to-r from-brand-primary to-brand-secondary text-sm font-semibold text-white hover:opacity-95 shadow-md shadow-brand-primary/10 hover:scale-[1.01] transition-all">
            Connect Wallet
          </button>
        </div> */}

        {/* Mobile menu button */}
        {/* <button
          suppressHydrationWarning
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-brand-primary focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
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
        </button> */}
      </div>

      {/* Mobile Menu */}
      {/* <div
        className={`md:hidden absolute top-full left-0 right-0 bg-bg-light/95 border-b border-slate-200 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      > */}
        {/* <div className="px-6 py-8 flex flex-col gap-6">
          {["Markets", "Dashboard", "Swap", "Analytics", "Governance"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-brand-primary transition-colors"
              >
                {item}
              </a>
            )
          )} */}
          {/* <hr className="border-slate-200" /> */}
          {/* <div className="flex flex-col gap-4">
            <button suppressHydrationWarning className="text-center text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors py-3">
              Sign In
            </button>
            <button suppressHydrationWarning className="w-full py-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-sm font-semibold text-white text-center shadow-lg shadow-brand-primary/20">
              Connect Wallet
            </button>
          </div> */}
        {/* </div> */}
      {/* </div> */}
    </header>
  );
}
