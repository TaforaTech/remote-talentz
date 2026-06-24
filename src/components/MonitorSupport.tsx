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
        <path d="M7 2.5h7l3.5 3.5V21.5l-2.2-1.5-2.2 1.5-2.1-1.5-2.2 1.5-2.2-1.5L7 21.5z" />
        <path d="M10 9h4M10 12.5h4" />
      </svg>
    ),
  },
  {
    title: "Total Oversight",
    lead: "We track the work. You focus on results.",
    body: "Dedicated tracking tools and a hands-on oversight team keep every contractor's day in full view — so time theft, idle hours, and slipping performance get caught long before they ever become your problem.",
    icon: (
      <svg {...iconAttrs}>
        <path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12s-3.5 6.5-9.5 6.5S2.5 12 2.5 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "People Care",
    lead: "We safeguard morale. You retain top talent.",
    body: "Through steady check-ins, wellness scores, and pulse surveys, we sense when engagement starts to dip — letting you stop burnout early, lift morale, and keep the people you fought to hire.",
    icon: (
      <svg {...iconAttrs}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
        <path d="M16.5 13.2c1-1.1 2.9-.8 3.4.6.5 1.4-1 2.9-3.4 4.2-2.4-1.3-3.9-2.8-3.4-4.2.5-1.4 2.4-1.7 3.4-.6z" />
      </svg>
    ),
  },
  {
    title: "Flat Rate",
    lead: "No tax hassles. No hidden fees. Just talent.",
    body: "No 401(k), insurance, or payroll-tax burden to manage. Just one flat monthly rate with nothing hidden — stay compliant, trim overhead, and scale quickly without piling on HR.",
    icon: (
      <svg {...iconAttrs}>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.5 9.2c-.5-1-1.6-1.5-2.8-1.3-1.3.2-2.2 1.1-2.2 2.1 0 1.2 1.1 1.7 2.5 2 1.6.3 2.8.9 2.8 2.2 0 1.1-1 2-2.3 2.2-1.3.2-2.5-.4-3-1.4" />
        <path d="M12 6.2v1.6M12 16.2v1.6" />
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
          <Reveal key={p.title} delay={i * 130} className="group h-full">
            <article className="relative flex h-full transform-gpu flex-col overflow-hidden rounded-[1.25rem] border border-line-soft bg-paper-raised p-8 shadow-[0_22px_50px_-34px_rgba(12,11,10,0.42)] transition-[transform,box-shadow,border-color] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:-translate-y-1.5 group-hover:border-red/30 group-hover:shadow-[0_34px_70px_-38px_rgba(12,11,10,0.5)]">
              <div className="relative flex items-center gap-4">
                <span className="relative grid size-[3.25rem] shrink-0 place-items-center rounded-xl bg-line-soft text-ink-faint transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-red [&_svg]:relative [&_svg]:size-[1.6rem]">
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
