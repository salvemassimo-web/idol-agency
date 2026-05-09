import { ArrowUpRight, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function FinalCTASection() {
  return (
    <section id="aplicar" className="relative overflow-hidden bg-[#111111] py-24 text-[#f4f1ea] sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-[#d8c3a5]/18" aria-hidden />
      <div className="section-shell">
        <Reveal className="relative overflow-hidden border border-[#d8c3a5]/18 bg-[#070707] px-6 py-14 sm:px-10 sm:py-[4.5rem] lg:px-16">
          <div className="absolute inset-x-0 top-0 h-1 bg-[#7a1020]" aria-hidden />
          <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-[#7a1020]/20 blur-3xl" aria-hidden />
          <p className="eyebrow mb-6 text-[#d8c3a5]">Aplicación selectiva</p>
          <h2 className="text-balance font-display max-w-5xl text-5xl font-semibold leading-[0.92] tracking-normal sm:text-6xl lg:text-7xl">
            Si sabes que puedes vender deseo, deja de hacerlo sin dirección.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d8d0c5]">
            Solicita una revisión de perfil. Si encajas con Idol Agency, construiremos el siguiente paso.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.applicationUrl}
              className="group inline-flex h-[3.25rem] items-center justify-center gap-2 bg-[#7a1020] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#b21f2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8c3a5]"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar revisión de perfil
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a
              href={site.instagramUrl}
              className="group inline-flex h-[3.25rem] items-center justify-center gap-2 border border-white/22 px-6 text-sm font-semibold text-[#f4f1ea] transition-colors hover:border-[#f4f1ea] hover:bg-[#f4f1ea] hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8c3a5]"
              target="_blank"
              rel="noreferrer"
            >
              Escribir por Instagram
              <Send className="size-4" aria-hidden />
            </a>
          </div>

          <p className="mt-8 font-meta text-xs text-[#8a837c]">
            Solo mayores de edad. Solo perfiles seleccionados.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
