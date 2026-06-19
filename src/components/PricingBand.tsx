"use client";

import Reveal from "./Reveal";
import LogoMark from "./LogoMark";
import { usePricing } from "./PricingModal";

const MODELS = [
  {
    name: "Dedicated full-time",
    body: "An engineer embedded in your team, your tools, your standups — 40 hrs/week, exclusively yours.",
    tag: "Most popular",
  },
  {
    name: "Part-time monthly",
    body: "Senior expertise at 10–20 hrs/week. Ideal for advisory work, audits, and steady iteration.",
    tag: null,
  },
  {
    name: "Project sprint",
    body: "A scoped build with a fixed crew and a fixed deadline. From prototype to production.",
    tag: null,
  },
];

export default function PricingBand() {
  const { openPricing } = usePricing();

  return (
    <section className="py-section">
      <div className="container-rt">
        <Reveal className="text-center">
          <p className="eyebrow">
            <LogoMark className="size-[0.85em]" /> Pricing
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
            Engagement models built for how you actually ship.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">
            Transparent monthly rates by role and seniority. No recruiter
            percentages, no placement fees, no surprises.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {MODELS.map((m, i) => (
            <Reveal key={m.name} delay={i * 90}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-paper-raised p-8 transition-colors duration-300 hover:border-red">
                {m.tag && (
                  <span className="absolute -top-3 left-8 rounded-full bg-red px-3 py-1 font-mono text-2xs uppercase tracking-[0.16em] text-white">
                    {m.tag}
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-ink">{m.name}</h3>
                <p className="mt-3 flex-1 text-sm text-ink-soft">{m.body}</p>
                <button
                  onClick={openPricing}
                  className="group/link mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-ink transition-colors hover:text-red"
                >
                  See rates
                  <span aria-hidden="true" className="transition-transform group-hover/link:translate-x-0.5">
                    →
                  </span>
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 overflow-hidden rounded-2xl bg-ink">
          <div className="flex flex-col items-start justify-between gap-8 p-10 lg:flex-row lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold text-paper">
                The full rate card, straight to your inbox.
              </h3>
              <p className="mt-2 max-w-xl text-sm text-paper/65">
                Complete breakdowns by role, seniority, and engagement model —
                and what you save versus a comparable local hire.
              </p>
            </div>
            <button onClick={openPricing} className="btn btn-red shrink-0">
              Unlock Full Pricing
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
