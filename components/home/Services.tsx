import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { Fig } from "@/components/ui/marks";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <div>
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-7">
          <Fig n="01">The practice</Fig>
          <h2 className="d-2 font-display mt-6 font-semibold text-balance">
            Eight disciplines, one standard of precision.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5" delay={0.1}>
          <p className="text-chalk-2 md:pb-2">
            From custom software to AI integration — every engagement is drawn to
            the same exacting tolerance, then built to last.
          </p>
        </Reveal>
      </div>

      {/* schedule header */}
      <div className="mt-14 hidden grid-cols-[3rem_1fr_minmax(0,22rem)] gap-6 border-b border-line-2 pb-3 md:grid">
        <span className="mono-xs text-faint">№</span>
        <span className="mono-xs text-faint">Discipline</span>
        <span className="mono-xs text-faint">Scope</span>
      </div>

      {/* schedule rows */}
      <div>
        {services.map((s) => (
          <div
            key={s.id}
            className="group grid grid-cols-[2rem_1fr] gap-x-5 gap-y-3 border-b border-line py-6 transition-colors duration-300 hover:bg-ink-2 md:grid-cols-[3rem_1fr_minmax(0,22rem)] md:gap-6 md:py-7"
          >
            <span className="mono-label pt-1 text-faint transition-colors group-hover:text-vermillion">
              {s.index}
            </span>
            <div className="md:pr-6">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-xl font-medium tracking-tight text-chalk transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                  {s.title}
                </h3>
                <ArrowUpRight
                  size={16}
                  className="text-faint opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{s.blurb}</p>
            </div>
            <ul className="col-start-2 flex flex-wrap gap-x-4 gap-y-1 md:col-start-3 md:justify-end">
              {s.points.map((p) => (
                <li key={p} className="mono-xs text-chalk-2">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Reveal className="mt-8">
        <Link href="/services" className="link-mark mono-label text-chalk">
          Full capability schedule <ArrowUpRight size={14} />
        </Link>
      </Reveal>
    </div>
  );
}
