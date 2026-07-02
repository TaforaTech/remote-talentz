import type { Config } from "tailwindcss";

/**
 * Tailwind v3 theme — mirrors the token system in src/app/globals.css.
 *
 * We intentionally stay on Tailwind v3: v4's compiled output relies on
 * cascade layers (@layer), @property, oklch() and color-mix(), which old
 * engines (Android TV browsers, embedded WebViews < Chrome 111) do not
 * parse — they drop the ENTIRE stylesheet and the site renders unstyled.
 * v3 emits plain CSS that works back to ~Chrome 80.
 *
 * Colors are raw hex here (not var(--rt-*)) so opacity modifiers like
 * bg-paper/90 work — v3 can only inject alpha into literal color values.
 * Keep them in sync with the --rt-* palette in globals.css.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c0b0a",
        "ink-soft": "#57524c",
        "ink-faint": "#8e8880",
        paper: "#ffffff",
        "paper-raised": "#ffffff",
        line: "rgba(12, 11, 10, 0.14)",
        "line-soft": "rgba(12, 11, 10, 0.08)",
        red: "#e3001b",
        "red-deep": "#b40015",
        "red-tint": "#fdeeea",
      },
      borderColor: {
        // Match v4's preflight: bare `border` inherits currentColor,
        // not v3's gray-200 default.
        DEFAULT: "currentColor",
      },
      fontFamily: {
        display: ["var(--font-inter)", "Inter", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      // Fluid type scale — sizes live in globals.css as --rt-step-* tokens.
      fontSize: {
        "2xs": ["var(--rt-step--2)", { lineHeight: "1.5" }],
        xs: ["var(--rt-step--1)", { lineHeight: "1.55" }],
        sm: ["var(--rt-step--1)", { lineHeight: "1.6" }],
        base: ["var(--rt-step-0)", { lineHeight: "1.65" }],
        lg: ["var(--rt-step-1)", { lineHeight: "1.55" }],
        xl: ["var(--rt-step-2)", { lineHeight: "1.4" }],
        "2xl": ["var(--rt-step-3)", { lineHeight: "1.25" }],
        "3xl": ["var(--rt-step-4)", { lineHeight: "1.15" }],
        "4xl": ["var(--rt-step-5)", { lineHeight: "1.08" }],
        "5xl": ["var(--rt-step-6)", { lineHeight: "1.04" }],
        hero: ["var(--rt-step-hero)", { lineHeight: "0.98" }],
      },
      spacing: {
        // Fluid rhythm utilities: p-gutter, py-section, h-nav …
        gutter: "var(--rt-gutter)",
        section: "var(--rt-section)",
        "section-tight": "var(--rt-section-tight)",
        nav: "var(--rt-nav-h)",
        // Steps v4 generated dynamically but v3's fixed scale lacks.
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "13": "3.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
