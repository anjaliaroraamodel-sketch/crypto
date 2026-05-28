"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-white/5 py-10 sm:py-16 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 md:gap-8 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-2 flex flex-col gap-6">
            <div className="relative w-64 h-20 flex items-center">
              <a href="#" className="absolute left-0 top-1/2 -translate-y-1/2 group">
                <img
                  className="h-56 sm:h-64 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  src="/icon/hero.png"
                  alt="Aether Logo"
                />
              </a>
            </div>
            <p className="text-sm text-slate-400 leading-6 max-w-sm">
              The next generation decentralized finance protocol. Elevating asset liquidity, yield generation, and security to a new paradigm.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {["twitter", "github", "discord", "telegram"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-white/10 transition-all duration-200"
                >
                  <span className="sr-only">{social}</span>
                  <div className="capitalize font-mono text-xs font-semibold">
                    {social[0]}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Protocol
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Liquidity", "Staking", "Governance", "Swap Bridge"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Documentation", "Whitepaper", "API Reference", "Audits"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="col-span-2 md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Subscribe to Updates
            </h4>
            <p className="text-sm text-slate-400">
              Receive premium insights, updates, and key product releases.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 w-full mt-2"
            >
              <input
                suppressHydrationWarning
                type="email"
                placeholder="Enter email address"
                required
                className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
              <button
                suppressHydrationWarning
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-sm font-semibold text-white transition-all shadow-md shadow-purple-500/10"
              >
                Join
              </button>
            </form>

            {/* Branded Download App button - Wide on the Right Side */}
            <a
              suppressHydrationWarning
              href="#download"
              className="w-full max-w-[380px] py-4 rounded-xl bg-emerald-400 hover:bg-emerald-500 text-slate-950 hover:shadow-[0_0_25px_rgba(52,211,153,0.25)] text-center text-sm font-black tracking-widest uppercase transition-all mt-4"
            >
              Download App Now
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col gap-6 border-t border-white/5 mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p className="uppercase tracking-wider">
              © {new Date().getFullYear()} INSTACOINXPAY ARCHITECTURE. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-slate-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
