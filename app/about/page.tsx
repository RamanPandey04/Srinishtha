import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Fig, Nishtha } from "@/components/ui/marks";
import { Counter } from "@/components/ui/Counter";
import { journey, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Srinishtha is a team of technologists, entrepreneurs and problem-solvers building meaningful digital experiences — tech with meaning, built on 100+ years of combined experience.",
};

const monogram = (name: string) =>
  name.split(" ").map((w) => w[0]).slice(0, 2).join("");

export default function AboutPage() {
  return (
    <>
      <PageHero
        n="—"
        eyebrow="The practice"
        title={
          <>
            Tech with meaning
            <span className="text-vermillion">.</span>
          </>
        }
        lead="We're not just developers — we're builders of impact. By combining technology, empathy and strategy, we help startups, enterprises and visionaries turn ideas into meaningful digital products."
      >
        <Nishtha className="text-2xl text-chalk-2" />
      </PageHero>

      {/* identity */}
      <Section>
        <div className="grid gap-12 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-7">
            <Fig n="01">Our identity</Fig>
            <p className="font-display mt-8 text-2xl font-medium leading-snug text-chalk text-balance md:text-3xl">
              In a world shaped by digital transformation, there&apos;s an urgent need
              for purposeful, innovative technology. We build products that go beyond
              function — tools that improve lives and empower growth.
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">
              Our core team is a diverse mix of entrepreneurs, graduates from leading
              universities and business schools, and seasoned professionals who have
              held senior roles in multinational corporations.
            </p>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.1}>
            <div className="border-t border-line-2">
              <div className="relative py-8">
                <span className="absolute -top-[5px] left-0 h-2.5 w-2.5 bg-vermillion" />
                <div className="font-display text-6xl font-semibold text-chalk">
                  <Counter value={100} suffix="+" />
                </div>
                <p className="mono-xs mt-3 text-muted">Years of combined experience</p>
              </div>
              <div className="relative border-t border-line py-8">
                <span className="absolute -top-[5px] left-0 h-2.5 w-2.5 bg-vermillion" />
                <div className="font-display text-6xl font-semibold text-chalk">2024</div>
                <p className="mono-xs mt-3 text-muted">Founded in Hyderabad, India</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* journey */}
      <Section grid>
        <Fig n="02">The traverse — our journey</Fig>
        <h2 className="d-2 font-display mt-6 max-w-2xl font-semibold text-balance">
          From a lean team to a growing studio.
        </h2>
        <ol className="mt-12 grid border-t border-line-2 md:grid-cols-4">
          {journey.map((j, i) => (
            <Reveal key={j.phase}>
              <li className={`relative px-0 pt-9 pb-2 md:px-6 ${i > 0 ? "md:border-l md:border-line" : ""}`}>
                <span className="absolute -top-[5px] left-0 h-2.5 w-2.5 bg-vermillion md:left-6" />
                <span className="mono-xs text-vermillion">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display mt-3 text-lg font-medium text-chalk">{j.phase}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{j.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* team */}
      <Section>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <Fig n="03">The people behind the mission</Fig>
            <h2 className="d-2 font-display mt-6 font-semibold text-balance">The builders.</h2>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.1}>
            <p className="text-chalk-2 md:pb-2">
              A team of technologists, entrepreneurs and problem-solvers dedicated to
              building meaningful digital experiences.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <Reveal key={m.name}>
              <article className="flex h-full flex-col bg-ink p-7">
                <div className="flex items-center gap-4">
                  <span className="mono-label flex h-11 w-11 items-center justify-center border border-line-2 text-chalk-2">
                    {monogram(m.name)}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-chalk">{m.name}</h3>
                    <p className="mono-xs mt-1 text-vermillion">{m.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted">{m.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mono-xs mt-6 text-faint">
          Team details drawn from the company&apos;s public site; exact roles to be confirmed with Srinishtha.
        </p>
      </Section>
    </>
  );
}
