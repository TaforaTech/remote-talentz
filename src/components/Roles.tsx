import Link from "next/link";
import Reveal from "./Reveal";
import LogoMark from "./LogoMark";
import Button from "./Button";
import { popularRoles, emergingRoles, type Role } from "@/lib/roles";

export default function Roles() {
  return (
    <section id="talent" className="py-section">
      <div className="container-rt">
        <Reveal>
          <p className="eyebrow">
            <LogoMark className="size-[0.85em]" /> Find Talents
          </p>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="break-words font-display text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-balance">
              Every role your roadmap needs — already vetted.
            </h2>
            <p className="max-w-md text-base text-ink-soft">
              From the classics to the frontier. Each card is a bench of
              engineers we&apos;ve already interviewed, tested, and reference-checked.
            </p>
          </div>
        </Reveal>

        <RoleGroup title="Popular Roles" roles={popularRoles} startIndex={1} />
        <RoleGroup
          title="Emerging AI Roles"
          roles={emergingRoles}
          startIndex={popularRoles.length + 1}
          accent
        />

        <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-paper-raised p-8 sm:flex-row sm:items-center">
          <p className="max-w-xl font-display text-lg font-semibold text-ink">
            Hiring for something we haven&apos;t listed?{" "}
            <span className="text-ink-soft">
              We source niche roles on request.
            </span>
          </p>
          <Button href="/contact" variant="ink" className="shrink-0" arrow="right">
            Request a role
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function RoleGroup({
  title,
  roles,
  startIndex,
  accent = false,
}: {
  title: string;
  roles: Role[];
  startIndex: number;
  accent?: boolean;
}) {
  return (
    <div className="mt-14">
      <Reveal className="mb-6 flex items-center gap-4">
        <h3 className="font-mono text-2xs uppercase tracking-[0.22em] text-ink">
          {title}
        </h3>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
        {accent && (
          <span className="rounded-full bg-red px-3 py-1 font-mono text-2xs uppercase tracking-[0.16em] text-white">
            In demand
          </span>
        )}
      </Reveal>

      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {roles.map((role, i) => (
          <Reveal as="li" key={role.name} delay={Math.min(i * 40, 280)}>
            <Link
              href="/contact"
              className="group flex h-full flex-col justify-between gap-8 bg-paper-raised p-5 transition-colors duration-300 hover:bg-ink"
            >
              <span className="font-mono text-2xs text-ink-faint transition-colors group-hover:text-red">
                {String(startIndex + i).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-display text-base font-semibold leading-snug text-ink transition-colors group-hover:text-paper">
                  {role.name}
                </span>
                <span className="mt-1.5 block text-2xs text-ink-soft transition-colors group-hover:text-paper/60">
                  {role.blurb}
                </span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-2xs font-semibold text-red opacity-0 transition-opacity group-hover:opacity-100">
                  Hire now <span aria-hidden="true">→</span>
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
