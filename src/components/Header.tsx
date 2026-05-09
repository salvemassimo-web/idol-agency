import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070707]/78 backdrop-blur-xl">
      <div className="section-shell flex h-[4.75rem] items-center justify-between gap-5">
        <a
          href="#inicio"
          className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b21f2d]"
          aria-label="Ir al inicio de Idol Agency"
        >
          <span className="flex size-9 items-center justify-center border border-[#d8c3a5]/35 bg-[#181818] text-[0.68rem] font-semibold text-[#d8c3a5]">
            IA
          </span>
          <span>
            <span className="block font-display text-xl font-semibold tracking-normal text-[#f4f1ea]">
              {site.brandName}
            </span>
            <span className="font-meta text-[0.63rem] text-[#8a837c]">{site.instagramHandle}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="eyebrow text-[#8a837c] transition-colors hover:text-[#f4f1ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b21f2d]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.applicationUrl}
          className="group inline-flex h-11 items-center justify-center gap-2 border border-[#d8c3a5]/28 bg-[#7a1020] px-4 text-sm font-semibold text-[#f4f1ea] transition-colors hover:border-[#d8c3a5]/60 hover:bg-[#b21f2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b21f2d]"
          target="_blank"
          rel="noreferrer"
        >
          Solicitar revisión
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </a>
      </div>
    </header>
  );
}
