"use client";

import { useState } from "react";

export default function SpinWheel() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [prizeWon, setPrizeWon] = useState(null);
  const [spinsLeft, setSpinsLeft] = useState(99);

  const prizes = [
    { label: "10$ Usdt", color: "text-slate-300", isHighTier: false },
    { label: "100$ Usdt", color: "text-slate-300", isHighTier: false },
    { label: "1500$ Usdt", color: "text-brand-secondary font-bold", isHighTier: true },
    { label: "500$ Usdt", color: "text-slate-300", isHighTier: false },
    { label: "800$ Usdt", color: "text-slate-300", isHighTier: false },
    { label: "1000$ Usdt", color: "text-slate-300", isHighTier: false },
    { label: "1200$ Usdt", color: "text-brand-secondary font-bold", isHighTier: true },
    { label: "300$ Usdt", color: "text-slate-300", isHighTier: false },
  ];

  const handleSpin = () => {
    if (isSpinning || spinsLeft <= 0) return;

    setIsSpinning(true);
    setPrizeWon(null);
    setSpinsLeft((prev) => prev - 1);

    // Pick a random wedge (0 to 7)
    const randomIndex = Math.floor(Math.random() * prizes.length);
    
    // Wedges are 45 degrees each. 
    // To align the winning wedge's center to the top pointer (at 0/360 degrees):
    // The center of wedge `idx` is at `idx * 45 + 22.5` degrees clockwise.
    // To rotate this center point to the top (0 degrees), we must rotate by `360 - (idx * 45 + 22.5)`.
    const degreesPerWedge = 45;
    const targetWedgeOffset = randomIndex * degreesPerWedge + 22.5;
    
    // Spin at least 5 full rotations (1800 degrees) plus the offset
    const extraRotations = 360 * 5;
    const finalRotation = rotation + extraRotations + (360 - targetWedgeOffset);
    
    setRotation(finalRotation);

    // Stop wheel and declare prize after transition finishes (4 seconds)
    setTimeout(() => {
      setIsSpinning(false);
      setPrizeWon(prizes[randomIndex]);
    }, 4000);
  };

  return (
    <section id="lucky-spin" className="w-full bg-gradient-to-br from-[#0b2c5d] to-[#0f172a] py-8 sm:py-24 relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Column (Copy and checks) */}
        <div className="lg:col-span-6 flex flex-col gap-8 text-center lg:text-left">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary">
              DAILY LUCK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black leading-[1.1] tracking-tight text-white">
              Spin Daily & Win <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
                Crypto Rewards
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-7 max-w-xl mx-auto lg:mx-0">
              Try your luck every 72 hours. Win anything from 0.001 BTC to premium account upgrades and mystery loot boxes.
            </p>
          </div>

          {/* Checklist */}
          <ul className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0 text-left">
            {[
              "100% Free daily spin for all users",
              "Instant reward credit to wallet",
              "Bonus spins for top referrers",
            ].map((text, idx) => (
              <li key={idx} className="flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-full bg-brand-secondary/15 border border-brand-secondary/35 flex items-center justify-center shrink-0 text-brand-secondary">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-200">{text}</span>
              </li>
            ))}
          </ul>

          {/* Action Trigger */}
          <div className="flex justify-center lg:justify-start mt-2">
            <button
              suppressHydrationWarning
              disabled={isSpinning || spinsLeft <= 0}
              onClick={handleSpin}
              className={`px-8 py-4 rounded-2xl text-sm font-bold flex items-center gap-2.5 transition-all shadow-lg cursor-pointer ${
                isSpinning || spinsLeft <= 0
                  ? "bg-slate-800 border border-white/10 text-slate-500 cursor-not-allowed shadow-none"
                  : "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-brand-primary/20 hover:scale-[1.01] hover:opacity-95"
              }`}
            >
              {/* Die/Gift icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 8a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
              {spinsLeft > 0 ? "TRY YOUR LUCK" : "OUT OF SPINS"}
            </button>
          </div>
        </div>

        {/* Right Column (Spinning Wheel) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative mt-12 lg:mt-0">
                    {/* Wheel Frame - Fully Fluid Mobile Responsive Circle */}
            <div className="relative w-full max-w-[280px] min-[360px]:max-w-[320px] sm:max-w-[384px] aspect-square rounded-full border border-white/10 p-2 bg-slate-900/40 shadow-2xl backdrop-blur-md flex items-center justify-center">
            
            {/* Top Indicator Arrow & SPIN Action Button */}
            <div className="absolute -top-16 z-30 flex flex-col items-center gap-2">
              <button
                suppressHydrationWarning
                disabled={isSpinning || spinsLeft <= 0}
                onClick={handleSpin}
                className={`px-5 py-2.5 rounded-full font-black text-xs tracking-[0.25em] transition-all duration-300 shadow-lg cursor-pointer ${
                  isSpinning || spinsLeft <= 0
                    ? "bg-slate-900 border border-white/5 text-slate-500 cursor-not-allowed shadow-none"
                    : "bg-slate-950 border border-brand-secondary/30 text-brand-secondary hover:bg-brand-secondary hover:text-slate-950 hover:border-brand-secondary hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:scale-105 active:scale-95 animate-glow-pulse"
                }`}
              >
                SPIN
              </button>
              <div className="flex flex-col items-center">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-brand-secondary drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                <div className="w-1 h-1 bg-brand-secondary rounded-full mt-0.5" />
              </div>
            </div>

            {/* Rotating SVG Wheel */}
            <div
              className="w-full h-full rounded-full overflow-hidden"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 4000ms cubic-bezier(0.2, 0.8, 0.2, 1.01)",
                transformOrigin: "center center",
                willChange: "transform",
              }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Draw 8 Sectors */}
                {prizes.map((prize, idx) => {
                  const angle = idx * 45;
                  
                  // Premium alternating backgrounds
                  const fill = prize.isHighTier
                    ? "#093b45" // Premium dark cyan for winning wedges
                    : idx % 2 === 0
                      ? "#090d16" // Deep space blue
                      : "#101626"; // Slightly lighter space blue

                  const strokeColor = prize.isHighTier ? "#38bdf8" : "rgba(255,255,255,0.08)";
                  const strokeWidth = prize.isHighTier ? "0.75" : "0.5";
                  const textFill = prize.isHighTier ? "#38bdf8" : "#ffffff";
                  
                  // Dynamic wedge hover style overrides
                  const pathClass = prize.isHighTier
                    ? "transition-all duration-300 group-hover/wedge:fill-[#0d4a57] group-hover/wedge:stroke-brand-secondary group-hover/wedge:stroke-[1.25px]"
                    : idx % 2 === 0
                      ? "transition-all duration-300 group-hover/wedge:fill-[#121929] group-hover/wedge:stroke-indigo-500/40 group-hover/wedge:stroke-[0.75px]"
                      : "transition-all duration-300 group-hover/wedge:fill-[#182136] group-hover/wedge:stroke-indigo-500/40 group-hover/wedge:stroke-[0.75px]";
                      
                  const textClass = prize.isHighTier
                    ? "font-sans text-[7px] sm:text-[7.5px] font-black tracking-wider uppercase select-none pointer-events-none transition-colors duration-300 group-hover/wedge:fill-brand-secondary"
                    : "font-sans text-[7px] sm:text-[7.5px] font-black tracking-wider uppercase select-none pointer-events-none transition-colors duration-300 group-hover/wedge:fill-indigo-200";

                  return (
                    <g key={idx} transform={`rotate(${angle} 100 100)`} className="group/wedge cursor-pointer">
                      {/* Wedge path */}
                      <path
                        d="M 100 100 L 100 0 A 100 100 0 0 1 170.71 29.29 Z"
                        fill={fill}
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        className={pathClass}
                      />
                      
                      {/* Tangential center rotated text */}
                      <g transform="rotate(22.5 100 100)">
                        <text
                          x="100"
                          y="26"
                          textAnchor="middle"
                          fill={textFill}
                          className={textClass}
                        >
                          {prize.label}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Center Spin Button (Bitcoin Style - Emblem Only) */}
            <button
              suppressHydrationWarning
              disabled={isSpinning || spinsLeft <= 0}
              onClick={handleSpin}
              className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-950 border-[4px] sm:border-[5px] border-brand-secondary/50 text-brand-secondary shadow-[0_0_20px_rgba(56,189,248,0.25),inset_0_0_12px_rgba(0,0,0,0.8)] z-20 group cursor-pointer active:scale-95 transition-all duration-300 hover:scale-105 hover:border-brand-secondary hover:shadow-[0_0_30px_rgba(56,189,248,0.45),0_0_15px_rgba(56,189,248,0.35),inset_0_0_10px_rgba(0,0,0,0.6)]"
            >
              {/* Dashed Capsule / Pill Outline - Always Spinning Natively & Centered Fluidly */}
              <div
                className="absolute border-2 border-dashed border-brand-secondary/20 rounded-[26px] pointer-events-none group-hover:border-brand-secondary/40 transition-colors left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[82%]"
                style={{
                  animation: "spin 12s linear infinite",
                  transformOrigin: "center center",
                  willChange: "transform",
                }}
              />

              <div className="absolute inset-0.5 rounded-full border border-white/5" />
              
              {/* Bitcoin Logo (Glowing Sky-Blue ₿ Symbol) */}
              <div className="z-10 text-brand-secondary group-hover:scale-115 group-hover:text-brand-secondary transition-all duration-300 flex items-center justify-center group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] select-none">
                <span className="font-sans text-3xl sm:text-4xl font-extrabold leading-none text-center">₿</span>
              </div>
            </button>
          </div>

          {/* Dynamic Result Popup Alert Modal */}
          {prizeWon && (
            <div className="absolute z-50 inset-0 flex items-center justify-center bg-bg-slate/95 rounded-3xl p-6 border border-brand-secondary/30 backdrop-blur-md shadow-2xl animate-fade-in transition-all">
              {/* Glowing Top Frame */}
              <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-brand-secondary to-transparent" />
              
              <div className="text-center flex flex-col items-center gap-4">
                {/* Glowing Crown Icon */}
                <div className="w-12 h-12 rounded-full bg-brand-secondary/15 border border-brand-secondary/35 flex items-center justify-center text-brand-secondary shadow-[0_0_20px_rgba(56,189,248,0.2)] animate-bounce">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white">Congratulations!</h4>
                  <p className="text-xs text-slate-300 mt-1">You landed perfectly on your free luck spin wedge.</p>
                </div>
                <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary tracking-wide mt-1">
                  +{prizeWon.label.replace(" Usdt", " USDT")}
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                  <a
                    href="https://www.instacoinxpay.com/getstarted"
                    target="_blank" rel="noopener noreferrer"
                    suppressHydrationWarning
                    onClick={() => {
                      setPrizeWon(null);
                    }}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary shadow-lg shadow-brand-primary/20 hover:scale-[1.02] text-md font-bold text-white transition-all cursor-pointer text-center"
                  >
                    Claim Reward
                  </a>
                  <a
                    href="https://www.instacoinxpay.com/getstarted"
                    target="_blank" rel="noopener noreferrer"
                    suppressHydrationWarning
                    onClick={() => {
                      setPrizeWon(null);
                      setSpinsLeft((prev) => prev + 1);
                    }}
                    className="px-5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-slate-800 hover:border-brand-primary text-sm font-semibold text-white transition-all cursor-pointer text-center block"
                  >
                    Spin Again
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
