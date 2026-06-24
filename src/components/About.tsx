import type { ReactNode } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import LogoMark from "./LogoMark";

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

// `image` is optional: when set (e.g. "/team/tauhid-hasan.jpg" in /public),
// the card shows the photo; until then it falls back to the initials avatar.
const TEAM: {
  initials: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}[] = [
  {
    initials: "TH",
    name: "Tauhid Hasan",
    role: "Founder & CEO",
    bio: "A software engineer who has shipped on both the client and the core technical side. He started RemoteTalentz to fix the gap he kept running into first-hand: great companies and great engineers who never found each other at a fair price.",
    image: "/founder.jpg",
  },
  {
    initials: "FR",
    name: "Mohammed Forid",
    role: "Co-founder & COO",
    bio: "Runs the engine behind every match — sourcing, vetting, onboarding and the day-to-day operations that keep embedded engineers shipping. He makes sure both sides of every placement are set up to last.",
    image: "/co-founder.jpeg",
  },
  {
    initials: "AR",
    name: "AB Rahman",
    role: "HR & Admin",
    bio: "Keeps the team and the back office running — onboarding, contracts, payroll and the people side of every placement. He makes sure talent and clients alike feel looked after from day one.",
    image: "/hr-ab.jpeg",
  },
];

// Founder & co-founder messages, rendered as portrait-left / message-right cards.
// Drop a photo in /public/team and set `image` to switch from the initials
// portrait to the real headshot (same fallback pattern as the Leadership cards).
const MESSAGES: {
  initials: string;
  name: string;
  role: string;
  eyebrow: string;
  paragraphs: string[];
  image?: string;
}[] = [
  {
    initials: "TH",
    name: "Tauhid Hasan",
    role: "Founder & CEO",
    eyebrow: "Why we exist",
    image: "/founder.jpg",
    paragraphs: [
      "I've worked both sides of this — building product as an engineer, and watching good companies overpay to still hire the wrong person.",
      "The problem was never a shortage of talent. It was the distance between the teams who needed it and the engineers who had it — in a market that overcharged clients and underpaid the people doing the work. RemoteTalentz closes that gap: the right engineer, matched fast, priced fairly, and paid what they're worth.",
    ],
  },
  {
    initials: "FR",
    name: "Mohammed Forid",
    role: "Co-founder & COO",
    eyebrow: "From our co-founder",
    image: "/co-founder.jpeg",
    paragraphs: [
      "At Remote Talentz, we believe exceptional talent knows no borders.",
      "Drawing on my international experience and global network, I co-founded Remote Talentz with one mission: connect businesses with highly skilled professionals and build stronger, more efficient remote teams.",
      "We're making hiring smarter, faster and more accessible — while creating real opportunities for talent worldwide. As the future of work evolves, our focus stays the same: helping organizations and professionals succeed together.",
    ],
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
      <section id="about" className="py-section-tight">
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
                  RemoteTalentz started with a problem its founder hit from both
                  sides: companies paying a premium and still waiting months for
                  the wrong candidate, while brilliant engineers a few timezones
                  away never got a fair shot — or a fair payout.
                </p>
                <p>
                  So we don&apos;t run a job board. We run a vetted, AI-native
                  network and do the slow work — deep interviews, live builds,
                  reference checks — before you ever see a profile. Every name we
                  send can do the job, at a price that&apos;s fair to you and a
                  payout that&apos;s fair to them.
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

      {/* ── Founder messages ────────────────────────────────────── */}
      <section className="bg-paper-raised py-section-tight">
        <div className="container-rt">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">
              <LogoMark className="size-[0.85em]" /> From the founders
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
              The people closing the gap.
            </h2>
          </Reveal>

          <div className="mt-14 space-y-8">
            {MESSAGES.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <figure className="group relative grid overflow-hidden rounded-[1.5rem] border border-line bg-paper lg:grid-cols-[19rem_1fr]">
                  {/* Brand accent bar across the top */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 z-10 h-[3px]"
                    style={{ backgroundImage: "var(--rt-grad-action)" }}
                  />

                  {/* Portrait — real headshot when `image` is set, else a
                      branded initials panel */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-ink lg:aspect-auto lg:min-h-[24rem]">
                    {m.image ? (
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        sizes="(min-width: 1024px) 19rem, 100vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      <span
                        className="absolute inset-0 grid place-items-center font-display text-7xl font-semibold tracking-tight text-white/95"
                        style={{ backgroundImage: "var(--rt-grad-brand)" }}
                        aria-hidden="true"
                      >
                        {m.initials}
                      </span>
                    )}
                    {/* Bottom gradient + name plate over the portrait */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent px-6 pb-5 pt-12">
                      <p className="font-display text-lg font-semibold leading-tight text-white">
                        {m.name}
                      </p>
                      <p className="mt-1 font-mono text-2xs uppercase tracking-[0.18em] text-white/70">
                        {m.role}
                      </p>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative flex flex-col justify-center p-8 sm:p-12">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-6 top-2 select-none font-display text-[10rem] leading-none text-red/[0.07]"
                    >
                      &rdquo;
                    </span>

                    <p className="relative font-mono text-2xs uppercase tracking-[0.28em] text-red">
                      {m.eyebrow}
                    </p>

                    <blockquote className="relative mt-5 space-y-4 font-display text-xl font-medium leading-snug tracking-[-0.01em] text-ink sm:text-[1.6rem]">
                      {m.paragraphs.map((p, j) => (
                        <p
                          key={j}
                          className={
                            j === 0
                              ? undefined
                              : "text-sm font-normal leading-relaxed tracking-normal text-ink-soft sm:text-base"
                          }
                        >
                          {p}
                        </p>
                      ))}
                    </blockquote>

                    <figcaption className="relative mt-8 inline-flex items-center gap-3 border-t border-line-soft pt-6">
                      <span
                        className="h-px w-8 shrink-0 rounded-full"
                        style={{ backgroundImage: "var(--rt-grad-brand)" }}
                        aria-hidden="true"
                      />
                      <span className="font-display text-sm font-semibold text-ink">
                        {m.name}
                      </span>
                      <span className="font-mono text-2xs uppercase tracking-[0.18em] text-ink-faint">
                        {m.role}
                      </span>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission + values ────────────────────────────────────── */}
      <section className="py-section-tight">
        <div className="container-rt">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">
              <LogoMark className="size-[0.85em]" /> Our mission
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
              Elite engineering talent, on fair terms.
            </h2>
            <p className="mt-5 text-sm text-ink-soft sm:text-base">
              Honest pricing for clients, real payouts for talent, and support
              that makes the match last.
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
      <section className="bg-paper-raised py-section-tight">
        <div className="container-rt">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">
              <LogoMark className="size-[0.85em]" /> Team
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 110}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-paper p-8">
                  <div className="flex items-center gap-4">
                    <span
                      className="relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-full font-display text-lg font-semibold text-white"
                      style={
                        m.image
                          ? undefined
                          : { backgroundImage: "var(--rt-grad-brand)" }
                      }
                      aria-hidden={m.image ? undefined : "true"}
                    >
                      {m.image ? (
                        <Image
                          src={m.image}
                          alt={m.name}
                          fill
                          sizes="64px"
                          className="object-cover object-top"
                        />
                      ) : (
                        m.initials
                      )}
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
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────── */}
      <section className="py-section-tight">
        <div className="container-rt">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">
              <LogoMark className="size-[0.85em]" /> In their words
            </p>
            <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:whitespace-nowrap sm:text-3xl">
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
    </>
  );
}
