import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { ProjectGlyph } from "./ProjectGlyph";
import { Corners } from "@/components/ui/marks";

export function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const Wrapper = project.link ? "a" : "div";
  const wrapperProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};
  const plate = `PL.${String(index + 1).padStart(2, "0")}`;

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative flex flex-col border border-line-ink-2 bg-paper-2/40 transition-colors duration-300 hover:bg-paper-2 ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      <Corners onPaper />

      {/* technical figure */}
      <div className={`relative border-b border-line-ink text-graphite-2 ${featured ? "md:w-1/2 md:border-b-0 md:border-r" : ""}`}>
        <div className="flex items-center justify-between px-5 pt-4">
          <span className="mono-xs text-graphite-2">{plate}</span>
          <span className="mono-xs border border-line-ink-2 px-2 py-0.5 text-graphite">
            {project.status.toUpperCase()}
          </span>
        </div>
        <ProjectGlyph index={index} className={`w-full px-4 ${featured ? "h-48 md:h-64" : "h-40"}`} />
      </div>

      {/* body */}
      <div className={`flex flex-1 flex-col p-6 md:p-7 ${featured ? "md:justify-center" : ""}`}>
        <div className="flex items-center justify-between">
          <span className="mono-xs text-graphite-2">{project.client}</span>
          <span className="mono-xs text-graphite-2">{project.year}</span>
        </div>
        <h3
          className={`font-display mt-4 font-semibold tracking-tight text-graphite text-balance ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-graphite-2">{project.summary}</p>

        {featured && (
          <ul className="mt-6 flex flex-col gap-2">
            {project.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm text-graphite">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-vermillion" />
                {d}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex items-center justify-between border-t border-line-ink pt-4">
          <span className="mono-xs text-graphite-2">{project.category}</span>
          <span className="link-mark mono-label text-graphite">
            {project.link ? "Visit" : "Read"}
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
