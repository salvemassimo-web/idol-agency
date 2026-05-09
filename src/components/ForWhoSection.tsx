import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const fit = [
  "Mujeres mayores de edad.",
  "Creadoras adultas y modelos con imagen cuidada.",
  "Chicas cómodas con su sexualidad.",
  "Creadoras que quieren tomarse esto como negocio.",
  "Personas con constancia y ambición comercial.",
  "Influencers pequeñas con potencial.",
  "Modelos que quieren dejar de improvisar.",
];

const notFit = [
  "Menores de edad.",
  "Personas que buscan atajos económicos sin proceso.",
  "Personas sin constancia.",
  "Personas que no quieren cuidar su imagen.",
  "Personas que no aceptan dirección.",
  "Personas que esperan resultados sin trabajo.",
  "Personas que buscan una agencia que haga todo mientras desaparecen.",
];

export function ForWhoSection() {
  return (
    <section id="para-quien-es" className="bg-[#070707] py-24 text-[#f4f1ea] sm:py-32">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5 text-[#d8c3a5]">Selección</p>
          <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] tracking-normal sm:text-6xl">
            No buscamos curiosas. Buscamos creadoras con intención.
          </h2>
          <p className="mt-7 text-lg leading-8 text-[#d8d0c5]">
            Idol Agency elige perfiles con imagen, deseo, ambición y mentalidad de negocio.
            La revisión inicial existe para proteger el encaje, la dirección y la calidad.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="border border-[#d8c3a5]/16 bg-[#111111] p-7 sm:p-9">
            <h3 className="font-display text-4xl">Es para ti si...</h3>
            <div className="mt-8 grid gap-5">
              {fit.map((item) => (
                <p key={item} className="flex gap-4 text-[#e7ded2]">
                  <Check className="mt-1 size-5 shrink-0 text-[#b21f2d]" strokeWidth={1.6} aria-hidden />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="border border-[#d8c3a5]/16 bg-[#181818] p-7 sm:p-9">
            <h3 className="font-display text-4xl">No es para ti si...</h3>
            <div className="mt-8 grid gap-5">
              {notFit.map((item) => (
                <p key={item} className="flex gap-4 text-[#bfb6ad]">
                  <Minus className="mt-1 size-5 shrink-0 text-[#c89f91]" strokeWidth={1.6} aria-hidden />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
