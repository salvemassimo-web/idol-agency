import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section id="inicio" className="grain relative isolate min-h-[100svh] overflow-hidden bg-[#070707] pt-28 text-[#f4f1ea]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_18%,rgba(178,31,45,0.24),transparent_24rem),linear-gradient(110deg,#070707_0%,#111111_44%,rgba(24,24,24,0.72)_100%)]" aria-hidden />
      <Image
        src="/descargas/idol-hero-model.png"
        alt=""
        width={1672}
        height={941}
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full object-cover object-[72%_center] opacity-[0.56] lg:hidden"
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.5)_0%,rgba(7,7,7,0.78)_48%,#070707_100%)] lg:hidden" aria-hidden />
      <div className="section-shell relative z-10 grid min-h-[calc(100svh-7rem)] items-center gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="relative z-10 max-w-3xl">
          <p className="eyebrow mb-6 text-[#d8c3a5]">OnlyFans Management / creator management adulto</p>
          <h1 className="text-balance font-display max-w-4xl text-5xl font-semibold leading-[0.9] tracking-normal text-[#f4f1ea] sm:text-7xl lg:text-8xl xl:text-9xl">
            El deseo ya existe. Nosotros lo convertimos en sistema.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d8d0c5] sm:text-xl">
            Idol Agency ayuda a creadoras adultas con potencial a transformar su imagen,
            contenido y atención online en un negocio más rentable, organizado y profesional.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.applicationUrl}
              className="group inline-flex h-[3.25rem] items-center justify-center gap-2 bg-[#7a1020] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#b21f2d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b21f2d]"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar revisión de perfil
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a
              href="#metodo"
              className="group inline-flex h-[3.25rem] items-center justify-center gap-2 border border-[#d8c3a5]/24 px-6 text-sm font-semibold text-[#f4f1ea] transition-colors hover:border-[#d8c3a5] hover:bg-[#f4f1ea] hover:text-[#070707] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b21f2d]"
            >
              Ver el método
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl gap-4 border-t border-[#d8c3a5]/18 pt-6 text-sm text-[#8a837c] sm:grid-cols-3">
            <p>Solo mayores de edad. Solo perfiles seleccionados.</p>
            <p>Revisamos cada perfil antes de aceptar una colaboración.</p>
            <p>No prometemos cifras. Construimos sistemas.</p>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <figure className="relative ml-auto w-full">
            <div className="absolute -left-5 top-10 z-10 hidden h-40 w-px bg-[#b21f2d] lg:block" aria-hidden />
            <div className="relative min-h-[22rem] overflow-hidden border border-[#d8c3a5]/16 bg-[#181818] shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:min-h-[34rem] lg:min-h-[42rem]">
              <Image
                src="/descargas/idol-hero-model.png"
                alt="Modelo en ambiente nocturno elegante para Idol Agency"
                width={1672}
                height={941}
                priority
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover object-[76%_center] lg:object-[78%_center]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.62)_0%,rgba(7,7,7,0.14)_42%,rgba(7,7,7,0.3)_100%)]" aria-hidden />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-white/18 pt-4">
                <span className="eyebrow text-[#d8c3a5]">Deseo / tráfico / dinero</span>
                <span className="font-display text-4xl text-[#f4f1ea]">01</span>
              </div>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
