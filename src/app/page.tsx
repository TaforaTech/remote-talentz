import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Roles from "@/components/Roles";
import HowWeWork from "@/components/HowWeWork";
import PricingBand from "@/components/PricingBand";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Stats />
      <Roles />
      <HowWeWork />
      <PricingBand />
      <About />
      <Contact />
    </>
  );
}
