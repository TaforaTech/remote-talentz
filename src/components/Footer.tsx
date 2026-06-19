"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePricing } from "./PricingModal";

const ROLE_LINKS = [
  "LLM Engineer",
  "AI Agent Developer",
  "Full-Stack Developer",
  "RAG Engineer",
  "Founding Engineer",
];

export default function Footer() {
  const { openPricing } = usePricing();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="container-rt py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo onDark />
            <p className="mt-5 max-w-sm text-sm text-paper/55">
              The AI-native talent network. Elite remote engineers, embedded in
              your team in days — at a fraction of the local cost.
            </p>
          </div>

          <nav aria-label="Talent">
            <p className="font-mono text-2xs uppercase tracking-[0.22em] text-red">
              Talent
            </p>
            <ul className="mt-4 space-y-2.5">
              {ROLE_LINKS.map((r) => (
                <li key={r}>
                  <Link href="/#talent" className="text-sm text-paper/70 transition-colors hover:text-paper">
                    {r}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#talent" className="text-sm font-semibold text-paper transition-colors hover:text-red">
                  All roles →
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="font-mono text-2xs uppercase tracking-[0.22em] text-red">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/how-we-work" className="text-sm text-paper/70 transition-colors hover:text-paper">
                  How we work
                </Link>
              </li>
              <li>
                <button onClick={openPricing} className="text-sm text-paper/70 transition-colors hover:text-paper">
                  Pricing
                </button>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-paper/70 transition-colors hover:text-paper">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-paper/70 transition-colors hover:text-paper">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Oversized wordmark */}
        {/* <p
          aria-hidden="true"
          className="mt-16 select-none border-t border-paper/10 pt-12 text-center font-display text-hero font-semibold tracking-[-0.03em] text-paper/[0.07]"
        >
          remotetalentz<span className="text-red/40">✱</span>
        </p> */}

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-paper/10 pt-6 sm:flex-row">
          <p className="text-2xs text-paper/40">
            © {year} RemoteTalentz. All rights reserved.
          </p>
          <p className="text-2xs text-paper/40">
            Built remote, from 30+ countries.
          </p>
        </div>
      </div>
    </footer>
  );
}
