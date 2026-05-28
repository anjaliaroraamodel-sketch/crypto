"use client";

import { useState, useEffect, useRef } from "react";

export default function LiveTicker() {
  const [transactions, setTransactions] = useState([
    { id: 1, user: "VoltPlay***", amount: "+$596.51", time: "Just now" },
    { id: 2, user: "MoonBoy***", amount: "+$1,058.98", time: "5s ago" },
    { id: 3, user: "SolRider***", amount: "+$720.51", time: "10s ago" },
    { id: 4, user: "SolRider***", amount: "+$307.55", time: "15s ago" },
    { id: 5, user: "MoonBoy***", amount: "+$959.41", time: "20s ago" },
    { id: 6, user: "AetherGuru***", amount: "+$1,420.00", time: "30s ago" },
    { id: 7, user: "CryptoKing***", amount: "+$850.25", time: "1m ago" },
    { id: 8, user: "Decentralist***", amount: "+$2,100.40", time: "2m ago" },
    { id: 9, user: "NodeRunner***", amount: "+$410.15", time: "3m ago" },
  ]);

  const listRef = useRef(null);

  // Dynamic simulation: add a new random transaction every 15s to match screenshot tag
  useEffect(() => {
    const userNames = ["SolRider", "MoonBoy", "VoltPlay", "AetherGuru", "CryptoKing", "NodeRunner", "CoinFlipper", "MetaStaker"];
    
    const interval = setInterval(() => {
      const randomUser = userNames[Math.floor(Math.random() * userNames.length)] + "***";
      const randomAmount = "+$" + (Math.random() * 1200 + 100).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      const newTx = {
        id: Date.now(),
        user: randomUser,
        amount: randomAmount,
        time: "Just now",
      };

      setTransactions((prev) => {
        // Map older times
        const updated = prev.map((tx) => {
          if (tx.time === "Just now") return { ...tx, time: "5s ago" };
          if (tx.time === "5s ago") return { ...tx, time: "10s ago" };
          if (tx.time === "10s ago") return { ...tx, time: "15s ago" };
          if (tx.time === "15s ago") return { ...tx, time: "20s ago" };
          if (tx.time === "20s ago") return { ...tx, time: "30s ago" };
          if (tx.time === "30s ago") return { ...tx, time: "1m ago" };
          if (tx.time.endsWith("m ago")) {
            const mins = parseInt(tx.time) + 1;
            return { ...tx, time: `${mins}m ago` };
          }
          return tx;
        });
        return [newTx, ...updated.slice(0, 14)]; // Cap at 15 items to keep it lightweight
      });

      // Smooth scroll back to top of the ticker container
      if (listRef.current) {
        listRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }

    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="live-ticker" className="w-full bg-gradient-to-b from-[#eaf6ff] to-bg-light py-8 sm:py-24 relative overflow-hidden border-t border-slate-200/50">
      {/* ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center gap-8 sm:gap-12 text-center">
        
        {/* Metric Header Block */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-6xl sm:text-8xl font-black tracking-tight text-brand-primary drop-shadow-[0_0_35px_rgba(37,99,235,0.15)]">
            500k+
          </div>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-slate-500 mt-2">
            TRUSTED USERS WORLDWIDE
          </span>
        </div>

        {/* Scrollable Live Ticker Glassmorphic Box */}
        <div className="w-full max-w-4xl rounded-3xl p-6 bg-white border border-slate-200 shadow-2xl shadow-brand-secondary/5 text-left flex flex-col gap-5 relative">
          {/* Top highlight bar */}
          <div className="absolute inset-x-12 -top-px h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />

          {/* Box Header */}
          <div className="flex items-center gap-2.5 pb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              LIVE WITHDRAWAL TICKER
            </span>
          </div>

          {/* Scrollable Container Wrapper */}
          <div
            ref={listRef}
            className="max-h-72 overflow-y-auto pr-2 flex flex-col gap-2.5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent hover:scrollbar-thumb-white/20 transition-all duration-300"
          >
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="group w-full rounded-2xl p-2.5 sm:p-4 bg-white border border-slate-100 hover:border-brand-primary/15 flex items-center justify-between gap-2 sm:gap-4 transition-all duration-200 shadow-sm hover:shadow-md hover:bg-slate-50/50"
              >
                {/* User badge */}
                <div className="flex items-center gap-2 sm:gap-3 select-none min-w-0">
                  <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-brand-primary transition-colors shrink-0" />
                  <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors truncate">
                    {tx.user}
                  </span>
                </div>

                {/* Amount and Time */}
                <div className="flex items-center gap-1.5 sm:gap-6 shrink-0">
                  {/* Amount Badge */}
                  <span className="text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-1.5 select-none bg-[#10b9811a] text-[#10b981] rounded-full py-1 px-2 sm:px-3">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" transform="rotate(45 12 12)" />
                    </svg>
                    {tx.amount}
                  </span>

                  {/* Timestamp */}
                  <span className="text-[9px] sm:text-xs text-slate-400 font-medium tracking-wide whitespace-nowrap min-w-[32px] sm:w-12 text-right">
                    {tx.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Box Footer metadata */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 animate-spin text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.253 8H18" />
              </svg>
              Updates every 5s
            </span>
            <span>Blockchain safe</span>
          </div>

        </div>

      </div>
    </section>
  );
}
