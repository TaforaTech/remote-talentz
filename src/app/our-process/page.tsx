import type { Metadata } from "next";
import OurProcess from "@/components/OurProcess";

export const metadata: Metadata = {
  title: "Our Process — RemoteTalentz",
  description:
    "How we hire, in six deliberate steps. A premium, recruiter-led process — from your first brief to an engineer fully embedded in your team.",
};

export default function OurProcessPage() {
  return (
    <div className="pt-nav">
      <OurProcess />
    </div>
  );
}
