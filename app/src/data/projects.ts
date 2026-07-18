export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  years?: string;
  description: string;
  tags: string[];
  // Todavía no hay fotos propias por proyecto. Cuando se carguen en
  // public/images/proyectos/<slug>.jpg, ProjectCard las va a mostrar
  // automáticamente en vez del placeholder de color.
  image: string;
};

// Orden: de más reciente a más antiguo. Solo "Mascaradas" tiene año
// confirmado (2009-2012, el más antiguo de los 8) y "Cobijo" es el más
// reciente (colaboración con RISD, el proyecto más nuevo mencionado en el
// material de la fundación) — por eso van primero y último. Los 6 del
// medio no tienen año confirmado en las fuentes (docs/brief.md,
// data/*.docx), así que se dejaron en su orden relativo original en vez
// de inventar una cronología (ver docs/decisiones.md).
export const projects: Project[] = [
  {
    slug: "cobijo",
    title: "Cobijo",
    description:
      "Proyecto junto a RISD sobre construcción colectiva, intercambio de saberes, cuidado y comunidad. Cobijo es nido, es cuidar, sembrar preguntas, dejar huella e imaginar futuro.",
    tags: ["comunidad", "cuidado", "futuro"],
    image: "/images/proyectos/cobijo.jpg",
  },
  {
    slug: "estrellas",
    title: "Estrellas",
    subtitle: "Jugando con las estrellas",
    description:
      "Una invitación a imaginar, crear y conocer el cielo, las estrellas, las constelaciones y sus misterios.",
    tags: ["imaginación", "cielo", "exploración"],
    image: "/images/proyectos/estrellas.jpg",
  },
  {
    slug: "conquistando-mi-mundo",
    title: "Conquistando mi mundo",
    description:
      "Un proyecto para conocer el planeta Tierra desde el entorno cercano y crear conciencia sobre su cuidado.",
    tags: ["naturaleza", "territorio", "cuidado"],
    image: "/images/proyectos/conquistando-mi-mundo.jpg",
  },
  {
    slug: "circo",
    title: "Circo",
    subtitle: "Armá tu circo",
    description:
      "Juegos, expresión corporal y creación colectiva para reunir, acercar y contener.",
    tags: ["juego", "cuerpo", "comunidad"],
    image: "/images/proyectos/circo.jpg",
  },
  {
    slug: "apropiacion-imaginarios",
    title: "Arte para la apropiación de los imaginarios",
    description:
      "Un trabajo sobre imágenes, relatos y símbolos vinculados al entorno de los niños: escuela, familia, docentes, río, isla y comunidad.",
    tags: ["identidad", "territorio", "cultura"],
    image: "/images/proyectos/apropiacion-imaginarios.jpg",
  },
  {
    slug: "contornear-y-ser-contorneado",
    title: "Contornear y Ser Contorneado",
    description:
      "Una experiencia con siluetas corporales para explorar identidad, autopercepción e imaginación.",
    tags: ["identidad", "cuerpo", "expresión"],
    image: "/images/proyectos/contornear-y-ser-contorneado.jpg",
  },
  {
    slug: "luz-y-oscuridad",
    title: "La luz y la oscuridad",
    description:
      "Experiencias sensoriales de experimentación y juego para mirar desde diferentes ángulos, sin reglas rígidas preestablecidas.",
    tags: ["sensibilidad", "percepción", "juego"],
    image: "/images/proyectos/luz-y-oscuridad.jpg",
  },
  {
    slug: "mascaradas",
    title: "Mascaradas",
    years: "2009 - 2012",
    description:
      "Máscaras, música, movimiento y trabajo plástico para exteriorizar, comunicar y compartir con otros. Alentó la reutilización de material descartable en actividades plásticas y lúdicas.",
    tags: ["expresión", "comunidad", "reutilización"],
    image: "/images/proyectos/mascaradas.jpg",
  },
];
