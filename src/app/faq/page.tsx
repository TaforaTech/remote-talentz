import type { Metadata } from "next";
import FaqContent from "@/components/FaqContent";

export const metadata: Metadata = {
  title: "FAQ — RemoteTalentz",
  description:
    "Answers on hiring vetted remote talent through RemoteTalentz — vetting, pricing, payroll and compliance, guarantees, AI-native engineers, and how the day-to-day works.",
};

export default function FaqPage() {
  return (
    <div className="pt-nav">
      <FaqContent />
    </div>
  );
}
