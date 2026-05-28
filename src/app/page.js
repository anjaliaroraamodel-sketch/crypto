// import Header from "@/components/common/Header";
import Hero from "@/components/home/Hero";
import AirdropCampaign from "@/components/home/AirdropCampaign";
import SpinWheel from "@/components/home/SpinWheel";
import ReferralProgram from "@/components/home/ReferralProgram";
import LiveTicker from "@/components/home/LiveTicker";
import DownloadApp from "@/components/home/DownloadApp";
// import Footer from "@/components/common/Footer";
import ScrollReveal from "@/components/common/ScrollReveal";
import AutoRedirect from "@/components/common/AutoRedirect";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-light font-sans text-slate-900">
      <AutoRedirect />
      {/* Navigation Header */}
      {/* <Header /> */}

      {/* Main Page Layout */}
      <main className="flex-grow flex flex-col w-full">
        {/* Interactive Hero Banner - Fades in on load */}
        <ScrollReveal delay={150}>
          <Hero />
        </ScrollReveal>

        {/* Massive Airdrop Campaign Rewards Board */}
        <ScrollReveal>
          <AirdropCampaign />
        </ScrollReveal>

        {/* Interactive Fortune Spin Wheel */}
        <ScrollReveal>
          <SpinWheel />
        </ScrollReveal>

        {/* Dynamic Referral & Inviting Program */}
        <ScrollReveal>
          <ReferralProgram />
        </ScrollReveal>

        {/* Live Withdrawal Ticker Section */}
        <ScrollReveal>
          <LiveTicker />
        </ScrollReveal>

        {/* Interactive Mobile Download Banner */}
        <ScrollReveal>
          <DownloadApp />
        </ScrollReveal>
      </main>

      {/* Modern Footer Map */}
      {/* <Footer /> */}
    </div>
  );
}

