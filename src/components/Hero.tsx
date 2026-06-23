import Link from "next/link";
import HeroAnimation from "./HeroAnimation";
import StartHiringButton from "./StartHiringButton";
import ArrowBadge from "./ArrowBadge";
// Used only by the temporarily-removed role ticker below:
// import LogoMark from "./LogoMark";
// import { allRoles } from "@/lib/roles";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-nav">
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
              className="anim-fade-up mt-6 font-display text-hero font-bold leading-[1.20] tracking-[-0.03em] text-ink lg:text-[clamp(2rem,3.1vw,3.5rem)]"
              style={{ animationDelay: "100ms" }}
            >
              <span className="lg:whitespace-nowrap">Hire Elite AI-Native Talents</span>
              <br />
              Save Up to 85%
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
              <StartHiringButton variant="red" className="!gap-1.5" />
              <Link
                href="/contact"
                className="group btn btn-ink !px-5 !py-2 text-base !gap-1.5"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-[1.15em] shrink-0"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Book a Call
                <ArrowBadge
                  circleClassName="bg-white"
                  arrowClassName="text-ink"
                />
              </Link>
              <Link
                href="/pricing"
                className="group btn btn-ghost !px-5 !py-2 text-base !gap-1.5"
              >
                See Pricing
                <ArrowBadge
                  circleClassName="bg-[image:var(--rt-grad-action)]"
                  arrowClassName="text-white"
                />
              </Link>
            </div>
          </div>

          {/* Animated goal explainer: brief → vetting → embedded */}
          <div className="anim-fade-up lg:justify-self-end" style={{ animationDelay: "260ms" }}>
            <HeroAnimation />
          </div>
        </div>
      </div>

      {/* Role ticker — temporarily removed
      <div className="border-y border-white/20 bg-ink/45 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl" aria-hidden="true">
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
      */}
    </section>
  );
}
