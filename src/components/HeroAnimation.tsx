/* Animated explainer of the goal: brief → vet & match → shipping.
   A single vertical timeline; the highlight walks through the three
   steps on one shared 9s loop (see globals.css). */

import LogoMark from "./LogoMark";

export default function HeroAnimation() {
  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-md select-none">
      <div className="relative">
        {/* Flowing connector line behind the nodes — runs from node 1's centre
            down to node 3's centre. The absolute top/bottom inset lives on this
            div, NOT the SVG: an SVG with a viewBox is a replaced element and
            sizes its height from the aspect ratio, ignoring `bottom` — so it
            would only ever render a 100px stub. The div stretches correctly and
            the SVG fills it. top-10 ≈ node 1 centre; bottom-[8.25rem] ≈ node 3
            centre (the 3rd card is taller, so a symmetric inset would overshoot). */}
        <div className="pointer-events-none absolute left-[1.45rem] top-10 bottom-[8.25rem] w-1">
          <svg
            className="h-full w-full"
            viewBox="0 0 4 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <path d="M2 0 V100" className="flow-line" />
          </svg>
        </div>

        <ol className="relative space-y-9">
        {/* 01 — Your brief */}
        <li className="flex items-start gap-4">
          <StepNode n="1" className="" />
          <div className="step-card flex-1 rounded-2xl border bg-paper-raised p-5">
            <p className="font-mono text-2xs uppercase tracking-[0.2em] text-ink-faint">
              Your brief
            </p>
            <p className="mt-1.5 font-display text-lg font-semibold text-ink">
              Tell us who you need
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              e.g. Senior AI Engineer · CET ±4h
            </p>
          </div>
        </li>

        {/* 02 — We vet & match */}
        <li className="flex items-start gap-4">
          <StepNode n="2" className="step-2" />
          <div className="step-card step-2 flex-1 rounded-2xl border bg-paper-raised p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-2xs tracking-[0.2em] text-ink-faint">
                  RemoteTalentz
                </p>
                <p className="mt-1.5 font-display text-lg font-semibold text-ink">
                  We vet &amp; match
                </p>
                <p className="mt-1 text-sm text-ink-soft">
                  Top 3% Bangladeshi Talentz
                </p>
              </div>
              <span className="grid size-14 shrink-0 place-items-center">
                <LogoMark className="size-13 motion-safe:animate-[rt-spin-slow_10s_linear_infinite]" />
              </span>
            </div>
          </div>
        </li>

        {/* 03 — Shipping in your team */}
        <li className="flex items-start gap-4">
          <StepNode n="3" className="step-3" />
          <div className="step-card step-3 relative flex-1 rounded-2xl border bg-paper-raised p-5">
            <span className="match-badge absolute -top-3 right-5 rounded-full bg-red px-3 py-1 font-mono text-2xs uppercase tracking-[0.14em] text-white">
              Matched in 48h
            </span>
            <p className="font-mono text-2xs uppercase tracking-[0.2em] text-ink-faint">
              Your team
            </p>
            <p className="mt-1.5 font-display text-lg font-semibold text-ink">
              Shipping within days
            </p>
            <div className="member-new mt-3 flex items-center gap-3 rounded-xl bg-red-tint px-3 py-2.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-red font-mono text-xs font-bold text-white">
                ✓
              </span>
              <span>
                <span className="block font-display text-sm font-semibold text-ink">
                  Your new engineer
                </span>
                <span className="block font-mono text-2xs text-red">
                  vetted · embedded · up to 85% less
                </span>
              </span>
            </div>
          </div>
        </li>
        </ol>
      </div>
    </div>
  );
}

function StepNode({ n, className }: { n: string; className: string }) {
  return (
    <span
      className={`step-node relative z-10 mt-4 grid size-12 shrink-0 place-items-center rounded-full font-display text-sm font-semibold ${className}`}
    >
      {n}
    </span>
  );
}
