import Link from "next/link";
import { button, type ButtonVariant, type ButtonSize } from "@/lib/theme";
import ArrowBadge from "./ArrowBadge";

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
