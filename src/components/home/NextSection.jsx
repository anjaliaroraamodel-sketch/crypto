"use client";

import { useState } from "react";

export default function NextSection() {
  const [stakeAmount, setStakeAmount] = useState(1000);
  const [stakeDuration, setStakeDuration] = useState(12); // months

  // Calculate dynamic yield: base rate 8% APY + duration multiplier + volume multiplier
  const baseApy = 8.5;
  const durationMultiplier = 1 + (stakeDuration - 1) * 0.05; // up to 1.55x APY
  const calculatedApy = (baseApy * durationMultiplier).toFixed(2);
  const estimatedEarnings = ((stakeAmount * (calculatedApy / 100) * (stakeDuration / 12))).toFixed(2);

  return (
    <section id="dashboard" className="w-full bg-bg-light py-24 relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-primary/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-4">
          <h2 className="text-xs font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
            DYNAMICS & METRICS
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Unlock High-Yield Liquid Staking
          </h3>
          <p className="text-sm sm:text-base text-slate-500 leading-7">
            AETHER Protocol uses state-of-the-art collateralized contracts to optimize dynamic fees, yielding the highest industry-standard APY automatically.
          </p>
        </div>

        {/* Dynamic Calculator & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Yield Calculator Column */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-brand-secondary/5 p-8 flex flex-col gap-8 relative">
            <div className="absolute -top-px left-16 right-16 h-px bg-gradient-to-r from-transparent via-brand-primary/25 to-transparent" />
            
            <div>
              <h4 className="text-lg font-bold text-slate-900">Dynamic Yield Calculator</h4>
              <p className="text-xs text-slate-500 mt-1">Estimate your reward margins based on collateral volume and lock periods.</p>
            </div>

            {/* Slider 1: Amount */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Staking Collateral</span>
                <span className="text-lg font-bold text-slate-900">${stakeAmount.toLocaleString()} USD</span>
              </div>
              <input
                suppressHydrationWarning
                type="range"
                min="100"
                max="50000"
                step="100"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                <span>$100 Min</span>
                <span>$50,000 Max</span>
              </div>
            </div>

            {/* Slider 2: Duration */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Lock-in Duration</span>
                <span className="text-lg font-bold text-slate-900">{stakeDuration} Months</span>
              </div>
              <input
                suppressHydrationWarning
                type="range"
                min="1"
                max="36"
                step="1"
                value={stakeDuration}
                onChange={(e) => setStakeDuration(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-secondary"
              />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                <span>1 Month</span>
                <span>36 Months</span>
              </div>
            </div>

            {/* Calculated Yield Metrics */}
            <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 mt-2">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Estimated APY</div>
                <div className="text-2xl font-black text-brand-primary mt-1">{calculatedApy}%</div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Net Return</div>
                <div className="text-2xl font-black text-slate-900 mt-1">${estimatedEarnings} USD</div>
              </div>
            </div>

            <button suppressHydrationWarning className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-sm font-semibold text-white transition-all shadow-lg shadow-brand-primary/10 hover:opacity-90 cursor-pointer">
              Confirm Staking Transaction
            </button>
          </div>

          {/* Features Column */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            {/* Feature 1 */}
            <div className="group rounded-3xl bg-white border border-slate-200 hover:border-brand-primary/25 p-6 flex items-start gap-5 transition-all hover:shadow-xl shadow-md shadow-brand-secondary/5">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <h5 className="text-base font-bold text-slate-900 group-hover:text-brand-primary transition-colors">Cross-Chain Atomic Swaps</h5>
                <p className="text-xs sm:text-sm text-slate-500 leading-6">
                  Bridge assets instantly between Arbitrum, Ethereum, Solana, and Optimism without central validators. Deep liquidity vaults ensure zero slippage.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-3xl bg-white border border-slate-200 hover:border-brand-secondary/25 p-6 flex items-start gap-5 transition-all hover:shadow-xl shadow-md shadow-brand-secondary/5">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <h5 className="text-base font-bold text-slate-900 group-hover:text-brand-secondary transition-colors">Multi-Signature Smart Escrow</h5>
                <p className="text-xs sm:text-sm text-slate-500 leading-6">
                  Audited by CertiK and OpenZeppelin. Non-custodial storage keeps your assets safe directly under your signature controls at all times.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-3xl bg-white border border-slate-200 hover:border-brand-accent/25 p-6 flex items-start gap-5 transition-all hover:shadow-xl shadow-md shadow-brand-secondary/5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <h5 className="text-base font-bold text-slate-900 group-hover:text-brand-accent transition-colors">Automated Gas Optimization</h5>
                <p className="text-xs sm:text-sm text-slate-500 leading-6">
                  Intelligent routing algorithms package your swap calls using dynamic batching, saving up to 75% on standard Ethereum network fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
