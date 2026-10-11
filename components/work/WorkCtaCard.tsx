import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Corners } from "@/components/ui/marks";

/** Fills the trailing grid cell on the light table and invites a commission. */
export function WorkCtaCard() {
  return (
    <Link
      href="/contact"
      className="group relative flex min-h-[18rem] flex-col justify-between border border-dashed border-line-ink-2 bg-paper-2/30 p-7 transition-colors duration-300 hover:bg-paper-2"
    >
      <Corners onPaper />
      <span className="mono-label text-graphite-2">Next plate — yours</span>
      <div>
        <h3 className="font-display text-2xl font-semibold leading-tight text-graphite text-balance">
          A system worth drawing with the same care?
        </h3>
        <span className="link-mark mono-label mt-5 inline-flex text-graphite">
          Commission one <ArrowUpRight size={14} />
        </span>
      </div>
    </Link>
  );
}
