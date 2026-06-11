import Link from "next/link";

export default function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="RemoteTalentz — home"
      className="group inline-flex items-center gap-2.5"
    >
      {/* Mark: red asterisk in a black tile — black & red only */}
      <span
        className={`grid size-9 shrink-0 place-items-center rounded-lg ${
          onDark ? "bg-paper" : "bg-ink"
        }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-500 group-hover:rotate-180"
        >
          <path
            d="M12 2v20M3.34 7l17.32 10M3.34 17L20.66 7"
            stroke="var(--rt-red)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={`font-display text-lg font-bold leading-none tracking-tight ${
          onDark ? "text-paper" : "text-ink"
        }`}
      >
        remote<span className="text-red">talentz</span>
      </span>
    </Link>
  );
}
