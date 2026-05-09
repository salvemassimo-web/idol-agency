import { Reveal } from "@/components/Reveal";

const steps = [
  {
    label: "Diagnóstico",
    text: "Analizamos tu imagen, redes, contenido, nivel de exposición, potencial comercial y estilo.",
  },
  {
    label: "Posicionamiento",
    text: "Definimos cómo debe percibirse tu marca: más premium, más directa, más sensual, más nicho o más masiva.",
  },
  {
    label: "Tráfico",
    text: "Diseñamos contenido y distribución para atraer atención desde redes sociales.",
  },
  {
    label: "Conversión",
    text: "Optimizamos perfil, narrativa, calendario y sistema para convertir mejor la atención.",
  },
];

export function MethodSection() {
  return (
    <section id="metodo" className="bg-[#181818] py-24 text-[#f4f1ea] sm:py-32">
      <div className="section-shell">
        <Reveal className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5 text-[#d8c3a5]">Cómo trabajamos</p>
            <h2 className="text-balance font-display text-5xl font-semibold leading-none tracking-normal sm:text-6xl">
              Un proceso privado para dejar de improvisar.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#d8d0c5] lg:justify-self-end">
            No se trata de enseñar más. Se trata de saber qué mostrar, cuándo mostrarlo
            y cómo usarlo para vender sin perder control de tu marca.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px bg-[#d8c3a5]/18 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.label} delay={index * 0.05} className="min-h-72 bg-[#111111] p-7 sm:p-8">
              <span className="font-meta text-sm text-[#b21f2d]">0{index + 1}</span>
              <h3 className="mt-10 font-display text-4xl text-[#f4f1ea]">{step.label}</h3>
              <p className="mt-5 leading-7 text-[#bfb6ad]">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
