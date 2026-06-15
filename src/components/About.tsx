import Reveal from "./Reveal";

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

const FACTS = [
  { value: "150+", label: "engineers placed" },
  { value: "30+", label: "countries in the network" },
  { value: "94%", label: "trial-to-hire conversion" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line py-section">
      <div className="container-rt">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">
              <span aria-hidden="true">✱</span> About Us
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.02em] text-ink">
              A network,
              <br />
              not a marketplace.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5 text-base text-ink-soft">
              <p>
                RemoteTalentz started with a simple observation: the best
                engineers in the world don&apos;t live within commuting distance
                of your office — and the AI era rewards teams who figure that
                out first.
              </p>
              <p>
                So we don&apos;t run a job board. We run a vetted, invite-heavy
                network of AI-native engineers, and we do the slow, unglamorous
                work — deep interviews, live builds, reference checks — before
                you ever see a profile. When we send you a shortlist, every name
                on it can do the job.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {FACTS.map((f) => (
                <div key={f.label} className="bg-paper-raised p-5">
                  <p className="font-display text-2xl font-semibold text-red">{f.value}</p>
                  <p className="mt-1 text-2xs text-ink-soft">{f.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Testimonials */}
        <div className="mt-section grid grid-cols-1 gap-5 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 90}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper-raised p-8">
                <div>
                  <span className="font-display text-3xl leading-none text-red" aria-hidden="true">
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 text-sm leading-relaxed text-ink">
                    {q.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-8 border-t border-line-soft pt-4">
                  <p className="font-display text-sm font-semibold text-ink">{q.name}</p>
                  <p className="mt-0.5 text-2xs text-ink-faint">{q.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
