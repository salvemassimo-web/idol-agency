import {
  ArrowUpRight,
  CalendarDays,
  Compass,
  Eye,
  Layers3,
  LineChart,
  Sparkles,
  SquareStack,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const benefits: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Perfil más deseable",
    text: "Tu presencia se ve más cuidada, selectiva y alineada con una marca adulta premium.",
    icon: Sparkles,
  },
  {
    title: "Contenido con intención",
    text: "Tu contenido deja de sentirse improvisado y empieza a responder a una dirección.",
    icon: Layers3,
  },
  {
    title: "Imagen coherente",
    text: "Tu estética, tono y narrativa trabajan juntos para construir deseo y reconocimiento.",
    icon: Eye,
  },
  {
    title: "Redes con foco",
    text: "Cada publicación tiene un objetivo dentro del sistema de atención y tráfico.",
    icon: LineChart,
  },
  {
    title: "Calendario real",
    text: "Tu ritmo deja de depender del ánimo y gana consistencia sin perder sensualidad.",
    icon: CalendarDays,
  },
  {
    title: "Venta sin desesperación",
    text: "Tu marca aprende a vender deseo con control, no con ruido ni urgencia barata.",
    icon: Compass,
  },
  {
    title: "Estructura comercial",
    text: "La atención empieza a tener recorrido, lectura y decisiones estratégicas.",
    icon: SquareStack,
  },
  {
    title: "Más claridad",
    text: "Sabes qué publicar, cómo posicionarte y qué optimizar en cada etapa.",
    icon: ArrowUpRight,
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="border-y border-white/10 bg-[#111111] py-24 text-[#f4f1ea] sm:py-32">
      <div className="section-shell">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5 text-[#d8c3a5]">Beneficios</p>
            <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] tracking-normal sm:text-6xl">
              Lo que cambia cuando hay dirección.
            </h2>
          </div>
          <a
            href={site.applicationUrl}
            className="group inline-flex h-12 w-fit items-center justify-center gap-2 border border-[#d8c3a5]/26 px-5 text-sm font-semibold text-[#f4f1ea] transition-colors hover:bg-[#f4f1ea] hover:text-[#070707] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b21f2d]"
            target="_blank"
            rel="noreferrer"
          >
            Aplicar a Idol Agency
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </a>
        </Reveal>

        <div className="mt-14 grid gap-px bg-[#d8c3a5]/18 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.title} delay={index * 0.03} className="min-h-64 bg-[#181818] p-6">
                <Icon className="size-5 text-[#c89f91]" strokeWidth={1.6} aria-hidden />
                <h3 className="mt-9 font-display text-3xl leading-tight">{benefit.title}</h3>
                <p className="mt-4 leading-7 text-[#bfb6ad]">{benefit.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
