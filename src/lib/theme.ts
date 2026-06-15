/**
 * Centralized design tokens — the typed, importable surface for components.
 *
 * Raw VALUES (hex colors, fluid clamp() scales, spacing) live exactly once in
 * `src/app/globals.css`: `:root` declares them and `@theme inline` exposes the
 * Tailwind utilities (`text-ink`, `font-display`, `text-base`, `btn-red`, …).
 *
 * This module does NOT redeclare those values (that would let them drift);
 * it NAMES the utilities so components never hardcode raw class strings.
 * Change a value in globals.css and every consumer here re-flows automatically.
 */

/* ---- Color tokens (Tailwind color names from @theme) ----
   Compose with a prefix at the call site: `text-${color.ink}`, `bg-${color.red}`. */
export const color = {
  ink: "ink",
  inkSoft: "ink-soft",
  inkFaint: "ink-faint",
  paper: "paper",
  paperRaised: "paper-raised",
  line: "line",
  lineSoft: "line-soft",
  red: "red",
  redDeep: "red-deep",
  redTint: "red-tint",
} as const;

/* ---- Font family tokens (ready-to-use Tailwind utilities) ---- */
export const font = {
  display: "font-display",
  sans: "font-sans",
  mono: "font-mono",
} as const;

/* ---- Fluid type scale (ready-to-use Tailwind utilities) ----
   Backed by --rt-step-* in globals.css; sizes flex with the viewport. */
export const textSize = {
  "2xs": "text-2xs",
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  hero: "text-hero",
} as const;

/* ---- Fluid spacing tokens (ready-to-use Tailwind utilities) ---- */
export const space = {
  gutter: "gutter",
  section: "section",
  nav: "nav",
} as const;

/* ---- Button recipe ----
   `.btn` + variant styling live in globals.css; sizes are composed here so
   every button shares one definition of padding + label size. */
export const button = {
  base: "btn",
  variant: {
    red: "btn-red",
    ink: "btn-ink",
    ghost: "btn-ghost",
    paper: "btn-paper",
  },
  size: {
    // Tighter padding than the base `.btn` so the label reads bigger
    // without inflating the overall button.
    sm: "!px-4 !py-1.5 text-sm",
    md: "!px-5 !py-2 text-base",
    lg: "px-7 py-2.5 text-lg",
  },
} as const;

export type ColorToken = keyof typeof color;
export type TextSizeToken = keyof typeof textSize;
export type ButtonVariant = keyof typeof button.variant;
export type ButtonSize = keyof typeof button.size;
