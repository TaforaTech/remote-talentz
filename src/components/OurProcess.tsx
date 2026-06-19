"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Reveal from "./Reveal";

type Step = {
  n: string;
  title: string;
  body: string;
  icon: ReactNode;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Tell Us Who You Need",
    body: "Share your hiring requirements, team structure, budget, and timeline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="8" y="2.5" width="8" height="4" rx="1" />
        <path d="M16 4.5h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h2" />
        <path d="M8.5 12h.01M8.5 16.5h.01M12 12h3.5M12 16.5h3.5" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "We Find the Right Talent",
    body: "Our recruiters proactively source and engage qualified professionals from our global talent network.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m20 20-4.2-4.2" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "We Vet Every Candidate",
    body: "We assess skills, communication, experience, and remote-work readiness to ensure quality.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19.5 12.5c0 4.6-3.2 6.9-7.1 8.25a1 1 0 0 1-.8 0C7.7 19.4 4.5 17.1 4.5 12.5V6.3a1 1 0 0 1 .9-1c1.9-.1 4.2-1.2 5.85-2.6a1.15 1.15 0 0 1 1.5 0C14.4 4.1 16.7 5.2 18.6 5.3a1 1 0 0 1 .9 1z" />
        <path d="m9 12 2.1 2.1L15.2 10" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Meet Your Shortlist",
    body: "Receive 3–5 highly qualified candidates within days, not weeks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15.5 20.5v-1.8a3.5 3.5 0 0 0-3.5-3.5H6a3.5 3.5 0 0 0-3.5 3.5v1.8" />
        <circle cx="9" cy="7.5" r="3.5" />
        <path d="M21.5 20.5v-1.8a3.5 3.5 0 0 0-2.6-3.38M15.5 4.2a3.5 3.5 0 0 1 0 6.6" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Interview & Hire",
    body: "Interview your favorites while we coordinate scheduling, feedback, and negotiations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 8.5a1.8 1.8 0 0 1-1.8 1.8H6l-3.5 3V4.8A1.8 1.8 0 0 1 4.3 3h6.9A1.8 1.8 0 0 1 13 4.8z" />
        <path d="M16.5 8.5h1.2A1.8 1.8 0 0 1 19.5 10.3V20l-3.5-3h-5a1.8 1.8 0 0 1-1.8-1.8v-.7" />
      </svg>
    ),
  },
  {
    n: "06",
    title: "Onboard & Scale",
    body: "We support onboarding and help ensure a smooth transition into your team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 7.5 13.2 15.3l-4-4L3 17.5" />
        <path d="M15.5 7.5H21v5.5" />
      </svg>
    ),
  },
];

export default function OurProcess() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            setStarted(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-paper py-section">
      <div className="container-rt">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-4xl font-semibold tracking-[-0.02em]">
            How we hire, in six steps.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Recruiter-led, from first brief to embedded engineer.
          </p>
        </Reveal>

        {/* Two rows of three. */}
        <div
          ref={gridRef}
          className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {STEPS.map((step, i) => {
            return (
              <Reveal key={step.n} delay={(i % 3) * 110} className="relative">
                <article className="process-card group relative flex h-full flex-col rounded-2xl border border-line bg-paper-raised p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red/40 hover:shadow-[0_22px_55px_-28px_rgba(227,0,27,0.45)]">
                  <div className="flex items-center justify-between">
                    <span
                      data-on={started}
                      style={{ transitionDelay: `${(i % 3) * 110}ms` }}
                      className="process-node font-display text-xl font-semibold leading-none tracking-tight"
                    >
                      {step.n}
                    </span>
                    <span className="process-icon grid size-11 shrink-0 place-items-center rounded-xl [&_svg]:size-5.5">
                      {step.icon}
                    </span>
                  </div>

                  <span className="mt-6 font-mono text-2xs uppercase tracking-[0.2em] text-ink-faint">
                    Step {Number(step.n)}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">{step.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
