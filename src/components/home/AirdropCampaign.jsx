"use client";

import { useState } from "react";

export default function AirdropCampaign() {
  // Stateful dynamic claims
  const [claims, setClaims] = useState({
    signup: false,
    vip: false,
    community: false,
  });

  const handleClaim = (key) => {
    setClaims((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const campaigns = [
    {
      id: "signup",
      title: "Signup Bonus",
      desc: "Get $50 in NEON tokens instantly when you verify your account.",
      btnColor: "bg-brand-primary hover:bg-brand-primary/95 text-white hover:shadow-brand-primary/25",
      iconColor: "text-brand-primary bg-blue-50 border-blue-200",
      svg: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />
      ),
    },
    {
      id: "vip",
      title: "VIP Access",
      desc: "Stake simulated tokens to unlock exclusive high-yield liquidity pools & boost rewards.",
      btnColor: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:opacity-90 hover:shadow-brand-secondary/25",
      iconColor: "text-brand-secondary bg-sky-50 border-sky-200",
      svg: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.969 0 1.371 1.24.588 1.81l-3.97 2.88a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.88a1 1 0 00-1.176 0l-3.97 2.88c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.88c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.951-.69l1.519-4.674z"
        />
      ),
    },
    {
      id: "community",
      title: "Community Bonus",
      desc: "Join our Discord & Telegram to participate in weekly giveaways & receive $25.00.",
      btnColor: "bg-brand-primary hover:bg-brand-primary/95 text-white hover:shadow-brand-primary/25",
      iconColor: "text-brand-primary bg-blue-50 border-blue-200",
      svg: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
  ];

  return (
    <section id="rewards" className="w-full bg-gradient-to-b from-bg-light to-[#eaf6ff] py-8 sm:py-24 relative overflow-hidden border-t border-b border-slate-200/50">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center gap-8 sm:gap-16">
        {/* Header Block */}
        <div className="text-center flex flex-col gap-4 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
            REWARDS PROGRAM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Massive Airdrop Campaign Live Now
          </h2>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {campaigns.map((camp) => {
            const isClaimed = claims[camp.id];

            return (
              <div
                key={camp.id}
                className="group relative rounded-3xl p-8 bg-white border border-slate-200 shadow-xl shadow-brand-secondary/5 hover:border-brand-primary/20 flex flex-col items-center text-center gap-6 transition-all duration-300 backdrop-blur-sm hover:scale-[1.01]"
              >
                {/* Visual Top Highlight line */}
                <div className="absolute inset-x-12 -top-px h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent group-hover:via-brand-primary/40 transition-colors" />

                {/* Icon Circle */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] ${camp.iconColor}`}
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {camp.svg}
                  </svg>
                </div>

                {/* Core Copy */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                    {camp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed min-h-[48px]">
                    {camp.desc}
                  </p>
                </div>

                {/* Action button */}
                <a
                  href="https://www.instacoinxpay.com/getstarted"
                  target="_blank" rel="noopener noreferrer"
                  suppressHydrationWarning
                  onClick={() => handleClaim(camp.id)}
                  className={`w-full block py-3.5 rounded-xl text-sm font-black transition-all cursor-pointer text-center ${
                    isClaimed
                      ? "bg-slate-100 border border-slate-200 text-slate-400 shadow-none pointer-events-none"
                      : `${camp.btnColor} shadow-md hover:scale-[1.01]`
                  }`}
                >
                  {isClaimed ? "Claimed ✓" : "Claim"}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
