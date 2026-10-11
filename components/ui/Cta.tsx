import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "solid" | "ghost" | "solid-paper";

export function Cta({
  href,
  children,
  variant = "solid",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
}) {
  const cls =
    variant === "ghost"
      ? "link-mark mono-label text-chalk"
      : variant === "solid-paper"
      ? "group inline-flex items-center gap-2.5 bg-graphite px-6 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-vermillion hover:text-white"
      : "group inline-flex items-center gap-2.5 bg-chalk px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-vermillion hover:text-white";

  const inner =
    variant === "ghost" ? (
      <>
        {children}
        <ArrowUpRight size={14} />
      </>
    ) : (
      <>
        <span className="h-1.5 w-1.5 bg-vermillion transition-colors group-hover:bg-white" />
        {children}
      </>
    );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
