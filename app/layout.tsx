import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Mono, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/lib/content";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Bricolage also serves body at text weights for a cohesive voice.
const body = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

const deva = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-deva",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srinishtha.com"),
  title: {
    default: "Srinishtha Technologies — Precision as devotion",
    template: "%s · Srinishtha",
  },
  description:
    "Srinishtha Technologies is a Hyderabad software studio that engineers systems with the precision of a yantra — custom software, cloud, AI and legacy modernization, built on 100+ years of combined experience across telecom, finance and logistics.",
  keywords: [
    "software studio Hyderabad",
    "custom software",
    "legacy modernization",
    "system architecture",
    "Srinishtha Technologies",
  ],
  openGraph: {
    title: "Srinishtha Technologies — Precision as devotion",
    description:
      "A Hyderabad software studio. Systems engineered with the precision of a yantra — built on 100+ years of combined experience.",
    url: "https://srinishtha.com",
    siteName: "Srinishtha Technologies",
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Srinishtha Technologies" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${deva.variable}`}
    >
      <body className="min-h-screen bg-ink text-chalk antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-vermillion focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: company.legal,
              url: "https://srinishtha.com",
              email: company.email,
              telephone: company.phone,
              foundingDate: company.founded,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${company.address.line1}, ${company.address.line2}`,
                addressLocality: "Hyderabad",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
