import { contacto } from "@/data/site";

// Fotos curadas a mano en public/banner/ para el banner principal, con un
// texto breve por imagen inspirado en contenido ya aprobado del brief
// (misión, mirada, historia) — no son datos nuevos.
export type BannerSlide = {
  image: string;
  title: string;
  cta: { label: string; href: string };
  panelColorClassName: string;
  caption?: string;
  // De qué lado va el panel de texto en desktop (default "left"). Usar
  // "right" cuando el contenido importante de la foto está concentrado
  // del lado izquierdo y quedaría tapado por el panel si fuera a la
  // izquierda (ver docs/decisiones.md).
  panelSide?: "left" | "right";
};

export const bannerSlides: BannerSlide[] = [
  {
    image: "/banner/banner3.jpg",
    title: "Cada taller es un espacio para crear, jugar y expresarse.",
    cta: { label: "Conocé nuestros proyectos", href: "#proyectos" },
    // Tinte pastel sólido (no opacidad) para que el panel no se mezcle con
    // la foto de fondo: amarillo de marca mezclado con blanco.
    panelColorClassName: "text-[#FFD93C]",
    caption: "Chicos y chicas trabajando en clase durante un taller.",
  },
  {
    image: "/banner/banner4.jpg",
    title: "Mostramos lo que las manos y la imaginación construyen juntas.",
    cta: { label: "Ver la galería", href: "#galeria" },
    panelColorClassName: "text-[#CCE5ED]",
    caption: "Manos pintadas por los chicos, taller tras taller.",
  },
  {
    image: "/banner/exposicion-obras.jpg",
    title:
      "Desde 2009 llevamos arte a escuelas públicas de islas de Tigre y San Fernando.",
    cta: { label: "Conocer la fundación", href: "#quienes-somos" },
    panelColorClassName: "text-[#CFE1A3]",
    caption: "Chicos mirando una exposición de sus propias obras.",
  },
  {
    image: "/banner/banner1-serigrafia.jpg",
    title: "El arte como forma de mirar, preguntar e imaginar futuro.",
    // Va directo a Instagram (en pestaña nueva, ver BannerCarousel) para que
    // puedan escribir por mensaje privado — es el único canal de contacto
    // que funciona hoy.
    cta: { label: "Sumate a colaborar", href: contacto.instagram.url },
    panelColorClassName: "text-[#D6CCD9]",
    caption: "Un collage propio, mirado de cerca.",
    // El contenido (cara + collage) está todo del lado izquierdo de la
    // foto; con el panel a la izquierda quedaba tapado en desktop.
    panelSide: "right",
  },
  {
    image: "/banner/banner5.jpg",
    title: "Que cada niño explore, cree y encuentre su propia voz.",
    cta: { label: "Conocé nuestros proyectos", href: "#proyectos" },
    panelColorClassName: "text-[#FACBAC]",
    caption: "Chicos armando y pegando su propia obra en el taller.",
  },
];
