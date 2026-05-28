"use client";

import { useState } from "react";

export default function DownloadApp() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || isSending) return;
    
    setIsSending(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
          setEmail("");
        }, 4000);
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending email.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="download" className="w-full bg-[#f5fbff] py-8 sm:py-24 relative overflow-hidden border-t border-slate-200/50">
      {/* Background ambient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center gap-8 sm:gap-12 text-center">
        
        {/* Header Block */}
        <div className="flex flex-col items-center gap-4 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
            MOBILE COMPATIBILITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black leading-[1.1] tracking-tight text-slate-900 mt-2">
            Download Now & <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
              Start Earning
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-7 mt-2">
            Get instant price alerts, speed up spins with widget shortcuts, and enjoy contactless payments with the mobile app.
          </p>
        </div>

        {/* App Store Buttons Row (3 Columns) */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full max-w-4xl mt-2">
          
          {/* Apple App Store */}
          <a
            href="https://www.instacoinxpay.com/getstarted"
            target="_blank" rel="noopener noreferrer"
            className="w-full sm:flex-1 sm:min-w-[200px] rounded-2xl p-4 bg-white border border-slate-200 hover:border-brand-primary/40 shadow-xl hover:bg-slate-50 flex items-center gap-4 transition-all duration-300 group select-none cursor-pointer"
          >
            {/* Apple Icon */}
            <div className="text-slate-500 group-hover:text-brand-primary transition-colors shrink-0">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.63.72-1.18 1.86-1.03 2.97 1.12.09 2.26-.59 2.96-1.4" />
              </svg>
            </div>
            {/* Text layout */}
            <div className="flex flex-col items-start leading-none text-left">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">
                DOWNLOAD ON
              </span>
              <span className="text-base font-bold text-slate-700 mt-1 group-hover:text-brand-primary transition-colors">
                App Store
              </span>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="https://www.instacoinxpay.com/getstarted"
            target="_blank" rel="noopener noreferrer"
            className="w-full sm:flex-1 sm:min-w-[200px] rounded-2xl p-4 bg-white border border-slate-200 hover:border-brand-secondary/40 shadow-xl hover:bg-slate-50 flex items-center gap-4 transition-all duration-300 group select-none cursor-pointer"
          >
            {/* Play icon */}
            <div className="text-slate-500 group-hover:text-brand-secondary transition-colors shrink-0">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.25 2.25v19.5c0 .35.15.65.4.85l10.4-10.4-10.4-10.4c-.25.2-.4.5-.4.85zM14.7 11.55l3.2-3.2-13.8-7.9c-.2-.1-.45-.15-.65-.15L14.7 11.55zm4.6.6c0-.2-.05-.4-.15-.6L16 9.8l-2.6 2.6 2.6 2.6 3.15-1.75c.1-.2.15-.4.15-.6zM3.9 23.35c.2 0 .45-.05.65-.15l13.8-7.9-3.2-3.2-11.25 11.25z" />
              </svg>
            </div>
            {/* Text layout */}
            <div className="flex flex-col items-start leading-none text-left">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">
                ANDROID APP ON
              </span>
              <span className="text-base font-bold text-slate-700 mt-1 group-hover:text-brand-secondary transition-colors">
                Google Play
              </span>
            </div>
          </a>

          {/* Direct APK */}
          <a
            href="https://www.instacoinxpay.com/getstarted"
            target="_blank" rel="noopener noreferrer"
            className="w-full sm:flex-1 sm:min-w-[200px] rounded-2xl p-4 bg-gradient-to-r from-brand-primary to-brand-secondary shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 flex items-center gap-4 transition-all duration-300 group select-none cursor-pointer hover:scale-[1.02] hover:-translate-y-1"
          >
            {/* Download icon */}
            <div className="text-white shrink-0 group-hover:animate-bounce transition-all">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            {/* Text layout */}
            <div className="flex flex-col items-start leading-none text-left">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-white/80">
                DIRECT DOWNLOAD
              </span>
              <span className="text-base font-bold text-white mt-1">
                Android APK
              </span>
            </div>
          </a>

        </div>

        {/* Email Form Container */}
        <div className="w-full max-w-md mt-1 relative">
          <form
            onSubmit={handleSubmit}
            className="w-full rounded-2xl p-1.5 sm:p-2 bg-white border border-slate-200 shadow-xl shadow-brand-secondary/5 backdrop-blur-md flex items-stretch gap-1 sm:gap-2.5"
          >
            <input
              suppressHydrationWarning
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              required
              disabled={emailSent}
              className="flex-1 bg-transparent border-none text-[12px] sm:text-base text-slate-700 placeholder-slate-400 px-3 py-3 sm:px-5 sm:py-4 min-w-0 focus:outline-none disabled:text-slate-400"
            />
            <button
              suppressHydrationWarning
              type="submit"
              disabled={emailSent || isSending}
              className={`px-4 sm:px-8 py-3 sm:py-4 rounded-xl text-[11px] sm:text-sm font-black transition-all shrink-0 cursor-pointer ${
                emailSent || isSending
                  ? "bg-slate-100 border border-brand-primary/20 text-brand-primary cursor-not-allowed"
                  : "bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-95 text-white shadow-md hover:scale-[1.01]"
              }`}
            >
              {isSending ? "SENDING..." : emailSent ? "SENT ✓" : "Submit"}
            </button>
          </form>

          {/* Success Overlay Feed */}
          {emailSent && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-20 bg-brand-primary/10 border border-brand-primary/25 px-4 py-2 rounded-xl text-xs font-semibold text-brand-primary shadow-md animate-fade-in select-none whitespace-nowrap">
              Email Link Sent! Check your inbox!
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
