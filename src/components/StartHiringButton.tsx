import Link from "next/link";

type Props = {
  /** Visual style — matches the `.btn-*` variants in globals.css. */
  variant?: "red" | "ink";
  /** Extra utility classes (layout, margins, width). */
  className?: string;
  /** Render as a form submit button instead of a link to #contact. */
  type?: "link" | "submit";
  onClick?: () => void;
};

// Tighter padding than the base `.btn` so a larger label reads bigger
// without ballooning the overall button size.
const SIZE = "!px-5 !py-2 text-base";

export default function StartHiringButton({
  variant = "red",
  className = "",
  type = "link",
  onClick,
}: Props) {
  const classes = `btn btn-${variant} ${SIZE} ${className}`.trim();

  if (type === "submit") {
    return (
      <button type="submit" className={classes} onClick={onClick}>
        Start Hiring
      </button>
    );
  }

  return (
    <Link href="#contact" className={classes} onClick={onClick}>
      Start Hiring
    </Link>
  );
}
