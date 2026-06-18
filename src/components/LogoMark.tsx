import { useId } from "react";

/* The RemoteTalentz brand mark — the gradient ring from the logo.
   Used inline (in place of the old ✱) as an eyebrow / bullet marker.
   Size it from the call site, e.g. <LogoMark className="size-[0.85em]" />. */
export default function LogoMark({ className = "" }: { className?: string }) {
  const gradientId = useId();
  return (
    <svg
      viewBox="0 0 500 500"
      role="img"
      aria-hidden="true"
      fill="none"
      className={`inline-block shrink-0 ${className}`}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="69.33"
          y1="184.24"
          x2="430.67"
          y2="315.76"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d60505" />
          <stop offset="0.04" stopColor="#dc0b0d" />
          <stop offset="0.22" stopColor="#ef1f29" />
          <stop offset="0.38" stopColor="#fb2c3a" />
          <stop offset="0.5" stopColor="#ff3040" />
        </linearGradient>
      </defs>
      <circle
        cx="250"
        cy="250"
        r="165.94"
        stroke={`url(#${gradientId})`}
        strokeWidth="52.55"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
