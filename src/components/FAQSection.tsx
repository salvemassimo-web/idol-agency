import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    question: "¿Necesito tener muchos seguidores?",
    answer:
      "No necesariamente. Evaluamos imagen, constancia, actitud, estilo, potencial comercial y capacidad de sostener una estrategia.",
  },
  {
    question: "¿Trabajan con modelos nuevas?",
    answer:
      "Sí, si tienen imagen, disposición y mentalidad de negocio. No buscamos experiencia perfecta; buscamos potencial real.",
  },
  {
    question: "¿Tengo que hacer contenido explícito?",
    answer:
      "La dirección depende de tus límites, tu estilo y tu estrategia. No forzamos un tipo de contenido; construimos alrededor de lo que estás dispuesta a sostener.",
  },
  {
    question: "¿Prometen ingresos?",
    answer:
      "No prometemos cifras. Trabajamos estrategia, tráfico, contenido, posicionamiento y optimización. Los resultados dependen del perfil, constancia, mercado y ejecución.",
  },
  {
    question: "¿Cómo sé si encajo?",
    answer:
      "Solicita una revisión de perfil. Si vemos potencial y alineación, te diremos el siguiente paso.",
  },
  {
    question: "¿Es confidencial?",
    answer:
      "Sí. Tratamos cada perfil con discreción y profesionalismo.",
  },
  {
    question: "¿Qué hace Idol Agency exactamente?",
    answer:
      "Ayudamos a estructurar tu imagen, contenido, tráfico y monetización para que tu presencia online funcione como una marca adulta con dirección.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-[#070707] py-24 text-[#f4f1ea] sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-5 text-[#d8c3a5]">FAQ</p>
          <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] tracking-normal sm:text-6xl">
            Preguntas antes de aplicar.
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#d8d0c5]">
            Idol Agency no vende promesas rápidas. Revisamos perfiles y proponemos dirección cuando hay encaje.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="border-t border-white/15">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-white/15 py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b21f2d]">
                <span className="font-display text-2xl leading-tight text-[#f4f1ea]">{faq.question}</span>
                <ChevronDown className="size-5 shrink-0 text-[#c89f91] transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="max-w-2xl pt-5 leading-8 text-[#bfb6ad]">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
