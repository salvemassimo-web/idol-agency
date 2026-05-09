import { Reveal } from "@/components/Reveal";

const problems = [
  "Publican sin estrategia.",
  "No saben convertir atención en suscripciones.",
  "Su imagen no se siente premium.",
  "No tienen calendario ni embudo.",
  "No saben vender deseo sin quemar su marca.",
  "Dependen de impulsos, suerte o constancia irregular.",
  "No saben qué mostrar, cuándo mostrarlo y cómo usarlo para vender.",
];

export function ProblemSection() {
  return (
    <section className="border-y border-white/10 bg-[#111111] py-24 text-[#f4f1ea] sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-5 text-[#d8c3a5]">El problema</p>
          <h2 className="text-balance font-display text-5xl font-semibold leading-[0.98] tracking-normal sm:text-6xl">
            Tener atención no significa tener un negocio.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="self-end">
          <p className="max-w-2xl text-xl leading-9 text-[#d8d0c5]">
            Muchas creadoras tienen deseo, morbo, seguidores o contenido, pero pierden dinero
            porque no tienen estructura. No más publicar por publicar. No más depender de suerte.
          </p>

          <div className="mt-10 grid gap-0 border-y border-white/14">
            {problems.map((problem, index) => (
              <div key={problem} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-white/10 py-5 last:border-b-0">
                <span className="font-meta text-sm text-[#b21f2d]">0{index + 1}</span>
                <p className="text-lg text-[#f4f1ea]">{problem}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 font-display text-3xl leading-tight text-[#d8c3a5]">
            Si tu contenido genera deseo pero tu cuenta no crece, el problema no es tu cuerpo. Es tu sistema.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
