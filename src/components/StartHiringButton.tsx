import Link from "next/link";
import { button, type ButtonVariant, type ButtonSize } from "@/lib/theme";

type Props = {
  /** Visual style — resolved from the centralized button recipe. */
  variant?: ButtonVariant;
  /** Padding + label size — resolved from the centralized button recipe. */
  size?: ButtonSize;
  /** Extra utility classes (layout, margins, width). */
  className?: string;
  /** Render as a form submit button instead of a link to /contact. */
  type?: "link" | "submit";
  onClick?: () => void;
};

export default function StartHiringButton({
  variant = "red",
  size = "md",
  className = "",
  type = "link",
  onClick,
}: Props) {
  const classes =
    `group ${button.base} ${button.variant[variant]} ${button.size[size]} ${className}`.trim();

  if (type === "submit") {
    return (
      <button type="submit" className={classes} onClick={onClick}>
        Start Hiring
        <ArrowBadge />
      </button>
    );
  }

  return (
    <Link href="/contact" className={classes} onClick={onClick}>
      Start Hiring
      <ArrowBadge />
    </Link>
  );
}

/** Large white circle, flush to the button's right edge, holding an arrow that
 *  points up-right (45°) and straightens to point right on hover of the parent
 *  button. The negative right margin cancels the button's right padding so the
 *  circle fills the height and sits at the very edge. */
function ArrowBadge() {
  return (
    <span className="-my-[0.7em] -mr-[1.22em] ml-2 grid size-[2.4em] shrink-0 -rotate-45 place-items-center rounded-full bg-white text-red transition-transform duration-300 ease-out group-hover:rotate-0">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-[1.4em]"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}
