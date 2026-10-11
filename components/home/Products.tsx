import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/content";
import { Fig, Corners } from "@/components/ui/marks";
import { Reveal } from "@/components/ui/Reveal";

export function Products() {
  return (
    <div>
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-7">
          <Fig n="04">In the drawing office</Fig>
          <h2 className="d-2 font-display mt-6 font-semibold text-balance">
            Services, becoming instruments.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5" delay={0.1}>
          <p className="text-chalk-2 md:pb-2">
            We&apos;re converting hard-won delivery experience into platforms that
            scale — for education, careers and independent professionals.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08}>
            <article className="group relative h-full border border-line bg-ink-2 p-7 transition-colors duration-300 hover:bg-ink-3 md:p-8">
              <Corners />
              <div className="flex items-start justify-between gap-4">
                <span className="mono-xs text-faint">INSTR.{String(i + 1).padStart(2, "0")}</span>
                <span className="mono-xs border border-line-2 px-2 py-0.5 text-chalk-2">
                  {p.status.toUpperCase()}
                </span>
              </div>
              <h3 className="font-display mt-6 text-2xl font-semibold text-chalk md:text-3xl">{p.name}</h3>
              <p className="mono-xs mt-2 text-vermillion">{p.kicker}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-line pt-5">
                {p.features.map((f) => (
                  <li key={f} className="mono-xs text-chalk-2">
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <Link href="/products" className="link-mark mono-label text-chalk">
          Full roadmap <ArrowUpRight size={14} />
        </Link>
      </Reveal>
    </div>
  );
}
