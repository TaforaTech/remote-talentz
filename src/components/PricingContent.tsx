"use client";

import Reveal from "./Reveal";
import LogoMark from "./LogoMark";
import Button from "./Button";
import {
  serviceSummary,
  rateCard,
  directHirePlans,
  guarantees,
  paymentTerms,
  faqs,
} from "@/lib/pricing";

export default function PricingContent() {
  return (
    <>
      <Header />
      <ServiceSummary />
      <RateCard />
      <DirectHire />
      <Guarantee />
      <PaymentTerms />
      <Faqs />
      <CtaBand />
    </>
  );
}

/* ---------- 1. Header ---------- */
function Header() {
  return (
    <section className="pt-section-tight">
      <div className="container-rt text-center">
        <Reveal>
          <p className="eyebrow justify-center">
            <LogoMark className="size-[0.85em]" /> Pricing
          </p>
          <h1 className="mx-auto mt-5 text-balance font-display text-4xl font-bold tracking-[-0.02em] text-ink sm:whitespace-nowrap">
            Elite talent, at up to 85% less.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">
            Two ways to hire — a managed dedicated hire or a direct placement —
            both at one flat rate, with no hidden fees and every hire guaranteed.
          </p>
          <p className="mx-auto mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-mono text-2xs uppercase tracking-[0.16em] text-ink-faint">
            <span>Interview-ready shortlist in 48 hours</span>
            <span className="text-red/40" aria-hidden="true">✱</span>
            <span>No retainers, no placement fees</span>
            <span className="text-red/40" aria-hidden="true">✱</span>
            <span>Two-week risk-free trial</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 2. Service summary ---------- */
function ServiceSummary() {
  return (
    <section className="py-section-tight">
      <div className="container-rt">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {serviceSummary.map((s, i) => (
            <Reveal key={s.name} delay={i * 90} className="h-full">
              <article
                className={`group relative flex h-full flex-col rounded-2xl border bg-paper-raised p-8 transition-colors duration-300 hover:border-red ${
                  s.featured ? "border-red shadow-[0_18px_50px_-26px_rgba(227,0,27,0.5)]" : "border-line"
                }`}
              >
                {s.tag && (
                  <span className="absolute -top-3 left-8 rounded-full bg-red px-3 py-1 font-mono text-2xs uppercase tracking-[0.16em] text-white">
                    {s.tag}
                  </span>
                )}
                <h2 className="font-display text-xl font-semibold text-ink">{s.name}</h2>
                <p className="mt-3 text-sm text-ink-soft">{s.lede}</p>

                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-bold tracking-tight text-ink">
                    {s.price}
                  </span>
                  <span className="text-sm text-ink-faint">{s.unit}</span>
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-line-soft pt-6">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Check />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex-1" />
                <Button
                  href={s.cta.href ?? `#${s.cta.scrollTo}`}
                  variant={s.featured ? "red" : "ghost"}
                  className="w-full"
                  arrow="right"
                >
                  {s.cta.label}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Dedicated rate card ---------- */
function RateCard() {
  return (
    <section id="rate-card" className="scroll-mt-nav py-section-tight">
      <div className="container-rt">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <LogoMark className="size-[0.85em]" /> Dedicated Talent — Rate Card
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
            Monthly rates by seniority.
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            One flat monthly rate covers salary, payroll, HR, and management.
            Part-time is 80 hours per month; full-time is a dedicated 40-hour week.
          </p>
        </Reveal>

        {/* Desktop table */}
        <Reveal className="mt-10 hidden overflow-hidden rounded-2xl border border-line lg:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-ink text-paper">
                <th className="px-6 py-4 font-mono text-2xs font-medium uppercase tracking-[0.18em]">
                  Seniority
                </th>
                <th className="px-6 py-4 font-mono text-2xs font-medium uppercase tracking-[0.18em]">
                  Example roles
                </th>
                <th className="px-6 py-4 font-mono text-2xs font-medium uppercase tracking-[0.18em]">
                  Part-time / mo
                </th>
                <th className="px-6 py-4 font-mono text-2xs font-medium uppercase tracking-[0.18em]">
                  Full-time / mo
                </th>
              </tr>
            </thead>
            <tbody>
              {rateCard.map((t) => (
                <tr
                  key={t.tier}
                  className="border-t border-line-soft transition-colors hover:bg-red-tint/40"
                >
                  <td className="px-6 py-5 font-display text-base font-semibold text-ink">
                    {t.tier}
                  </td>
                  <td className="px-6 py-5 text-sm text-ink-soft">{t.roles.join(", ")}</td>
                  <td className="px-6 py-5 font-display text-base font-semibold text-ink">
                    {t.partTime}
                  </td>
                  <td className="px-6 py-5 font-display text-base font-semibold text-ink">
                    {t.fullTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Mobile stacked cards */}
        <div className="mt-8 space-y-4 lg:hidden">
          {rateCard.map((t, i) => (
            <Reveal key={t.tier} delay={i * 60}>
              <article className="rounded-2xl border border-line bg-paper-raised p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{t.tier}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{t.roles.join(", ")}</p>
                <dl className="mt-4 grid grid-cols-2 gap-4 border-t border-line-soft pt-4">
                  <div>
                    <dt className="font-mono text-2xs uppercase tracking-[0.16em] text-ink-faint">
                      Part-time
                    </dt>
                    <dd className="mt-1 font-display text-base font-semibold text-ink">
                      {t.partTime}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-2xs uppercase tracking-[0.16em] text-ink-faint">
                      Full-time
                    </dt>
                    <dd className="mt-1 font-display text-base font-semibold text-ink">
                      {t.fullTime}
                    </dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-ink-faint">
          Ranges reflect skill depth, stack, and experience within each tier. We&apos;ll
          confirm an exact rate once we understand the role.
        </p>
      </div>
    </section>
  );
}

/* ---------- 4. Direct hire plans ---------- */
function DirectHire() {
  return (
    <section id="direct-hire" className="scroll-mt-nav bg-red-tint/40 py-section-tight">
      <div className="container-rt">
        <Reveal className="text-center">
          <p className="eyebrow justify-center">
            <LogoMark className="size-[0.85em]" /> Direct Hire Recruitment
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
            Hire directly. Pay once.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-soft">
            We run the search; the hire joins your payroll. A one-time fee based
            on the role&apos;s annual salary.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {directHirePlans.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className="h-full">
              <article
                className={`group relative flex h-full flex-col rounded-2xl border bg-paper-raised p-8 transition-colors duration-300 hover:border-red ${
                  p.featured ? "border-red shadow-[0_18px_50px_-26px_rgba(227,0,27,0.5)]" : "border-line"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-red px-3 py-1 font-mono text-2xs uppercase tracking-[0.16em] text-white">
                    Most chosen
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-ink">{p.name}</h3>
                <p className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-bold tracking-tight text-ink">
                    {p.fee}
                  </span>
                  <span className="text-sm text-ink-faint">{p.feeNote}</span>
                </p>
                <p className="mt-4 text-sm text-ink-soft">{p.best}</p>
                <ul className="mt-6 space-y-2.5 border-t border-line-soft pt-6">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Check />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Replacement guarantee ---------- */
function Guarantee() {
  return (
    <section className="py-section-tight">
      <div className="container-rt">
        <Reveal className="text-center">
          <p className="eyebrow justify-center">
            <LogoMark className="size-[0.85em]" /> Replacement Guarantee
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
            If it&apos;s not working, we make it right.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {guarantees.map((g, i) => (
            <Reveal key={g.service} delay={i * 90}>
              <div className="overflow-hidden rounded-2xl border border-line bg-paper-raised">
                <div className="h-1.5 w-full bg-red" />
                <div className="p-8">
                  <h3 className="font-display text-xl font-semibold text-ink">{g.service}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{g.note}</p>
                  <dl className="mt-6 divide-y divide-line-soft">
                    {g.rows.map((row) => (
                      <div key={row.label} className="flex items-center justify-between py-3.5">
                        <dt className="text-sm text-ink-soft">{row.label}</dt>
                        <dd className="font-display text-sm font-semibold text-ink">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. Payment terms ---------- */
function PaymentTerms() {
  return (
    <section className="pb-section-tight">
      <div className="container-rt">
        <Reveal className="rounded-2xl border border-line bg-paper-raised p-8 sm:p-10">
          <p className="eyebrow">
            <LogoMark className="size-[0.85em]" /> Payment Terms
          </p>
          <div className="mt-7 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
            {paymentTerms.map((t) => (
              <div key={t.service}>
                <h3 className="font-display text-lg font-semibold text-ink">{t.service}</h3>
                <p className="mt-1.5 text-sm font-medium text-red">{t.summary}</p>
                <ul className="mt-4 space-y-2.5">
                  {t.options.map((o) => (
                    <li key={o} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Dot />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 7. FAQ ---------- */
function Faqs() {
  return (
    <section className="pb-section-tight">
      <div className="container-rt">
        <Reveal className="mx-auto max-w-3xl">
          <p className="eyebrow justify-center text-center">
            <LogoMark className="size-[0.85em]" /> FAQ
          </p>
          <h2 className="mt-5 text-center font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
            Questions, answered.
          </h2>

          <div className="mt-10 divide-y divide-line border-t border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-2xl font-normal text-red transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 8. Final CTA band ---------- */
function CtaBand() {
  return (
    <section className="pb-section-tight">
      <div className="container-rt">
        <Reveal className="overflow-hidden rounded-2xl bg-ink">
          <div className="flex flex-col items-start justify-between gap-8 p-10 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">
                Let&apos;s build your team.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-paper/65">
                Tell us the role and the outcome you&apos;re after. We&apos;ll come back
                with vetted candidates and an exact rate — usually within a week.
              </p>
            </div>
            <Button href="/contact" variant="red" className="shrink-0" arrow="right">
              Book a call
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- shared bits ---------- */
function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <circle cx="8" cy="8" r="8" fill="var(--rt-red-tint)" />
      <path
        d="M4.5 8.2l2.2 2.2L11.5 5.6"
        stroke="var(--rt-red)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dot() {
  return (
    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-red" />
  );
}
