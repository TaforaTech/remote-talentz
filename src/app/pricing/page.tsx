import type { Metadata } from "next";
import PricingGate from "@/components/PricingGate";

export const metadata: Metadata = {
  title: "Pricing — RemoteTalentz",
  description:
    "Transparent monthly rates by role and seniority. Enter your access credentials to view the full rate card.",
};

export default function PricingPage() {
  return (
    <div className="pt-nav">
      <PricingGate />
    </div>
  );
}
