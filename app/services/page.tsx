import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Cta } from "@/components/ui/Cta";
import { Fig, Corners } from "@/components/ui/marks";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From custom software to AI integration — a full spectrum of technology services built to drive growth, streamline operations and future-proof your business.",
};

const strengths = [
  "100+ years of combined delivery experience",
  "Proven on-time delivery track record",
  "Startup agility with enterprise discipline",
  "Dedicated long-term support & maintenance",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        n="01"
        eyebrow="The capability schedule"
        title={
          <>
            Eight disciplines, one tolerance
            <span className="text-vermillion">.</span>
          </>
        }
        lead="From custom software development to AI integration — every engagement is drawn to the same exacting standard, then built to last."
      >
        <Cta href="/contact">Commission a system</Cta>
      </PageHero>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <Reveal key={s.id}>
              <article className="group relative h-full border border-line bg-ink-2 p-7 transition-colors duration-300 hover:bg-ink-3 md:p-8">
                <Corners />
                <span className="mono-xs text-vermillion">№ {s.index}</span>
                <h2 className="font-display mt-5 text-2xl font-semibold text-chalk md:text-3xl">{s.title}</h2>
                <p className="mt-4 text-muted">{s.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-line pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="mono-xs text-chalk-2">
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section grid>
        <div className="grid gap-12 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-6">
            <Fig n="01a">Why Srinishtha</Fig>
            <h2 className="d-2 font-display mt-6 font-semibold text-balance">
              Startup agility, enterprise discipline.
            </h2>
            <p className="mt-6 leading-relaxed text-chalk-2">
              Whether you&apos;re modernising your back office or launching a new
              platform, we bring strategy, architecture and execution together — at
              any scale.
            </p>
          </Reveal>
          <Reveal className="md:col-span-6" delay={0.1}>
            <ul className="border-t border-line">
              {strengths.map((s, i) => (
                <li key={s} className="flex items-baseline gap-4 border-b border-line py-5">
                  <span className="mono-xs text-vermillion">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-chalk">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
