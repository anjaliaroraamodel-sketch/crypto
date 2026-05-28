"use client";

import { useState } from "react";

export default function Hero() {
  // Simulated Interactive Reward Toggles
  const [balance, setBalance] = useState("2B+");
  const [spinClaimed, setSpinClaimed] = useState(false);

  const handleClaimSpin = () => {
    if (!spinClaimed) {
      setBalance((prev) => (typeof prev === "number" ? prev + 10.00 : prev));
      setSpinClaimed(true);
    }
  };

  const features = [
    {
      title: "MASSIVE AIRDROP",
      desc: "Get free tokens directly in your active wallet.",
      iconColor: "text-purple-600 bg-purple-50 border-purple-200",
      textColor: "text-purple-700",
      svg: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      ),
    },
    {
      title: "DAILY FREE SPIN REWARDS",
      desc: "Spin daily to win guaranteed dynamic assets.",
      iconColor: "text-brand-primary bg-blue-50 border-blue-200",
      textColor: "text-brand-primary",
      svg: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.253 8H18"
        />
      ),
    },
    {
      title: "CRYPTO BANK WITHDRAWAL",
      desc: "Instantly transfer funds directly to your local bank.",
      iconColor: "text-brand-accent bg-sky-50 border-sky-200",
      textColor: "text-brand-accent",
      svg: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      ),
    },
    {
      title: "REFERRAL EARNINGS",
      desc: "Earn 15% lifetime dividends on invite network trades.",
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      textColor: "text-emerald-700",
      svg: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      title: "TRANSACTION BONUS",
      desc: "Receive extra cashbacks on all cross-chain swaps.",
      iconColor: "text-orange-600 bg-orange-50 border-orange-200",
      textColor: "text-orange-700",
      svg: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      ),
    },
    {
      title: "ULTRA LOW FEES",
      desc: "Industry-lowest 0.05% fee powered by batch gas routing.",
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
      textColor: "text-indigo-700",
      svg: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16v-1"
        />
      ),
    },
    {
      title: "FREE SIGNUP BONUS",
      desc: "Get an instant $10 registration credit in your wallet.",
      iconColor: "text-pink-600 bg-pink-50 border-pink-200",
      textColor: "text-pink-700",
      svg: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 0A7.5 7.5 0 1018.364 18.364l-3.536-3.536m0-5.656L11.293 5.636"
        />
      ),
    },
    {
      title: "VIP EARLY USER REWARDS",
      desc: "Unlock multiplier pools and prioritized token distribution.",
      iconColor: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200",
      textColor: "text-fuchsia-700",
      svg: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      ),
    },
  ];

  return (<>
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
 
    <section className="relative min-h-0 sm:min-h-screen w-full flex items-center justify-center bg-bg-light pt-28 pb-8 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Decorative Glow Orbs */}
      {/* <div className="absolute top-1/10 left-1/10 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-1/10 right-1/10 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[160px] pointer-events-none animate-pulse duration-[8000ms]" />
       */}
      {/* Subtle Grid Background */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.06),rgba(255,255,255,0))] pointer-events-none" /> */}

      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col items-center gap-8 sm:gap-12 relative z-10 w-full text-center">
        {/* Copy Header Block */}
        <div className="flex flex-col gap-4 sm:gap-6 max-w-4xl">
          <h1 className="text-5xl min-[375px]:text-4.5xl sm:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 ">
            Earn Crypto. <br className="block sm:hidden" /> Spin Daily. <br />
            <span className="whitespace-nowrap text-3xl min-[375px]:text-2xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary ">
              Withdraw To Your Bank.
            </span>
          </h1>

          <p className="text-sm sm:text-base leading-relaxed sm:leading-8 text-slate-500 max-w-2xl mx-auto">
            The next-generation crypto platform with massive airdrops, free daily spin rewards, and first time global bank withdrawals.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md">
          <a href="https://www.instacoinxpay.com/getstarted" target="_blank" rel="noopener noreferrer" suppressHydrationWarning className="w-[250px] sm:w-auto px-6 py-5 sm:px-8 sm:py-5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-md sm:text-lg font-bold text-white shadow-lg shadow-brand-primary/20 hover:scale-[1.01] hover:shadow-brand-primary/30 transition-all cursor-pointer text-center">
            Download App
          </a>
          <a href="https://www.instacoinxpay.com/getstarted" target="_blank" rel="noopener noreferrer" suppressHydrationWarning className="w-[250px] sm:w-auto px-6 py-5 sm:px-8 sm:py-5 rounded-xl bg-white border border-slate-200 text-md sm:text-lg font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer text-center">
            Claim Airdrop
          </a>
        </div>

        {/* Feature Cards Grid (8 tiles, 2 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 w-full max-w-4xl text-left">
          {features.map((feat, index) => (
            <a
              key={index}
              href={feat.action ? undefined : "https://www.instacoinxpay.com/getstarted"}
              target={feat.action ? undefined : "_blank"}
              rel={feat.action ? undefined : "noopener noreferrer"}
              onClick={feat.action}
              className={`group relative rounded-2xl p-4 sm:p-5 bg-white border border-slate-200/60 hover:border-brand-primary/20 flex items-start gap-3 sm:gap-4 transition-all duration-300 shadow-md shadow-brand-secondary/5 hover:shadow-xl cursor-pointer ${
                feat.action ? "active:scale-98" : ""
              }`}
            >
              {/* Highlight bar */}
              <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r bg-transparent group-hover:bg-brand-primary transition-colors" />

              {/* Icon Container */}
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-105 ${feat.iconColor}`}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {feat.svg}
                </svg>
              </div>

              {/* Copy Info */}
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between items-center w-full">
                  <h4 className={`text-sm sm:text-base font-black uppercase tracking-wider ${feat.textColor}`}>
                    {feat.title}
                  </h4>
                  {feat.badge && (
                    <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-bold bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                      {feat.badge}
                    </span>
                  )}
                </div>
                <p className="text-[11px] sm:text-sm text-slate-500 leading-relaxed max-w-sm">
                  {feat.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Metrics Card */}
        <div className="w-full max-w-2xl rounded-2xl bg-white border border-slate-200 p-4 sm:p-6 shadow-xl shadow-brand-secondary/5 relative">
          <div className="absolute inset-x-16 -top-px h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
          <div className="grid grid-cols-2 gap-4 sm:gap-8 divide-x divide-slate-100 text-center">
            <div>
              <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Total Assets
              </div>
              <div className="text-xl sm:text-3xl font-black text-slate-900 mt-1">
                ${typeof balance === "number" ? balance.toFixed(2) : balance} USD
              </div>
            </div>
            <div>
              <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Daily Rewards
              </div>
              <div className="text-xl sm:text-3xl font-black text-brand-primary mt-1">
                +12.5%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
