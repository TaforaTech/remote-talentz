import Button from "./Button";
import { type ButtonVariant, type ButtonSize } from "@/lib/theme";

type Props = {
  /** Visual style — forwarded to the shared <Button>. */
  variant?: ButtonVariant;
  /** Padding + label size — forwarded to the shared <Button>. */
  size?: ButtonSize;
  /** Extra utility classes (layout, margins, width). */
  className?: string;
  /** Render as a form submit button instead of a link to /contact. */
  type?: "link" | "submit";
  onClick?: () => void;
};

/** The recurring "Start Hiring" CTA. A thin, semantic wrapper over <Button>
 *  so the label + arrow badge stay consistent everywhere it appears. */
export default function StartHiringButton({
  variant = "red",
  size = "md",
  className = "",
  type = "link",
  onClick,
}: Props) {
  if (type === "submit") {
    return (
      <Button
        type="submit"
        variant={variant}
        size={size}
        className={className}
        onClick={onClick}
        arrow="badge"
      >
        Start Hiring
      </Button>
    );
  }

  return (
    <Button
      href="/contact"
      variant={variant}
      size={size}
      className={className}
      onClick={onClick}
      arrow="badge"
    >
      Start Hiring
    </Button>
  );
}
