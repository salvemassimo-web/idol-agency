import Image from "next/image";
import {
  CalendarCheck,
  ChartNoAxesCombined,
  PanelsTopLeft,
  ScanSearch,
  Sparkles,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const pillars: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Dirección visual",
    text: "Una imagen más coherente, deseable y reconocible desde el primer vistazo.",
    icon: Sparkles,
  },
  {
    title: "Contenido adulto",
    text: "Estrategia para provocar con intención, sostener límites y vender sin improvisar.",
    icon: PanelsTopLeft,
  },
  {
    title: "Tráfico desde redes",
    text: "Distribución pensada para atraer atención cualificada hacia el perfil.",
    icon: Target,
  },
  {
    title: "Optimización de perfil",
    text: "Bio, estética, narrativa y recorrido revisados para convertir mejor.",
    icon: ScanSearch,
  },
  {
    title: "Calendario",
    text: "Ritmo de contenido para dejar de depender del ánimo o del impulso.",
    icon: CalendarCheck,
  },
  {
    title: "Monetización",
    text: "Seguimiento, lectura de datos y ajustes para ordenar la atención comercial.",
    icon: ChartNoAxesCombined,
  },
];

export function SolutionSection() {
  return (
    <section className="bg-[#070707] py-24 text-[#f4f1ea] sm:py-32">
      <div className="section-shell">
        <Reveal className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5 text-[#c89f91]">La solución</p>
            <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] tracking-normal sm:text-6xl">
              Idol Agency convierte deseo en dirección.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#d8d0c5] lg:justify-self-end">
            No vendemos fantasías. Construimos estructura alrededor de tu imagen:
            contenido, tráfico, conversión y posicionamiento bajo una misma estrategia.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <Reveal className="relative min-h-[24rem] overflow-hidden border border-white/12 bg-[#181818]">
            <Image
              src="/descargas/idol-lifestyle-detail.png"
              alt="Detalle lifestyle nocturno para estrategia de contenido adulto premium"
              width={1672}
              height={941}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.08),rgba(7,7,7,0.78))]" aria-hidden />
            <p className="absolute bottom-6 left-6 right-6 font-display text-3xl leading-tight text-[#f4f1ea]">
              Sexo, imagen y dinero necesitan dirección.
            </p>
          </Reveal>

          <div className="grid border-t border-white/14 sm:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal
                  key={pillar.title}
                  delay={index * 0.04}
                  className="border-b border-white/14 py-7 sm:px-7 sm:[&:nth-child(odd)]:border-r"
                >
                  <Icon className="mb-7 size-6 text-[#c89f91]" strokeWidth={1.5} aria-hidden />
                  <h3 className="font-display text-3xl text-white">{pillar.title}</h3>
                  <p className="mt-4 leading-7 text-[#bfb6ad]">{pillar.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
