# Decisiones del proyecto — Arte Con Voz

Registro corto de decisiones tomadas, por qué, y qué reemplazan.

---

## 2026-07-09 — Stack técnico: Next.js + TypeScript + Tailwind CSS

**Qué:** se define el stack de desarrollo del sitio: Next.js (App Router) + TypeScript + Tailwind CSS, deploy en Vercel.

**Por qué:** el brief ya sugería React/Next.js en la sección de componentes (brief.md, sección 9), y fases.md prevé publicar en Vercel (Fase 13). Next.js + Tailwind permite construir componentes reutilizables y datos editables en arrays (proyectos, impacto, participación) tal como pide el brief, con deploy directo a Vercel.

**Reemplaza:** nada, es la primera decisión de stack del proyecto.

---

## 2026-07-09 — Sin backend ni base de datos propia en la v1

**Qué:** el sitio es institucional/estático. No hay backend propio ni base de datos en esta primera versión. El formulario de contacto de la Fase 11 se resolverá con un servicio simple (a definir en esa fase) sin persistir datos propios.

**Por qué:** el sitio es principalmente contenido institucional (misión, proyectos, impacto, contacto) sin necesidad de usuarios, login ni datos dinámicos. Agregar backend/DB ahora sería complejidad innecesaria para una landing one-page.

**Reemplaza:** nada.

---

## 2026-07-09 — Estructura de carpetas: código fuente en `app/src/`

**Qué:** la carpeta `app/` (ya existente en la raíz del repo, con `CLAUDE.md` adentro) es la raíz del proyecto Next.js. El código fuente vive en `app/src/`, con `app/src/app/` como carpeta de rutas del App Router.

**Por qué:** fases.md ya proponía esta estructura (`/src/app`, `/src/components`, `/src/data`) en la Fase 1. Formalizarla evita la confusión de tener dos carpetas llamadas `app` una dentro de la otra sin un `src/` que las separe.

**Reemplaza:** nada.

---

## 2026-07-09 — Paleta de colores oficial extraída del logo

**Qué:** se crea `diseno/manual_de_marca.md` con la paleta de 6 colores (rojo bordó, verde manzana, azul petróleo, amarillo, naranja, violeta) extraída directamente del logo (`diseno/arteconvoz_logo.jpg`) por promedio de color real de cada figura, con HEX/RGB/CMYK. Los códigos Pantone quedan pendientes de confirmar con guía física. La tipografía sugerida (Baloo 2 / Quicksand para títulos, Inter / Work Sans para cuerpo) es una propuesta, no está confirmada.

**Por qué:** ya se cargó el logo real en `diseno/`; en vez de usar colores genéricos "inspirados en arte infantil" (brief.md, sección 8), se usa la paleta real de la marca para que la web sea consistente con el logo desde el día uno.

**Reemplaza:** la referencia genérica de colores de `brief.md` sección 8 pasa a apuntar a esta paleta concreta.

**Actualización 2026-07-09:** superada por la entrada "Se reemplaza el manual de marca por la versión de la fundación", más abajo. El usuario trajo su propio manual de marca con otra paleta.

---

## 2026-07-09 — Tipografía de marca: Baloo 2 + Inter

**Qué:** se adopta Baloo 2 (títulos) + Inter (cuerpo) como tipografía oficial, documentada en `diseno/manual_de_marca.md`. Se agregan códigos Pantone aproximados (por proximidad de color, no lectura oficial) a la tabla de paleta.

**Por qué:** el usuario pidió explícitamente cerrar una propuesta coherente con el logo en vez de dejarlo abierto. Baloo 2 conecta con el estilo infantil/redondeado de las figuras del logo sin volverse caricaturesca; Inter da legibilidad para los bloques de texto largos del brief.

**Reemplaza:** la tipografía queda "propuesta a confirmar" únicamente en el sentido de que no hubo aprobación formal de la fundación — para efectos de construcción del sitio, es la tipografía a usar.

**Actualización 2026-07-09:** superada por la entrada "Se reemplaza el manual de marca por la versión de la fundación", más abajo. Ahora es Quicksand + Source Sans 3.

---

## 2026-07-09 — Instagram oficial confirmado

**Qué:** el Instagram de la fundación es [@arteconvoz](https://www.instagram.com/arteconvoz) (www.instagram.com/arteconvoz). Se actualiza `docs/brief.md` (secciones Contacto e Información faltante) y `diseno/manual_de_marca.md`.

**Por qué:** dato provisto directamente por la fundación (el usuario).

**Reemplaza:** el placeholder "Instagram oficial" pendiente en `brief.md` sección 10.

---

## 2026-07-09 — Assets de hero y galería cargados, e interacción de galería definida

**Qué:** se cargaron 2 imágenes de hero en `public/hero/` (`Arteconvoz_hero.png` es la que abre la home) y 49 fotos sin categorizar en `public/images/galeria/`. Se define que la sección Galería (Fase 10) no muestra las 49 fotos en grilla fija, sino una **selección curada** que cambia con cada click del mouse.

**Por qué:** el usuario prefiere una interacción más viva ("mostrame otra") que una grilla estática, y prefiere no categorizar manualmente las 49 fotos por ahora — la curación de cuáles entran en la selección se hace recién al construir la Fase 10, no ahora.

**Reemplaza:** la recomendación original de fases.md Fase 10 ("grilla de imágenes / collage / carrusel simple") se resuelve como interacción click-to-change sobre una selección curada.

---

## 2026-07-09 — Se elimina `assets-web/`, imágenes de proyectos van en `public/images/proyectos/`

**Qué:** se borra la carpeta `assets-web/` (staging previo a que existiera `public/` real). Se crea `public/images/proyectos/` (carpeta plana, un archivo por proyecto: `mascaradas.jpg`, `estrellas.jpg`, `conquistando-mi-mundo.jpg`, `circo.jpg`, `apropiacion-imaginarios.jpg`, `contornear-y-ser-contorneado.jpg`, `luz-y-oscuridad.jpg`, `cobijo.jpg`) para las imágenes de tarjeta de cada proyecto (Fase 6), que todavía faltan cargar.

**Por qué:** las categorías de `assets-web/galeria/` quedaron obsoletas por la decisión de galería como pool curado (ver decisión anterior). Mantener `assets-web/` habría dejado dos estructuras paralelas para lo mismo (`assets-web/` vs `public/`), justo lo que se quería evitar. Las imágenes de proyecto sí son una necesidad real y no estaban cubiertas todavía, así que se resuelven con el mismo patrón plano que ya usan `public/hero/` y `public/images/galeria/`.

**Reemplaza:** `assets-web/proyectos/<nombre>/` y `assets-web/galeria/<categoría>/`.

---

## 2026-07-09 — Nueva info encontrada en `data/Arte con Voz. wordpress.docx` (actualizado por el usuario)

**Qué:** al releer `data/` se encontró contenido nuevo en ese archivo (contenido real del sitio Wordpress anterior de la fundación) que no estaba en `brief.md`:

- Nombres y roles del equipo (Presidente, Coordinación Ejecutiva, Coordinación de Programas, Coordinación de Evaluación de Resultados).
- Texto de "para qué lo hacemos" y "a quiénes dirigimos nuestro accionar".
- Lista de resultados observados en los talleres (concentración, producción, conducta, etc.).
- Una **segunda fuente de datos de impacto** que no coincide con la que ya estaba documentada: +500 niños / 16 escuelas / 3 distritos (Wordpress) vs. +1000 niños / +15 escuelas / 2 distritos / 3 circunscripciones / +20 maestros artistas (Instagram, `ARTE CON VOZ. Concepto.docx`).

**Por qué:** el usuario actualizó ese archivo y pidió releer `data/` antes de avanzar a la Fase 1, para no perder información real ya existente.

**Cómo se resolvió:** se cargó todo el contenido nuevo confirmado (equipo, resultados, narrativa) directamente en `brief.md`. Los números de impacto NO se resolvieron a favor de ninguna fuente — se documentan las dos en `brief.md` sección Impacto y se deja explícito que no hay que publicar cifras hasta que la fundación confirme cuál es la correcta.

---

## 2026-07-09 — Fase 1 construida como Next.js real dentro de `app/`, con las Fases 3-11 adelantadas

**Qué:** se armó el proyecto Next.js (App Router + TypeScript + Tailwind v4) dentro de `app/`, con código fuente en `app/src/` (`app/src/app`, `app/src/components`, `app/src/data`). Se migró `public/` (hero + galería) desde la raíz a `app/public/`. Se construyó la home one-page completa con las 9 secciones del brief usando contenido real (no lorem ipsum), y se verificó con `npm run build` + `npm run dev` + captura de pantalla.

**Por qué:** el usuario pidió explícitamente "que estén todas las pestañas y todo lo que tengas de información cargalo" al arrancar la Fase 1, lo que excede el alcance mínimo de esa fase (que en `fases.md` es solo layout base) y adelanta contenido de las Fases 3 a 11. Se decidió construir todo junto en vez de dejar secciones vacías para no tener que volver a tocar los mismos archivos dos veces.

**Curación de la galería:** se miró una muestra de 19 de las 49 fotos en `public/images/galeria/` y se armó un primer corte de 14 favoritas en `app/src/data/gallery.ts` para la interacción de click. Es una curación rápida, no exhaustiva — puede ajustarse mirando las 49 con más calma o dejando que la fundación elija.

**Qué quedó pendiente (marcado como TODO en el código y en `fases.md`):**
- 8 imágenes de proyecto (`public/images/proyectos/`).
- Confirmar cifras de impacto (niños/escuelas/distritos) — la web no muestra ningún número no confirmado.
- Email de contacto.
- Backend/servicio real para el formulario de contacto (hoy valida pero no envía).

**Reemplaza:** nada — es la primera implementación de código del proyecto.

---

## 2026-07-09 — Se reemplaza el manual de marca por la versión de la fundación

**Qué:** el usuario cargó `diseno/manual_de_marca_arteconvoz.md`, un manual de marca propio, más completo que la primera propuesta, y pidió reemplazarla ("no me gusta tu propuesta"). `diseno/manual_de_marca.md` (la versión que armé extrayendo colores del logo) queda como referencia histórica, con una nota al inicio que redirige al archivo nuevo.

**Qué cambia concretamente respecto a lo ya implementado en el código** (`app/src/app/globals.css`, `app/src/app/layout.tsx`):

- **Tipografía:** Quicksand (títulos/botones) + Source Sans 3 (texto) reemplaza a Baloo 2 + Inter.
- **Fondo:** `#FFF8EF` (marfil cálido) reemplaza a `#FBF7EF`.
- **Texto principal:** `#263B3B` (azul petróleo oscuro) reemplaza a `#2B2320`.
- **Texto secundario:** se suma `#5F6F6A` (gris verdoso), no existía antes.
- **Paleta de acento:** nueva tabla de HEX tomada directamente por la fundación (más saturada que mi extracción por muestreo de píxeles del jpg):
  rojo `#D6001C`, amarillo `#FFD21A`, naranja `#F26A13`, verde `#A7C957`, azul `#168AAD`, violeta `#5A3568`.
- Suma variables de radio (`--radius-sm/md/lg`) y sombra (`--shadow-soft`) que no existían.

**Qué NO cambia (todavía sin resolver, a confirmar con el usuario):** el manual nuevo sugiere un menú más corto ("Inicio | Quiénes somos | Qué hacemos | Proyectos | Impacto | Sumate | Contacto", sin "Dónde estamos" ni "Galería"). Como esas dos secciones ya existen y tienen contenido real, no se borran solo por esta sugerencia de menú — se le va a preguntar al usuario antes de sacar secciones completas del sitio.

**Por qué:** el usuario es quien define la identidad de marca; su manual es más específico y fue hecho a propósito para este proyecto. Reemplaza la decisión "Tipografía de marca: Baloo 2 + Inter" y "Paleta de colores oficial extraída del logo" de más arriba en este documento.

**Actualización 2026-07-09:** implementado. `globals.css` y `layout.tsx` ahora usan Quicksand/Source Sans 3 y la paleta nueva; se agregó `--color-foreground-soft` (`#5F6F6A`) y se reemplazaron todos los `text-foreground/NN` (opacidad) por esa clase semántica en los componentes. Verificado con `npm run build` + captura de pantalla. El menú se mantiene completo (incluye Dónde estamos y Galería) — el usuario confirmó no sacar secciones.

**Reemplaza:** "Tipografía de marca: Baloo 2 + Inter" y "Paleta de colores oficial extraída del logo" (ambas más arriba en este mismo archivo).

---

## 2026-07-09 — Se copia la estructura visual de Free Arts NYC (reemplaza la guía de "no copiar literalmente")

**Qué:** el usuario pidió replicar exactamente el formato de secciones, tamaños de fuente, tamaño de imágenes y estructura general de freeartsnyc.org, cambiando solo logo, tipografía (Quicksand/Source Sans 3) y colores (paleta de `diseno/manual_de_marca_arteconvoz.md`) por los de Arte Con Voz, y usando el contenido real ya cargado.

**Contradice:** `docs/brief.md` sección 3 decía explícitamente "no debe copiarse literalmente" la estructura de Free Arts NYC. Esta decisión la reemplaza — el usuario decidió conscientemente ir por la copia literal del formato.

**Qué se tomó del sitio de referencia** (inspeccionado visualmente el 2026-07-09, homepage actual): header con wordmark bold + nav en mayúsculas + botón píldora de acento a la derecha; hero partido en panel de color pastel + foto a sangre con corte diagonal + lista de links con flecha; párrafo grande centrado debajo del hero; bloque de "Impacto" a sangre completa con fondo de color, separadores en forma de ola (wave dividers) y fotos en crop circular alternadas con texto; banner de frase destacada grande y rotada; footer con íconos sociales.

**Qué NO se copió** por no tener equivalente real en Arte Con Voz (para no inventar contenido): el carrusel de "maratón", el video embebido, y el widget de newsletter con backend de suscripción.

**Por qué:** decisión explícita del usuario, quien vio el sitio de referencia y quiere ese mismo nivel de producción visual para Arte Con Voz.

**Reemplaza:** brief.md sección 3 ("no debe copiarse literalmente"); también actualiza esa sección del brief.

**Actualización 2026-07-09:** implementado. Componentes nuevos: `WaveDivider`, `ImpactShowcase` (bloque a sangre completa con fotos circulares reales, alternadas), `PullQuoteBanner` (frase grande rotada, usa `quienesSomos.mirada`), `ArrowLink`. `Header` y `HeroSection` reescritos (nav bold + botón píldora "Sumate"; hero partido en panel `bg-brand-blue/10` + foto con `clip-path` diagonal + logo grande centrado arriba + lista de flechas en vez de botones). Se agregó un párrafo grande centrado debajo del hero. Se sacó `ImpactStat.tsx` (quedó sin uso). Verificado con `npm run build` + capturas de pantalla de toda la página.

**Actualización 2026-07-09 (banner tipo carrusel):** el usuario pidió reemplazar el hero estático por un carrusel tipo Free Arts NYC: varias fotos de la galería rotando, panel de color con borde curvo/ondulado (no diagonal recto) separando texto de foto, un botón por slide, flechas y paginación. Se implementó:

- `WavePanel` (nuevo): panel de color con un borde con forma de ola/curva orgánica, hecho con un `<path>` SVG (`preserveAspectRatio="none"` para que se estire sin romperse en cualquier tamaño de caja), en variante vertical (desktop, panel a la izquierda) y horizontal (mobile, panel arriba).
- `BannerCarousel` (nuevo, client component): reemplaza a `HeroSection` por completo. 5 slides curadas a mano de `public/images/galeria/` (no las 49), cada una con un texto corto parafraseado de contenido ya aprobado del brief (misión/mirada/historia — no son datos nuevos) y un botón que lleva a la sección correspondiente. Flechas prev/next, paginación por puntos (solo desktop), autoplay cada 6.5s.
- **Importante — colores sólidos, no opacidad:** el panel de color se dibuja encima de la foto (mismo stacking). Usar `bg-brand-x/20` (opacidad) ahí mezclaría el color con la foto de fondo en vez de dar un panel pastel limpio — se habría visto la foto "tiznada" y el texto poco legible. En cambio se precalcularon tintes pasteles **sólidos** (mezcla del color de marca con blanco, ej. `#FFD93C`, `#CCE5ED`) como hex directos vía `text-[#...]`.
- `Header`: el lockup del logo pasó de apilado (ícono arriba, texto abajo) a horizontal (ícono a la izquierda, "ARTE CON VOZ" a la derecha), pedido explícito con una captura de referencia.
- Se sacó el bloque de logo grande centrado que había arriba del hero viejo — ahora el banner arranca inmediatamente después del header, a todo el ancho, sin espacio extra.
- Se eliminaron `ArrowLink.tsx` y el export `hero` de `data/site.ts` por quedar sin uso.

**Limitación de esta entrega:** el usuario pidió no usar más automatización de navegador (ni AppleScript ni Chrome headless) para verificar visualmente. Este cambio se verificó con `npm run build`, `tsc` y lint, y revisando el CSS compilado para confirmar que los colores pastel sobrevivieron el build de Tailwind — no se verificó visualmente con captura de pantalla en el momento de esta entrega (ver confirmación del usuario más abajo, después de sumar video y animaciones).

**Actualización 2026-07-09 (video + animaciones):** se instaló `motion` (ex framer-motion, `npm install motion` dentro de `app/`) para tres cosas pedidas por el usuario:

1. **Video institucional:** debajo del párrafo grande centrado (después del banner), se agregó un `<video controls preload="metadata">` con `public/videos/cobijo_arteconvoz.mov` — se eligió ese de los dos que mandó (el otro, `legos_arteconvoz.mov`, es de un taller interno del equipo, no tan representativo para esta sección general). Queda como TODO en el código el mismo problema de formato/peso ya registrado más abajo (HEVC, ~30MB) — el usuario pidió meter el video igual, no resolver eso todavía.
2. **`Reveal`** (nuevo componente): entrada con fade + leve desplazamiento hacia arriba al hacer scroll (`whileInView`, una sola vez). Aplicado en `Section` (envuelve título y contenido de cada sección), y a mano en el párrafo+video de intro, `ImpactShowcase` y `PullQuoteBanner`.
3. **`Floating`** (nuevo componente): flote continuo, lento y de amplitud chica (tipo boya en el agua, no mareante) aplicado solo en objetos puntuales para no saturar: el logo del header (movimiento mínimo) y las fotos circulares de `ImpactShowcase` (cada una con duración/delay levemente distintos para que no floten todas sincronizadas).
4. **`AnimatedCard`** (nuevo componente): wrapper con `whileHover`/`whileTap` (`y: -8, scale: 1.02` al hover, `scale: 0.98` al tocar) usado en `ProjectCard`. `ProjectCard` sigue siendo server component (usa `fs.existsSync` para detectar si ya hay imagen real), así que la animación se aisló en `AnimatedCard` (client) en vez de convertir toda la tarjeta a client component.

Verificado con `npm run build`, `tsc --noEmit` y `eslint` — sin errores, sin verificación visual (misma limitación de la entrega anterior).

**Confirmado por el usuario 2026-07-09:** "me encantó!!!" — abarca el banner carrusel, el video, las animaciones (Reveal/Floating) y las cards dinámicas juntos. Queda todo aprobado tal como está; los pendientes que siguen abiertos son los ya anotados (formato/peso del video, imágenes de proyecto, cifras de impacto, email).

**Corrección 2026-07-09:** el usuario reportó que la frase de `PullQuoteBanner` se veía cortada en desktop. Era real: el primer diseño usaba `whitespace-nowrap`, calcado literalmente del efecto de Free Arts NYC (su frase también sangra fuera de la pantalla a propósito) — pero para una frase larga en español ese efecto se lee como texto roto, no como recurso de diseño. Se sacó el `nowrap`, se puso `max-w-4xl` para que envuelva en varias líneas, y se bajó la rotación a `-rotate-1` para que siga siendo legible. De paso se midió overflow horizontal real (no con capturas de pantalla, que resultaron poco confiables en anchos angostos con `chrome --headless --screenshot`, sino con Chrome DevTools Protocol pidiendo `scrollWidth` real) en 375/390/768/820/1024/1440px: **no hay overflow en ningún ancho**, los márgenes de mobile y tablet ya estaban bien. También se agregó la prop `sizes` a las imágenes con `fill` que no la tenían (Hero, ProjectCard, ImpactShowcase) — no cambia el layout, mejora performance.

---

## 2026-07-09 — Repaso de documentación antes de subir a GitHub

**Qué:** el usuario pidió dejar todos los `.md` al día en local antes de subir el proyecto a GitHub y conectarlo al hosting. Se repasaron `docs/fases.md`, `docs/brief.md` y este archivo:

- `fases.md`: se actualizó el árbol de carpetas/componentes a como está hoy (mucho más grande que el de la Fase 1 original: `BannerCarousel`, `WavePanel`, `ImpactShowcase`, `PullQuoteBanner`, `Reveal`, `Floating`, `AnimatedCard`, etc.), se sumó una sección de "Sistema de animación", se reescribió la Fase 3 (Hero → banner carrusel) y se actualizaron los Estados de las Fases 2, 4, 6 y 7 para reflejar lo último (manual de marca de la fundación, video, cards animadas, `ImpactShowcase`).
- `brief.md`: se marcó como superada la sección de Hero de una sola imagen (ahora es el carrusel), y se actualizó la lista de "Información faltante" con el estado real de fotos/video (cargados, pero el video en formato a convertir).
- Se encontró que `app/` no tenía `.gitignore` (se perdió al copiar los archivos del scaffold inicial a mano en la Fase 1) — se creó uno estándar de Next.js antes de subir nada a git, para no versionar `node_modules` ni `.next`.

**Por qué:** documentación al día es requisito antes de este tipo de paso (subir a un repo compartido) — si algo queda desalineado entre lo documentado y el código real, se pierde la trazabilidad justo cuando más importa (al conectar hosting/CI).

**Pendiente para el próximo paso (subir a GitHub):** decidir si los videos (`public/videos/*.mov`, ~30MB cada uno) van al repo tal cual, se convierten primero, o se excluyen de git y se suben aparte — no se decidió todavía.

**Reemplaza:** nada.

---

## 2026-07-09 — Video de Cobijo se va a embeber desde Instagram, no como archivo; CTAs de contacto van directo a Instagram

**Qué:** dos decisiones del usuario sobre cómo conectar con la fundación:

1. **Video:** en vez de subir `cobijo_arteconvoz.mov` al repo, se va a reemplazar por un embed del posteo/reel real de Instagram — todavía **falta que el usuario pase el link** de ese posteo para hacer el cambio en el código (por ahora el `<video>` en `page.tsx` sigue apuntando al archivo local). `legos_arteconvoz.mov` no se toca por código (nunca estuvo referenciado); el usuario lo va a mover él mismo fuera de `public/videos/` para guardarlo aparte.
2. **CTAs "Sumate a colaborar" y "Escribinos":** en vez de anclar a `#sumate`/`#contacto`, van directo al Instagram de la fundación (mensaje privado), abriendo en pestaña nueva para que la web nunca se cierre. Implementado:
   - `CTA.tsx` ahora detecta automáticamente si el `href` es una URL externa (`http...`) y le agrega `target="_blank" rel="noopener noreferrer"` — cualquier otro botón que en el futuro apunte a una URL externa hereda este comportamiento sin tocar nada más.
   - `data/banner.ts`: el slide con CTA "Sumate a colaborar" ahora usa `contacto.instagram.url` en vez de `#sumate`. `BannerCarousel.tsx` aplica la misma detección de link externo (no usa el componente `CTA`, usa `next/link` directo).
   - `page.tsx`: el botón "Escribinos" de la sección Sumate ahora usa `contacto.instagram.url` en vez de `#contacto`.

**Qué NO cambió:** la sección Contacto (`#contacto`) sigue existiendo tal cual, con el formulario (todavía sin backend) y el link a Instagram — no se borró nada, solo se agregó un atajo directo a Instagram desde esos dos botones puntuales. El nav del header ("Sumate") sigue anclando a la sección Sumate, no a Instagram — tiene sentido que la persona vea primero las opciones de la sección antes de que el botón final la mande a Instagram.

**Por qué:** hoy el único canal de contacto que realmente funciona es Instagram (el formulario es una maqueta sin envío real, y no hay email confirmado); mandar a la gente directo ahí es más honesto que un botón que "ancla" a una sección con un formulario que no envía nada.

**Pendiente:** el link al posteo de Instagram de Cobijo, para cambiar el `<video>` por un embed.

**Reemplaza:** nada.

**Actualización 2026-07-09:** el usuario convirtió el video él mismo en vez de esperar el embed de Instagram — subió `public/videos/cobijo_arteconvoz_web.mp4` (H.264 + AAC, 1.8MB, contra los ~31MB y HEVC del `.mov` original). `page.tsx` ahora usa ese archivo. También se corrigió el contenedor del video: el original es casi cuadrado (720×742), no 16:9 — estaba forzado a `aspect-video`, lo que recortaba una parte importante de la imagen; ahora usa `aspect-[720/742]` (su proporción real) dentro de un contenedor más angosto (`max-w-lg` en vez de `max-w-4xl`), apropiado para un video vertical/cuadrado. El `.mov` original (`cobijo_arteconvoz.mov`) quedó sin usar en la misma carpeta — igual que `legos_arteconvoz.mov`, el usuario lo puede mover a otro lado cuando quiera.

---

## 2026-07-09 — Se saca el formulario de contacto; "Sumate" del header va directo a Instagram

**Qué:** el usuario vio el formulario de contacto (nombre/email/motivo/mensaje) y pidió sacarlo — no hay a dónde enviar el mensaje (sin backend, sin email confirmado), así que dejarlo era mostrar algo que parece funcionar pero no hace nada. Se reemplazó por un botón directo a Instagram, sin mostrar email. También pidió que el botón "Sumate" de arriba a la derecha (header) vaya directo a Instagram.

**Qué se hizo:**
- Se borró `components/ContactForm.tsx` (no queda ningún formulario en el sitio).
- La sección Contacto (`page.tsx`) ahora es: texto + un botón `CTA` a `contacto.instagram.url` (abre en pestaña nueva). Se sacó la fila con "Instagram: ..." y "Email: TODO".
- `Header.tsx`: el botón "Sumate" (versión desktop y mobile) pasa de `href="#sumate"` a `contacto.instagram.url`, con `target="_blank"`.
- `data/site.ts`: se sacaron los campos `email` y `motivos` de `contacto` — habían quedado sin ningún uso.

**Por qué:** un formulario que no envía nada es peor que no tener formulario — genera la expectativa de que el mensaje llegó a algún lado. Instagram es hoy el único canal que realmente funciona.

**Qué significa esto para más adelante:** si la fundación en algún momento confirma un email y quiere un formulario real, hay que reabrir esto con un backend de verdad (API route de Next, Formspree, etc.), no reponer la maqueta anterior.

**Reemplaza:** la Fase 11 de `fases.md` (formulario de contacto) y el botón "Sumate" ancla-a-sección del header.

---

## 2026-07-09 — Sello de marca entre Sumate y Contacto

**Qué:** el usuario subió `diseno/texto_logo_arteconvoz.png` (el wordmark "arteconvoz" solo, sin ícono ni tagline — distinto de la imagen de referencia que mandó, que era un mockup con ícono + "Fundación" + wordmark + bajada todos juntos) y pidió armar esa composición completa en el espacio vacío entre la sección Sumate y la sección Contacto.

**Qué se hizo:** nuevo componente `BrandSeal.tsx` (ícono circular con flote suave + "FUNDACIÓN" + el wordmark nuevo + la bajada "Cambiando paradigmas en la educación a través del arte"), insertado en `page.tsx` entre `<Section id="sumate">` y `<Section id="contacto">`. El archivo se copió a `public/logo/texto_logo_arteconvoz.png`.

**Por qué:** el usuario señaló un espacio en blanco entre esas dos secciones en una captura y pidió llenarlo con este sello institucional.

**Reemplaza:** nada.

---

## 2026-07-09 — Pasada de compactación: menos espacio vacío en todo el sitio

**Qué:** el usuario vio `BrandSeal` muy chico con mucho espacio vacío alrededor, y pidió revisar espaciado en todo el sitio (entre secciones y entre frases) para que quede más compacto sin perder legibilidad. Se ajustó:

- `Section.tsx` (afecta a casi todas las secciones): `py-16 sm:py-24` → `py-10 sm:py-14`; título `mb-8` → `mb-5`; eyebrow `mb-2` → `mb-1.5`.
- `BrandSeal.tsx`: contenedor `py-16 sm:py-20` → `py-6 sm:py-8` (era el principal responsable del espacio vacío en la captura); de paso se agrandaron bastante los elementos (ícono `h-16/h-20` → `h-24/h-32`, wordmark `h-9/h-11` → `h-14/h-20`, texto `text-xs` → `text-sm`) para que no se vea chico dentro del bloque.
- `ImpactShowcase.tsx`: sección `py-4` → `py-6 sm:py-8`; título `mb-16` → `mb-8`; espacio entre bloques `gap-16` → `gap-10`.
- `PullQuoteBanner.tsx`: `py-20 sm:py-28` → `py-10 sm:py-14`.
- `page.tsx`: bloque de intro+video `py-16 sm:py-20` → `py-10 sm:py-12`; varios `mt-8/mt-10/mt-12` bajados a `mt-6/mt-8` (Quiénes somos, Qué hacemos, Sumate, Contacto).
- `WaveDivider` (las olas entre secciones) no se tocó — son parte del diseño, no espacio vacío.

**Por qué:** con el `Section` genérico + bloques sueltos (intro, `ImpactShowcase`, `PullQuoteBanner`, `BrandSeal`) cada uno con su propio padding vertical grande, el espacio se sumaba entre bloques consecutivos y se sentía "vacío" en vez de "con aire".

**Reemplaza:** nada, son ajustes de tamaño sobre lo ya construido.

---

## 2026-07-09 — Bloque de intro + video: de columna centrada angosta a dos columnas

**Qué:** el bloque de texto + video después del banner (antes: texto centrado arriba, video chico centrado abajo, todo en una columna angosta) pasó a un grid de 2 columnas en desktop — texto a la izquierda, video a la derecha — dentro del mismo ancho de contenido que usa el resto del sitio (`max-w-5xl`, como `Section`). En mobile sigue apilado (texto arriba, video abajo) porque no entran las dos columnas.

**Por qué:** el usuario vio el bloque muy angosto/chico en el medio de la pantalla y pidió que use el ancho de la página, con el texto y el video repartidos en vez de apilados.

**Reemplaza:** nada.

**Actualización 2026-07-09:** el usuario no quedó conforme con el tamaño del texto de esa columna izquierda y pidió igualarlo al estilo de `PullQuoteBanner` (mismo tamaño/proporción: `text-3xl`/`sm:text-5xl`, Quicksand, centrado) pero sin la rotación. Se aplicó tal cual, y se centró verticalmente para que ocupe la altura del video (columna con `flex items-center justify-center`).

---

## 2026-07-09 — Los logos no tenían transparencia real (el "cuadriculado" era parte de la imagen)

**Qué:** el usuario reportó que `logo_arteconvoz.png` y `texto_logo_arteconvoz.png` se veían con un fondo cuadriculado gris/blanco en vez de transparente. Se confirmó con `sips -g hasAlpha`: los dos archivos tenían `hasAlpha: no` — el cuadriculado de "esto es transparente" que muestran los editores de diseño había quedado exportado como píxeles reales de la imagen, no como transparencia de verdad.

**Cómo se arregló:** con Python/Pillow, se detectaron los dos tonos del cuadriculado (gris clarísimo, ~#F1F1F1 y ~#FDFDFD, sin saturación de color) y se convirtieron a alpha 0; el resto de los píxeles (los colores del logo) se dejaron opacos. Se verificó componiendo el resultado sobre el color de fondo real del sitio (`#FFF8EF`) antes de aplicarlo, para confirmar que no quedaban bordes grises ni recortes raros.

**Qué se tocó y qué no:** se reemplazaron **solo** las copias que sirve la web (`app/public/logo/arteconvoz.png` y `app/public/logo/texto_logo_arteconvoz.png`) — ya tienen `hasAlpha: yes`. **No se tocaron** los archivos originales que subió el usuario en `diseno/` (son su material fuente; no se pisan archivos subidos por el usuario con una transformación automática sin que lo pida). Si en algún momento exporta de nuevo el logo, conviene que desde el editor de diseño exporte con transparencia real (no dejar el "fondo de cuadros" visible al exportar).

**Reemplaza:** nada.

---

## 2026-07-09 — Repositorio git a nivel raíz del proyecto

**Qué:** se inicializa git en la raíz de `ArteConVoz` (no solo dentro de `app/`), para versionar juntos el código y `docs/`.

**Por qué:** el CLAUDE.md del proyecto pide "git como red de seguridad" con commits frecuentes por fase; conviene que el historial incluya también los cambios de documentación, no solo el código.

**Reemplaza:** nada.

---

## 2026-07-09 — El fix de transparencia del logo no se veía: caché de imágenes de Next.js

**Qué:** después de arreglar la transparencia real de los PNG del logo (ver entrada anterior), el usuario seguía viendo el cuadriculado en el sitio. Se confirmó que los archivos servidos en `app/public/logo/` ya tenían `hasAlpha: yes`, así que el problema no era el archivo sino que Next.js estaba sirviendo versiones ya transformadas y cacheadas de las imágenes viejas (`.next/cache/images/`).

**Cómo se arregló:** se borró la carpeta `.next` completa y se le pidió al usuario reiniciar `npm run dev` y hacer un hard refresh del navegador. Confirmado por el usuario ("ya está resuelto").

**Por qué importa dejarlo anotado:** si en el futuro un cambio de imagen no se refleja en el sitio a pesar de que el archivo en `public/` está bien, el primer sospechoso es esta caché, no el archivo.

**Reemplaza:** nada.

---

## 2026-07-09 — Imágenes de las 8 tarjetas de "Proyectos": tomadas del pool de Galería

**Qué:** se completó `public/images/proyectos/` (estaba vacía desde la Fase 6) asignando a cada uno de los 8 proyectos la foto más afín temáticamente del pool de `public/images/galeria/` (49 fotos), en vez de esperar a tener fotos propias organizadas por proyecto.

**Por qué:** la fundación no tiene el archivo fotográfico clasificado por proyecto específico; usar el pool general de galería con buen criterio de afinidad (título/descripción) permite completar la sección ya, sin inventar ni esperar más contenido.

**Asignación y motivo:**
- `mascaradas.jpg` ← `img_5939.jpg`: niño con máscara/casco de cartón — match literal con "máscaras".
- `estrellas.jpg` ← `1-57.jpg`: pintura abstracta con palitos dispuestos en forma radial tipo estallido — no hay fotos de estrellas reales en el pool, se eligió la imagen que más evoca esa forma.
- `conquistando-mi-mundo.jpg` ← `cimg5774.jpg`: paisaje de río en Tigre — encaja con "conocer el planeta Tierra desde el entorno cercano".
- `circo.jpg` ← `cimg5818.jpg`: chicos de pie con esculturas de diario sobre el cuerpo — expresión corporal y creación colectiva.
- `apropiacion-imaginarios.jpg` ← `dsc_0028.jpg`: collage con recortes de revista — imágenes y símbolos, en línea con "apropiación de los imaginarios".
- `contornear-y-ser-contorneado.jpg` ← `dsc_0044.jpg`: manos armando un collage de rostro/ojos recortados — coincide con "siluetas corporales, identidad, autopercepción".
- `luz-y-oscuridad.jpg` ← `img_5944.jpg`: docente explicando "Fotografía / Luz / Dibujo" en el pizarrón — coincide directamente con el tema del proyecto.
- `cobijo.jpg` ← `img_5908.jpg`: comedor con los chicos reunidos en mesas largas — comunidad y cuidado, en línea con "cobijo es nido, es cuidar".

Se revisaron manualmente las 49 fotos del pool antes de elegir, y se evitó repetir ninguna con las ya usadas en Impacto (Fase 7) o en la Galería (Fase 9).

**Reemplaza:** nada (la Fase 6 quedaba explícitamente pendiente de este paso).

---

## 2026-07-09 — Primera publicación en Vercel

**Qué:** se conectó el repo de GitHub (`carocastelo/arteconvoz`) a un proyecto de Vercel y se publicó la primera versión pública del sitio, en `arteconvoz.vercel.app`.

**Problema durante la publicación:** el primer deploy quedó en 404 a pesar de que el build terminaba "Ready". Causas, encontradas en orden:
1. **Root Directory** mal configurado: Vercel estaba usando la raíz del repo como proyecto, pero el código de Next.js vive en `app/` (la raíz del repo también tiene `docs/`). Se corrigió en Project Settings → Build and Development Settings → Root Directory, poniendo `app`.
2. Con eso corregido, el 404 seguía. Revisando los Deploy Logs se vio que el build sí compilaba bien la ruta `/` (`Route (app) → ○ /`, "Deployment completed") — el problema no era el build sino cómo Vercel servía el resultado. La causa: el **Framework Preset** del proyecto había quedado en `Other` (por el primer intento, antes de fijar el Root Directory, cuando Vercel no encontraba un proyecto Next.js válido en la raíz). Se corrigió a `Next.js` en la misma pantalla de Build and Development Settings, dejando Build/Output/Install/Development Command sin override (usan los defaults de Next.js). Con eso, el redeploy sirvió el sitio correctamente.

**De paso, se encontró y arregló:** `src/app/favicon.ico` todavía era el ícono genérico por defecto de Next.js/Vercel (círculo negro con triángulo blanco), nunca se había reemplazado por el logo de la fundación. Se generó un favicon real a partir de `public/logo/arteconvoz.png` (recortado a su contenido visible, centrado en un lienzo cuadrado transparente, exportado en 16/32/48/64/128/256px con Pillow) y se reemplazó el archivo.

**Por qué importa dejarlo anotado:** si en algún momento se crea un proyecto de Vercel nuevo (por ejemplo para un dominio o ambiente distinto) hay que repetir estos dos pasos de configuración (Root Directory = `app`, Framework Preset = Next.js) — no son automáticos cuando el proyecto Next.js no está en la raíz del repo.

**Reemplaza:** el estado "Pendiente" de la Fase 13 en `docs/fases.md` — ahora "En curso" (queda por confirmar mobile-first en un celular real, dominio propio y autorización de uso de imágenes de los chicos frente a la fundación antes de considerarla cerrada).

---

## 2026-07-09 — Compresión de todas las fotos de galería y proyectos (pantalla en blanco al scrollear en celular)

**Qué:** el usuario reportó que al scrollear en el celular hasta la sección "Lo que construimos" (Proyectos), la pantalla quedaba en blanco un buen rato antes de que aparecieran las tarjetas.

**Diagnóstico:** no era la animación (`Reveal` tiene una duración de 0.6s, nada que explique una demora larga). El problema real era el peso de las fotos: las 49 fotos de `public/images/galeria/` y las 8 copiadas a `public/images/proyectos/` eran archivos de cámara sin comprimir — resoluciones de 3000 a 4400px de lado y hasta 4MB cada una (127MB en total), mostradas en tarjetas de no más de ~300-800px. Next.js tiene que transformar esos originales al vuelo la primera vez que se piden (Image Optimization), y en la sección Proyectos se piden 8 fotos pesadas casi al mismo tiempo al entrar en el viewport — eso es lo que se veía como pantalla blanca en una conexión de celular.

**Cómo se arregló:** con Python/Pillow se reprocesaron las 57 fotos (`galeria/` + `proyectos/`) en el lugar: se aplicó la rotación real de la foto (`exif_transpose`, porque después se descarta el EXIF), se redujo cualquier lado mayor a 1800px (de sobra para cómo se muestran en el sitio, incluso en pantallas retina) y se volvió a guardar en JPEG calidad 82, progresivo. Resultado: de 127.4MB a 16.4MB (-87%), sin pérdida perceptible de nitidez.

**Por qué es reversible / no rompe nada:** los 57 archivos ya estaban commiteados en git antes de este cambio — si hiciera falta volver a la calidad original, están en el historial. No se tocó nada en `diseno/` (material fuente del usuario). Se pidió confirmación explícita antes de hacer el cambio, por ser una operación destructiva sobre archivos existentes.

**Nota para el futuro:** cualquier foto nueva que se agregue a `public/images/galeria/` o `public/images/proyectos/` debería pasar por el mismo tipo de compresión antes de subirse — si no, el mismo problema de carga puede volver a aparecer.

**Reemplaza:** nada.

---

## 2026-07-09 — Placeholder de fondo faltante en las tarjetas de Proyectos (seguían viéndose "en blanco" en el celular)

**Qué:** después de comprimir las fotos, el usuario probó en el celular real contra la URL pública de Vercel (no localhost) y las tarjetas de "Lo que construimos" seguían sin aparecer de entrada.

**Causa real, en `ProjectCard.tsx`:** el contenedor de la foto solo tenía una clase de color de fondo (`bg-brand-*`) cuando **no** había foto real (`imageReady === false`, usado como placeholder de color con la inicial del proyecto). Cuando sí había foto real, el contenedor no tenía ningún fondo (`""`). Mientras el navegador todavía está descargando/decodificando la imagen (aunque ya sea liviana), ese hueco queda completamente transparente — se ve el fondo de la página detrás, que en un scroll rápido en el celular se percibe como "no cargó nada".

**Cómo se arregló:** se le agregó al contenedor un fondo neutro (`bg-foreground/5`, el mismo gris suave que ya se usa como placeholder del video en la intro) para el caso `imageReady === true`, así que mientras la foto carga se ve una caja gris prolija en vez de un hueco vacío, y la foto aparece encima apenas está lista. No cambia nada del peso de las imágenes (eso ya se había resuelto en la entrada anterior); es puramente una mejora de percepción de carga.

**Reemplaza:** nada.

---

## 2026-07-09 — Bug real: la sección Proyectos nunca se revelaba en el celular (no era lentitud, era matemáticamente imposible)

**Qué:** después de arreglar el placeholder de fondo, el usuario probó de nuevo en el celular contra la URL pública y las tarjetas de "Lo que construimos" seguían sin aparecer — no ya "tardando", directamente no se mostraban.

**Causa real, en `Reveal.tsx`:** el `viewport` de la animación de aparición pedía `amount: 0.3`, es decir, que al menos el 30% del **elemento envuelto completo** estuviera visible en pantalla antes de animarlo a `opacity: 1`. `Section.tsx` envuelve **todo** el contenido de cada sección (`children`) en un solo `Reveal`. En desktop, la grilla de Proyectos es de 3 columnas (≈3 filas, cabe en un par de pantallas) y ese 30% se alcanza sin problema. Pero en el celular la grilla pasa a 1 columna: 8 tarjetas con foto apiladas suman más de 4000px de alto, contra una pantalla de ~700-800px. El 30% de 4000px son ~1200px, más de lo que un celular puede mostrar de una vez — esa condición **nunca se cumple**, así que la sección quedaba en `opacity: 0` para siempre, no por lentitud sino porque el umbral pedido era matemáticamente inalcanzable en pantallas angostas con contenido alto.

**Cómo se arregló:** se cambió `amount: 0.3` por `amount: "some"` en `Reveal.tsx` (constante de Motion que significa "cualquier parte visible", en vez de un porcentaje fijo). Así la animación se dispara apenas empieza a entrar en pantalla, sin depender de cuán alto sea el contenido que envuelve — funciona igual de bien para un párrafo corto que para una grilla larga.

**Por qué no se vio en desktop ni se detectó antes:** el bug es específico de contenido más alto que ~3.3x la altura de la pantalla. Con 3 columnas en desktop la grilla nunca llegaba a esa altura; recién se volvió alta al pasar a 1 columna en mobile — por eso el usuario lo vio en el celular y no en la compu ("en la web cargan más rápido... pero en el celu no aparecen directamente" era la pista correcta desde el principio).

**Alcance del fix:** `Reveal` se usa en todas las secciones vía `Section.tsx` (Quiénes somos, Qué hacemos, Dónde estamos, Sumate, Contacto, además de Proyectos), así que este cambio corrige el mismo riesgo de raíz en todo el sitio, no solo en la sección reportada.

**Reemplaza:** nada.

---

## 2026-07-09 — Se reemplaza la foto de la tarjeta "Cobijo"

**Qué:** el usuario subió una foto propia para la tarjeta de Cobijo (chicos armando juntos una estructura de cañas/bambú al aire libre) para reemplazar la que se había asignado del pool de galería (el comedor con los chicos en mesas largas). Se procesó igual que el resto del pool (orientación EXIF aplicada, JPEG calidad 82 progresivo — en este caso ya era chica, 550×656px, así que solo bajó de 517KB a 62KB) y se guardó en `public/images/proyectos/cobijo.jpg`.

**Por qué es mejor:** encaja de forma mucho más literal con la descripción del proyecto ("construcción colectiva... Cobijo es nido") que la foto del comedor, que hablaba más de comunidad en general.

**Reemplaza:** la elección de `img_5908.jpg` (comedor) para `cobijo.jpg`, registrada en la entrada del 2026-07-09 sobre las imágenes de las 8 tarjetas de Proyectos.

---

## 2026-07-10 — Nuevas fotos para 3 de las 5 slides del banner; todas las fotos del banner ahora en `public/banner/`

**Qué:** el usuario pidió cambiar las fotos del banner principal, salvo las dos de las frases "Mostramos lo que las manos y la imaginación construyen juntas." y "Que cada niño explore, cree y encuentre su propia voz.", que debían mantenerse. Subió 5 fotos candidatas a `public/banner/` para elegir.

**Selección:** de las 5 candidatas (`banner_1.jpg` a `banner_5.jpg`), se usaron las 3 de mejor resolución y más pertinentes por contenido; se descartaron `banner_4.jpg` (armado de una estructura de cañas, 953×582, más borrosa) y `banner_5.jpg` (detalle de cañas, 568×444, demasiado chica para un banner a ancho completo) por calidad/resolución más baja que las otras tres — quedaron sin usar en la carpeta, no se borraron por si el usuario las quiere reconsiderar más adelante.

**Asignación:**
- `taller-clase.jpg` (antes `banner_1.jpg`, 1194×794) → "Cada taller es un espacio para crear, jugar y expresarse." — chicas escribiendo/dibujando en un aula.
- `manos-pintadas.jpg` (antes `banner_3.jpg`, 1133×610) → "Desde 2009 llevamos arte a escuelas públicas de islas de Tigre y San Fernando." — manos pintadas de muchos colores sobre papel madera, evoca la acumulación de talleres a lo largo de los años.
- `collage-mascara.jpg` (antes `banner_2.jpg`, recortada a 903×632) → "El arte como forma de mirar, preguntar e imaginar futuro." — un chico sosteniendo un collage con ojos propios a la altura de su cara.

**Problema encontrado y arreglado en 2 de las 3 fotos nuevas:** `banner_1.jpg` y `banner_2.jpg` tenían una marca de comillas decorativas (❝) en negro superpuesta en la esquina inferior izquierda — quedó de alguna plantilla de cita/testimonio previa, no era parte de la foto original. Se recortó esa esquina en cada una (borde inferior en `taller-clase.jpg`, borde izquierdo en `collage-mascara.jpg`, cuidando de no cortar manos ni caras) antes de usarlas. `banner_3.jpg`/`manos-pintadas.jpg` no tenía esa marca.

**Reorganización:** las dos fotos que se mantuvieron (`dsc_0250.jpg` y `cimg5764.jpg`) se **copiaron** (no movieron) a `public/banner/manos-imaginacion.jpg` y `public/banner/manos-arcilla.jpg` y `banner.ts` ahora apunta a esas copias — los archivos originales en `public/images/galeria/` se dejaron intactos porque siguen usándose en `ImpactShowcase` (`page.tsx`) y en el pool curado de `data/gallery.ts`. Con esto, las 5 imágenes del banner viven todas en `public/banner/`, con nombres descriptivos en vez de `banner_N.jpg`.

**Reemplaza:** las imágenes de `cimg5788.jpg`, `escuela-12-may-jun-jul-2013-36.jpg` e `img_6013.jpg` que tenían antes esas 3 slides del banner (seguían disponibles en `public/images/galeria/` para otros usos, no se tocaron).

---

## 2026-07-10 — Dos fotos del banner se recortaban mal (contenido tapado por el panel de texto)

**Qué:** el usuario probó el banner nuevo y reportó dos problemas de encuadre:
1. "El arte como forma de mirar..." (`collage-mascara.jpg`): en el celular se veía bien, pero en la web quedaba "cortada y no se entiende".
2. "Que cada niño explore, cree y encuentre su propia voz." (`manos-arcilla.jpg`, la foto que se mantuvo sin cambios): se cortaba la parte de abajo, la más importante, y pidió priorizar personas + actividad por sobre el paisaje.

**Diagnóstico de la primera (bug real de layout, no solo de recorte):** `BannerCarousel` pone el panel de texto a la **izquierda** en desktop (`sm:w-[50%]` desde `left-0`) y **arriba** en mobile (`h-[58%]` full width). Con `object-cover`, en pantallas anchas la imagen se estira a ancho completo sin recorte horizontal (solo se recorta arriba/abajo) — es decir, la mitad izquierda de la pantalla muestra exactamente la mitad izquierda de la foto. En `collage-mascara.jpg`, toda la escena importante (la cara del chico, los ojos del collage) está concentrada en esa mitad izquierda de la foto — justo la que tapa el panel en desktop. Se comprobó recortando la imagen al medio y mirando cada mitad por separado: la mitad izquierda tenía toda la cara y el collage; la derecha, solo sillas apiladas de fondo. Por eso en mobile (panel arriba, no a un costado) se veía bien, y en desktop no. Además el contenido ocupa ~70% del ancho de la foto centrado — no había forma de recortarla para que entrara entera del lado derecho sin cortar la cara por el medio.

**Cómo se arregló (a nivel de código, no solo de imagen):** se agregó soporte para que el panel de texto pueda ir a la **derecha** en vez de a la izquierda, por slide:
- `WavePanel.tsx`: nueva prop `flip` que espeja el SVG horizontalmente (`-scale-x-100`), para que el borde ondulado quede del lado correcto cuando el panel se invierte.
- `data/banner.ts`: nuevo campo opcional `panelSide?: "left" | "right"` en `BannerSlide`; se marcó `panelSide: "right"` solo en la slide de `collage-mascara.jpg`.
- `BannerCarousel.tsx`: `panelBoxClass(side)` reemplaza la constante fija `PANEL_BOX`, generando `right-0` en vez de `left-0` en desktop cuando corresponde (en mobile no cambia nada, el panel sigue arriba). El `WavePanel` vertical recibe `flip` cuando el panel va a la derecha. El caption (que por defecto va abajo a la derecha) se mueve a abajo a la izquierda cuando el panel está a la derecha, para no superponerse con el texto.

**Diagnóstico de la segunda:** al revisar la foto real detrás de `manos-arcilla.jpg` (copia de `cimg5764.jpg`) se descubrió que **el contenido no es "manos trabajando arcilla"** como decía el caption viejo — es una foto de 3 chicos parados junto a un mástil, de espaldas al río, con mucho paisaje (palmeras, agua) alrededor y las figuras chiquitas y muy abajo en el cuadro. El caption estaba mal desde antes de esta sesión (no es algo que haya cambiado hoy). Midiendo con una grilla, el borde del panel en mobile (58%) caía casi exactamente sobre las cabezas de los chicos — al mínimo corrimiento de altura real de pantalla, se cortaban.

**Cómo se arregló:** se recortó la foto original (`public/images/galeria/cimg5764.jpg`, no se tocó) mucho más cerca del grupo de chicos, descartando la mayor parte del cielo/palmeras de arriba, y se guardó esa versión recortada en `public/banner/manos-arcilla.jpg` (864×774, antes 1350×1800). Se verificó con una simulación del recorte de `object-cover` tanto para desktop (banda horizontal centrada) como mobile (58% superior tapado) que los chicos quedan claramente visibles y son ahora el elemento dominante del encuadre, no el paisaje. Se corrigió también el caption, que ahora describe la foto real ("Chicos y chicas en la escuela, junto al río.") en vez del texto equivocado sobre arcilla.

**Reemplaza:** el caption incorrecto de `cimg5764.jpg`/`manos-arcilla.jpg` (arrastraba el error desde antes de esta sesión) y el encuadre original (sin recortar) de esa misma foto.

---

## 2026-07-10 — Se reemplaza otra vez la foto de "Que cada niño explore..." por una con más arte y taller

**Qué:** el usuario probó el recorte ajustado de `manos-arcilla.jpg` (chicos junto al mástil) y pidió cambiarla directamente por otra: mostraba solo chicos parados, sin nada de "arte y taller" a la vista. Pidió elegir otra de `public/banner/` que mostrara más eso.

**Elegida:** `cimg5798.jpg` del pool de galería — cuatro chicos muy metidos en la tarea, encimados alrededor de una mesa, pegando algo con una barra de pegamento, cuadernos y útiles a la vista. Se recortó (quitando bordes vacíos de arriba/abajo) y se guardó como `public/banner/creando-juntos.jpg` (1728×1093), reemplazando a `manos-arcilla.jpg` que se borró.

**Verificación de encuadre:** se simuló el recorte de `object-cover` para desktop (banda horizontal centrada, ~525px de una imagen de 1093px de alto) y mobile (58% superior tapado por el panel). En desktop se ven las 4 caras y las manos pegando. En mobile se pierde la cara de la nena (queda tapada por el panel) pero se ve con claridad la cara de uno de los chicos a la izquierda y toda la acción de pegar — mejora clara respecto a la foto anterior, que en cualquier recorte mostraba sobre todo paisaje.

**Reemplaza:** `manos-arcilla.jpg` (chicos junto a un mástil, ver entrada anterior) para la slide de "Que cada niño explore, cree y encuentre su propia voz."

---

## 2026-07-10 — Se rotan las fotos entre "Mostramos lo que las manos..." y "Desde 2009..."

**Qué:** el usuario pidió intercambiar las fotos de esas dos slides: quería las huellas de manos pintadas (`manos-pintadas.jpg`) en la frase "Mostramos lo que las manos y la imaginación construyen juntas" (encaja mejor de forma literal — son literalmente manos), y la foto de la exhibición (`manos-imaginacion.jpg`, chicos mirando sus propias obras) pasó a "Desde 2009 llevamos arte a escuelas públicas...".

**Cómo se hizo:** solo se intercambiaron los campos `image` y `caption` entre esas dos entradas de `data/banner.ts` — mismo título, CTA y color de panel en cada slide, no se tocó ningún archivo de imagen.

**Reemplaza:** la asignación de imágenes de esas dos slides, registrada en la entrada del 2026-07-10 sobre las 3 fotos nuevas del banner.

---

## 2026-07-10 — Más tiempo por slide en el banner

**Qué:** el usuario reportó que el carrusel cambiaba demasiado rápido, no le daba tiempo a leer el texto de cada slide.

**Cómo se arregló:** en `BannerCarousel.tsx`, el `setInterval` que rota las slides pasó de 6500ms a 8500ms (+2s, tal como pidió).

**Reemplaza:** nada.

---

## 2026-07-10 — Orden de las tarjetas de Proyectos: de más reciente a más antiguo

**Qué:** el usuario pidió ordenar las tarjetas de la sección Proyectos de más reciente a más antiguo.

**Problema:** de los 8 proyectos, solo "Mascaradas" tiene año confirmado en las fuentes (`docs/brief.md`, `data/*.docx`): 2009-2012. Los otros 7 no tienen año documentado en ningún lado — inventar un orden cronológico para ellos hubiera violado la regla del proyecto de no inventar datos institucionales. Se le preguntó al usuario cómo proceder.

**Decisión del usuario:** "Cobijo" (el proyecto más nuevo mencionado en el material — colaboración con RISD) va primero; "Mascaradas" (único con año confirmado, el más antiguo) va último; los 6 proyectos restantes, sin fecha conocida, se dejan en su mismo orden relativo original (no se inventa un orden para ellos).

**Cómo se hizo:** se reordenó el array `projects` en `data/projects.ts`. Nuevo orden: Cobijo, Estrellas, Conquistando mi mundo, Circo, Arte para la apropiación de los imaginarios, Contornear y Ser Contorneado, La luz y la oscuridad, Mascaradas. Se agregó un comentario en el archivo explicando el criterio, para que quede claro si en el futuro se consigue el año real de los proyectos del medio.

**Reemplaza:** el orden anterior (Mascaradas primero) de `data/projects.ts`.

---

## 2026-07-10 — La sección Galería pasa de tarjetas clicables a un banner con fundido automático

**Qué:** el usuario pidió cambiar la interacción de la sección Galería: en vez de la grilla de 6 tarjetas donde cada una rotaba una foto al hacer click, quería un banner con una sola imagen que va cambiando sola cada 5 segundos, con fundido (fade) entre una y otra, en loop infinito, y que se pause mientras el mouse o el dedo estén sobre la imagen.

**Cómo se hizo:** se creó `GalleryBanner.tsx` (reemplaza a `GalleryClicker.tsx`, que se borró por quedar sin uso) — todas las fotos del pool se apilan superpuestas (`fill` + `absolute`) dentro de un contenedor `aspect-video`, y solo la de índice `current` tiene `opacity-100` (el resto `opacity-0`), con `transition-opacity duration-1000` para el fundido. Un `setInterval` de 5000ms avanza el índice en loop (`% pool.length`). Pausa: `onMouseEnter`/`onTouchStart` ponen `paused=true` (el `useEffect` del intervalo no se registra mientras `paused` es true), `onMouseLeave`/`onTouchEnd`/`onTouchCancel` lo vuelven a poner en `false`. Usa el mismo `galleryPool` de 14 fotos que ya estaba curado en `data/gallery.ts`, sin cambios ahí.

**Reemplaza:** `GalleryClicker.tsx` (grilla de 6 tarjetas clicables, cada una elegía una foto al azar del pool al tocarla).

---

## 2026-07-10 — Ritmo más rápido en mobile para el banner de Galería

**Qué:** el usuario probó `GalleryBanner` y pidió que en mobile el cambio de foto sea cada 2 segundos en vez de 5 (en desktop está bien así); aclaró que igual se puede pausar con el dedo si alguien quiere quedarse mirando una foto.

**Cómo se hizo:** el intervalo fijo de 5000ms pasó a ser dinámico: se detecta el breakpoint `sm` de Tailwind (640px) con `window.matchMedia("(max-width: 639px)")` y por debajo de eso se usa 2000ms, por encima 5000ms. Se escucha el evento `change` del media query para que si la pantalla cambia de tamaño (rotar el celular, por ejemplo) el ritmo se ajuste solo.

**Reemplaza:** el intervalo fijo de 5000ms para todas las pantallas, de la entrada anterior.

---

## 2026-07-10 — Corrección: 2 segundos en todas las pantallas, no solo mobile

**Qué:** el usuario aclaró que quería los 2 segundos en todas las pantallas, no solo en mobile como se había entendido en la entrada anterior.

**Cómo se arregló:** se sacó la lógica de `matchMedia`/breakpoint; `GalleryBanner` vuelve a tener un único `INTERVAL_MS = 2000` fijo, igual en desktop y mobile.

**Reemplaza:** la lógica responsive (`DESKTOP_INTERVAL_MS`/`MOBILE_INTERVAL_MS` vía `matchMedia`) de la entrada anterior.

---

## 2026-07-10 — Corrección: pausa por click, no por hover/touch

**Qué:** el usuario aclaró que la pausa no tiene que activarse al pasar el mouse o tocar con el dedo (eso pausaba sin querer con solo mirar la sección en el celular, donde el dedo suele estar sobre la pantalla), sino con un click/tap explícito sobre la imagen. Sin click, el loop tiene que seguir solo cada 2 segundos.

**Cómo se arregló:** en `GalleryBanner.tsx` se sacaron los handlers `onMouseEnter`/`onMouseLeave`/`onTouchStart`/`onTouchEnd`/`onTouchCancel`. El contenedor pasó de `div` a `button` (mejor semántica y accesible por teclado) con un solo `onClick` que alterna `paused` (toggle: un click pausa, el siguiente reanuda). Se agregó un indicador chico ("Pausado — click para seguir") que aparece solo mientras está pausado, para que quede claro que el click funcionó.

**Reemplaza:** la pausa por `onMouseEnter`/`onTouchStart` de las dos entradas anteriores sobre `GalleryBanner`.
