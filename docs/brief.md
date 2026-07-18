# Brief para sitio web — Fundación Arte Con Voz

## 1. Objetivo del sitio

Crear una página web institucional para **Arte Con Voz**, una fundación dedicada al arte y la educación, que trabaja integrando experiencias artísticas dentro del ámbito escolar.

El sitio debe servir para:

- Explicar claramente quiénes son y qué hacen.
- Mostrar el impacto del trabajo realizado desde 2009.
- Presentar los proyectos y talleres desarrollados en escuelas.
- Generar confianza institucional.
- Invitar a personas, artistas, docentes, escuelas, aliados y donantes a sumarse.
- Usar el material visual disponible en Instagram como recurso principal de comunicación.

La página debe ser clara, sensible, visual y comunitaria. No debe sentirse demasiado corporativa ni demasiado compleja.

---

## 2. Idea central de comunicación

**Arte Con Voz acerca el arte a escuelas públicas para que los niños exploren, creen y encuentren nuevas formas de expresarse.**

La fundación entiende el arte como una herramienta de educación, expresión, comunidad y transformación.

Conceptos clave:

- Arte como forma de expresión.
- Educación como apertura de oportunidades.
- Infancia, escuela pública y comunidad.
- Creatividad, exploración y juego.
- Construcción colectiva.
- Respeto por las personas y la naturaleza.
- Territorio: escuelas públicas, especialmente en islas de Tigre y San Fernando.

---

## 3. Referencia conceptual

La web de referencia es **Free Arts NYC**: https://www.freeartsnyc.org/

**Actualización 2026-07-09:** decisión revisada — el usuario pidió copiar el formato de secciones, tamaños e imágenes de Free Arts NYC casi literalmente, cambiando solo logo, tipografía y colores por los de Arte Con Voz. Ver `docs/decisiones.md`, "Se copia la estructura visual de Free Arts NYC".

Free Arts NYC organiza su contenido en bloques como:

- About / Acerca de
- Programs / Programas
- Get Involved / Participación
- Community / Comunidad
- Gallery / Galería
- Donate / Donaciones

Para Arte Con Voz conviene una estructura más simple y directa, idealmente como una **landing page one-page** al principio.

---

## 4. Tipo de sitio recomendado

### Recomendación principal

Hacer una web **one-page institucional**, con navegación por anclas.

Motivo:

- Hay poca información disponible todavía.
- El material más fuerte parece estar en Instagram.
- Conviene priorizar claridad, emoción e impacto antes que muchas páginas vacías.
- Más adelante puede crecer hacia una web multipágina.

### Menú sugerido para la primera versión

- Inicio
- Quiénes somos
- Qué hacemos
- Proyectos
- Impacto
- Sumate
- Contacto

### Posible estructura futura, si la fundación genera más contenido

- Inicio
- Fundación
- Programas
- Comunidad
- Galería
- Donar
- Contacto

---

## 5. Estructura recomendada de la página

# Inicio / Hero

## Objetivo de la sección

Explicar en pocos segundos qué hace Arte Con Voz.

## Contenido sugerido

### Título principal

**Arte y educación para que cada niño encuentre su voz**

### Bajada

Arte Con Voz integra experiencias artísticas en escuelas públicas, creando espacios donde los niños pueden explorar, expresarse, imaginar y construir comunidad.

### Botones / CTA

- Conocé nuestros proyectos
- Sumate a colaborar

### Imagen sugerida

Usar una imagen fuerte de Instagram: niños trabajando, obras realizadas, taller en escuela o escena comunitaria.

**Actualización 2026-07-09:** este hero de una sola imagen/título quedó reemplazado por un banner tipo carrusel (varias fotos rotando, cada una con su propio texto corto y botón), calcado del formato de freeartsnyc.org a pedido del usuario. Ver `app/src/data/banner.ts`, `docs/fases.md` (Fase 3) y `docs/decisiones.md`.

---

# Quiénes somos

## Objetivo de la sección

Presentar la identidad de la fundación de manera breve y clara.

## Texto base

Somos un grupo de personas que, unidas, formamos Arte Con Voz: una fundación dedicada al arte y a la educación.

A través de la integración del arte dentro del ámbito escolar, buscamos que los niños exploren, creen y se desarrollen tanto como alumnos como personas.

Creemos que el arte permite descubrir nuevas maneras de ver la vida, romper paradigmas y encontrar nuevas oportunidades. También creemos que la educación abre puertas y que aprender a convivir implica respetar a las personas, la comunidad y la naturaleza.

## Subsecciones posibles

### Nuestra misión

Acercar el arte a escuelas públicas para generar espacios de exploración, expresión y aprendizaje.

### Nuestra mirada

El arte no es solo una actividad plástica: es una forma de mirar, preguntar, imaginar futuro, hacer lugar a cada voz y construir comunidad.

### Historia

Arte Con Voz trabaja desde 2009 en escuelas públicas, especialmente en escuelas de las islas de Tigre y San Fernando.

### Equipo

Fuente: `data/Arte con Voz. wordpress.docx` (actualizado 2026-07-09).

- **Presidente:** Claudia Iturralde de Atucha.
- **Coordinación Ejecutiva:** Mariana Sánchez de Puente.
- **Coordinación de Programas:** Patricia Page.
- **Coordinación de Evaluación de Resultados:** Patricia Frese, Verónica Brasesco.

`TODO: faltan fotos del equipo — confirmar con la fundación si quieren mostrar esta sección con fotos o solo texto en la v1.`

### Para qué lo hacemos

Para ayudar a quienes diseñan las políticas públicas a insertar a los niños en el único camino que creemos posible para vivir mejor: la educación por y en el arte, para abrir un puente entre el Estado y la sociedad y construir un camino de soporte mutuo entre los ciudadanos y el Estado.

### A quiénes dirigimos nuestro accionar

A toda la sociedad, a través de formar formadores, dejar cultura instalada y promover la generación de oficios. Ponemos especial énfasis en niños de entre 6 y 12 años, en los maestros artistas que imparten los talleres y en los maestros curriculares a cargo del grupo.

### Resultados observados (fuente: la fundación)

- Aumento de la calidad y tiempo de la concentración del grupo.
- Aumento en la calidad y originalidad de las producciones.
- Mayor control de los impulsos verbales y conductuales.
- Incremento en la capacidad de trabajo conjunto.
- Mayor goce, entusiasmo y alegría por el trabajo.
- Desarrollo de habilidades artísticas.
- Aumento en la capacidad de interacción serena y afectiva.
- Incremento de las capacidades cognitivas.

---

# Qué hacemos

## Objetivo de la sección

Explicar concretamente la actividad de la fundación.

## Texto base

Realizamos talleres y proyectos de arte en escuelas públicas primarias de la Provincia de Buenos Aires.

Elegimos trabajar en la escuela pública porque, en muchos casos, los contenidos de enseñanza artística no llegan efectivamente a los niños por falta de maestros de arte o de espacios específicos para desarrollar la materia.

Nuestros talleres proponen experiencias de creación, juego, exploración sensorial, expresión corporal, trabajo plástico, reutilización de materiales y construcción colectiva.

Los talleres son dictados por maestros artistas especialmente seleccionados y formados para eso, y están aprobados en cada distrito por las inspecciones que dependen del Ministerio de Educación. Nuestros miembros participantes son profesores de arte, graduados de universidades o institutos, estudiantes y artistas que producen su propia obra. (Fuente: `data/Arte con Voz. wordpress.docx`.)

## Ideas para mostrar como tarjetas

### Arte en la escuela

Llevamos experiencias artísticas al ámbito escolar para complementar y enriquecer la formación de los niños.

### Expresión y creatividad

Creamos espacios donde cada niño pueda expresar su mundo interno, sus preguntas y su manera de mirar.

### Comunidad y territorio

Trabajamos con escuelas, docentes, artistas y comunidades, fortaleciendo vínculos a través del arte.

### Naturaleza y cuidado

Muchos proyectos incorporan la conciencia ambiental, el respeto por el entorno y la reutilización de materiales.

---

# Proyectos

## Objetivo de la sección

Mostrar los proyectos desarrollados por la fundación como evidencia concreta de su trabajo.

Se recomienda presentar cada proyecto como una tarjeta visual con:

- Nombre del proyecto.
- Imagen.
- Breve descripción.
- Objetivo.

## Proyectos relevados

### Mascaradas

Proyecto desarrollado entre 2009 y 2012.

Objetivo:

Promover el vínculo entre la comunidad a través del trabajo plástico, el juego con máscaras, la música y el movimiento.

El proyecto buscó potenciar la capacidad de exteriorizar, comunicar y compartir con otros. También alentó la reutilización de material descartable en actividades plásticas y lúdicas.

### Estrellas — Jugando con las estrellas

Objetivo:

Imaginar, crear y conocer el cielo y sus misterios. Explorar preguntas sobre las estrellas, las constelaciones, el universo y aquello que no siempre podemos tocar o explicar.

### Conquistando mi mundo

Objetivo:

Invitar a los niños a conocer más sobre nuestro planeta, empezando por los lugares cercanos que forman parte de su vida cotidiana.

El proyecto busca crear conciencia sobre el cuidado y la protección de los seres que habitan la Tierra y los recursos que nos brinda.

### Circo — Armá tu circo

Objetivo:

Conocer nuevos estilos de creación, inspirar a los niños a aprender y divertirse a través de juegos, expresión corporal y experiencias compartidas.

El circo funciona como un espacio simbólico que agrupa, reúne, acerca y contiene.

### Arte para la apropiación de los imaginarios

Objetivo:

Hacer visibles las representaciones, creencias y expresiones que emergen en la cultura de los niños y su entorno.

El proyecto busca que los chicos puedan apropiarse de imágenes, relatos y símbolos vinculados a su escuela, familia, profesores, río, isla, bote y comunidad.

### Contornear y Ser Contorneado

Objetivo:

Que los niños se sientan creadores de formas reales o imaginarias, expresando sentimientos, vivencias y formas de ver el mundo.

La actividad trabaja con siluetas corporales, identidad, autopercepción e imaginación sobre quién soy y quién puedo ser.

### La luz y la oscuridad

Objetivo:

Indagar desde experiencias sensoriales, experimentación y juego. Permitir a los chicos mirar desde diferentes ángulos, sin reglas rígidas preestablecidas.

### Cobijo

Proyecto desarrollado en conjunto entre Arte Con Voz y RISD.

Objetivo:

Reflexionar sobre el valor de la construcción en conjunto, el intercambio de saberes y el hacer en comunidad.

Ideas asociadas:

- Cobijo es nido.
- Es una forma de cuidar.
- De sembrar preguntas.
- De dejar huella.
- El arte como forma de mirar de cerca.
- Hacer lugar a cada voz.
- Imaginar futuro.
- Hacer comunidad.

---

# Impacto

## Objetivo de la sección

Mostrar con datos concretos el alcance de Arte Con Voz.

## Datos disponibles — dos fuentes con números distintos

**Fuente A — Instagram / material de redes** (`data/ARTE CON VOZ. Concepto.docx`):

- 2 distritos escolares.
- 3 circunscripciones de islas.
- Más de 15 escuelas.
- Más de 20 maestros artistas.
- Más de 1000 niños.

**Fuente B — sitio Wordpress de la fundación** (`data/Arte con Voz. wordpress.docx`, texto de la página "¿Dónde estamos?"):

- 3 distritos escolares.
- 16 escuelas.
- Más de 500 niños (desde 2009 "y hasta la fecha").

Ambas fuentes coinciden en: desde 2009, escuelas de islas de Tigre y San Fernando, mismas 5 escuelas nombradas (Nº12, 14, 19, 20, 26).

## Atención: dato a confirmar

Las dos fuentes son del propio material de la fundación pero no coinciden ni en niños, ni en escuelas, ni en distritos. No se puede saber cuál es la más actual sin preguntar. **No usar ningún número de impacto en la web hasta que la fundación confirme cuál es el correcto** — mientras tanto, mostrar la versión prudente sin cifras exactas (ver más abajo) o dejar el bloque con `TODO`.

## Forma sugerida de mostrarlo

Usar una franja con números grandes:

**Desde 2009**  
trabajando en escuelas públicas

**+15 escuelas**  
de islas de Tigre y San Fernando

**+20 maestros artistas**  
participaron de los proyectos

**+1000 niños**  
alcanzados por los talleres

Si el dato no está confirmado, usar una versión más prudente:

**Cientos de niños** participaron de los talleres de Arte Con Voz desde 2009.

---

# Dónde estamos

## Objetivo de la sección

Ubicar territorialmente el trabajo de la fundación.

## Texto base

Los talleres de Arte Con Voz se realizan en escuelas públicas primarias de la Provincia de Buenos Aires.

La fundación ha trabajado especialmente en escuelas de las islas de Tigre y San Fernando, acompañando a comunidades educativas donde el acceso a la educación artística puede ser limitado.

## Escuelas mencionadas en el material

- Escuela Nº12 — Isla de Tigre
- Escuela Nº14 — Islas de San Fernando
- Escuela Nº19 — Islas de San Fernando
- Escuela Nº20 — Isla San Fernando
- Escuela Nº26 — Islas de San Fernando

---

# Comunidad / Sumate

## Objetivo de la sección

Crear una vía clara para que otras personas o instituciones puedan participar.

Esta sección reemplaza la lógica de “Get Involved” de Free Arts NYC, pero adaptada a una escala más simple.

## Texto base

Arte Con Voz crece a partir del trabajo conjunto entre artistas, docentes, escuelas, familias, aliados y personas que creen en el poder transformador del arte.

Si querés colaborar, proponer una alianza o conocer más sobre nuestros talleres, podés escribirnos.

## Opciones de participación

### Soy artista o docente

Quiero participar de talleres, propuestas pedagógicas o proyectos artísticos con niños.

### Soy una escuela

Quiero conocer cómo Arte Con Voz puede desarrollar una propuesta en mi comunidad educativa.

### Quiero colaborar

Quiero aportar tiempo, recursos, materiales o acompañamiento para que los proyectos puedan seguir creciendo.

### Quiero donar

Quiero ayudar a sostener talleres, materiales, traslados y nuevas experiencias artísticas.

### Quiero proponer una alianza

Represento a una institución, empresa, universidad o colectivo cultural y quiero explorar una colaboración.

## CTA sugeridos

- Quiero sumarme
- Escribinos
- Quiero colaborar
- Proponer una alianza

---

# Galería / Registro visual

## Objetivo de la sección

Usar las imágenes de Instagram para mostrar el trabajo real de la fundación.

No se recomienda hacer una galería de venta como Free Arts NYC, salvo que la fundación tenga una estrategia concreta de venta de obras o recaudación.

## Categorías posibles

- Talleres en escuelas
- Obras de los chicos
- Procesos creativos
- Comunidad
- Proyectos especiales
- Territorio

## Recomendación visual

La galería debe mostrar proceso, manos, materiales, niños creando, obras producidas y escenas de comunidad. Evitar que parezca una galería de arte formal; debe sentirse viva, educativa y cercana.

---

# Contacto

## Objetivo de la sección

Facilitar el contacto directo.

## Elementos necesarios (decisión final, ver `docs/decisiones.md`)

- Instagram: [@arteconvoz](https://www.instagram.com/arteconvoz) — www.instagram.com/arteconvoz. Es el único canal de contacto del sitio.
- ~~Mail.~~ No aplica — no hay mail confirmado ni backend para recibir mensajes, así que no se muestra ninguno.
- ~~Formulario simple.~~ Se armó un formulario de maqueta y después se sacó: no había a dónde enviar el mensaje (sin backend), así que quedaba algo que parecía funcionar pero no hacía nada. Se reemplazó por un botón directo a Instagram (abre en pestaña nueva, la web nunca se cierra).
- ~~Botón para colaborar / Botón para escuelas o instituciones interesadas.~~ Simplificado a un solo botón que lleva a Instagram — es el mismo canal para cualquier motivo de contacto.

## Texto sugerido

¿Querés conocer más sobre Arte Con Voz, colaborar con los talleres o proponer una alianza?

Escribinos y conversemos.

---

## 6. Arquitectura de navegación sugerida

### Versión one-page

```text
Inicio
Quiénes somos
Qué hacemos
Proyectos
Impacto
Dónde estamos
Galería
Sumate
Contacto
```

### Header

El header debe ser simple y fijo o sticky:

```text
Arte Con Voz | Quiénes somos | Proyectos | Impacto | Sumate | Contacto
```

### Footer

El footer puede incluir:

- Logo / nombre Arte Con Voz.
- Frase corta institucional.
- Instagram.
- Email.
- Año actual.

---

## 7. Tono de comunicación

El tono debe ser:

- Claro.
- Sensible.
- Humano.
- Educativo.
- Comunitario.
- Inspirador, pero no exagerado.
- Institucional, pero no frío.

Evitar:

- Lenguaje demasiado corporativo.
- Frases genéricas de ONG sin sustancia.
- Promesas no comprobadas.
- Datos de impacto no confirmados.
- Secciones vacías como reportes anuales, sponsors o equipo si no hay material real.

---

## 8. Dirección visual sugerida

La identidad visual debería apoyarse en:

- Blanco o fondos claros para dar aire.
- Paleta e identidad oficial de marca: ver [`diseno/manual_de_marca_arteconvoz.md`](../diseno/manual_de_marca_arteconvoz.md) (hecho por la fundación) — fondo marfil cálido, texto azul petróleo oscuro, acentos rojo/amarillo/naranja/verde/azul/violeta tomados del logo.
- Tipografía clara y legible.
- Imágenes grandes, reales, con textura y proceso.
- Tarjetas simples para proyectos.
- Números de impacto destacados.
- Detalles gráficos inspirados en trazos, manchas, papel, líneas o formas creadas por niños.

La web debe sentirse más artesanal, educativa y territorial que corporativa.

---

## 8.1 Stack técnico (decidido)

- **Framework:** Next.js (App Router) + TypeScript.
- **Estilos:** Tailwind CSS.
- **Sin backend ni base de datos propia en la v1:** el sitio es institucional/estático. El formulario de contacto (Fase 11) se resuelve con un servicio simple a definir entonces (ej. Formspree o una API route de Next), sin persistir datos propios.
- **Deploy:** Vercel. Dominio propio a conectar más adelante si existe.
- **Estructura de carpetas:** ver `docs/fases.md`, Fase 1.

Justificación en `docs/decisiones.md`.

---

## 9. Componentes sugeridos para desarrollo

Si se arma con React / Next.js, se pueden pensar estos componentes:

```text
Header
HeroSection
MissionSection
WhatWeDoSection
ProjectsGrid
ProjectCard
ImpactStats
LocationSection
GalleryGrid
GetInvolvedSection
ContactSection
Footer
```

## Datos sugeridos para estructura de proyectos

```js
const projects = [
  {
    title: "Mascaradas",
    years: "2009 - 2012",
    description: "Máscaras, música, movimiento y trabajo plástico para exteriorizar, comunicar y compartir con otros.",
    tags: ["expresión", "comunidad", "reutilización"]
  },
  {
    title: "Estrellas",
    subtitle: "Jugando con las estrellas",
    description: "Una invitación a imaginar, crear y conocer el cielo, las estrellas, las constelaciones y sus misterios.",
    tags: ["imaginación", "cielo", "exploración"]
  },
  {
    title: "Conquistando mi mundo",
    description: "Un proyecto para conocer el planeta Tierra desde el entorno cercano y crear conciencia sobre su cuidado.",
    tags: ["naturaleza", "territorio", "cuidado"]
  },
  {
    title: "Circo",
    subtitle: "Armá tu circo",
    description: "Juegos, expresión corporal y creación colectiva para reunir, acercar y contener.",
    tags: ["juego", "cuerpo", "comunidad"]
  },
  {
    title: "Arte para la apropiación de los imaginarios",
    description: "Un trabajo sobre imágenes, relatos y símbolos vinculados al entorno de los niños.",
    tags: ["identidad", "territorio", "cultura"]
  },
  {
    title: "Contornear y Ser Contorneado",
    description: "Una experiencia con siluetas corporales para explorar identidad, autopercepción e imaginación.",
    tags: ["identidad", "cuerpo", "expresión"]
  },
  {
    title: "La luz y la oscuridad",
    description: "Experiencias sensoriales de experimentación y juego para mirar desde diferentes ángulos.",
    tags: ["sensibilidad", "percepción", "juego"]
  },
  {
    title: "Cobijo",
    description: "Proyecto junto a RISD sobre construcción colectiva, intercambio de saberes, cuidado y comunidad.",
    tags: ["comunidad", "cuidado", "futuro"]
  }
]
```

## Datos sugeridos para impacto

```js
const impactStats = [
  {
    value: "Desde 2009",
    label: "trabajando en escuelas públicas"
  },
  {
    value: "+15",
    label: "escuelas alcanzadas"
  },
  {
    value: "+20",
    label: "maestros artistas"
  },
  {
    value: "+1000",
    label: "niños participaron de los talleres",
    note: "Dato a confirmar: otro documento menciona +500 niños."
  }
]
```

## Opciones sugeridas para participación

```js
const involvementOptions = [
  {
    title: "Soy artista o docente",
    description: "Quiero participar de talleres, propuestas pedagógicas o proyectos artísticos con niños."
  },
  {
    title: "Soy una escuela",
    description: "Quiero conocer cómo Arte Con Voz puede desarrollar una propuesta en mi comunidad educativa."
  },
  {
    title: "Quiero colaborar",
    description: "Quiero aportar tiempo, recursos, materiales o acompañamiento."
  },
  {
    title: "Quiero donar",
    description: "Quiero ayudar a sostener talleres, materiales, traslados y nuevas experiencias artísticas."
  },
  {
    title: "Quiero proponer una alianza",
    description: "Represento a una institución, empresa, universidad o colectivo cultural y quiero explorar una colaboración."
  }
]
```

---

## 10. Información faltante a pedirle a la fundación

Antes de publicar, conviene pedir:

- ~~Logo en buena calidad.~~ Cargado en `diseno/logo_arteconvoz.png`, con fondo transparente.
- ~~Paleta de colores, si existe.~~ Definida en `diseno/manual_de_marca_arteconvoz.md`.
- ~~Instagram oficial.~~ [@arteconvoz](https://www.instagram.com/arteconvoz).
- ~~Email de contacto.~~ Ya no aplica: se sacó el formulario de contacto (no había backend para enviarlo) y todos los botones de contacto van directo a Instagram (`contacto.instagram.url`), que es hoy el único canal que funciona de verdad.
- Nombre legal completo de la fundación.
- Si reciben donaciones y por qué medio.
- **Datos correctos de impacto:** cuál de las dos fuentes vale — ver sección Impacto más arriba (Instagram: +1000 niños/+15 escuelas/2 distritos vs. Wordpress: +500 niños/16 escuelas/3 distritos).
- Lista actualizada de escuelas (ambas fuentes coinciden en las mismas 5 nombradas — confirmar si son todas o hay más).
- ~~Integrantes del equipo.~~ Nombres y roles cargados (ver "Quiénes somos" → Equipo), fuente `data/Arte con Voz. wordpress.docx`. Falta: fotos del equipo.
- ~~Fotos para la galería y el banner.~~ 49 fotos cargadas en `public/images/galeria/`, en uso en el banner y la galería. ~~Falta: las 8 imágenes de proyecto.~~ Completadas (`public/images/proyectos/`, ver `docs/fases.md` Fase 6) — se asignó a cada proyecto la foto más afín del pool de galería, ya que la fundación no tiene fotos organizadas por proyecto puntual.
- ~~Videos institucionales en formato no apto para publicar.~~ El usuario convirtió `cobijo_arteconvoz.mov` (HEVC, ~31MB) a `public/videos/cobijo_arteconvoz_web.mp4` (H.264/AAC, 1.8MB), en uso en el sitio. `legos_arteconvoz.mov` no se usa en el sitio.
- Confirmación sobre uso de imágenes de niños (las 49 fotos y los videos ya están en el sitio en local, pero esto hay que confirmarlo antes de publicar — ver advertencias abajo).
- Si quieren mostrar nombres de donantes, aliados o instituciones.
- Si el proyecto con RISD sigue activo o debe presentarse como proyecto puntual.

---

## 11. Advertencias importantes

- No inventar datos institucionales.
- No publicar números de impacto sin confirmar.
- No usar fotos de niños sin autorización.
- No crear secciones de reportes anuales, sponsors, equipo o donaciones si no hay contenido real.
- No copiar la estructura completa de Free Arts NYC; usarla solo como referencia.
- Priorizar una primera versión sólida antes que una web grande pero incompleta.

---

## 12. Prompt sugerido para Claude Code

Usá este brief para crear una landing page institucional one-page para la fundación Arte Con Voz.

La web debe tener las siguientes secciones:

1. Header con navegación por anclas.
2. Hero con mensaje principal, bajada y dos botones CTA.
3. Quiénes somos.
4. Qué hacemos.
5. Grilla de proyectos.
6. Impacto con números destacados.
7. Dónde estamos.
8. Galería visual con placeholders de imágenes.
9. Sumate / formas de participar.
10. Contacto.
11. Footer.

Requisitos:

- Diseño claro, sensible, visual y comunitario.
- Estética limpia, cálida y artística.
- Mobile-first y responsive.
- Usar componentes reutilizables.
- No inventar datos faltantes.
- Marcar como TODO los datos que haya que confirmar.
- Preparar placeholders para imágenes que vendrán de Instagram o de una carpeta local.
- Mantener textos editables desde arrays u objetos de contenido.
- Evitar una estructura demasiado corporativa.
- Priorizar una web one-page simple y sólida.

