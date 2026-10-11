import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Fig } from "@/components/ui/marks";
import { Cta } from "@/components/ui/Cta";
import { perks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career with purpose at Srinishtha — a team of builders, thinkers and creators working on technology that genuinely makes a difference.",
};

const APPLY_URL = "https://forms.gle/mJrUXSBki62U8MM67";

export default function CareersPage() {
  return (
    <>
      <PageHero
        n="05"
        eyebrow="Join the practice"
        title={
          <>
            Build your career with purpose
            <span className="text-vermillion">.</span>
          </>
        }
        lead="We're a team of builders, thinkers and creators working on technology that genuinely makes a difference. Come grow with us."
      >
        <Cta href={APPLY_URL} external>
          Submit your resume
        </Cta>
      </PageHero>

      <Section>
        <Fig n="05a">Why you&apos;ll love it here</Fig>
        <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal key={p.title}>
              <div className="group flex h-full flex-col bg-ink p-7 transition-colors duration-300 hover:bg-ink-2">
                <span className="mono-xs text-vermillion">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display mt-5 text-xl font-medium text-chalk">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section grid>
        <div className="grid gap-12 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-7">
            <Fig n="05b">Internships & early careers</Fig>
            <h2 className="d-2 font-display mt-6 font-semibold text-balance">Take the first step.</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-chalk-2">
              Join our internship program and build real-world skills alongside a
              passionate team. Work on real projects from day one — and grow with
              mentorship that actually invests in you.
            </p>
            <div className="mt-8">
              <Cta href={APPLY_URL} external>
                Apply for an internship
              </Cta>
            </div>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.1}>
            <figure className="border border-line-2 bg-ink-2 p-8">
              <p className="font-display text-xl font-medium leading-relaxed text-chalk text-pretty">
                &ldquo;Working on real projects from day one made all the difference. The
                experience gave me stronger skills, more confidence — and a lot of
                gratitude.&rdquo;
              </p>
              <figcaption className="mono-label mt-6 text-muted">— From the team</figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="flex flex-col items-start gap-6 border border-line bg-ink-2 p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl font-semibold text-chalk md:text-3xl">
                No role that fits right now?
              </h3>
              <p className="mt-3 text-muted">
                Submit anyway — we&apos;re always looking for passionate, talented people
                and we&apos;ll reach out when something matches your skills.
              </p>
            </div>
            <Cta href={APPLY_URL} external>
              Join the team
            </Cta>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
