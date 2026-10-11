import { testimonial } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Corners } from "@/components/ui/marks";

export function Testimonial() {
  return (
    <Reveal>
      <figure className="relative mx-auto max-w-4xl border border-line-2 bg-ink-2 p-8 md:p-14">
        <Corners />
        <div className="mono-label flex items-center gap-3 text-vermillion">
          <span className="h-1.5 w-1.5 bg-vermillion" />
          Field note — verified
        </div>
        <blockquote className="font-display mt-8 text-2xl font-medium leading-snug text-chalk text-balance md:text-4xl">
          “{testimonial.quote}”
        </blockquote>
        <figcaption className="mono-label mt-8 flex items-center gap-3 text-muted">
          <span className="text-chalk">{testimonial.author}</span>
          <span className="h-px w-6 bg-line-3" />
          <span>{testimonial.org}</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
