import Link from "next/link";

/** Srinishtha wordmark with a miniature yantra mark:
 *  concentric rings + crosshair + the single vermillion point. */
export function Logo() {
  return (
    <Link href="/" aria-label="Srinishtha Technologies — home" className="group inline-flex items-center gap-3">
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" fill="none" aria-hidden>
        <circle cx="16" cy="16" r="14" stroke="var(--color-line-3)" strokeWidth="1" />
        <circle cx="16" cy="16" r="8.5" stroke="var(--color-chalk-2)" strokeWidth="1" />
        <path d="M16 1v30M1 16h30" stroke="var(--color-line-2)" strokeWidth="1" />
        <rect
          x="10"
          y="10"
          width="12"
          height="12"
          transform="rotate(45 16 16)"
          stroke="var(--color-chalk-2)"
          strokeWidth="1"
        />
        <circle cx="16" cy="16" r="2.4" fill="var(--color-vermillion)" />
      </svg>
      <span className="font-display text-lg font-semibold leading-none tracking-tight text-chalk">
        Srinishtha
      </span>
    </Link>
  );
}
