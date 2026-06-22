import type { ReactNode } from "react";
import Reveal from "./Reveal";
import LogoMark from "./LogoMark";

const iconAttrs = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

const PILLARS: {
  title: string;
  lead: string;
  body: string;
  icon: ReactNode;
}[] = [
  {
    title: "One Invoice",
    lead: "We manage the payouts. You settle one bill.",
    body: "No more juggling multiple payouts or HR paperwork. We process every contractor payment and bill you with one clean statement — keeping your focus on growth instead of the back office.",
    icon: (
      <svg {...iconAttrs}>
        <path d="M6 3.5h9l3 3v14H6z" />
        <path d="M9 9h6M9 12.5h6M9 16h3.5" />
        <circle cx="17" cy="16.5" r="3" />
        <path d="M17 15.2v2.6M16 16.5h2" />
      </svg>
    ),
  },
  {
    title: "Total Oversight",
    lead: "We track the work. You focus on results.",
    body: "Dedicated tracking tools and a hands-on oversight team keep every contractor's day in full view — so time theft, idle hours, and slipping performance get caught long before they ever become your problem.",
    icon: (
      <svg {...iconAttrs}>
        <rect x="5" y="3.5" width="14" height="17" rx="2" />
        <path d="M9 3.5h6v2.5H9z" />
        <path d="M8.5 11h3M8.5 15h6" />
        <circle cx="15.5" cy="11" r="2" />
        <path d="M15.5 10v1l.7.6" />
      </svg>
    ),
  },
  {
    title: "People Care",
    lead: "We safeguard morale. You retain top talent.",
    body: "Through steady check-ins, wellness scores, and pulse surveys, we sense when engagement starts to dip — letting you stop burnout early, lift morale, and keep the people you fought to hire.",
    icon: (
      <svg {...iconAttrs}>
        <path d="M12 21s-6.5-4.2-8.5-8.2A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 8.5 5.8C18.5 16.8 12 21 12 21z" />
      </svg>
    ),
  },
  {
    title: "Flat Rate",
    lead: "No tax hassles. No hidden fees. Just talent.",
    body: "No 401(k), insurance, or payroll-tax burden to manage. Just one flat monthly rate with nothing hidden — stay compliant, trim overhead, and scale quickly without piling on HR.",
    icon: (
      <svg {...iconAttrs}>
        <path d="M12 2.5l7 2.5v6c0 4.4-3 7.6-7 8.5-4-0.9-7-4.1-7-8.5v-6z" />
        <path d="M9 11.5l2 2 4-4.5" />
      </svg>
    ),
  },
];

export default function MonitorSupport() {
  return (
    <section className="container-rt pt-[clamp(1rem,0.4rem+2vw,2.25rem)] pb-[clamp(3rem,1.9rem+4.4vw,5.5rem)]">
      <Reveal className="text-center">
        <p className="eyebrow justify-center">
          <LogoMark className="size-[0.85em]" /> The full package
        </p>
        <h2 className="mt-5 whitespace-nowrap font-display text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl">
          You Scale. We Source, Vet, and Manage
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">
          From single-invoice billing to oversight and wellness support, we
          bring you proven full-time contractors with everything they need to do
          their best work — all under your direction.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 130}>
            <article className="group relative flex h-full transform-gpu flex-col overflow-hidden rounded-[1.25rem] border border-line-soft bg-paper-raised p-8 shadow-[0_22px_50px_-34px_rgba(12,11,10,0.42)] transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform hover:-translate-y-2 hover:border-red/30">
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

              <div className="relative flex items-center gap-4">
                <span className="relative grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-red-tint text-red transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-white [&_svg]:relative [&_svg]:size-[1.35rem]">
                  {/* Gradient fill fades in via opacity — background-image can't be transitioned */}
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100"
                    style={{ backgroundImage: "var(--rt-grad-action)" }}
                  />
                  {p.icon}
                </span>
                <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.01em] text-ink">
                  {p.title}
                </h3>
              </div>

              <p className="relative mt-5 font-display text-sm font-semibold text-red">
                {p.lead}
              </p>
              <p className="relative mt-2 text-sm text-ink-soft">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
