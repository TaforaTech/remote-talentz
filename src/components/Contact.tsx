"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import StartHiringButton from "./StartHiringButton";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="border-t border-line bg-paper-raised py-section">
      <div className="container-rt grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">
            <span aria-hidden="true">✱</span> Contact
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.02em] text-ink">
            Tell us who
            <br />
            you need.
          </h2>
          <p className="mt-6 max-w-md text-base text-ink-soft">
            Share the role and the stack — we&apos;ll come back within one
            business day with availability and a plan to get your shortlist
            moving.
          </p>

          <dl className="mt-10 space-y-5">
            <div>
              <dt className="font-mono text-2xs uppercase tracking-[0.2em] text-ink-faint">
                Email
              </dt>
              <dd>
                <a
                  href="mailto:hello@remotetalentz.com"
                  className="font-display text-lg font-semibold text-ink transition-colors hover:text-red"
                >
                  hello@remotetalentz.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-2xs uppercase tracking-[0.2em] text-ink-faint">
                Response time
              </dt>
              <dd className="text-sm text-ink-soft">Within one business day</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120}>
          {!sent ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-line bg-paper p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Your name" id="contact-name">
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Jane Founder"
                    className="field-input"
                  />
                </Field>
                <Field label="Work email" id="contact-email">
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="field-input"
                  />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="What are you hiring for?" id="contact-msg">
                  <textarea
                    id="contact-msg"
                    required
                    rows={5}
                    placeholder="e.g. A senior RAG engineer, Python + Postgres, 4h overlap with CET, starting next month…"
                    className="field-input resize-none"
                  />
                </Field>
              </div>
              <StartHiringButton type="submit" variant="red" className="mt-7 w-full sm:w-auto" />
            </form>
          ) : (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-paper p-12 text-center">
              <div className="grid size-14 place-items-center rounded-full bg-red-tint">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M4 11.5l5 5L18 6" stroke="var(--rt-red)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                Brief received.
              </h3>
              <p className="mt-3 max-w-sm text-sm text-ink-soft">
                We&apos;ll reply within one business day with availability and
                next steps. Talk soon.
              </p>
            </div>
          )}
        </Reveal>
      </div>

    </section>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-2xs uppercase tracking-[0.18em] text-ink-soft"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
