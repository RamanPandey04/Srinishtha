import type { ReactNode } from "react";

/** A drafting-sheet band. Ink by default; `paper` flips to the light table. */
export function Section({
  children,
  id,
  tone = "ink",
  grid = false,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: "ink" | "paper";
  grid?: boolean;
  className?: string;
}) {
  const paper = tone === "paper";
  return (
    <section
      id={id}
      className={`relative border-t ${paper ? "border-line-ink-2 bg-paper text-graphite" : "border-line bg-ink text-chalk"} ${
        grid ? (paper ? "sheet-ink" : "sheet") : ""
      } py-20 md:py-28 ${className}`}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}
