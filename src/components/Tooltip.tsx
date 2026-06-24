import type { ReactNode } from "react";

/** Side of the trigger the bubble floats on. Use `bottom` for triggers that
 *  sit near the top of the viewport (e.g. the sticky navbar) so the bubble
 *  never clips off-screen. */
type Placement = "top" | "bottom";

type TooltipProps = {
  /** Short highlighted lead-in rendered as a gradient pill (e.g. "Free"). */
  accent?: string;
  /** Main tooltip copy. */
  label: string;
  /** Where the bubble sits relative to the trigger. Defaults to `top`. */
  placement?: Placement;
  /** The hover/focus target the tooltip describes. */
  children: ReactNode;
  /** Extra classes on the wrapper (layout only). */
  className?: string;
};

/** A refined, on-brand tooltip. Reveals on hover AND keyboard focus, fades +
 *  rises into place, and is click-through (`pointer-events-none`) so it never
 *  intercepts the trigger. The trigger wrapper owns the `group/tip` so the
 *  bubble can react to either interaction without any JS. */
export default function Tooltip({
  accent,
  label,
  placement = "top",
  children,
  className = "",
}: TooltipProps) {
  const top = placement === "top";

  return (
    <span className={`group/tip relative inline-flex ${className}`}>
      {children}
      <span
        role="tooltip"
        className={[
          "pointer-events-none absolute left-1/2 z-50 flex -translate-x-1/2 items-center gap-1.5",
          "whitespace-nowrap rounded-full border border-white/10 bg-ink px-3 py-1.5",
          "font-display text-[0.72rem] font-medium tracking-wide text-paper",
          "shadow-[0_14px_34px_-14px_rgba(12,11,10,0.65)]",
          "opacity-0 scale-95 transition duration-200 ease-out",
          "group-hover/tip:opacity-100 group-hover/tip:scale-100",
          "group-focus-within/tip:opacity-100 group-focus-within/tip:scale-100",
          top
            ? "bottom-full mb-2.5 translate-y-1 group-hover/tip:translate-y-0 group-focus-within/tip:translate-y-0"
            : "top-full mt-2.5 -translate-y-1 group-hover/tip:translate-y-0 group-focus-within/tip:translate-y-0",
        ].join(" ")}
      >
        {accent && (
          <span className="rounded-full bg-[image:var(--rt-grad-action)] px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-paper">
            {accent}
          </span>
        )}
        {label}
        <span
          aria-hidden="true"
          className={[
            "absolute left-1/2 size-2 -translate-x-1/2 rotate-45 border-white/10 bg-ink",
            top ? "top-full -mt-1 border-b border-r" : "bottom-full -mb-1 border-l border-t",
          ].join(" ")}
        />
      </span>
    </span>
  );
}
