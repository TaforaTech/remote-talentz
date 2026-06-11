import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PricingProvider } from "@/components/PricingModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RemoteTalentz — Hire Elite AI-Native Engineering Talent",
  description:
    "RemoteTalentz embeds rigorously vetted remote engineers — LLM, RAG, full-stack, mobile and more — into your team within days, at up to 60% less than local hires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="grain flex min-h-full flex-col">
        <PricingProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </PricingProvider>
      </body>
    </html>
  );
}
