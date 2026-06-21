"use client";

import Link from "next/link";
import Logo from "./Logo";
import Reveal from "./Reveal";
import StartHiringButton from "./StartHiringButton";

const ROLE_LINKS = [
  "LLM Engineer",
  "AI Agent Developer",
  "Full-Stack Developer",
  "RAG Engineer",
  "Founding Engineer",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#9c0018] to-[#6f0013] text-paper">
      {/* Pre-footer CTA band — frosted glass over soft brand-colour blobs */}
      <div className="container-rt pt-16">
        <div className="relative">
          {/* Clean white card */}
          <div className="relative overflow-hidden rounded-[1.85rem] bg-paper px-6 py-16 text-center shadow-[0_40px_100px_-45px_rgba(0,0,0,0.45)] ring-1 ring-black/5 sm:px-12 sm:py-24">
            <Reveal className="relative">
              <p className="flex items-center justify-center gap-2 font-mono text-2xs uppercase tracking-[0.24em] text-ink-soft">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-red opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-red" />
                </span>
                Talent has no timezone
              </p>
              <h2 className="mt-5 whitespace-nowrap font-display text-2xl font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.7rem]">
                Hire who your rival&apos;s still interviewing.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">
                Brief us today, meet an interview-ready shortlist in 48 hours —
                elite AI-native talent, in your timezone, for up to 70% less.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <StartHiringButton variant="red" size="lg" />
                <Link href="/contact" className="btn btn-ghost border-ink/15 bg-white/40">
                  Talk to us
                </Link>
              </div>
              <p className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-2xs text-ink-faint">
                <span>No retainers</span>
                <span className="text-ink/25">·</span>
                <span>Shortlist in 48 hours</span>
                <span className="text-ink/25">·</span>
                <span>Two-week risk-free trial</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="container-rt py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo onDark />
            <p className="mt-5 max-w-sm text-sm text-paper/80">
              The AI-native talent network. Elite remote engineers, embedded in
              your team in days — at a fraction of the local cost.
            </p>
          </div>

          <nav aria-label="Talent">
            <p className="font-mono text-2xs uppercase tracking-[0.22em] text-paper">
              Talent
            </p>
            <ul className="mt-4 space-y-2.5">
              {ROLE_LINKS.map((r) => (
                <li key={r}>
                  <Link href="/#talent" className="text-sm text-paper/75 transition-colors hover:text-paper">
                    {r}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#talent" className="text-sm font-semibold text-paper underline-offset-4 transition-colors hover:underline">
                  All roles →
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="font-mono text-2xs uppercase tracking-[0.22em] text-paper">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/our-process" className="text-sm text-paper/75 transition-colors hover:text-paper">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-paper/75 transition-colors hover:text-paper">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-paper/75 transition-colors hover:text-paper">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-paper/75 transition-colors hover:text-paper">
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

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-6 sm:flex-row">
          <p className="text-2xs text-paper/65">
            © {year} RemoteTalentz. All rights reserved.
          </p>
          <p className="text-2xs text-paper/65">
            Built remote, from 30+ countries.
          </p>
        </div>
      </div>
    </footer>
  );
}
