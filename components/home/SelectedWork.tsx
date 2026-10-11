import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { Fig } from "@/components/ui/marks";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";
import { WorkCtaCard } from "@/components/work/WorkCtaCard";

export function SelectedWork() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <Fig n="03" tone="paper">
            The index of commissions
          </Fig>
          <h2 className="d-2 font-display mt-6 font-semibold text-balance text-graphite">
            Real systems, drawn and delivered.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link href="/work" className="link-mark mono-label text-graphite">
            All case studies <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08} className={p.accent ? "md:col-span-2" : ""}>
            <ProjectCard project={p} index={i} featured={p.accent} />
          </Reveal>
        ))}
        <Reveal delay={0.08}>
          <WorkCtaCard />
        </Reveal>
      </div>
    </div>
  );
}
