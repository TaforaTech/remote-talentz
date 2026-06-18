"use client";

import { useEffect, useRef, useState } from "react";

/* Counts from 0 → `end` once the element scrolls into view.
   Respects prefers-reduced-motion (snaps straight to the final value). */
export default function CountUp({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1600,
}: {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(end);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || done.current) continue;
          done.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setValue(end * eased);
            if (p < 1) requestAnimationFrame(step);
            else setValue(end);
          };
          requestAnimationFrame(step);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  const text = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
