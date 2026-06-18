"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import LogoMark from "./LogoMark";

/* The injected world map content lives in a 1008.3 × 650.9 coordinate space.
   FOCUS crops it to a wide panoramic band — full longitude, trimmed of the empty
   Arctic/Antarctica — so a full-bleed map stays cinematic instead of too tall. */
const FOCUS = { x: 0, y: 158, w: 1008.3, h: 332 };

/* Endpoints in map units.
   BD = measured Bangladesh centroid. US = central-US point projected through
   the map's Mercator bounds (the raw US centroid is dragged west by Alaska). */
const US = { x: 205, y: 348 };
const BD = { x: 728.7, y: 395.7 };
/* Quadratic arc bowing north over the route. */
const ARC = `M${US.x},${US.y} Q466.85,222 ${BD.x},${BD.y}`;

const pct = (p: { x: number; y: number }) => ({
  left: `${((p.x - FOCUS.x) / FOCUS.w) * 100}%`,
  top: `${((p.y - FOCUS.y) / FOCUS.h) * 100}%`,
});

export default function TalentBridge() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  // Inject the world map SVG once, restyle it to our palette.
  useEffect(() => {
    const host = mapRef.current;
    if (!host) return;
    let cancelled = false;
    fetch("/world.svg")
      .then((r) => r.text())
      .then((txt) => {
        if (cancelled || !host) return;
        // Strip the XML prolog so it parses cleanly as inline SVG.
        host.innerHTML = txt.slice(txt.indexOf("<svg"));
        const svg = host.querySelector("svg");
        if (svg) {
          svg.setAttribute("viewBox", `${FOCUS.x} ${FOCUS.y} ${FOCUS.w} ${FOCUS.h}`);
          svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
          svg.removeAttribute("width");
          svg.removeAttribute("height");
        }
        setReady(true);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Trigger the draw-in animation when the map enters the viewport.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("rt-map-live");
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ready]);

  return (
    <section className="relative overflow-hidden pt-[clamp(1.75rem,1rem+2.6vw,3.25rem)]">
      {/* Atmospheric wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 0%, rgba(255,48,64,0.07), transparent 70%)",
        }}
      />

      <div className="container-rt relative">
        <Reveal className="text-center">
          <p className="eyebrow justify-center">
            <LogoMark className="size-[0.85em]" /> How it works
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
            From Bangladesh to <span className="text-grad-red">US teams</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">
            Elite, pre-vetted engineers — matched in days, in your timezone.
          </p>
        </Reveal>

      </div>

      {/* Full-bleed map band — breaks out of the content container, edge to edge */}
      <Reveal className="relative mt-10 w-full">
        <div className="relative w-full overflow-hidden border-y border-white/10 bg-[#0a0908]">
              {/* Ambient glows — hot red over Bangladesh, cool wash over the US */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(50% 70% at 76% 64%, rgba(255,48,64,0.22), transparent 62%)," +
                    "radial-gradient(46% 60% at 22% 40%, rgba(120,150,255,0.07), transparent 60%)," +
                    "radial-gradient(120% 110% at 50% -10%, rgba(255,255,255,0.06), transparent 55%)",
                }}
              />
              {/* Ops grid */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)," +
                    "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  maskImage:
                    "radial-gradient(ellipse 82% 82% at 50% 50%, #000 32%, transparent 86%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 82% 82% at 50% 50%, #000 32%, transparent 86%)",
                }}
              />
              {/* Inner vignette */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{ boxShadow: "inset 0 0 130px 24px rgba(0,0,0,0.55)" }}
              />

              <div
                ref={wrapRef}
                className="relative w-full"
                style={{ aspectRatio: `${FOCUS.w} / ${FOCUS.h}` }}
              >
                {/* Base world map (injected, restyled) */}
                <div ref={mapRef} className="rt-map absolute inset-0" />

                {/* Overlay: arc, traveling pulse, endpoint nodes */}
                <svg
                  viewBox={`${FOCUS.x} ${FOCUS.y} ${FOCUS.w} ${FOCUS.h}`}
                  preserveAspectRatio="xMidYMid meet"
                  className="absolute inset-0 h-full w-full overflow-visible"
                  fill="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="talentGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ff6a73" />
                      <stop offset="55%" stopColor="#ff3040" />
                      <stop offset="100%" stopColor="#d60505" />
                    </linearGradient>
                    <filter id="talentGlow" x="-80%" y="-80%" width="260%" height="260%">
                      <feGaussianBlur stdDeviation="3.2" result="b" />
                      <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="arcNeon" x="-30%" y="-60%" width="160%" height="260%">
                      <feGaussianBlur stdDeviation="5" />
                    </filter>
                  </defs>

                  {/* Neon underglow halo for the route */}
                  <path
                    d={ARC}
                    stroke="#ff3040"
                    strokeWidth="7"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                    filter="url(#arcNeon)"
                  />
                  {/* Faint full route beneath the animated one */}
                  <path d={ARC} stroke="#ff3040" strokeOpacity="0.22" strokeWidth="1.4" />
                  {/* Animated draw-in route */}
                  <path
                    id="talentArcPath"
                    className="talent-arc"
                    d={ARC}
                    pathLength={1}
                    stroke="url(#talentGrad)"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    filter="url(#talentGlow)"
                  />

                  {/* Comet traveling Bangladesh → US */}
                  <circle r="5" fill="#fff" filter="url(#talentGlow)">
                    <animateMotion dur="2.8s" repeatCount="indefinite" rotate="auto" keyTimes="0;1" keyPoints="1;0" calcMode="linear">
                      <mpath href="#talentArcPath" />
                    </animateMotion>
                  </circle>

                  {/* US node */}
                  <circle className="talent-ping" cx={US.x} cy={US.y} r="7" fill="#fff" opacity="0.4" />
                  <circle cx={US.x} cy={US.y} r="5" fill="#fff" filter="url(#talentGlow)" />
                  <circle cx={US.x} cy={US.y} r="2" fill="#0a0908" />

                  {/* Bangladesh node */}
                  <circle className="talent-ping" cx={BD.x} cy={BD.y} r="8" fill="var(--rt-red)" />
                  <circle cx={BD.x} cy={BD.y} r="6" fill="url(#talentGrad)" filter="url(#talentGlow)" />
                  <circle cx={BD.x} cy={BD.y} r="2.2" fill="#fff" />
                </svg>

                {/* HTML labels (stay crisp at any size) */}
                <span
                  className="absolute -translate-x-1/2 translate-y-[-170%] whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white/80 backdrop-blur sm:text-2xs"
                  style={pct(US)}
                >
                  United States
                </span>
                <span
                  className="absolute -translate-x-1/2 translate-y-[60%] whitespace-nowrap rounded-full bg-red px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white shadow-[0_0_22px_rgba(255,48,64,0.7)] sm:text-2xs"
                  style={pct(BD)}
                >
                  Bangladesh
                </span>
              </div>
            </div>
      </Reveal>
    </section>
  );
}
