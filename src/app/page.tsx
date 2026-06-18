import Hero from "@/components/Hero";
import WhyRemoteTalentz from "@/components/WhyRemoteTalentz";
import Proof from "@/components/Proof";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Roles from "@/components/Roles";
import HowWeWork from "@/components/HowWeWork";
import PricingBand from "@/components/PricingBand";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyRemoteTalentz />
      <Clients />
      <Proof />
      {/* <Stats /> */}
      <Roles />
      <HowWeWork />
      <PricingBand />
      <About />
    </>
  );
}
