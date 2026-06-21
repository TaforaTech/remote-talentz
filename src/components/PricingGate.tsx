"use client";

import { useRef, useState } from "react";
import LogoMark from "./LogoMark";
import PricingContent from "./PricingContent";

// Simple access gate for the pricing page.
const ACCESS_NAME = "tafora";
const ACCESS_PASSWORD = "one";

export default function PricingGate() {
  const [unlocked, setUnlocked] = useState(false);

  if (unlocked) return <PricingContent />;
  return <Gate onUnlock={() => setUnlocked(true)} />;
}

function Gate({ onUnlock }: { onUnlock: () => void }) {
  // Pre-filled for development so the gate can be cleared with one click.
  const [name, setName] = useState(ACCESS_NAME);
  const [password, setPassword] = useState(ACCESS_PASSWORD);
  const [error, setError] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      name.trim().toLowerCase() === ACCESS_NAME &&
      password === ACCESS_PASSWORD
    ) {
      setError(false);
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <section className="grid min-h-[70vh] place-items-center py-section">
      <div className="container-rt">
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-line bg-paper-raised shadow-[0_24px_70px_-20px_rgba(12,11,10,0.25)]">
          <div className="h-1.5 w-full bg-red" />
          <div className="px-gutter py-10 sm:px-10">
            <p className="eyebrow">
              <LogoMark className="size-[0.85em]" /> Pricing
            </p>
            <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
              Protected pricing
            </h1>
            <p className="mt-3 text-sm text-ink-soft">
              Enter your access credentials to view the full rate card.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <div>
                <label
                  htmlFor="gate-name"
                  className="mb-1.5 block font-mono text-2xs uppercase tracking-[0.18em] text-ink-soft"
                >
                  Name
                </label>
                <input
                  ref={firstFieldRef}
                  id="gate-name"
                  type="text"
                  required
                  autoComplete="username"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError(false);
                  }}
                  placeholder="Enter name"
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-faint focus:border-red focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="gate-password"
                  className="mb-1.5 block font-mono text-2xs uppercase tracking-[0.18em] text-ink-soft"
                >
                  Password
                </label>
                <input
                  id="gate-password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="Enter password"
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-faint focus:border-red focus:outline-none"
                />
              </div>

              {error && (
                <p className="text-sm font-medium text-red">
                  Incorrect name or password. Please try again.
                </p>
              )}

              <button type="submit" className="btn btn-red w-full">
                Unlock pricing
                <Arrow />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path
        d="M2 7.5h11M8.5 3L13 7.5 8.5 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
