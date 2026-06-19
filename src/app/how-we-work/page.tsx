import type { Metadata } from "next";
import HowWeWork from "@/components/HowWeWork";

export const metadata: Metadata = {
  title: "How we work — RemoteTalentz",
  description:
    "From brief to embedded engineer in four steps. Tell us the role, meet your shortlist within 48 hours, run a risk-free trial, and scale without overhead.",
};

export default function HowWeWorkPage() {
  return (
    <div className="pt-nav">
      <HowWeWork />
    </div>
  );
}
