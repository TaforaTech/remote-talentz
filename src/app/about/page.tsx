import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Us — RemoteTalentz",
  description:
    "A network, not a marketplace. Meet the AI-native talent network behind RemoteTalentz — how we vet, match, and support elite remote engineers.",
};

export default function AboutPage() {
  return (
    <div className="pt-nav">
      <About />
    </div>
  );
}
