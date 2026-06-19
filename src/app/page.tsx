import Hero from "@/components/Hero";
import WhyRemoteTalentz from "@/components/WhyRemoteTalentz";
import Proof from "@/components/Proof";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import TalentBridge from "@/components/TalentBridge";
import Roles from "@/components/Roles";
import PricingBand from "@/components/PricingBand";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyRemoteTalentz />
      <Clients />
      <TalentBridge />
      <Proof />
      {/* <Stats /> */}
      <Roles />
      <PricingBand />
      <About />
    </>
  );
}
