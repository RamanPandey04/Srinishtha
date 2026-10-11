import { clients } from "@/lib/content";

/** A register of clients, set like an index rather than a logo wall. */
export function Clients() {
  return (
    <div className="border-y border-line bg-ink">
      <div className="container-x flex flex-col gap-6 py-6 md:flex-row md:items-center md:gap-10">
        <span className="mono-xs shrink-0 text-faint">
          ON THE RECORD — {clients.length} ENGAGEMENTS
        </span>
        <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clients.map((c, i) => (
            <span key={c} className="flex items-baseline gap-2 text-sm text-chalk-2">
              <span className="mono-xs text-vermillion">{String(i + 1).padStart(2, "0")}</span>
              <span className="truncate">{c}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
