import Reveal from "./Reveal";

const STATS = [
  { value: "48", unit: "Hours", label: "to get matched" },
  { value: "4.8", unit: "", label: "avg client rating" },
  { value: "50+", unit: "", label: "companies building with us" },
  { value: "90%", unit: "", label: "talent retention rate" },
];

type IconProps = { className?: string };

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

const PILLS = [
  {
    label: "Cut LLM Costs",
    icon: (p: IconProps) => (
      <svg {...iconProps} {...p}>
        <path d="M3 7l6 6 4-4 8 8" />
        <path d="M21 17v-4h-4" />
      </svg>
    ),
  },
  {
    label: "Tame AI Sprawl",
    icon: (p: IconProps) => (
      <svg {...iconProps} {...p}>
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="M8.2 10.8l7.6-4.6M8.2 13.2l7.6 4.6" />
      </svg>
    ),
  },
  {
    label: "Build MVPs",
    icon: (p: IconProps) => (
      <svg {...iconProps} {...p}>
        <path d="M12 2.5l8.5 4.9v9.2L12 21.5l-8.5-4.9V7.4z" />
        <path d="M3.5 7.4L12 12.3l8.5-4.9M12 12.3v9.2" />
      </svg>
    ),
  },
  {
    label: "Scale Engineering",
    icon: (p: IconProps) => (
      <svg {...iconProps} {...p}>
        <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
      </svg>
    ),
  },
  {
    label: "Automate Workflows",
    icon: (p: IconProps) => (
      <svg {...iconProps} {...p}>
        <path d="M20 12a8 8 0 1 1-2.3-5.6" />
        <path d="M20 4v4h-4" />
      </svg>
    ),
  },
  {
    label: "Build AI Agents",
    icon: (p: IconProps) => (
      <svg {...iconProps} {...p}>
        <path d="M13 2L4.5 13H11l-1 9 8.5-11H12z" />
      </svg>
    ),
  },
  {
    label: "Replace Agencies",
    icon: (p: IconProps) => (
      <svg {...iconProps} {...p}>
        <path d="M4 8h13l-3-3M20 16H7l3 3" />
      </svg>
    ),
  },
  {
    label: "Extend Runway",
    icon: (p: IconProps) => (
      <svg {...iconProps} {...p}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    label: "Build Without Borders",
    icon: (p: IconProps) => (
      <svg {...iconProps} {...p}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
      </svg>
    ),
  },
  {
    label: "Ship 3x Faster",
    icon: (p: IconProps) => (
      <svg {...iconProps} {...p}>
        <path d="M4 20l4-9 9-4-4 9z" />
        <path d="M14.5 9.5l5-5M8 11l-4 1 2 2 1-3z" />
      </svg>
    ),
  },
  {
    label: "End DevOps Burnout",
    icon: (p: IconProps) => (
      <svg {...iconProps} {...p}>
        <path d="M12 3l7 2.5v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9v-5z" />
        <path d="M9.5 12l2 2 3.5-3.5" />
      </svg>
    ),
  },
  {
    label: "Modernize Stack",
    icon: (p: IconProps) => (
      <svg {...iconProps} {...p}>
        <ellipse cx="12" cy="6" rx="7" ry="2.8" />
        <path d="M5 6v12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section
      className="relative overflow-hidden py-section"
      style={{
        background:
          "radial-gradient(70% 60% at 50% -10%, rgba(255, 48, 64, 0.22), transparent 60%)," +
          "radial-gradient(60% 55% at 90% 110%, rgba(214, 5, 5, 0.16), transparent 60%)," +
          "linear-gradient(180deg, #fff2ef 0%, var(--rt-paper) 70%)",
      }}
    >
      <div className="container-rt">
      <Reveal>
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
          We help companies save{" "}
          <span className="text-grad-red">$103,000+</span> per hire
        </h2>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex min-h-[14rem] flex-col justify-between rounded-2xl border border-line-soft bg-paper-raised p-7 shadow-[0_20px_50px_-30px_rgba(12,11,10,0.35)] transition-shadow duration-300 hover:shadow-[0_28px_60px_-28px_rgba(227,0,27,0.25)]"
            >
              <p className="font-display text-5xl font-bold leading-none tracking-tight text-ink">
                <span>{s.value}</span>
                {s.unit && (
                  <span className="ml-2 align-baseline text-2xl font-semibold text-ink">
                    {s.unit}
                  </span>
                )}
              </p>
              <p className="text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={140}>
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {PILLS.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="group inline-flex items-center gap-2.5 rounded-full border border-line-soft bg-paper-raised py-2 pl-2 pr-5 text-sm font-medium text-ink shadow-[0_10px_26px_-20px_rgba(12,11,10,0.5)] transition-colors duration-200 hover:border-red/40 hover:text-red"
            >
              <span className="grid size-8 place-items-center rounded-full bg-red-tint text-red transition-colors duration-200 group-hover:bg-red group-hover:text-white">
                <Icon className="size-4" />
              </span>
              {label}
            </span>
          ))}
        </div>
      </Reveal>
      </div>
    </section>
  );
}
