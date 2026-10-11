import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Fig } from "./marks";

export function PageHero({
  n,
  eyebrow,
  title,
  lead,
  children,
}: {
  n: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="sheet relative border-b border-line pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-x">
        <Reveal>
          <Fig n={n}>{eyebrow}</Fig>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="d-1 font-display mt-7 max-w-5xl font-semibold text-balance">{title}</h1>
        </Reveal>
        {lead && (
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-chalk-2 text-pretty md:text-xl">
              {lead}
            </p>
          </Reveal>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
