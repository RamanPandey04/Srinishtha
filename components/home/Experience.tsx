import { domains, stats } from "@/lib/content";
import { Fig } from "@/components/ui/marks";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <div>
      <div className="grid gap-10 md:grid-cols-12 md:gap-6">
        <Reveal className="md:col-span-6">
          <Fig n="02">The foundation</Fig>
          <h2 className="d-2 font-display mt-6 font-semibold text-balance">
            Experience you can&apos;t shortcut.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-6 md:pt-10" delay={0.1}>
          <p className="text-lg leading-relaxed text-chalk-2 text-pretty">
            Before founding Srinishtha, our team led large-scale solutions that
            impacted real operations and critical infrastructure — across telecom,
            logistics, compliance and enterprise tech. That experience now powers
            everything we build.
          </p>
        </Reveal>
      </div>

      {/* measured figures */}
      <div className="mt-16 grid grid-cols-2 border-y border-line-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`relative px-1 py-8 md:px-6 ${i > 0 ? "md:border-l md:border-line" : ""} ${
              i % 2 === 1 ? "border-l border-line md:border-l" : ""
            }`}
          >
            <span className="absolute -top-[5px] left-1 h-2.5 w-2.5 bg-vermillion md:left-6" />
            <div className="font-display text-5xl font-semibold text-chalk md:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mono-xs mt-3 text-muted">{s.label}</div>
          </div>
        ))}
      </div>

      {/* surveyed domains — plotted on a datum line */}
      <div className="mt-16">
        <div className="mono-label text-faint">Strategic domains — surveyed</div>
        <div className="mt-8 grid border-t border-line-2 md:grid-cols-4">
          {domains.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <div className={`relative px-0 pt-9 pb-2 md:px-6 ${i > 0 ? "md:border-l md:border-line" : ""}`}>
                <span className="absolute -top-[5px] left-0 h-2.5 w-2.5 bg-vermillion md:left-6" />
                <span className="mono-xs text-vermillion">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display mt-3 text-lg font-medium text-chalk md:text-xl">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
