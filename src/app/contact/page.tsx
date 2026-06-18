import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — RemoteTalentz",
  description:
    "Tell us who you need. Share the role and the stack — we'll come back within one business day with availability and a plan to get your shortlist moving.",
};

export default function ContactPage() {
  return (
    <div className="pt-nav">
      <Contact />
    </div>
  );
}
