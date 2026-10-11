import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Srinishtha is converting services into products — Adhyaapak, EduERP, a career accelerator and a platform factory for independent professionals.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        n="04"
        eyebrow="In the drawing office"
        title={
          <>
            Services, becoming instruments
            <span className="text-vermillion">.</span>
          </>
        }
        lead="We're converting hard-won delivery experience into platforms that scale — for education, careers and independent professionals. Innovation in progress: built with purpose, designed for scale."
      />

      <Section>
        <div className="border-t border-line">
          {products.map((p, i) => (
            <Reveal key={p.name}>
              <article className="grid gap-6 border-b border-line py-12 md:grid-cols-12 md:gap-6 md:py-16">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="mono-xs text-faint">INSTR.{String(i + 1).padStart(2, "0")}</span>
                    <span className="mono-xs border border-line-2 px-2 py-0.5 text-chalk-2">
                      {p.status.toUpperCase()}
                    </span>
                  </div>
                  <h2 className="font-display mt-6 text-4xl font-semibold text-chalk md:text-5xl">{p.name}</h2>
                  <p className="mono-xs mt-3 text-vermillion">{p.kicker}</p>
                </div>
                <div className="md:col-span-8 md:pl-6">
                  <p className="text-lg leading-relaxed text-chalk-2 text-pretty">{p.description}</p>
                  <ul className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
                    {p.features.map((f) => (
                      <li key={f} className="mono-xs bg-ink p-4 text-chalk-2">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="relative flex flex-col items-start gap-5 border border-line bg-ink-2 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h3 className="font-display text-2xl font-semibold text-chalk">More instruments on the board</h3>
              <p className="mt-2 text-muted">We&apos;re always building. Stay tuned for the next chapter.</p>
            </div>
            <a href="/careers" className="link-mark mono-label text-chalk">
              Build them with us <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
