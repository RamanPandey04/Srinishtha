import { promises } from "@/lib/content";
import { Fig } from "@/components/ui/marks";
import { Reveal } from "@/components/ui/Reveal";

export function Promises() {
  return (
    <div>
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-7">
          <Fig n="06">Tenets of practice</Fig>
          <h2 className="d-2 font-display mt-6 font-semibold text-balance">
            Three promises we keep.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5" delay={0.1}>
          <p className="text-chalk-2 md:pb-2">
            We&apos;re not just developers — we&apos;re builders of impact. These are the
            commitments behind every engagement.
          </p>
        </Reveal>
      </div>

      <div className="mt-12">
        {promises.map((p, i) => (
          <Reveal key={p.title}>
            <div className="group grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-6">
              <div className="flex items-baseline gap-3 md:col-span-4">
                <span className="mono-label text-vermillion">TENET {String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="md:col-span-8">
                <h3 className="d-3 font-display font-semibold text-chalk">{p.title}</h3>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{p.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </div>
    </div>
  );
}
