import { footer, contacto } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-foreground/10 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-lg font-bold">{footer.nombre}</p>
          <p className="text-sm text-foreground-soft">{footer.frase}</p>
        </div>

        <div className="flex flex-col gap-1 text-sm text-foreground-soft sm:text-right">
          <a
            href={contacto.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-red"
          >
            {contacto.instagram.handle}
          </a>
          <span>© {year} Arte Con Voz</span>
        </div>
      </div>
    </footer>
  );
}
