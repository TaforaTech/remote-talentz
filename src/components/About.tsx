import type { ReactNode } from "react";
import Reveal from "./Reveal";
import LogoMark from "./LogoMark";
import StartHiringButton from "./StartHiringButton";
import Button from "./Button";

const FACTS = [
  { value: "85%", label: "lower cost per hire" },
  { value: "50+", label: "companies building with us" },
  { value: "90%", label: "talent retention rate" },
];

const iconAttrs = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

const VALUES: { tag: string; title: string; body: string; icon: ReactNode }[] = [
  {
    tag: "Right fit",
    title: "The right match, not the fastest",
    body: "We vet for the problem you're actually solving — not keyword overlap on a résumé. Every shortlist is people who can do the job, proven before you ever see a name.",
    icon: (
      <svg {...iconAttrs}>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    tag: "Fair price",
    title: "Elite quality, honestly priced",
    body: "Up to 85% less than a local hire, with no upfront cost and pay-only-when-you-hire. High value shouldn't mean a premium you can't justify to your board.",
    icon: (
      <svg {...iconAttrs}>
        <path d="M12 2.5l8.5 4.9v9.2L12 21.5l-8.5-4.9V7.4z" />
        <path d="M3.5 7.4L12 12.3l8.5-4.9M12 12.3v9.2" />
      </svg>
    ),
  },
  {
    tag: "Fair payout",
    title: "Talent paid what they're worth",
    body: "The engineer doing the work earns what they actually deserve. We close the gap without skimming it — fair to the client, fair to the talent, on both ends of every match.",
    icon: (
      <svg {...iconAttrs}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M14.5 9.3c-.5-.9-1.5-1.4-2.6-1.3-1.4 0-2.5.8-2.5 1.9 0 1.2 1 1.7 2.5 2.1s2.6.9 2.6 2.2c0 1.1-1.1 1.9-2.6 1.9-1.2 0-2.2-.5-2.7-1.4M12 6.4v1.4M12 16.2v1.4" />
      </svg>
    ),
  },
  {
    tag: "Built to last",
    title: "Embedded, not outsourced",
    body: "Your engineer joins standups, ships to your repo and grows with the team — in your timezone. We stay in the loop to keep the match working long after week one.",
    icon: (
      <svg {...iconAttrs}>
        <path d="M9 12.5l2 2 4.5-4.5" />
        <path d="M12 3l7 2.5v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9v-5z" />
      </svg>
    ),
  },
];

const TEAM: { initials: string; name: string; role: string; bio: string }[] = [
  {
    initials: "TH",
    name: "Tauhid Hasan",
    role: "Founder & CEO",
    bio: "A software engineer who has shipped on both the client and the core technical side. He started RemoteTalentz to fix the gap he kept running into first-hand: great companies and great engineers who never found each other at a fair price.",
  },
  {
    initials: "FR",
    name: "Faridur Reza",
    role: "Co-founder & COO",
    bio: "Runs the engine behind every match — sourcing, vetting, onboarding and the day-to-day operations that keep embedded engineers shipping. He makes sure both sides of every placement are set up to last.",
  },
];

const QUOTES = [
  {
    quote:
      "We briefed them on a Monday and had a RAG engineer committing code the following week. The vetting is real — it felt like extending our own team, not outsourcing.",
    name: "Maya Chen",
    role: "CTO, Series A fintech",
  },
  {
    quote:
      "Half the cost of our local search, and honestly a stronger candidate pool for AI roles. The two-week trial removed all the risk from the decision.",
    name: "Daniel Okafor",
    role: "VP Engineering, SaaS scale-up",
  },
  {
    quote:
      "Our founding engineer came through RemoteTalentz. Eighteen months later he runs a team of five — also hired through them.",
    name: "Sofia Lindqvist",
    role: "Founder, AI tooling startup",
  },
];

export default function About() {
  return (
    <>
      {/* ── Intro ───────────────────────────────────────────────── */}
      <section id="about" className="py-section">
        <div className="container-rt">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">
                <LogoMark className="size-[0.85em]" /> About Us
              </p>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-[-0.02em] text-ink">
                We close the gap between great teams and great engineers.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-5 text-base text-ink-soft">
                <p>
                  RemoteTalentz started with a problem its founder kept hitting
                  from both sides: companies paying a premium and still waiting
                  months for the wrong candidate, while brilliant engineers a few
                  timezones away never got a fair shot — or a fair payout.
                </p>
                <p>
                  So we don&apos;t run a job board. We run a vetted, AI-native
                  network and do the slow, unglamorous work — deep interviews,
                  live builds, reference checks — before you ever see a profile.
                  When we send a shortlist, every name on it can do the job, at a
                  price that&apos;s fair to you and a payout that&apos;s fair to
                  them.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                {FACTS.map((f) => (
                  <div key={f.label} className="bg-paper-raised p-5">
                    <p className="font-display text-2xl font-semibold text-red">
                      {f.value}
                    </p>
                    <p className="mt-1 text-2xs text-ink-soft">{f.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Founder's note ──────────────────────────────────────── */}
      <section className="bg-paper-raised py-section">
        <div className="container-rt">
          <Reveal>
            <p className="eyebrow">
              <LogoMark className="size-[0.85em]" /> Why we exist
            </p>
          </Reveal>

          <Reveal delay={120}>
            <figure className="relative mt-8 overflow-hidden rounded-[1.5rem] border border-line bg-paper p-9 sm:p-14">
              {/* Brand accent bar across the top */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ backgroundImage: "var(--rt-grad-action)" }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[12rem] leading-none text-red/[0.06]"
              >
                &ldquo;
              </span>

              <blockquote className="relative max-w-3xl space-y-5 font-display text-xl font-medium leading-snug tracking-[-0.01em] text-ink sm:text-2xl">
                <p>
                  I&apos;ve worked both sides of this — building product as an
                  engineer, and watching good companies overpay and still hire
                  the wrong person.
                </p>
                <p className="text-ink-soft">
                  The problem was never a shortage of talent. It was the distance
                  between the teams who needed it and the engineers who had it —
                  and a market that overcharged clients while underpaying the
                  people doing the work. RemoteTalentz exists to close that gap:
                  the right engineer, matched fast, priced fairly, and paid what
                  they&apos;re actually worth.
                </p>
              </blockquote>

              <figcaption className="relative mt-9 flex items-center gap-4 border-t border-line-soft pt-7">
                <span
                  className="grid size-12 shrink-0 place-items-center rounded-full font-display text-base font-semibold text-white"
                  style={{ backgroundImage: "var(--rt-grad-brand)" }}
                  aria-hidden="true"
                >
                  TH
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-ink">
                    Tauhid Hasan
                  </p>
                  <p className="font-mono text-2xs uppercase tracking-[0.18em] text-red">
                    Founder &amp; CEO
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Mission + values ────────────────────────────────────── */}
      <section className="py-section">
        <div className="container-rt">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">
              <LogoMark className="size-[0.85em]" /> Our mission
            </p>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
              Make elite engineering talent accessible to any team — on terms
              that are fair to both sides.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              High value at an honest price for the client. A real payout for the
              talent. And the support to make the match last.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 90}>
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-paper-raised p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red/40 hover:shadow-[0_22px_55px_-28px_rgba(227,0,27,0.45)]">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-xl bg-red-tint text-red [&_svg]:size-[1.35rem]">
                      {v.icon}
                    </span>
                    <span className="font-mono text-2xs uppercase tracking-[0.28em] text-ink-faint">
                      {v.tag}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-lg font-semibold leading-snug text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-soft">{v.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ──────────────────────────────────────────── */}
      <section className="bg-paper-raised py-section">
        <div className="container-rt">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">
              <LogoMark className="size-[0.85em]" /> Leadership
            </p>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
              Built by people who&apos;ve lived both sides of the hire.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 110}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-paper p-8">
                  <div className="flex items-center gap-4">
                    <span
                      className="grid size-14 shrink-0 place-items-center rounded-full font-display text-lg font-semibold text-white"
                      style={{ backgroundImage: "var(--rt-grad-brand)" }}
                      aria-hidden="true"
                    >
                      {m.initials}
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold text-ink">
                        {m.name}
                      </p>
                      <p className="font-mono text-2xs uppercase tracking-[0.18em] text-red">
                        {m.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-ink-soft">{m.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────── */}
      <section className="py-section">
        <div className="container-rt">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">
              <LogoMark className="size-[0.85em]" /> In their words
            </p>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
              Teams that hired the right engineer — fast.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {QUOTES.map((q, i) => (
              <Reveal key={q.name} delay={i * 90}>
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper-raised p-8">
                  <div>
                    <span
                      className="font-display text-3xl leading-none text-red"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 text-sm leading-relaxed text-ink">
                      {q.quote}
                    </blockquote>
                  </div>
                  <figcaption className="mt-8 border-t border-line-soft pt-4">
                    <p className="font-display text-sm font-semibold text-ink">
                      {q.name}
                    </p>
                    <p className="mt-0.5 text-2xs text-ink-faint">{q.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact band ────────────────────────────────────────── */}
      <section className="bg-paper-raised py-section">
        <div className="container-rt grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="eyebrow">
              <LogoMark className="size-[0.85em]" /> Get in touch
            </p>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
              Tell us who you need.
            </h2>
            <p className="mt-6 max-w-md text-base text-ink-soft">
              Share the role and the stack and we&apos;ll come back within one
              business day with availability and a plan to get your shortlist
              moving.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <StartHiringButton variant="red" />
              <Button href="/contact" variant="ghost" size="md" arrow="badge">
                Contact us
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              <ContactCell label="Email">
                <a
                  href="mailto:hello@remotetalentz.com"
                  className="font-display text-lg font-semibold text-ink transition-colors hover:text-red"
                >
                  hello@remotetalentz.com
                </a>
              </ContactCell>
              <ContactCell label="Phone">
                <span className="font-display text-lg font-semibold text-ink-faint">
                  +1 (000) 000-0000
                </span>
              </ContactCell>
              <ContactCell label="Response time">
                <span className="text-sm text-ink-soft">
                  Within one business day
                </span>
              </ContactCell>
              <ContactCell label="Where we work">
                <span className="text-sm text-ink-soft">
                  Fully remote, across 30+ countries
                </span>
              </ContactCell>
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactCell({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-paper-raised p-6">
      <dt className="font-mono text-2xs uppercase tracking-[0.2em] text-ink-faint">
        {label}
      </dt>
      <dd className="mt-2">{children}</dd>
    </div>
  );
}
