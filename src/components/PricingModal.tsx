"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type PricingContextValue = {
  openPricing: () => void;
};

const PricingContext = createContext<PricingContextValue | null>(null);

export function usePricing() {
  const ctx = useContext(PricingContext);
  if (!ctx) throw new Error("usePricing must be used within <PricingProvider>");
  return ctx;
}

export function PricingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openPricing = useCallback(() => setOpen(true), []);

  return (
    <PricingContext.Provider value={{ openPricing }}>
      {children}
      {open && <PricingModal onClose={() => setOpen(false)} />}
    </PricingContext.Provider>
  );
}

function PricingModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstFieldRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      className="modal-overlay fixed inset-0 z-[100] flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center"
      onMouseDown={(e) => {
        if (!panelRef.current?.contains(e.target as Node)) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pricing-modal-title"
    >
      <div
        ref={panelRef}
        className="modal-panel relative w-full max-w-lg overflow-hidden rounded-t-3xl bg-paper-raised sm:rounded-3xl"
      >
        {/* Red signal bar */}
        <div className="h-1.5 w-full bg-red" />

        <button
          onClick={onClose}
          aria-label="Close pricing dialog"
          className="absolute right-4 top-6 grid size-9 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-red hover:text-red"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        {!sent ? (
          <div className="px-gutter py-10 sm:px-10">
            <p className="eyebrow">
              <Asterisk /> Pricing
            </p>
            <h2
              id="pricing-modal-title"
              className="mt-4 font-display text-2xl font-bold tracking-tight text-ink"
            >
              Unlock Full Pricing Details
            </h2>
            <p className="mt-3 text-sm text-ink-soft">
              Enter your work email to access complete rate breakdowns,
              seniority, and engagement model—and discover how much you can
              save with global AI-native talent.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <div>
                <label htmlFor="pricing-name" className="mb-1.5 block font-mono text-2xs uppercase tracking-[0.18em] text-ink-soft">
                  Full name
                </label>
                <input
                  ref={firstFieldRef}
                  id="pricing-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Founder"
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-faint focus:border-red focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="pricing-email" className="mb-1.5 block font-mono text-2xs uppercase tracking-[0.18em] text-ink-soft">
                  Work email
                </label>
                <input
                  id="pricing-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-faint focus:border-red focus:outline-none"
                />
              </div>
              <button type="submit" className="btn btn-red w-full">
                View Pricing
                <Arrow />
              </button>
              <p className="text-center text-2xs text-ink-faint">
                No spam — one email with the complete rate card.
              </p>
            </form>
          </div>
        ) : (
          <div className="px-gutter py-14 text-center sm:px-10">
            <div className="mx-auto grid size-14 place-items-center rounded-full bg-red-tint">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M4 11.5l5 5L18 6" stroke="var(--rt-red)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink">
              Check your inbox
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm text-ink-soft">
              Thanks, {name.split(" ")[0] || "there"}. The full pricing
              breakdown is on its way to{" "}
              <span className="font-semibold text-ink">{email}</span>.
            </p>
            <button onClick={onClose} className="btn btn-ink mt-8">
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Asterisk() {
  return <span aria-hidden="true">✱</span>;
}

function Arrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2 7.5h11M8.5 3L13 7.5 8.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
