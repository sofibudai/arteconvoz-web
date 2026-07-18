# Plan de fases para desarrollar la web de Arte Con Voz

Este documento está pensado para entregar a Claude Code junto con `brief.md`.
El objetivo es construir una primera versión clara, simple y profesional del sitio web de la fundación Arte Con Voz.

---

## Objetivo general

Crear una web institucional para Arte Con Voz que comunique con claridad:

- Quiénes son.
- Qué hacen.
- Por qué existe la fundación.
- En qué escuelas y comunidades trabajan.
- Qué proyectos realizaron.
- Qué impacto tuvieron desde 2009.
- Cómo una persona, escuela, artista, empresa o donante puede sumarse.

La web debe ser simple, sensible, visual y confiable. No debe parecer una plataforma compleja ni una organización corporativa grande. Debe transmitir cercanía, comunidad, arte, infancia, educación pública y territorio.

---

## Enfoque recomendado

Para una primera versión, construir una web tipo **one-page institucional**, con navegación por secciones.

No conviene hacer muchas páginas internas todavía porque la fundación no tiene suficiente contenido ordenado, reportes anuales, equipo formal cargado, programas activos detallados ni sistema de donación definido.

La estructura debe permitir crecer en el futuro sin tener que rehacer todo.

---

# Fase 1 — Preparación del proyecto

## Objetivo

Crear la base técnica del sitio.

## Tareas

- Crear proyecto web.
- Definir estructura de carpetas.
- Crear componentes reutilizables.
- Configurar tipografías, colores y estilos globales.
- Crear layout principal.
- Crear navegación superior.
- Crear footer.
- Preparar estructura responsive para desktop y mobile.

## Resultado esperado

Una base limpia y escalable para construir la web.

## Cómo probar

Correr `npm run dev` dentro de `app/` y confirmar que carga una página en `localhost:3000` con el layout base (header y footer) sin errores en consola, y que se ve correctamente en mobile (devtools responsive) y desktop.

## Estado

Hecha (2026-07-09). `npm run build` y `npm run dev` corren sin errores; se verificó visualmente con captura de pantalla. De paso quedaron armadas también las Fases 3 a 11 con contenido real del brief (ver Estado de cada una) — faltan las 8 imágenes de proyecto y la confirmación de datos de impacto/email antes de poder decir que están "terminadas" para publicar.

## Stack y estructura de carpetas (decidido, actualizado 2026-07-09)

Stack: Next.js (App Router) + TypeScript + Tailwind CSS + [motion](https://motion.dev) (animaciones). Ver `docs/decisiones.md`.

La carpeta `app/` en la raíz del repo es el proyecto Next.js. El código fuente vive en `app/src/` para no confundir esa carpeta con la carpeta `app/` que usa el App Router para las rutas. Estructura real al cierre de esta ronda de trabajo:

```txt
app/                        <- raíz del proyecto Next.js
  src/
    app/
      layout.tsx             (fuentes Quicksand + Source Sans 3)
      page.tsx                (arma la home con todas las secciones)
      globals.css              (paleta de colores, tema Tailwind)
    components/
      Header.tsx                 (logo horizontal + nav + botón Sumate)
      Footer.tsx
      Section.tsx                  (wrapper de sección con Reveal incluido)
      HeroSection.tsx               (envuelve a BannerCarousel)
      BannerCarousel.tsx             (banner tipo Free Arts NYC)
      WavePanel.tsx                    (panel de color con borde ondulado)
      WaveDivider.tsx                   (separador ondulado entre secciones)
      ImpactShowcase.tsx                 (bloque de Impacto a sangre completa)
      PullQuoteBanner.tsx                 (frase destacada rotada)
      ProjectCard.tsx                       (tarjeta de proyecto, server component)
      AnimatedCard.tsx                        (wrapper client con hover/tap)
      GalleryClicker.tsx                        (galería con click-to-change)
      ContactForm.tsx
      CTA.tsx
      Reveal.tsx                                  (animación de entrada al scroll)
      Floating.tsx                                 (flote continuo suave)
    data/
      site.ts        (nav, quienesSomos, queHacemos, impacto, dondeEstamos, sumate, contacto)
      projects.ts     (8 proyectos)
      banner.ts        (5 slides curadas del banner)
      gallery.ts        (14 fotos curadas para la galería)
  public/
    logo/            (logo_arteconvoz.png, transparente)
    hero/            (imágenes viejas del hero estático — ya no se usan, ver Fase 3)
    videos/          (cobijo_arteconvoz.mov, legos_arteconvoz.mov — pendiente convertir, ver Fase 4)
    images/
      galeria/       (49 fotos)
      proyectos/     (vacía — pendiente cargar 8 imágenes, ver Fase 6)
  CLAUDE.md
```

## Sistema de animación (decidido, 2026-07-09)

Se usa la librería `motion` para dos patrones, aplicados con moderación para que se sienta dinámico sin marear:

- **`Reveal`**: fade + leve subida al entrar en pantalla (scroll), una sola vez. Está integrado en `Section.tsx` (todas las secciones lo tienen gratis) y se usó a mano en el bloque de intro+video, `ImpactShowcase` y `PullQuoteBanner`.
- **`Floating`**: flote continuo, lento y de amplitud chica (tipo boya en el agua). Aplicado solo en el logo del header y en las fotos circulares de `ImpactShowcase` — a propósito no está en todos lados.
- **`AnimatedCard`**: hover/tap con elevación y escala chica, usado en `ProjectCard`.

---

# Fase 2 — Identidad visual inicial

## Objetivo

Definir una estética coherente con una fundación de arte, infancia y educación.

## Criterio visual

La web debe sentirse:

- Humana.
- Artística.
- Clara.
- Cálida.
- Educativa.
- Comunitaria.
- Confiable.

## Dirección visual sugerida

- Fondo claro, cálido, no blanco puro.
- Colores inspirados en arte infantil: terracota, azul, amarillo suave, verde, rosa apagado.
- Tipografía legible, contemporánea, sin exceso decorativo.
- Uso fuerte de imágenes de talleres, obras de niños, escuelas y procesos.
- Bloques amplios con aire.
- Botones simples y visibles.

## Resultado esperado

Sistema visual base aplicado a toda la web.

## Cómo probar

Ver la home en `localhost:3000` y confirmar que tipografía, paleta de colores y espaciados definidos en Tailwind se aplican de forma consistente en al menos dos secciones de prueba (ej. Header y Hero).

## Estado

Hecha (2026-07-09). Paleta y tipografía de [`diseno/manual_de_marca_arteconvoz.md`](../diseno/manual_de_marca_arteconvoz.md) (manual hecho por la fundación, reemplazó a la propuesta inicial) aplicadas vía Tailwind (`globals.css`) en toda la home: fondo marfil `#FFF8EF`, texto `#263B3B`, tipografía Quicksand (títulos) + Source Sans 3 (cuerpo), acentos tomados del logo.

---

# Fase 3 — Home / Hero principal

## Objetivo

Explicar en pocos segundos qué hace Arte Con Voz.

## Contenido sugerido

### Título principal

Arte que abre puertas en la escuela pública

### Bajada

Arte Con Voz acerca experiencias artísticas a escuelas públicas para que niños y niñas exploren, creen y encuentren nuevas formas de expresarse.

### Botones

- Conocer la fundación
- Sumate

## Elementos visuales

- Imagen fuerte de un taller, niños creando, una obra o una escena escolar.
- Alternativamente, collage de imágenes de Instagram.

## Assets (superado, ver más abajo)

Imágenes que se habían cargado en `public/hero/`: `Arteconvoz_hero.png` y `Arteconvoz_hero_2.png`. Quedaron sin uso — ver rediseño.

## Resultado esperado

Una primera pantalla clara, emocional y directa.

## Rediseño 2026-07-09 — banner tipo carrusel (reemplaza el contenido de arriba)

El usuario pidió calcar el patrón de banner de freeartsnyc.org (ver `docs/decisiones.md`, "Se copia la estructura visual de Free Arts NYC" y "banner tipo carrusel"). El Hero estático de un solo título/bajada/dos botones se reemplazó por:

- `BannerCarousel`: 5 fotos curadas a mano, hoy todas organizadas en `public/banner/` (`data/banner.ts`), cada una con un texto corto (parafraseado del brief, no son datos nuevos) y un botón que ancla a la sección correspondiente (una excepción va directo a Instagram, ver `docs/decisiones.md`).
- `WavePanel`: separa el panel de color del texto de la foto con un borde curvo/orgánico (SVG), no una diagonal recta — vertical en desktop, horizontal en mobile. Admite `flip` para espejarse y un `panelSide` por slide ("left"/"right"), agregado el 2026-07-10 para las fotos donde el contenido importante quedaba tapado por el panel en desktop.
- Flechas prev/next, paginación por puntos (desktop), autoplay cada 8.5s (subido desde 6.5s a pedido del usuario, para dar tiempo a leer el texto).
- Colores de panel: tintes pastel **sólidos** (no con opacidad, para no mezclarse con la foto de fondo) derivados de la paleta de marca.
- El logo del header pasó de apilado a horizontal (ícono + "ARTE CON VOZ" a la derecha) y el banner arranca pegado al header, a todo el ancho de pantalla, sin logo grande intermedio.

Las imágenes de `public/hero/` quedaron sin usar (se pueden borrar o reservar para otra cosa). El 2026-07-10 se renovaron 3 de las 5 fotos del banner y se corrigieron dos encuadres rotos (ver `docs/decisiones.md` para el detalle completo de cada cambio de foto).

## Cómo probar

Ver el banner en `localhost:3000` (o en la URL pública): confirmar que rotan las 5 fotos con su texto y botón cada ~8.5s, que las flechas y los puntos cambian de slide, que el borde ondulado se ve bien en mobile y desktop, que ninguna foto queda con contenido importante tapado por el panel, y que el botón de cada slide lleva a donde corresponde.

## Estado

Hecha y confirmada por el usuario (2026-07-09) — "me encantó" después de verla en su propio `npm run dev`. Implementada con `motion` para las transiciones. Ajustada varias veces el 2026-07-10 (fotos, encuadre, velocidad) a partir de feedback probando la versión publicada en el celular.

---

# Fase 4 — Sección “Quiénes somos”

## Objetivo

Presentar la identidad institucional de Arte Con Voz.

## Contenido sugerido

Arte Con Voz es una fundación dedicada al arte y la educación. A través de la integración del arte en el ámbito escolar, busca que los niños exploren, creen y se desarrollen como alumnos y como personas.

Creemos que el arte permite descubrir nuevas maneras de ver la vida, que la educación abre oportunidades y que aprender a convivir también implica respetar a las personas, la comunidad y la naturaleza.

## Subsecciones posibles

- Misión.
- Mirada.
- Historia.
- Comunidad.

## Resultado esperado

Una sección institucional breve, sin exceso de texto.

## Cómo probar

Ver la sección en `localhost:3000`, confirmar texto y subsecciones (misión, mirada, historia) legibles y bien espaciadas en mobile.

## Estado

Hecha y confirmada por el usuario (2026-07-09). Incluye además equipo y resultados observados (fuente: `data/Arte con Voz. wordpress.docx`). Falta: fotos del equipo.

## Video agregado (2026-07-09)

Debajo del párrafo grande centrado que abre esta sección (justo después del banner) se agregó un `<video controls>`, pedido por el usuario imitando el video institucional de freeartsnyc.org. **Resuelto:** el usuario convirtió el video a `public/videos/cobijo_arteconvoz_web.mp4` (H.264 + AAC, 1.8MB) — ya anda en cualquier navegador y es liviano. El `.mov` original (HEVC, ~30MB) quedó sin usar en la misma carpeta.

---

# Fase 5 — Sección “Qué hacemos”

## Objetivo

Explicar el trabajo concreto de la fundación.

## Contenido sugerido

Realizamos talleres de arte en escuelas públicas primarias de la Provincia de Buenos Aires. Elegimos trabajar en el ámbito de la escuela pública porque muchas veces la educación artística no llega de manera efectiva a los niños, aun cuando forma parte de los contenidos curriculares.

Los talleres proponen experiencias de creación, juego, exploración, movimiento, reflexión y trabajo colectivo.

## Bloques recomendados

### Arte en la escuela

Talleres integrados al ámbito escolar.

### Expresión e identidad

Actividades para que cada niño pueda descubrir una forma propia de mirar y expresarse.

### Comunidad y naturaleza

Proyectos que trabajan el vínculo con el entorno, la convivencia y el cuidado del mundo común.

## Resultado esperado

Una explicación simple y concreta del modelo de acción.

## Cómo probar

Ver la sección en `localhost:3000` y confirmar que los bloques (Arte en la escuela, Expresión e identidad, Comunidad y naturaleza) se acomodan en una grilla responsive.

## Estado

Hecha (2026-07-09).

---

# Fase 6 — Sección “Proyectos”

## Objetivo

Mostrar los principales proyectos realizados por Arte Con Voz.

## Formato recomendado

Tarjetas visuales con:

- Nombre del proyecto.
- Imagen.
- Descripción corta.
- Año o período, si está disponible.

## Proyectos iniciales

### Mascaradas

Proyecto desarrollado entre 2009 y 2012. Trabajó con máscaras, música, movimiento y reutilización de materiales para potenciar la expresión, la comunicación y el vínculo comunitario.

### Estrellas — Jugando con las estrellas

Proyecto para imaginar, crear y conocer el cielo, sus misterios, las estrellas y las constelaciones.

### Conquistando mi mundo

Proyecto orientado a conocer el planeta Tierra desde el entorno cercano, promoviendo conciencia sobre el cuidado de los seres vivos y los recursos naturales.

### Circo — Armá tu circo

Proyecto basado en juego, expresión corporal y creación colectiva. El circo aparece como espacio que reúne, contiene y acerca.

### Arte para la apropiación de los imaginarios

Proyecto orientado a visibilizar imaginarios sociales y culturales de los niños en relación con su entorno: escuela, familia, docentes, río, isla y comunidad.

### Contornear y Ser Contorneado

Proyecto donde los niños trabajan sobre la silueta propia para explorar identidad, cuerpo, imaginación, presente y futuro.

### La luz y la oscuridad

Proyecto de experimentación sensorial para mirar las cosas desde distintos ángulos.

### Cobijo

Proyecto realizado en conjunto entre Arte Con Voz y RISD. Propone reflexionar sobre la construcción en conjunto, el intercambio de saberes y el hacer en comunidad. Cobijo es nido, cuidado, pregunta, huella, futuro y comunidad.

## Resultado esperado

Una sección visual que dé profundidad y credibilidad al recorrido de la fundación.

## Assets

Carpeta `public/images/proyectos/` completa: las 8 tarjetas tienen imagen. En vez de fotos propias por proyecto (que la fundación no tiene organizadas por actividad), se asignó a cada una la foto más afín del pool de `public/images/galeria/` (49 fotos), eligiendo por afinidad temática con el título y la descripción de cada proyecto:

- `mascaradas.jpg` ← `img_5939.jpg` (niño con máscara/casco de cartón siendo colocada por un adulto).
- `estrellas.jpg` ← `1-57.jpg` (pintura abstracta con palitos de helado dispuestos en forma radial, tipo estallido/estrella).
- `conquistando-mi-mundo.jpg` ← `cimg5774.jpg` (paisaje de río en Tigre, embarcación "La Marinera" — entorno y territorio).
- `circo.jpg` ← `cimg5818.jpg` (chicos de pie con esculturas de diario sobre el cuerpo, creación colectiva y expresión corporal).
- `apropiacion-imaginarios.jpg` ← `dsc_0028.jpg` (collage con recortes de revista — símbolos e imaginarios).
- `contornear-y-ser-contorneado.jpg` ← `dsc_0044.jpg` (manos armando un collage de rostro/ojos recortados — siluetas e identidad).
- `luz-y-oscuridad.jpg` ← `img_5944.jpg` (docente explicando "Fotografía / Luz / Dibujo" en el pizarrón).
- `cobijo.jpg` ← ~~`img_5908.jpg` (comedor con los chicos reunidos en mesas largas)~~ reemplazada el 2026-07-10 por una foto propia que subió el usuario: chicos armando juntos una estructura de cañas al aire libre, más literal con la descripción del proyecto ("construcción colectiva... Cobijo es nido").

Ninguna de estas fotos se repite con las ya usadas en Impacto (Fase 7) ni en la Galería (Fase 9).

## Orden de las tarjetas

Desde el 2026-07-10, ordenadas de más reciente a más antiguo a pedido del usuario: **Cobijo** primero (el más nuevo, colaboración con RISD) y **Mascaradas** último (2009-2012, único con año confirmado). Los 6 proyectos del medio no tienen año documentado en ninguna fuente, así que quedaron en su orden relativo original — no se inventó una cronología para ellos (ver `docs/decisiones.md`).

## Cómo probar

Ver la grilla de proyectos en `localhost:3000`, confirmar que los 8 proyectos cargan desde `data/projects.ts` con su imagen real, título y descripción, en el orden Cobijo → ... → Mascaradas, y que la grilla es responsive (1 columna en mobile, varias en desktop).

## Estado

Hecha (2026-07-09, ajustada 2026-07-10). Grilla funcionando con las 8 imágenes reales asignadas por afinidad temática (una reemplazada por una foto propia del usuario) y ordenada de más reciente a más antiguo. `ProjectCard` detecta automáticamente la imagen en `public/images/proyectos/<slug>.jpg`. Las tarjetas tienen animación (`AnimatedCard`): se elevan y agrandan un poco al pasar el mouse o tocar en el celular; el contenedor de imagen tiene un fondo gris de placeholder mientras la foto carga (antes quedaba un hueco transparente, ver `docs/decisiones.md`).

---

# Fase 7 — Sección “Impacto”

## Objetivo

Mostrar datos concretos del alcance de la fundación.

## Datos a mostrar

Usar con cautela porque hay datos que deben validarse antes de publicar.

Datos posibles:

- Desde 2009.
- 2 distritos escolares.
- 3 circunscripciones de islas.
- Más de 15 escuelas.
- Más de 20 maestros artistas.
- Más de 1000 niños.

## Advertencia importante

Hay una inconsistencia entre documentos:

- Un material menciona más de 1000 niños.
- Otro material menciona más de 500 niños y 16 escuelas.

Antes de publicar la web, dejar estos números como editables o marcar en el código como `TODO: validar dato`.

## Formato recomendado

Usar números grandes en cards:

```txt
+15 escuelas
+20 maestros artistas
+1000 niños
Desde 2009
```

## Resultado esperado

Una sección breve y potente que aporte confianza.

## Cómo probar

Ver la franja de números en `localhost:3000`, confirmar que los datos vienen de `data/impact.ts` y que el dato de niños alcanzados muestra visiblemente que está a confirmar (nota o marca `TODO`).

## Estado

En curso (2026-07-09). Implementada como `ImpactShowcase`: bloque a sangre completa con separadores ondulados (`WaveDivider`), fotos reales en crop circular (con flote suave) alternadas con texto — solo los dos hechos en los que ambas fuentes coinciden (desde 2009, islas de Tigre y San Fernando) más los resultados cualitativos observados, con una nota visible de que las cifras exactas están en confirmación. Falta reemplazar por números reales cuando la fundación confirme cuál fuente vale (ver `docs/brief.md`, sección Impacto).

---

# Fase 8 — Sección “Dónde estamos”

## Objetivo

Mostrar el territorio donde trabaja la fundación.

## Contenido sugerido

Arte Con Voz trabaja en escuelas públicas primarias de la Provincia de Buenos Aires, con recorrido en escuelas de las islas de Tigre y San Fernando.

## Escuelas mencionadas en el material

- Escuela Nº12, Isla de Tigre.
- Escuela Nº14, Islas de San Fernando.
- Escuela Nº19, Islas de San Fernando.
- Escuela Nº20, Isla San Fernando.
- Escuela Nº26, Islas de San Fernando.

## Recomendación

No cargar un mapa complejo en la primera versión. Puede usarse una sección textual con una imagen territorial o una ilustración simple.

## Resultado esperado

Una sección que ubique geográficamente la acción de la fundación.

## Cómo probar

Ver la sección en `localhost:3000` y confirmar que lista las escuelas mencionadas y el texto territorial, legible en mobile.

## Estado

Hecha (2026-07-09).

---

# Fase 9 — Sección “Sumate”

## Objetivo

Crear llamados a la acción claros para diferentes públicos.

## Públicos posibles

### Artistas y docentes

Personas que quieran participar en talleres o proyectos.

### Escuelas

Instituciones que quieran conocer o recibir propuestas.

### Donantes

Personas que quieran colaborar económicamente o con materiales.

### Empresas y aliados

Organizaciones que puedan apoyar proyectos, materiales, transporte o formación.

## Texto sugerido

Arte Con Voz crece en comunidad. Si sos artista, docente, escuela, empresa o querés colaborar con materiales, tiempo o recursos, podés escribirnos para conocer formas de participar.

## Botones sugeridos

- Quiero colaborar
- Soy escuela
- Soy artista/docente

## Resultado esperado

Una sección simple orientada a conversión.

## Cómo probar

Ver la sección en `localhost:3000`, confirmar que las tarjetas de cada público (artista, escuela, donante, aliado) están visibles, y que el botón "Escribinos" abre Instagram en una pestaña nueva.

## Estado

Hecha (2026-07-09). El botón "Escribinos" va directo a Instagram (ver Fase 11 — se sacó el formulario de contacto, así que ya no ancla a `#contacto`).

---

# Fase 10 — Galería visual

## Objetivo

Aprovechar las imágenes disponibles en Instagram y en el material de la fundación.

## Formato recomendado

- Grilla de imágenes.
- Collage visual.
- Carrusel simple.
- Link a Instagram.

## Contenido visual sugerido

- Talleres.
- Obras de niños.
- Escuelas.
- Procesos creativos.
- Materiales.
- Proyectos históricos.

## Recomendación

No automatizar Instagram en la primera versión salvo que sea muy simple. Cargar manualmente imágenes seleccionadas para tener control editorial y visual.

## Assets e interacción (decidido, actualizado 2026-07-10)

- 49 fotos cargadas en `public/images/galeria/` (sin categorizar por ahora — quedan como pool único, no por las categorías de la sección "Contenido visual sugerido"); una selección curada de 14 (`data/gallery.ts`) es la que se usa en esta sección.
- Interacción (rediseñada 2026-07-10, reemplaza el diseño original de grilla clicable): un **banner de una sola foto** que avanza solo cada 2 segundos con fundido (fade) entre una imagen y la siguiente, en loop infinito sobre las 14 fotos. Un click/tap sobre la imagen pausa el loop (aparece un cartelito "Pausado — click para seguir"); otro click lo reanuda.
- Link de salida a Instagram: [@arteconvoz](https://www.instagram.com/arteconvoz) (vive en el Footer, no dentro de esta sección).

## Resultado esperado

Una sección emocional que muestre el trabajo real.

## Cómo probar

Ver la sección en `localhost:3000` (o en la URL pública): confirmar que la foto cambia sola cada 2 segundos con fundido, que hace loop sin cortes, que un click la pausa (y otro click la reanuda), y que el link a Instagram del Footer abre `instagram.com/arteconvoz` en una pestaña nueva.

## Estado

Hecha (2026-07-09), rediseñada 2026-07-10. `GalleryBanner` (reemplaza a `GalleryClicker`) muestra una selección curada de 14 fotos (primer corte a mano sobre las 49, ver `data/gallery.ts` y `docs/decisiones.md`) como banner con fundido automático, loop infinito y pausa por click. El diseño original (grilla de 6 tarjetas, click para ver otra foto al azar) quedó reemplazado a pedido del usuario.

---

# Fase 11 — Contacto

## Objetivo

Facilitar que cualquier persona pueda comunicarse con la fundación.

## Elementos

- Formulario de contacto.
- Mail.
- Link a Instagram.
- Botón de WhatsApp, solo si la fundación lo confirma.
- Mensaje breve de cierre.

## Campos sugeridos del formulario

- Nombre.
- Email.
- Motivo de contacto.
- Mensaje.

## Motivos posibles

- Quiero colaborar.
- Soy escuela.
- Soy artista/docente.
- Quiero donar.
- Quiero proponer una alianza.
- Otro.

## Resultado esperado

Una vía clara para generar contacto.

## Rediseño 2026-07-09 — se saca el formulario, contacto directo por Instagram

Se había construido un formulario (nombre, email, motivo, mensaje) pero no tenía a dónde enviar nada — sin backend ni email confirmado, era una maqueta que podía confundir (parece que manda un mensaje y no manda nada). El usuario pidió sacarlo directamente y dejar solo un link a Instagram, sin email. Se implementó:

- Se borró `ContactForm.tsx` y se sacó de `page.tsx`.
- La sección Contacto ahora muestra el texto de siempre y un botón `CTA` directo a `contacto.instagram.url`, que abre en pestaña nueva.
- El botón "Sumate" del header (desktop y mobile) también apunta directo a Instagram ahora, en vez de anclar a `#sumate`.
- Se sacaron `email` y `motivos` de `contacto` en `data/site.ts` — quedaron sin uso.

Si en el futuro la fundación confirma un email y quieren un formulario real, esta fase se reabre con un backend real (API route de Next, Formspree, etc.) en vez de la maqueta anterior.

## Cómo probar

En `localhost:3000`, confirmar que el botón de la sección Contacto y el botón "Sumate" del header abren `instagram.com/arteconvoz` en una pestaña nueva (la página no debe navegar ni cerrarse).

## Estado

Hecha (2026-07-09).

---

# Fase 12 — Revisión de contenido antes de publicar

## Objetivo

Evitar publicar datos incorrectos o incompletos.

## Checklist

- Confirmar si el dato correcto es más de 500 o más de 1000 niños.
- Confirmar cantidad exacta de escuelas.
- Confirmar si la organización ya es formalmente fundación o si conviene llamarla organización/proyecto.
- Confirmar nombres del equipo.
- Confirmar email público.
- Confirmar WhatsApp, si aplica.
- Confirmar si aceptan donaciones y por qué medio.
- Confirmar si hay CUIT, datos legales o transparencia que quieran publicar.
- Confirmar autorización de uso de imágenes de niños.
- Confirmar si las imágenes de Instagram pueden usarse en la web.

## Resultado esperado

Una web lista para publicar sin contradicciones fuertes.

## Cómo probar

Repasar el checklist punto por punto contra la respuesta real de la fundación y marcar cada ítem como confirmado o pendiente.

## Estado

Pendiente.

---

# Fase 13 — Publicación

## Objetivo

Subir una primera versión online.

## Tareas

- ~~Revisar responsive mobile.~~ Hecho en celular real contra la URL pública. Se encontraron y arreglaron dos bugs reales de esta prueba: peso de imágenes (ver abajo) y un umbral de la animación `Reveal` que hacía que la sección Proyectos nunca se volviera visible en pantallas angostas (ver `docs/decisiones.md`, "Bug real: la sección Proyectos nunca se revelaba en el celular").
- Revisar textos.
- Revisar links.
- Revisar performance básica.
- ~~Revisar peso de imágenes.~~ Hecho: las 57 fotos de `galeria/` + `proyectos/` pesaban 127MB en total (fotos de cámara sin comprimir) y causaban pantalla en blanco al scrollear en celular. Comprimidas a 16.4MB (ver `docs/decisiones.md`).
- ~~Configurar metadata SEO.~~ Ya estaba en `layout.tsx`.
- ~~Configurar favicon.~~ Hecho, generado a partir del logo real.
- Publicar en Vercel o plataforma elegida.
- Conectar dominio, si ya existe.

## Metadata sugerida

### Title

Arte Con Voz | Arte y educación en escuelas públicas

### Description

Fundación dedicada a acercar experiencias artísticas a escuelas públicas para que niños y niñas exploren, creen y encuentren nuevas formas de expresarse.

## Resultado esperado

Primera versión pública del sitio.

## Cómo probar

Abrir la URL pública de Vercel desde un celular real y una notebook, confirmar que carga rápido, sin errores 404, y que el favicon/metadata aparecen correctamente al compartir el link.

## Estado

En curso (2026-07-09). Sitio publicado en Vercel (`arteconvoz.vercel.app`), conectado al repo de GitHub — cada push a `main` dispara un deploy automático. Metadata SEO (title/description) ya estaba configurada en `layout.tsx` tal como se sugería acá. Se generó un favicon real a partir del logo (antes quedaba el triángulo genérico de Vercel/Next.js, ver `docs/decisiones.md`).

Se probó el sitio en un celular real contra la URL pública (no localhost) y aparecieron dos problemas reales, ya resueltos:
1. Fotos sin comprimir (127MB en 57 archivos) causaban demoras notorias al cargar — comprimidas a 16.4MB.
2. La animación de aparición de las secciones (`Reveal`) tenía un umbral (`amount: 0.3`) matemáticamente inalcanzable para contenido más alto que ~3.3x la pantalla — la sección Proyectos, al pasar a 1 columna en mobile, nunca llegaba a mostrarse. Corregido a `amount: "some"`.

Falta para dar esta fase por cerrada:
- Dominio propio: por ahora corre en la URL gratuita de Vercel; conectar un dominio si la fundación consigue uno.
- Confirmar con la fundación el uso de fotos/videos de los chicos antes de considerar esto realmente "público" de cara a la fundación (ver sección 10 y 11 de `docs/brief.md`).

---

# Fase 14 — Mejoras futuras

## Objetivo

Dejar preparada la evolución del sitio.

## Posibles mejoras

- Página individual por proyecto.
- Blog o novedades.
- Página de equipo.
- Página de aliados.
- Sistema de donaciones.
- Reportes de impacto.
- Mapa de escuelas.
- Galería filtrable por proyecto.
- Integración con Instagram.
- Newsletter.
- Versión bilingüe español/inglés.
- Página especial para alianzas institucionales.
- Página de transparencia.

## Resultado esperado

Roadmap claro para escalar la web sin complejizar la primera versión.

---

# Orden recomendado de implementación para Claude Code

1. Crear estructura base del proyecto.
2. Crear componentes generales.
3. Crear datos en archivos separados.
4. Maquetar la home one-page.
5. Cargar contenido base desde `brief.md`.
6. Crear secciones: Hero, Quiénes somos, Qué hacemos, Proyectos, Impacto, Dónde estamos, Sumate, Galería, Contacto.
7. Aplicar estilos responsive.
8. Optimizar imágenes.
9. Agregar metadata SEO.
10. Dejar comentarios `TODO` donde falten datos por confirmar.

---

# Prompt sugerido para Claude Code

Usá los archivos `brief.md` y `fases.md` como base para construir una web institucional one-page para Arte Con Voz.

La web debe ser clara, sensible, visual, responsive y fácil de editar. No inventes datos que no estén en el brief. Donde falten datos o haya inconsistencias, dejá comentarios `TODO` en el código.

Creá una estructura limpia de componentes y datos editables. La página debe incluir estas secciones:

1. Hero principal.
2. Quiénes somos.
3. Qué hacemos.
4. Proyectos.
5. Impacto.
6. Dónde estamos.
7. Sumate.
8. Galería.
9. Contacto.

Priorizá una primera versión simple y publicable antes que una web demasiado compleja.

