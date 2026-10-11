import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";
import { WorkCtaCard } from "@/components/work/WorkCtaCard";
import { Testimonial } from "@/components/home/Testimonial";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Srinishtha Technologies — from scaling Sid's Farm to thousands of concurrent users to crafting digital heritage for Kouno Dolls.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        n="03"
        eyebrow="The index of commissions"
        title={
          <>
            Systems we&apos;ve drawn
            <span className="text-vermillion">.</span>
          </>
        }
        lead="How we've helped businesses transform their digital presence — from concept to launch, and everything in between."
      />

      <Section tone="paper">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08} className={p.accent ? "md:col-span-2" : ""}>
              <ProjectCard project={p} index={i} featured={p.accent} />
            </Reveal>
          ))}
          <Reveal delay={0.08}>
            <WorkCtaCard />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Testimonial />
      </Section>
    </>
  );
}
