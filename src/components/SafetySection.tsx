import { LockKeyhole, ShieldCheck, SlidersHorizontal, UserCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const principles = [
  {
    title: "Consentimiento",
    text: "La dirección se construye desde lo que estás dispuesta a sostener, no desde presión vulgar.",
    icon: UserCheck,
  },
  {
    title: "Límites claros",
    text: "No todo lo que vende hoy protege tu imagen mañana. Los límites también son estrategia.",
    icon: SlidersHorizontal,
  },
  {
    title: "Privacidad",
    text: "Tratamos cada perfil con discreción, comunicación clara y profesionalismo desde el primer contacto.",
    icon: LockKeyhole,
  },
  {
    title: "Control de marca",
    text: "El contenido adulto serio necesita decisiones, seguimiento y protección de la marca personal.",
    icon: ShieldCheck,
  },
];

export function SafetySection() {
  return (
    <section className="bg-[#181818] py-24 text-[#f4f1ea] sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-5 text-[#d8c3a5]">Seguridad y límites</p>
          <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] tracking-normal sm:text-6xl">
            Adulto no significa improvisado.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#d8d0c5]">
            Una marca adulta seria necesita límites claros, dirección y control.
            No todo lo que vende hoy protege tu imagen mañana.
          </p>
        </Reveal>

        <div className="grid gap-px bg-[#d8c3a5]/18 sm:grid-cols-2">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Reveal key={principle.title} delay={index * 0.04} className="bg-[#111111] p-7 sm:p-8">
                <Icon className="size-6 text-[#c89f91]" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-8 font-display text-3xl">{principle.title}</h3>
                <p className="mt-4 leading-7 text-[#bfb6ad]">{principle.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
