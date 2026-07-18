import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import GalleryBanner from "@/components/GalleryBanner";
import CTA from "@/components/CTA";
import ImpactShowcase from "@/components/ImpactShowcase";
import PullQuoteBanner from "@/components/PullQuoteBanner";
import BrandSeal from "@/components/BrandSeal";
import Reveal from "@/components/Reveal";

import {
  quienesSomos,
  queHacemos,
  impacto,
  dondeEstamos,
  sumate,
  contacto,
} from "@/data/site";
import { projects } from "@/data/projects";
import { galleryPool } from "@/data/gallery";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <HeroSection />

        <div className="px-6 py-10 sm:py-12">
          <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-12">
            <Reveal className="flex h-full items-center justify-center">
              <p className="text-center font-heading text-3xl font-bold text-foreground sm:text-5xl">
                {quienesSomos.intro[0]}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <video
                controls
                preload="metadata"
                className="aspect-[720/742] w-full rounded-3xl bg-foreground/5 object-cover"
              >
                <source src="/videos/cobijo_arteconvoz_web.mp4" type="video/mp4" />
              </video>
            </Reveal>
          </div>
        </div>

        <Section id="quienes-somos" eyebrow="Quiénes somos" title="Arte y educación">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-3 text-foreground-soft">
              {quienesSomos.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-heading font-bold text-brand-blue">
                  Nuestra misión
                </h3>
                <p className="text-foreground-soft">{quienesSomos.mision}</p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-brand-green">
                  Nuestra mirada
                </h3>
                <p className="text-foreground-soft">{quienesSomos.mirada}</p>
              </div>
              <div>
                <h3 className="font-heading font-bold text-brand-orange">
                  Historia
                </h3>
                <p className="text-foreground-soft">{quienesSomos.historia}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-heading text-xl font-bold">Equipo</h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {quienesSomos.equipo.map((persona) => (
                <li
                  key={persona.nombre}
                  className="rounded-xl border border-foreground/10 bg-white/40 p-4"
                >
                  <p className="font-semibold">{persona.nombre}</p>
                  <p className="text-sm text-foreground-soft">{persona.rol}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="font-heading text-xl font-bold">
              Resultados que observamos
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {quienesSomos.resultados.map((r) => (
                <li key={r} className="flex gap-2 text-sm text-foreground-soft">
                  <span className="text-brand-green">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section
          id="que-hacemos"
          eyebrow="Qué hacemos"
          title="Talleres de arte en escuelas públicas"
          className="bg-white/40"
        >
          <div className="flex flex-col gap-3 text-foreground-soft">
            {queHacemos.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {queHacemos.bloques.map((bloque) => (
              <div
                key={bloque.title}
                className="rounded-2xl border border-foreground/10 bg-background p-5"
              >
                <h3 className="font-heading font-bold">{bloque.title}</h3>
                <p className="mt-1 text-sm text-foreground-soft">
                  {bloque.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="proyectos" eyebrow="Proyectos" title="Lo que construimos">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </Section>

        <ImpactShowcase
          eyebrow="Impacto"
          title="Nuestro alcance"
          blocks={[
            {
              title: impacto.hechosConfirmados[0].label,
              description: impacto.hechosConfirmados[0].detail,
              image: "/images/galeria/dsc_0075.jpg",
            },
            {
              title: impacto.hechosConfirmados[1].label,
              description: dondeEstamos.texto,
              image: "/images/galeria/escuela-12-may-jun-jul-2013-36.jpg",
            },
            {
              title: "Lo que observamos en los talleres",
              description: quienesSomos.resultados.slice(0, 4).join(" "),
              image: "/images/galeria/cimg5764.jpg",
            },
          ]}
        />
        <p className="px-6 pt-5 text-center text-sm italic text-foreground-soft">
          {impacto.textoPrudente} Estamos confirmando con la fundación las
          cifras exactas de escuelas, niños y maestros artistas alcanzados.
        </p>

        <PullQuoteBanner text={quienesSomos.mirada} />

        <Section id="donde-estamos" eyebrow="Dónde estamos" title="Territorio">
          <p className="max-w-2xl text-foreground-soft">{dondeEstamos.texto}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {dondeEstamos.escuelas.map((escuela) => (
              <li
                key={escuela}
                className="rounded-lg border border-foreground/10 bg-white/40 px-4 py-2 text-sm"
              >
                {escuela}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="galeria"
          eyebrow="Galería"
          title="Un poco de lo que hacemos"
          className="bg-white/40"
        >
          <GalleryBanner pool={galleryPool} />
        </Section>

        <Section id="sumate" eyebrow="Sumate" title="Formas de participar">
          <p className="max-w-2xl text-foreground-soft">{sumate.texto}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sumate.opciones.map((opcion) => (
              <div
                key={opcion.title}
                className="rounded-2xl border border-foreground/10 bg-white/40 p-5"
              >
                <h3 className="font-heading font-bold">{opcion.title}</h3>
                <p className="mt-1 text-sm text-foreground-soft">
                  {opcion.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <CTA href={contacto.instagram.url}>Escribinos</CTA>
          </div>
        </Section>

        <BrandSeal />

        <Section
          id="contacto"
          eyebrow="Contacto"
          title="Conversemos"
          className="bg-white/40"
        >
          <p className="max-w-2xl text-foreground-soft">{contacto.texto}</p>
          <div className="mt-6">
            <CTA href={contacto.instagram.url}>
              Escribinos por Instagram: {contacto.instagram.handle}
            </CTA>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
