import type { ReactNode } from "react";
import Reveal from "./Reveal";
import LogoMark from "./LogoMark";
import StartHiringButton from "./StartHiringButton";

const iconAttrs = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

const REASONS: {
  n: string;
  title: string;
  body: string;
  tag: string;
  icon: ReactNode;
}[] = [
  {
    n: "01",
    tag: "AI-native",
    title: "They Build With AI",
    body: "They ship with Claude Code, Cursor and the modern AI toolchain — building LLM features and shipping AI tooling straight into production.",
    icon: (
      <svg {...iconAttrs}>
        <path d="M13 2L4.5 13H11l-1 9 8.5-11H12z" />
      </svg>
    ),
  },
  {
    n: "02",
    tag: "Vetted",
    title: "Elit Talents",
    body: "Coding tests, peer interviews, role-specific checks — and a screen for the exact AI tools and stack you run. Only the top few percent get through.",
    icon: (
      <svg {...iconAttrs}>
        <path d="M12 2.5l2.2 1.6 2.7-.2 1 2.5 2.3 1.4-.6 2.6.9 2.6-2.1 1.7-.2 2.7-2.6.7-1.6 2.2-2.7-.6-2.4 1.2-1.7-2.1-2.7-.2-.4-2.7-2.4-1.3.5-2.7-1.2-2.4 1.9-1.9.4-2.7 2.7-.4z" />
        <path d="M9.2 12.2l1.9 1.9 3.7-3.9" />
      </svg>
    ),
  },
  {
    n: "03",
    tag: "In sync",
    title: "On your clock",
    body: "Four to eight hours of daily overlap keeps the team aligned — no off-shore lag, no graveyard standups. Asia's best, on your clock.",
    icon: (
      <svg {...iconAttrs}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    n: "04",
    tag: "Fast start",
    title: "Ship from day one",
    body: "We source, match and deploy from Vietnam, the Philippines and beyond — so a vetted engineer is committing to your repo this week.",
    icon: (
      <svg {...iconAttrs}>
        <path d="M5 19l4-1 9.5-9.5a2.1 2.1 0 0 0-3-3L6 15z" />
        <path d="M13.5 6.5l3 3M5 19l-1 1" />
      </svg>
    ),
  },
];

export default function WhyRemoteTalentz() {
  return (
    <section className="container-rt pt-[clamp(1rem,0.4rem+2vw,2.25rem)] pb-[clamp(3rem,1.9rem+4.4vw,5.5rem)]">
      <Reveal className="text-center">
        <p className="eyebrow">
          <LogoMark className="size-[0.85em]" /> Why us
        </p>
        <h2 className="mx-auto mt-5 whitespace-nowrap font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
          Built different, on purpose
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">
          AI-native engineers. Less overhead, more output.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {REASONS.map((r, i) => (
          <Reveal key={r.n} delay={i * 90}>
            <article className="group relative flex h-full min-h-[23rem] transform-gpu flex-col overflow-hidden rounded-[1.25rem] border border-line-soft bg-paper-raised p-8 shadow-[0_22px_50px_-34px_rgba(12,11,10,0.42)] transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform hover:-translate-y-2 hover:border-red/30">
              {/* Brand accent bar — draws across the top on hover */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"
                style={{ backgroundImage: "var(--rt-grad-action)" }}
              />
              {/* Soft red spotlight that blooms from the corner on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-14 size-44 transform-gpu rounded-full opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity] group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,48,64,0.20), transparent 72%)",
                }}
              />
              {/* Outsized index numeral, part of the composition */}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-5 right-2 select-none font-display text-[6.5rem] font-bold leading-none tracking-tighter text-ink/[0.035] transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-red/[0.07]"
              >
                {r.n}
              </span>

              <div className="relative flex items-center justify-between">
                <span className="relative grid size-12 place-items-center overflow-hidden rounded-xl bg-red-tint text-red transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-white [&_svg]:relative [&_svg]:size-[1.35rem]">
                  {/* Gradient fill fades in via opacity — background-image can't be transitioned */}
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100"
                    style={{ backgroundImage: "var(--rt-grad-action)" }}
                  />
                  {r.icon}
                </span>
                <span className="font-mono text-2xs uppercase tracking-[0.32em] text-ink-faint">
                  {r.tag}
                </span>
              </div>

              <h3 className="relative mt-8 font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-ink">
                {r.title}
              </h3>
              <p className="relative mt-3 text-sm text-ink-soft">{r.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-12 flex justify-center">
        <StartHiringButton variant="red" />
      </Reveal>
    </section>
  );
}
