/* Animated explainer of the goal: brief → vet & match → shipping.
   A single vertical timeline; the highlight walks through the three
   steps on one shared 9s loop (see globals.css). */

export default function HeroAnimation() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md select-none">
      {/* Flowing connector line behind the nodes */}
      <svg
        className="absolute bottom-10 left-[1.45rem] top-10 w-1"
        viewBox="0 0 4 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M2 0 V100" className="flow-line" />
      </svg>

      <ol className="relative space-y-5">
        {/* 01 — Your brief */}
        <li className="flex items-start gap-4">
          <StepNode n="1" className="" />
          <div className="step-card flex-1 rounded-2xl border bg-paper-raised p-5">
            <p className="font-mono text-2xs uppercase tracking-[0.2em] text-ink-faint">
              Your brief
            </p>
            <p className="mt-1.5 font-display text-lg font-bold text-ink">
              Tell us who you need
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              e.g. Senior RAG Engineer · Python · CET ±4h
            </p>
          </div>
        </li>

        {/* 02 — We vet & match */}
        <li className="flex items-start gap-4">
          <StepNode n="2" className="step-2" />
          <div className="step-card step-2 flex-1 rounded-2xl border bg-paper-raised p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-2xs uppercase tracking-[0.2em] text-ink-faint">
                  RemoteTalentz
                </p>
                <p className="mt-1.5 font-display text-lg font-bold text-ink">
                  We vet &amp; match
                </p>
                <p className="mt-1 text-sm text-ink-soft">
                  Only the top 3% of engineers pass.
                </p>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="motion-safe:animate-[rt-spin-slow_14s_linear_infinite]"
                >
                  <path
                    d="M12 2v20M3.34 7l17.32 10M3.34 17L20.66 7"
                    stroke="var(--rt-red)"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                </svg>
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
            <p className="mt-1.5 font-display text-lg font-bold text-ink">
              Shipping within days
            </p>
            <div className="member-new mt-3 flex items-center gap-3 rounded-xl bg-red-tint px-3 py-2.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-red font-mono text-xs font-bold text-white">
                ✓
              </span>
              <span>
                <span className="block font-display text-sm font-bold text-ink">
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
  );
}

function StepNode({ n, className }: { n: string; className: string }) {
  return (
    <span
      className={`step-node relative z-10 mt-4 grid size-12 shrink-0 place-items-center rounded-full font-display text-sm font-bold ${className}`}
    >
      {n}
    </span>
  );
}
