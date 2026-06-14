import Reveal from "./Reveal";

const STATS = [
  { value: "48h", label: "to an interview-ready shortlist" },
  { value: "1.4%", label: "of applicants make the network" },
  { value: "60%", label: "average savings vs. local hires" },
  { value: "14 days", label: "risk-free trial on every hire" },
];

export default function Stats() {
  return (
    <section className="container-rt py-section">
      <Reveal>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.value} className="bg-paper-raised p-6 lg:p-8">
              <p className="font-display text-3xl font-semibold tracking-tight text-ink">
                {s.value}
              </p>
              <p className="mt-2 text-xs text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
