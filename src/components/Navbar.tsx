"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import LogoMark from "./LogoMark";
import StartHiringButton from "./StartHiringButton";
import { usePricing } from "./PricingModal";
import { popularRoles, emergingRoles } from "@/lib/roles";

const NAV_LINKS = [
  { label: "How we work", href: "#how-we-work" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { openPricing } = usePricing();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTalents, setMobileTalents] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleCloseMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  const closeAll = () => {
    setMegaOpen(false);
    setMobileOpen(false);
    setMobileTalents(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper/90 backdrop-blur-md transition-shadow ${
        scrolled ? "border-b border-line-soft shadow-[0_1px_0_var(--rt-line-soft)]" : ""
      }`}
    >
      <nav className="container-rt flex h-nav items-center justify-between gap-6">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {/* Find Talents — mega menu on hover */}
          <div
            className="relative"
            onMouseEnter={openMega}
            onMouseLeave={scheduleCloseMega}
          >
            <button
              className="nav-link flex items-center gap-1.5"
              aria-expanded={megaOpen}
              aria-haspopup="true"
              data-active={megaOpen}
              onClick={() => setMegaOpen((v) => !v)}
            >
              Find Talents
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {megaOpen && (
              <div className="mega-panel absolute left-1/2 top-full w-[min(58rem,calc(100vw-2*var(--rt-gutter)))] -translate-x-1/2 pt-4">
                <div className="overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-[0_24px_70px_-20px_rgba(12,11,10,0.35)]">
                  <div className="grid grid-cols-[1.1fr_1fr_auto]">
                    {/* Popular roles */}
                    <div className="border-r border-line-soft p-7">
                      <p className="eyebrow mb-5">
                        <LogoMark className="size-[0.85em]" /> Popular Roles
                      </p>
                      <ul className="grid grid-cols-1">
                        {popularRoles.map((role) => (
                          <li key={role.name}>
                            <MegaItem name={role.name} onNavigate={closeAll} />
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Emerging roles */}
                    <div className="p-7">
                      <p className="eyebrow mb-5">
                        <LogoMark className="size-[0.85em]" /> Emerging AI Roles
                      </p>
                      <ul className="grid grid-cols-1">
                        {emergingRoles.map((role) => (
                          <li key={role.name}>
                            <MegaItem name={role.name} onNavigate={closeAll} />
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Side CTA panel */}
                    <div className="flex w-56 flex-col justify-between bg-[#F93B55] p-7 text-paper">
                      <div>
                        <p className="font-mono text-2xs uppercase tracking-[0.22em] text-white">
                          Not listed?
                        </p>
                        <p className="mt-3 font-display text-lg font-semibold leading-snug">
                          Tell us what you&apos;re building.
                        </p>
                        <p className="mt-2 text-xs text-paper/60">
                          We source niche roles on request — usually within a week.
                        </p>
                      </div>
                      <Link href="#contact" onClick={closeAll} className="btn btn-paper mt-6 !px-5 !py-2.5">
                        Talk to us
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-line-soft bg-paper px-7 py-3.5">
                    <p className="text-2xs text-ink-faint">
                      Every engineer is vetted across technical depth, live builds &amp; communication.
                    </p>
                    <Link
                      href="#talent"
                      onClick={closeAll}
                      className="group inline-flex items-center gap-1.5 text-xs font-semibold text-ink transition-colors hover:text-red"
                    >
                      Browse all roles
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.slice(0, 1).map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}

          <button className="nav-link" onClick={openPricing}>
            Pricing
          </button>

          {NAV_LINKS.slice(1).map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <StartHiringButton variant="red" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="grid size-10 place-items-center rounded-lg border border-line lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <div className="flex w-4.5 flex-col gap-[5px]">
            <span className={`h-[2px] bg-ink transition-transform ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-[2px] bg-ink transition-transform ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="anim-fade-up fixed inset-x-0 bottom-0 top-[var(--rt-nav-h)] overflow-y-auto border-t border-line-soft bg-paper px-gutter pb-10 pt-6 lg:hidden">
          <button
            className="flex w-full items-center justify-between py-4 text-left font-display text-xl font-semibold"
            aria-expanded={mobileTalents}
            onClick={() => setMobileTalents((v) => !v)}
          >
            Find Talents
            <span className={`text-red transition-transform duration-300 ${mobileTalents ? "rotate-45" : ""}`} aria-hidden="true">
              +
            </span>
          </button>

          {mobileTalents && (
            <div className="space-y-6 border-l-2 border-red pb-4 pl-5">
              <div>
                <p className="eyebrow mb-3">Popular Roles</p>
                <ul className="space-y-2.5">
                  {popularRoles.map((r) => (
                    <li key={r.name}>
                      <Link href="#talent" onClick={closeAll} className="text-base text-ink-soft transition-colors hover:text-red">
                        {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-3">Emerging AI Roles</p>
                <ul className="space-y-2.5">
                  {emergingRoles.map((r) => (
                    <li key={r.name}>
                      <Link href="#talent" onClick={closeAll} className="text-base text-ink-soft transition-colors hover:text-red">
                        {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="divide-y divide-line-soft border-t border-line-soft">
            <Link href="#how-we-work" onClick={closeAll} className="block py-4 font-display text-xl font-semibold">
              How we work
            </Link>
            <button
              onClick={() => {
                closeAll();
                openPricing();
              }}
              className="block w-full py-4 text-left font-display text-xl font-semibold"
            >
              Pricing
            </button>
            <Link href="#about" onClick={closeAll} className="block py-4 font-display text-xl font-semibold">
              About Us
            </Link>
            <Link href="#contact" onClick={closeAll} className="block py-4 font-display text-xl font-semibold">
              Contact
            </Link>
          </div>

          <StartHiringButton variant="red" className="mt-8 w-full" onClick={closeAll} />
        </div>
      )}
    </header>
  );
}

function MegaItem({ name, onNavigate }: { name: string; onNavigate: () => void }) {
  return (
    <Link
      href="#talent"
      onClick={onNavigate}
      className="group flex items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-red-tint hover:text-red"
    >
      <span className="whitespace-nowrap">{name}</span>
      <span
        aria-hidden="true"
        className="-translate-x-1 text-red opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
      >
        →
      </span>
    </Link>
  );
}
