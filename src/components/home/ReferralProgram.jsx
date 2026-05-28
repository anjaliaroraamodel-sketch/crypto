"use client";

import { useState } from "react";

export default function ReferralProgram() {
  const [copied, setCopied] = useState(false);
  const referralLink = "neonvault.io/ref/user77";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Clipboard copy failed: ", err);
    }
  };

  const metrics = [
    // {
    //   label: "Total Referrals",
    //   value: "1M Users",
    //   valueClass: "text-white",
    // },
    // {
    //   label: "Earned Bonuses",
    //   value: "$500.00",
    //   valueClass: "text-white",
    // },
    {
      label: "Next Reward Level",
      value: "1 join until +5% Yield Boost",
      valueClass: "text-brand-primary font-bold",
    },
  ];

  return (
    <section id="referral" className="w-full bg-bg-light py-8 sm:py-24 relative overflow-hidden border-t border-slate-200/50">
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center gap-8 sm:gap-12 text-center">
        
        {/* Header Block */}
        <div className="flex flex-col items-center gap-4 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[10px] font-bold tracking-wider text-brand-primary uppercase">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 8a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
            SHARE & EARN MULTIPLIER
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black leading-[1.1] tracking-tight text-slate-900 mt-2">
            Invite Friends & Earn <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
              Unlimited Rewards
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 leading-7 mt-2">
            Share your custom link with friends. For every user that signs up and claims their bounty, both you and your invitee receive a $10.00 bonus.
          </p>
        </div>

        {/* Dynamic Glassmorphic Referral Link Bar */}
        <div className="w-full max-w-2xl rounded-2xl p-2.5 bg-white border border-slate-200 shadow-xl shadow-brand-secondary/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-1 px-4 py-2 text-left select-all">
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">
              YOUR REFERRAL LINK
            </span>
            <span className="text-sm sm:text-base font-mono font-bold text-slate-700 mt-0.5">
              {referralLink}
            </span>
          </div>

          <button
            suppressHydrationWarning
            onClick={handleCopy}
            className={`px-8 py-4 sm:py-3.5 rounded-xl text-sm font-black transition-all flex items-center justify-center gap-2 shadow-lg shrink-0 cursor-pointer ${
              copied
                ? "bg-slate-100 border border-brand-primary/20 text-brand-primary shadow-none"
                : "bg-brand-primary hover:bg-brand-primary/95 text-white shadow-brand-primary/15 hover:scale-[1.01]"
            }`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-brand-primary animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                COPIED!
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                COPY LINK
              </>
            )}
          </button>
        </div>

        {/* 3-Column Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl p-6 bg-white border border-slate-200 shadow-lg shadow-brand-secondary/5 hover:border-brand-primary/20 hover:shadow-xl flex flex-col items-center gap-2.5 transition-all duration-300"
            >
              {/* Highlight line */}
              <div className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-brand-primary/15 to-transparent group-hover:via-brand-primary/35 transition-colors" />

              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-500 transition-colors">
                {metric.label}
              </span>
              <span className={`text-xl sm:text-2xl font-black mt-1 tracking-tight ${metric.valueClass}`}>
                {metric.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
