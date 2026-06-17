import Link from "next/link";
import HeroAnimation from "./HeroAnimation";
import LogoMark from "./LogoMark";
import StartHiringButton from "./StartHiringButton";
import { allRoles } from "@/lib/roles";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-nav">
      {/* Oversized watermark asterisk */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[12%] -top-[18%] select-none font-display text-[calc(var(--rt-step-hero)*6)] leading-none text-red/[0.06] motion-safe:animate-[rt-spin-slow_120s_linear_infinite]"
      >
        ✱
      </div> */}
      

      {/* Fills the viewport on any screen; grows on short screens */}
      <div className="container-rt relative flex min-h-[calc(100svh-var(--rt-nav-h))] flex-col justify-center py-[clamp(2.5rem,5vh,5rem)]">
        <div className="grid grid-cols-1 items-center gap-x-0 gap-y-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Copy */}
          <div>
            <p className="eyebrow anim-fade-up">
               The AI-native talent network
            </p>

            <h1
              className="anim-fade-up mt-6 font-display text-hero font-bold tracking-[-0.03em] text-ink lg:text-6xl"
              style={{ animationDelay: "100ms" }}
            >
              Hire Elite AI-Native Talents
              <br />
              Save Up to 82%
            </h1>

            <p
              className="anim-fade-up mt-7 text-base text-ink-soft"
              style={{ animationDelay: "220ms" }}
            >
              Scale your team faster with pre-vetted engineers, AI specialists, and tech professionals while reducing hiring costs by up to 85%. No upfront cost, pay only when you hire with replacement guarantee.
            </p>

            <div
              className="anim-fade-up mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "320ms" }}
            >
              <StartHiringButton variant="red" />
              <Link href="#how-we-work" className="btn btn-ghost">
                See how we work
              </Link>
            </div>
          </div>

          {/* Animated goal explainer: brief → vetting → embedded */}
          <div className="anim-fade-up lg:justify-self-end" style={{ animationDelay: "260ms" }}>
            <HeroAnimation />
          </div>
        </div>
      </div>

      {/* Role ticker */}
      <div className="border-y border-line bg-ink py-3.5" aria-hidden="true">
        <div className="flex overflow-hidden">
          <div className="ticker-track flex shrink-0 items-center">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {allRoles.map((role) => (
                  <span
                    key={`${copy}-${role.name}`}
                    className="flex items-center gap-6 px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-paper/80"
                  >
                    {role.name}
                    <LogoMark className="size-[0.8em]" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
