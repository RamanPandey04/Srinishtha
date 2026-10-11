import type { ReactNode } from "react";

/* Section marker drawn like a figure caption on a technical sheet:
   FIG.01 ──────── WHAT WE DO */
export function Fig({
  n,
  children,
  tone = "ink",
}: {
  n: string;
  children: ReactNode;
  tone?: "ink" | "paper";
}) {
  const onPaper = tone === "paper";
  return (
    <div className="flex items-center gap-3">
      <span className="mono-label text-vermillion">FIG.{n}</span>
      <span className={`h-px w-10 ${onPaper ? "bg-line-ink-2" : "bg-line-3"}`} />
      <span className={`mono-label ${onPaper ? "text-graphite-2" : "text-muted"}`}>{children}</span>
    </div>
  );
}

/* A measured coordinate / annotation tag */
export function Coord({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span className={`mono-xs ${accent ? "text-vermillion" : "text-faint"}`}>{children}</span>
  );
}

/* Registration crosshairs at the four corners of a framed block */
export function Corners({ onPaper = false }: { onPaper?: boolean }) {
  const c = onPaper ? "bg-line-ink-2" : "bg-line-3";
  const Mark = ({ pos }: { pos: string }) => (
    <span className={`pointer-events-none absolute h-2.5 w-2.5 ${pos}`} aria-hidden>
      <span className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 ${c}`} />
      <span className={`absolute top-1/2 left-0 h-px w-full -translate-y-1/2 ${c}`} />
    </span>
  );
  return (
    <>
      <Mark pos="-left-1 -top-1" />
      <Mark pos="-right-1 -top-1" />
      <Mark pos="-left-1 -bottom-1" />
      <Mark pos="-right-1 -bottom-1" />
    </>
  );
}

/* The निष्ठा mark — the company's name/meaning in its native script */
export function Nishtha({
  className = "",
  showRoman = true,
}: {
  className?: string;
  showRoman?: boolean;
}) {
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className="font-deva leading-none" lang="sa">
        निष्ठा
      </span>
      {showRoman && <span className="mono-xs text-faint">/ nishtha — devotion</span>}
    </span>
  );
}
