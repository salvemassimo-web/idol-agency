import { Send } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] py-12 text-[#f4f1ea]">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <a
            href="#inicio"
            className="font-display text-3xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b21f2d]"
          >
            {site.brandName}
          </a>
          <a
            href={site.instagramUrl}
            className="mt-3 block w-fit font-meta text-sm text-[#d8c3a5] transition-colors hover:text-[#f4f1ea]"
            target="_blank"
            rel="noreferrer"
          >
            {site.instagramHandle}
          </a>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#8a837c]">
            Agencia de creator management para creadoras adultas mayores de edad.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-[#bfb6ad]">
          <a className="transition-colors hover:text-[#d8c3a5]" href="#metodo">
            Método
          </a>
          <a className="transition-colors hover:text-[#d8c3a5]" href="#aplicar">
            Aplicar
          </a>
          <a className="transition-colors hover:text-[#d8c3a5]" href="#privacidad">
            Privacidad
          </a>
          <a className="transition-colors hover:text-[#d8c3a5]" href="#terminos">
            Términos
          </a>
          <a
            className="inline-flex items-center gap-2 transition-colors hover:text-[#d8c3a5]"
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Send className="size-4" aria-hidden />
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
