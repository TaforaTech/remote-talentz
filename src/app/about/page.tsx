import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Us — RemoteTalentz",
  description:
    "Why RemoteTalentz exists: founder Tauhid Hasan built it to close the gap between great teams and great engineers — the right match, fairly priced for clients and fairly paid for talent.",
};

export default function AboutPage() {
  return (
    <div className="pt-nav">
      <About />
    </div>
  );
}
