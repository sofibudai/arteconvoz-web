export const nav = [
  { id: "quienes-somos", label: "Quiénes somos" },
  { id: "que-hacemos", label: "Qué hacemos" },
  { id: "proyectos", label: "Proyectos" },
  { id: "impacto", label: "Impacto" },
  { id: "donde-estamos", label: "Dónde estamos" },
  { id: "galeria", label: "Galería" },
  { id: "sumate", label: "Sumate" },
  { id: "contacto", label: "Contacto" },
];


export const quienesSomos = {
  intro: [
    "Somos un grupo de personas que, unidas, formamos Arte Con Voz: una fundación dedicada al arte y a la educación.",
    "A través de la integración del arte dentro del ámbito escolar, buscamos que los niños exploren, creen y se desarrollen tanto como alumnos como personas.",
    "Creemos que el arte permite descubrir nuevas maneras de ver la vida, romper paradigmas y encontrar nuevas oportunidades. También creemos que la educación abre puertas y que aprender a convivir implica respetar a las personas, la comunidad y la naturaleza.",
  ],
  mision:
    "Acercar el arte a escuelas públicas para generar espacios de exploración, expresión y aprendizaje.",
  mirada:
    "El arte no es solo una actividad plástica: es una forma de mirar, preguntar, imaginar futuro, hacer lugar a cada voz y construir comunidad.",
  historia:
    "Arte Con Voz trabaja desde 2009 en escuelas públicas, especialmente en escuelas de las islas de Tigre y San Fernando.",
  paraQue:
    "Para ayudar a quienes diseñan las políticas públicas a insertar a los niños en el único camino que creemos posible para vivir mejor: la educación por y en el arte, para abrir un puente entre el Estado y la sociedad y construir un camino de soporte mutuo entre los ciudadanos y el Estado.",
  resultados: [
    "Aumento de la calidad y tiempo de la concentración del grupo.",
    "Aumento en la calidad y originalidad de las producciones.",
    "Mayor control de los impulsos verbales y conductuales.",
    "Incremento en la capacidad de trabajo conjunto.",
    "Mayor goce, entusiasmo y alegría por el trabajo.",
    "Desarrollo de habilidades artísticas.",
    "Aumento en la capacidad de interacción serena y afectiva.",
    "Incremento de las capacidades cognitivas.",
  ],
  equipo: [
    { rol: "Presidente", nombre: "Claudia Iturralde de Atucha" },
    { rol: "Coordinación Ejecutiva", nombre: "Mariana Sánchez de Puente" },
    { rol: "Coordinación de Programas", nombre: "Patricia Page" },
    {
      rol: "Coordinación de Evaluación de Resultados",
      nombre: "Patricia Frese, Verónica Brasesco",
    },
  ],
};

export const queHacemos = {
  intro: [
    "Realizamos talleres y proyectos de arte en escuelas públicas primarias de la Provincia de Buenos Aires.",
    "Elegimos trabajar en la escuela pública porque, en muchos casos, los contenidos de enseñanza artística no llegan efectivamente a los niños por falta de maestros de arte o de espacios específicos para desarrollar la materia.",
    "Nuestros talleres proponen experiencias de creación, juego, exploración sensorial, expresión corporal, trabajo plástico, reutilización de materiales y construcción colectiva.",
    "Los talleres son dictados por maestros artistas especialmente seleccionados y formados para eso, y están aprobados en cada distrito por las inspecciones que dependen del Ministerio de Educación.",
  ],
  bloques: [
    {
      title: "Arte en la escuela",
      description:
        "Llevamos experiencias artísticas al ámbito escolar para complementar y enriquecer la formación de los niños.",
    },
    {
      title: "Expresión y creatividad",
      description:
        "Creamos espacios donde cada niño pueda expresar su mundo interno, sus preguntas y su manera de mirar.",
    },
    {
      title: "Comunidad y territorio",
      description:
        "Trabajamos con escuelas, docentes, artistas y comunidades, fortaleciendo vínculos a través del arte.",
    },
    {
      title: "Naturaleza y cuidado",
      description:
        "Muchos proyectos incorporan la conciencia ambiental, el respeto por el entorno y la reutilización de materiales.",
    },
  ],
};

// Impacto: hay dos fuentes con números distintos (ver docs/brief.md e
// docs/decisiones.md). No mostramos cifras exactas hasta que la fundación
// confirme cuál es la correcta — solo lo que ambas fuentes coinciden.
export const impacto = {
  textoPrudente:
    "Cientos de niños participaron de los talleres de Arte Con Voz desde 2009, en escuelas públicas de las islas de Tigre y San Fernando.",
  hechosConfirmados: [
    { label: "Desde 2009", detail: "trabajando en escuelas públicas" },
    {
      label: "Islas de Tigre y San Fernando",
      detail: "territorio donde se concentró el trabajo",
    },
  ],
  // TODO: reemplazar por cifras reales (niños, escuelas, distritos, maestros
  // artistas) una vez que la fundación confirme cuál de las dos fuentes vale.
};

export const dondeEstamos = {
  texto:
    "Los talleres de Arte Con Voz se realizan en escuelas públicas primarias de la Provincia de Buenos Aires. La fundación ha trabajado especialmente en escuelas de las islas de Tigre y San Fernando, acompañando a comunidades educativas donde el acceso a la educación artística puede ser limitado.",
  escuelas: [
    "Escuela Nº12 — Isla de Tigre",
    "Escuela Nº14 — Islas de San Fernando",
    "Escuela Nº19 — Islas de San Fernando",
    "Escuela Nº20 — Isla San Fernando",
    "Escuela Nº26 — Islas de San Fernando",
  ],
};

export const sumate = {
  texto:
    "Arte Con Voz crece a partir del trabajo conjunto entre artistas, docentes, escuelas, familias, aliados y personas que creen en el poder transformador del arte. Si querés colaborar, proponer una alianza o conocer más sobre nuestros talleres, podés escribirnos.",
  opciones: [
    {
      title: "Soy artista o docente",
      description:
        "Quiero participar de talleres, propuestas pedagógicas o proyectos artísticos con niños.",
    },
    {
      title: "Soy una escuela",
      description:
        "Quiero conocer cómo Arte Con Voz puede desarrollar una propuesta en mi comunidad educativa.",
    },
    {
      title: "Quiero colaborar",
      description:
        "Quiero aportar tiempo, recursos, materiales o acompañamiento para que los proyectos puedan seguir creciendo.",
    },
    {
      title: "Quiero donar",
      description:
        "Quiero ayudar a sostener talleres, materiales, traslados y nuevas experiencias artísticas.",
    },
    {
      title: "Quiero proponer una alianza",
      description:
        "Represento a una institución, empresa, universidad o colectivo cultural y quiero explorar una colaboración.",
    },
  ],
};

export const contacto = {
  texto:
    "¿Querés conocer más sobre Arte Con Voz, colaborar con los talleres o proponer una alianza? Escribinos y conversemos.",
  instagram: {
    handle: "@arteconvoz",
    url: "https://www.instagram.com/arteconvoz",
  },
};

export const footer = {
  nombre: "Arte Con Voz",
  frase: "Arte y educación para que cada niño encuentre su voz.",
};
