import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Brief us",
    body: "A 30-minute call. Tell us the role, the stack, the timezone overlap you need, and what 'great' looks like on your team.",
    meta: "Day 0",
  },
  {
    n: "02",
    title: "Meet your shortlist",
    body: "Within 48 hours you get 3–5 interview-ready engineers — pre-vetted for technical depth, live builds, and communication.",
    meta: "Day 2",
  },
  {
    n: "03",
    title: "Trial risk-free",
    body: "Run a two-week paid trial inside your real workflow. Not the right fit? You pay nothing and we re-match immediately.",
    meta: "Week 1–2",
  },
  {
    n: "04",
    title: "Scale without overhead",
    body: "We handle contracts, global payroll, compliance, and retention. You get one invoice and an engineer who ships.",
    meta: "Ongoing",
  },
];

const VETTING = [
  "Technical deep-dive interview",
  "Live build assessment",
  "Communication & async screen",
  "Reference & track-record check",
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-ink py-section text-paper">
      <div className="container-rt">
        <Reveal>
          <p className="eyebrow">
            <span aria-hidden="true">✱</span> How we work
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-[-0.02em]">
            From brief to embedded engineer in{" "}
            <span className="text-red">four steps.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-paper/15 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 90}>
              <article className="group flex h-full flex-col bg-ink p-8 transition-colors duration-300 hover:bg-[#161412]">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl font-bold text-red">
                    {step.n}
                  </span>
                  <span className="font-mono text-2xs uppercase tracking-[0.2em] text-paper/40">
                    {step.meta}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm text-paper/65">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col gap-6 rounded-2xl border border-paper/15 p-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-display text-lg font-semibold">
            Every engineer in the network has passed:
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {VETTING.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-paper/75">
                <span className="text-red" aria-hidden="true">
                  ✱
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
