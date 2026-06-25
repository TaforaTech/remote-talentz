"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import LogoMark from "./LogoMark";
import Button from "./Button";
import { faqCategories } from "@/lib/faq";

export default function FaqContent() {
  return (
    <>
      <Header />
      <Body />
      <CtaBand />
    </>
  );
}

/* ---------- 1. Header ---------- */
function Header() {
  return (
    <section className="pt-section-tight">
      <div className="container-rt text-center">
        <Reveal>
          <p className="eyebrow justify-center">
            <LogoMark className="size-[0.85em]" /> Help Center
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl break-words font-display text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl">
            Frequently asked questions.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">
            Everything you need to know about hiring vetted remote talent through
            RemoteTalentz — from vetting and pricing to payroll, compliance, and
            how the day-to-day works.
          </p>
          <p className="mx-auto mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-mono text-2xs uppercase tracking-[0.16em] text-ink-faint">
            <span>Shortlist in 48 hours</span>
            <span className="text-red/40" aria-hidden="true">✱</span>
            <span>No hidden fees</span>
            <span className="text-red/40" aria-hidden="true">✱</span>
            <span>Every hire guaranteed</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 2. Body — sticky category nav + accordion sections ---------- */
function Body() {
  const activeId = useScrollSpy(faqCategories.map((c) => c.id));

  return (
    <section className="py-section-tight">
      <div className="container-rt">
        {/* Mobile: sticky pill bar pinned just under the navbar so any section
            is reachable while scrolling. */}
        <MobileCategoryNav activeId={activeId} />

        <div className="lg:grid lg:grid-cols-[15rem_1fr] lg:gap-14">
          {/* Desktop: the <aside> is a grid item, so it stretches to the full
              height of the content column. That gives the sticky list below the
              room to stay pinned the whole way down — no collapsing wrapper. */}
          <aside aria-label="FAQ categories" className="hidden lg:block">
            <div className="sticky top-[calc(var(--rt-nav-h)+1.5rem)]">
              <p className="eyebrow mb-4">On this page</p>
              <ul className="space-y-1 border-l border-line">
                {faqCategories.map((cat) => (
                  <li key={cat.id}>
                    <a
                      href={`#${cat.id}`}
                      data-active={activeId === cat.id}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-ink-faint transition-colors hover:text-ink data-[active=true]:border-red data-[active=true]:font-medium data-[active=true]:text-red"
                    >
                      {cat.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-16 lg:space-y-20">
            {faqCategories.map((cat, i) => (
              <section
                key={cat.id}
                id={cat.id}
                className="scroll-mt-[calc(var(--rt-nav-h)+4.5rem)] lg:scroll-mt-nav"
              >
                <Reveal>
                  <p className="font-mono text-2xs uppercase tracking-[0.2em] text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl">
                    {cat.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-ink-soft">{cat.blurb}</p>

                  <div className="mt-6 divide-y divide-line border-t border-line">
                    {cat.items.map((f) => (
                      <details key={f.q} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                          {f.q}
                          <span
                            aria-hidden="true"
                            className="shrink-0 text-2xl font-normal text-red transition-transform duration-300 group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                          {f.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </Reveal>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Mobile category navigation (sticky horizontal pills) ---------- */
function MobileCategoryNav({ activeId }: { activeId: string }) {
  const listRef = useRef<HTMLUListElement | null>(null);

  // Keep the active pill in view as scroll-spy moves through the page.
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(
      `[data-id="${activeId}"]`
    );
    el?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [activeId]);

  return (
    <nav
      aria-label="FAQ categories"
      className="sticky top-[var(--rt-nav-h)] z-30 -mx-gutter mb-10 border-b border-line-soft bg-paper/95 px-gutter py-3 backdrop-blur-md lg:hidden"
    >
      <ul
        ref={listRef}
        className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {faqCategories.map((cat) => (
          <li key={cat.id} className="shrink-0">
            <a
              href={`#${cat.id}`}
              data-id={cat.id}
              data-active={activeId === cat.id}
              className="block whitespace-nowrap rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-red hover:text-red data-[active=true]:border-red data-[active=true]:bg-red data-[active=true]:text-white"
            >
              {cat.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ---------- 3. Final CTA band ---------- */
function CtaBand() {
  return (
    <section className="pb-section-tight">
      <div className="container-rt">
        <Reveal className="overflow-hidden rounded-2xl bg-ink">
          <div className="flex flex-col items-start justify-between gap-8 p-10 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">
                Still have questions?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-paper/65">
                Tell us the role and the outcome you&apos;re after, and we&apos;ll come
                back within one business day — usually with vetted candidates and an
                exact rate.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href="/contact" variant="red" arrow="right">
                Talk to us
              </Button>
              <Button
                href="/schedule"
                target="_blank"
                rel="noopener noreferrer"
                variant="paper"
              >
                Book a call
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- scroll-spy: highlight the section currently in view ---------- */
function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // Track which sections are intersecting; the topmost one wins. The
    // rootMargin pulls the "active" line down below the fixed navbar and up
    // from the bottom so a section lights up while it owns the upper viewport.
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Pick the first id (document order) that's currently visible.
        const next = ids.find((id) => visible.has(id));
        if (next) setActiveId(next);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return activeId;
}
