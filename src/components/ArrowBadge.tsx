type Props = {
  /** Background of the circle. Defaults to a white disc. */
  circleClassName?: string;
  /** Arrow stroke colour (Tailwind text-* utility). Defaults to brand red. */
  arrowClassName?: string;
};

/** Large circle, flush to the button's right edge, holding an arrow that points
 *  up-right (45°) and straightens to point right on hover of the parent button.
 *  The negative right margin cancels the button's right padding so the circle
 *  fills the height and sits at the very edge.
 *
 *  Requires the parent button to carry the `group` class. */
export default function ArrowBadge({
  circleClassName = "bg-white",
  arrowClassName = "text-red",
}: Props = {}) {
  return (
    <span
      className={`-my-[0.7em] -mr-[1.22em] ml-2 grid size-[2.4em] shrink-0 -rotate-45 place-items-center rounded-full transition-transform duration-300 ease-out group-hover:rotate-0 ${circleClassName} ${arrowClassName}`}
    >
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
