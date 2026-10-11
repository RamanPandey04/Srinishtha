# Srinishtha Technologies — Website Redesign Concept

An independent concept redesign of [srinishtha.com](https://srinishtha.com/), built to demonstrate product thinking, design craft, and frontend engineering.

> **Not affiliated with or endorsed by Srinishtha Technologies LLP.** This is a personal interview demonstration. All company information is drawn from the public website and MCA records; no testimonials, clients, metrics, or claims have been fabricated.

## The concept — *निष्ठा · Precision as Devotion*

The company's name, **निष्ठा (nishtha)**, means *devotion / steadfastness* in Sanskrit, and its real clients are temples, dairy farmers, rural schools and teachers — tradition meeting engineering. In Indian tradition, devotion is expressed through the **yantra**: a precise geometric diagram used as an instrument of focus — which is exactly what a system-architecture diagram is.

So the whole site is drawn as a **technical sheet crossed with a yantra**: chalk line-work on deep ink, a single **vermillion (sindoor red)** point, plotted coordinates, leader-line annotations, drawing "title blocks," and the Devanagari निष्ठा as a recurring mark. The homepage centres on a **System Yantra** — a compass-and-straightedge construction (bhupura gates, bezel, concentric rings, the शटकोण interlocking triangles, a flower-of-life rosette, the studio's domains plotted as nodes) that **draws itself once on load** — the single signature animation, meaning *built with precision/devotion.*

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

Production build: `npm run build && npm start`. Node 18.18+ (built on Node 22). No env vars, no database, no backend — it runs entirely as a static frontend.

**Tech:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion (Framer Motion) · lucide-react. All pages are statically pre-rendered (SSG). **Type system:** Bricolage Grotesque (display/body) · Space Mono (labels/coordinates) · Noto Serif Devanagari (the निष्ठा mark).

### Pages
`/` · `/work` · `/services` · `/products` · `/about` · `/careers` · `/contact`

### Structure
```
app/            routes, layout, metadata, sitemap/robots, icon
components/
  home/         Hero + SystemYantra (the signature), section components
  work/         ProjectCard as drawing "plates", technical-figure glyphs
  layout/       Nav (title-block header), Footer, Logo (yantra mark)
  ui/           Section, marks (Fig/Corners/Nishtha), Reveal, Counter, Cta
lib/            content.ts (typed, verified content) · motion.ts
```

---

## 1 · Assessment of the original website

Genuinely good *content* — strong case studies, a real journey, products with vision, a 100+ year experience story — undermined by delivery and presentation:

- **Invisible to the web.** It's a client-rendered Vite SPA; the raw HTML is ~**646 bytes** (just the title) — no meta description, no Open Graph. Broken SEO and link previews, a real cost for a company that sells digital expertise.
- **Generic visual identity.** System fonts + the ubiquitous cyan→purple "tech gradient" — no ownable voice, despite a "devotion / trust / purpose" positioning.
- **Buries its #1 asset.** The 100+ years across telecom (OSS/BSS), finance (Bloomberg), logistics (RFID/ports) and GRC gets no narrative weight.
- **Over-engineered.** Firebase/Firestore on a brochure site, fetching projects client-side for zero user benefit.
- **Flat hierarchy.** Rich material presented without editorial structure.

## 2 · Design direction & reasoning

The brand's meaning (devotion) and its actual clientele (temples, farmers, teachers, run by enterprise veterans) demand *specificity*, not another premium-SaaS template. The yantra↔architecture fusion is a language **no competitor can own**, reads to a CTO as precision/architecture rather than mysticism, and — critically — looks extraordinary as a *static* image. The identity lives in the system itself (line-work + vermillion + Devanagari + title blocks), so it holds up even with the logo removed.

## 3 · Five major improvements

1. **A singular, ownable identity** — the yantra/technical-drawing language replaces the generic gradient template; the page passes the "screenshot with no animation still looks extraordinary" test.
2. **Fully indexable & shareable** — statically-rendered Next.js; every page ships complete HTML with title, meta description, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt` (the home went from a 646-byte shell to fully-rendered content).
3. **The experience story, surfaced** — a measured "datum" section plots the 100+ years and the telecom/finance/logistics/GRC domains as a surveyed baseline.
4. **A memorable spatial device** — the Work section flips to a light "light-table" ground, presenting case studies as framed drawing *plates* with technical figures (no stock photography).
5. **One meaningful motion moment** — the hero yantra constructs itself; everything else is near-static and respects `prefers-reduced-motion`.

## 4 · Key technical decisions

- **Next.js App Router + SSG** — fixes the original's biggest weakness (SEO/shareability), stays trivially deployable and fast, no backend by design.
- **The System Yantra as computed SVG** — geometry is generated from angle/radius math (rounded to fixed precision to avoid hydration drift) and animated with Motion's `pathLength`; a deterministic, maintainable "signature" with no asset pipeline.
- **Tailwind v4 tokenised theme** — ink/chalk/vermillion, the three fonts and motion easings are defined once in `@theme`, so the drafting language stays consistent everywhere.
- **Typed content model (`lib/content.ts`)** — all verified copy in one module, cleanly separated from presentation; also where the "no fabricated content" rule is enforced.
- **No imagery** — technical-figure SVGs (`ProjectGlyph`) stand in for case-study covers, on-brand and weightless.

## 5 · What makes this fundamentally different from the rejected version

| | Rejected version | This version |
|---|---|---|
| Premise | "warm editorial premium studio" | *precision as devotion* — a yantra drawn as a technical sheet |
| Ground | cream paper, soft | deep ink, drafting grid, a light-table flip |
| Type | Fraunces + Inter (common editorial pairing) | Bricolage Grotesque + Space Mono + **Devanagari** |
| Signature | none (scroll reveals only) | a self-constructing **System Yantra** |
| Identity w/o logo | reads as "a nice tech template" | the line-work system is itself recognisable |
| Composition | eyebrow → centred heading → cards, repeated | plotted coordinates, leader lines, title blocks, surveyed datums, drawing plates |

The first was a *refinement* of a familiar genre. This is a *different genre*, specific to this company.

## 6 · 60–90 second walkthrough script

> "This is a concept redesign for Srinishtha — a working Next.js app, not the live site.
>
> Their name, निष्ठा, means *devotion* in Sanskrit, and their real clients are temples, dairy farmers, rural schools. In Indian tradition devotion is drawn as a *yantra* — a precise geometric diagram — which is basically what a system architecture diagram is. So I built the whole site as a technical drawing crossed with a yantra.
>
> The hero is a **System Yantra** that draws itself once, like a compass construction — their eight disciplines plotted as nodes, their experience domains on the vermillion axes, निष्ठा at the dead centre. That's the one animation on the site.
>
> *(scroll)* Everything's one drafting language — a capability *schedule*, the 100-plus years surfaced as a measured *datum*, and the work section flips to a light table where each case study is a framed *plate* with a real technical figure. It's monochrome chalk-on-ink with a single vermillion point throughout.
>
> The test I held it to: a static screenshot, no animation, should look extraordinary and be unmistakable even without the logo — I think it passes. And underneath it's just static Next.js — fully responsive, accessible, SEO-complete, `npm run dev`, no backend. Every client and number here is their real, verified content."

---

*Built by Juhi as an independent demonstration. Company content © Srinishtha Technologies LLP.*
