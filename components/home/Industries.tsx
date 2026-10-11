import {
  Sprout,
  GraduationCap,
  UtensilsCrossed,
  Flame,
  ShoppingBag,
  Palette,
  Compass,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/lib/content";
import { Fig } from "@/components/ui/marks";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<string, LucideIcon> = {
  Sprout, GraduationCap, UtensilsCrossed, Flame, ShoppingBag, Palette, Compass, Landmark,
};

export function Industries() {
  return (
    <div>
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-7">
          <Fig n="05">Field of practice</Fig>
          <h2 className="d-2 font-display mt-6 font-semibold text-balance">
            From dairy farms to enterprise.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5" delay={0.1}>
          <p className="text-chalk-2 md:pb-2">
            We meet users where they are — temples and teachers, farmers and
            founders. Every sector has unique terrain; we survey it before we build.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, i) => {
          const Icon = icons[ind.icon];
          return (
            <Reveal key={ind.name} delay={(i % 4) * 0.05}>
              <div className="group flex h-full flex-col bg-ink p-6 transition-colors duration-300 hover:bg-ink-2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-line-2 text-chalk transition-colors duration-300 group-hover:border-vermillion group-hover:text-vermillion">
                    {Icon ? <Icon size={18} strokeWidth={1.5} /> : null}
                  </span>
                  <span className="mono-xs text-faint">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display mt-6 text-lg font-medium text-chalk">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{ind.note}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
