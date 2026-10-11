import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company, nav } from "@/lib/content";
import { Nishtha } from "@/components/ui/marks";

export function Footer() {
  return (
    <footer className="sheet relative overflow-hidden border-t border-line-2 bg-ink">
      {/* closing statement */}
      <div className="container-x border-b border-line py-20 md:py-28">
        <div className="mono-label text-vermillion">FIG.07 — COMMISSION</div>
        <Link href="/contact" className="group mt-8 block">
          <h2 className="d-1 font-display max-w-4xl font-semibold text-balance text-chalk">
            Let&apos;s draw your system
            <span className="text-vermillion">.</span>
          </h2>
          <span className="link-mark mono-label mt-8 inline-flex text-chalk">
            Start a commission <ArrowUpRight size={14} />
          </span>
        </Link>
      </div>

      {/* title block */}
      <div className="container-x grid gap-y-10 py-14 md:grid-cols-12 md:gap-x-6">
        <div className="md:col-span-4">
          <div className="font-display text-xl font-semibold text-chalk">Srinishtha Technologies</div>
          <Nishtha className="mt-3 text-2xl text-chalk-2" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{company.promise}</p>
        </div>

        <nav className="flex flex-col gap-2.5 md:col-span-3">
          <span className="mono-label mb-2 text-faint">Index</span>
          {nav.map((item, i) => (
            <Link key={item.href} href={item.href} className="group flex items-center gap-2 text-sm text-chalk-2 transition-colors hover:text-chalk">
              <span className="mono-xs text-vermillion">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="group flex items-center gap-2 text-sm text-chalk-2 transition-colors hover:text-chalk">
            <span className="mono-xs text-vermillion">06</span>
            Contact
          </Link>
        </nav>

        <div className="flex flex-col gap-3 md:col-span-5">
          <span className="mono-label mb-2 text-faint">Drawing office</span>
          <a href={`mailto:${company.email}`} className="link-mark text-sm text-chalk-2 hover:text-chalk">
            {company.email}
          </a>
          <a href={`tel:${company.phoneHref}`} className="link-mark text-sm text-chalk-2 hover:text-chalk">
            {company.phone}
          </a>
          <a href={company.maps} target="_blank" rel="noopener noreferrer" className="mt-1 max-w-xs text-sm leading-relaxed text-muted transition-colors hover:text-chalk-2">
            {company.address.line1}, {company.address.line2}, {company.address.city}
          </a>
        </div>
      </div>

      {/* revision bar */}
      <div className="container-x flex flex-col gap-2 border-t border-line py-5 text-xs text-faint md:flex-row md:items-center md:justify-between">
        <p className="mono-xs">© {new Date().getFullYear()} {company.legal} — ALL RIGHTS RESERVED</p>
        <p className="mono-xs flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 bg-vermillion" />
          REV. A — INDEPENDENT REDESIGN CONCEPT — NOT THE OFFICIAL SITE
        </p>
      </div>
    </footer>
  );
}
