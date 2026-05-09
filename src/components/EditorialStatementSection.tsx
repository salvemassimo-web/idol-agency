import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function EditorialStatementSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#070707] py-24 text-[#f4f1ea] sm:py-32">
      <Image
        src="/descargas/idol-nightclub-silhouette.png"
        alt="Silueta nocturna en ambiente de club privado para Idol Agency"
        width={1672}
        height={941}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,7,7,0.92)_0%,rgba(7,7,7,0.74)_42%,rgba(7,7,7,0.38)_100%)]" aria-hidden />
      <div className="section-shell min-h-[34rem]">
        <Reveal className="max-w-4xl py-10">
          <p className="eyebrow mb-6 text-[#d8c3a5]">Declaración privada</p>
          <h2 className="text-balance font-display text-6xl font-semibold leading-[0.9] tracking-normal sm:text-7xl lg:text-8xl">
            El deseo vende. Pero solo la estrategia lo escala.
          </h2>
          <p className="mt-10 max-w-2xl text-lg leading-8 text-[#d8d0c5]">
            Idol Agency existe para creadoras que entienden que su imagen no es solo contenido. Es un activo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
