import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { button, type ButtonVariant, type ButtonSize } from "@/lib/theme";
import ArrowBadge from "./ArrowBadge";

/** Trailing affordance baked into the button so call sites don't re-implement it.
 *  - `badge`  → the circular {@link ArrowBadge}, coloured to suit the variant.
 *  - `right`  → a plain "→" glyph.
 *  - `none`   → nothing. */
type Arrow = "none" | "right" | "badge";

type SharedProps = {
  /** Visual style — resolved from the centralized button recipe. */
  variant?: ButtonVariant;
  /** Padding + label size — resolved from the centralized button recipe. */
  size?: ButtonSize;
  /** Extra utility classes (layout, width, margins, gap tweaks). */
  className?: string;
  children: ReactNode;
  /** Optional leading icon (e.g. a calendar glyph). */
  iconLeft?: ReactNode;
  /** Trailing arrow style. Defaults to `none`. */
  arrow?: Arrow;
};

/** When `href` is provided the button renders as a link (Next `<Link>` for
 *  internal routes, a plain `<a>` for hashes / external / mailto). Otherwise it
 *  renders as a real `<button>`. The union keeps native props type-safe per case. */
type ButtonAsButton = SharedProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof SharedProps | "href"> & {
    href?: undefined;
  };

type ButtonAsLink = SharedProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof SharedProps | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Per-variant colours for the `arrow="badge"` affordance, so a white circle
 *  on a red button becomes a gradient circle on a ghost button automatically. */
const badge: Record<ButtonVariant, { circleClassName: string; arrowClassName: string }> = {
  red: { circleClassName: "bg-white", arrowClassName: "text-red" },
  ink: { circleClassName: "bg-white", arrowClassName: "text-ink" },
  ghost: { circleClassName: "bg-transparent !-ml-2", arrowClassName: "text-ink group-hover:text-paper" },
  paper: { circleClassName: "bg-ink", arrowClassName: "text-white" },
};

export default function Button({
  variant = "red",
  size = "base",
  className = "",
  children,
  iconLeft,
  arrow = "none",
  href,
  ...rest
}: ButtonProps) {
  const classes = [
    "group",
    button.base,
    button.variant[variant],
    button.size[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {iconLeft}
      {children}
      {arrow === "badge" && <ArrowBadge {...badge[variant]} />}
      {arrow === "right" && <span aria-hidden="true">→</span>}
    </>
  );

  if (href === undefined) {
    const { type = "button", ...buttonRest } = rest as ComponentPropsWithoutRef<"button">;
    return (
      <button type={type} className={classes} {...buttonRest}>
        {content}
      </button>
    );
  }

  // Next's <Link> owns client-side routing for app routes; bare anchors
  // (hash scrolls, mailto, external) stay native.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...(rest as ComponentPropsWithoutRef<"a">)}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...(rest as ComponentPropsWithoutRef<"a">)}>
      {content}
    </a>
  );
}
