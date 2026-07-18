# Manual de marca — Arte Con Voz

## 1. Concepto general

**Arte Con Voz** es una fundación dedicada al arte y la educación. Su identidad visual debe transmitir una combinación de sensibilidad, creatividad, comunidad y confianza institucional.

La marca no debería verse solamente infantil, aunque trabaje con niños. Debe sentirse cercana, artística y humana, pero también seria y confiable para escuelas, familias, artistas, aliados y posibles donantes.

### Idea central de marca

> Arte, educación y comunidad para que cada niño encuentre su voz.

### Conceptos clave

- **Arte como expresión:** cada niño tiene una mirada propia y una voz para compartir.
- **Educación como oportunidad:** el arte abre puertas, desarrolla sensibilidad, creatividad y confianza.
- **Comunidad como ronda:** el logo transmite encuentro, diversidad, cuidado y construcción colectiva.
- **Naturaleza y mundo compartido:** la fundación trabaja también la idea de convivir y respetar aquello que forma parte de nuestro entorno.

---

## 2. Personalidad de marca

La marca debe sentirse:

- Cercana.
- Creativa.
- Sensible.
- Educativa.
- Comunitaria.
- Alegre.
- Inclusiva.
- Confiable.

Debe evitar sentirse:

- Fría o corporativa.
- Excesivamente infantil.
- Desordenada.
- Improvisada.
- Demasiado institucional o burocrática.

---

## 3. Tipografía — opción artística

Para esta opción se propone una combinación tipográfica más expresiva y artística que la opción institucional, pero manteniendo buena legibilidad.

## Tipografía para títulos

### **Quicksand**

Usar Quicksand para títulos, frases destacadas, llamadas a la acción y bloques breves.

**Por qué funciona:**

- Tiene formas redondeadas, amables y cercanas.
- Dialoga bien con el logo, que está compuesto por figuras orgánicas y redondeadas.
- Aporta un tono más creativo y lúdico sin perder claridad.
- Es adecuada para una fundación vinculada con arte, infancia y educación.

### Usos recomendados

- H1: Quicksand Bold / 700
- H2: Quicksand Bold / 700
- H3: Quicksand SemiBold / 600
- Botones: Quicksand Bold / 700
- Frases destacadas: Quicksand SemiBold / 600

---

## Tipografía para textos

### **Source Sans 3**

Usar Source Sans 3 para párrafos, textos largos, descripciones de proyectos, navegación secundaria y formularios.

**Por qué funciona:**

- Es muy legible en pantalla.
- Equilibra el carácter más expresivo de Quicksand.
- Aporta orden, claridad y profesionalismo.
- Permite que la web se sienta seria sin volverse rígida.

### Usos recomendados

- Párrafos: Source Sans 3 Regular / 400
- Bajadas: Source Sans 3 Regular / 400 o SemiBold / 600
- Textos pequeños: Source Sans 3 Regular / 400
- Formularios: Source Sans 3 Regular / 400

---

## 4. Jerarquía tipográfica sugerida para web

```css
h1 {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1.05;
}

h2 {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.1;
}

h3 {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  line-height: 1.2;
}

body {
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.65;
}

button,
.cta {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
}
```

---

## 5. Paleta cromática

El logo ya contiene muchos colores vivos. Por eso, la identidad debe equilibrarse con una base cálida y tranquila.

## Colores base

### Fondo principal

**Marfil cálido**  
`#FFF8EF`

Uso:
- Fondo general de la web.
- Secciones amplias.
- Tarjetas claras.

Este color es más humano y sensible que el blanco puro.

### Texto principal

**Azul petróleo oscuro**  
`#263B3B`

Uso:
- Títulos.
- Menú.
- Textos importantes.
- Botones principales.

Aporta profundidad, confianza y calma.

### Texto secundario

**Gris verdoso**  
`#5F6F6A`

Uso:
- Bajadas.
- Descripciones.
- Textos de apoyo.
- Fechas, datos secundarios o etiquetas.

---

## Colores acento tomados del logo

Usar estos colores como acentos, no como base dominante.

| Color | Código | Uso sugerido |
|---|---:|---|
| Rojo | `#D6001C` | Detalles, íconos, énfasis puntuales |
| Amarillo | `#FFD21A` | Destacados alegres, fondos pequeños |
| Naranja | `#F26A13` | Botones secundarios, llamadas cálidas |
| Verde | `#A7C957` | Naturaleza, educación, cuidado |
| Azul | `#168AAD` | Información, enlaces, confianza |
| Violeta | `#5A3568` | Arte, sensibilidad, profundidad |

### Regla de uso

No usar todos los colores al mismo tiempo en cada sección. El logo ya cumple esa función multicolor.

Recomendación:

- Usar fondo marfil.
- Usar texto azul petróleo.
- Elegir uno o dos colores acento por sección.
- Reservar la paleta completa para momentos especiales: portada, galería, impacto o piezas institucionales.

---

## 6. Variables CSS sugeridas

```css
:root {
  --color-bg: #FFF8EF;
  --color-text: #263B3B;
  --color-text-soft: #5F6F6A;

  --color-red: #D6001C;
  --color-yellow: #FFD21A;
  --color-orange: #F26A13;
  --color-green: #A7C957;
  --color-blue: #168AAD;
  --color-purple: #5A3568;

  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;

  --shadow-soft: 0 12px 30px rgba(38, 59, 59, 0.08);
}
```

---

## 7. Uso del logo

El logo representa una ronda de figuras de colores. Debe funcionar como símbolo de comunidad, diversidad, juego, escucha y construcción colectiva.

## Versión principal

Logo multicolor sobre fondo claro o marfil.

## Usos correctos

- Sobre fondo `#FFF8EF` o blanco.
- Sobre fotografías con una placa clara detrás.
- En espacios con suficiente aire alrededor.
- En tamaños donde se reconozcan las figuras y la ronda.
- Como símbolo principal en portada, header y footer.

## Usos incorrectos

- No deformar.
- No rotar sin criterio.
- No aplicar sombras fuertes.
- No poner sobre fondos muy coloridos.
- No usar en tamaños tan chicos que pierda lectura.
- No combinar con demasiados elementos gráficos alrededor.

## Área de seguridad

Dejar alrededor del logo un margen libre equivalente, como mínimo, al diámetro de una de las cabezas del símbolo.

---

## 8. Estilo gráfico

## Recursos visuales recomendados

- Rondas.
- Manos.
- Manchas de pintura.
- Líneas dibujadas a mano.
- Formas orgánicas.
- Texturas suaves de papel.
- Obras reales de los niños.
- Collages simples con fotografías y color.

## Recursos a evitar

- Íconos demasiado genéricos.
- Estética corporativa fría.
- Fondos saturados con muchos colores a la vez.
- Ilustraciones tipo jardín de infantes demasiado literales.
- Exceso de efectos, sombras o animaciones.

---

## 9. Estilo fotográfico

La fotografía debe transmitir verdad, proceso y comunidad.

## Imágenes recomendadas

- Niños dibujando, pintando, construyendo o explorando materiales.
- Manos trabajando.
- Talleres en escuelas.
- Obras producidas por los chicos.
- Artistas y docentes acompañando procesos.
- Momentos de ronda, escucha y participación.
- Detalles de materiales: témperas, pinceles, papeles, cartones, máscaras, telas.

## Tratamiento visual

- Luz natural.
- Colores cálidos.
- Encuadres cercanos y sensibles.
- Fondos reales, no excesivamente producidos.
- Evitar imágenes de stock demasiado perfectas.

---

## 10. Tono de comunicación

La voz de Arte Con Voz debe ser clara, sensible y cercana.

## Cómo debe sonar

- Humana.
- Poética, pero comprensible.
- Educativa, pero no académica.
- Emotiva, pero no exagerada.
- Institucional, pero no fría.

## Ejemplos de tono correcto

> Creemos que el arte abre espacios donde cada niño puede mirar, crear y decir algo propio.

> En cada taller, el arte se convierte en una forma de explorar, compartir y construir comunidad.

> Trabajamos junto a escuelas públicas para acercar experiencias artísticas que despierten imaginación, expresión y confianza.

## Frases a evitar

Evitar textos demasiado abstractos o técnicos, por ejemplo:

> Transformamos paradigmas educativos desde una perspectiva transdisciplinaria.

Mejor decir:

> A través del arte, los chicos descubren nuevas maneras de mirar el mundo y expresarse.

---

## 11. Mensajes clave de marca

## Frase institucional breve

> Arte Con Voz acerca experiencias artísticas a escuelas públicas para que los niños exploren, creen y encuentren nuevas formas de expresarse.

## Frase emocional

> Cada niño tiene una voz. El arte puede ayudar a descubrirla.

## Frase comunitaria

> Creamos espacios de arte, educación y encuentro junto a escuelas, artistas y comunidades.

## Frase para llamados a la acción

> Sumate a construir más espacios de arte en la escuela pública.

---

## 12. Componentes web sugeridos

## Botón principal

Fondo: `#263B3B`  
Texto: `#FFF8EF`  
Tipografía: Quicksand Bold  
Borde: redondeado  

Textos posibles:

- Conocé nuestros proyectos
- Sumate
- Quiero colaborar
- Contactanos

## Botón secundario

Fondo: transparente  
Borde: `#263B3B`  
Texto: `#263B3B`  

Textos posibles:

- Ver impacto
- Conocer la historia
- Ver galería

## Tarjetas de proyectos

Cada tarjeta puede incluir:

- Imagen del proyecto.
- Nombre del proyecto.
- Bajada corta.
- Color acento.
- Botón: “Ver más”.

Ejemplo:

```txt
Mascaradas
Máscaras, juego, música y movimiento para exteriorizar, comunicar y compartir con otros.
```

## Bloques de impacto

Usar números grandes con Quicksand Bold.

Ejemplo:

```txt
+15 escuelas
+20 maestros artistas
+1000 niños
Desde 2009
```

Importante: validar los datos antes de publicar, porque el material disponible menciona cifras diferentes sobre cantidad de niños alcanzados.

---

## 13. Dirección visual para la web

## Sensación general

La web debe sentirse como un espacio luminoso, amable y artístico. No debe parecer una ONG genérica ni una página escolar básica.

## Criterios de diseño

- Mucho aire visual.
- Fondos cálidos.
- Tipografía redondeada en títulos.
- Fotografías reales.
- Colores del logo usados con moderación.
- Formas orgánicas como separadores o fondos suaves.
- Navegación simple.

## Menú recomendado

```txt
Inicio | Quiénes somos | Qué hacemos | Proyectos | Impacto | Sumate | Contacto
```

---

## 14. Aplicaciones de marca

## Web

- Logo en header.
- Fondo marfil.
- Títulos en Quicksand.
- Textos en Source Sans 3.
- Botones azul petróleo.
- Colores del logo en detalles.

## Instagram

- Placas con fondo marfil.
- Títulos grandes en Quicksand.
- Fotos reales de talleres.
- Colores acento por serie.
- Uso de frases breves y sensibles.

## Presentaciones

- Portadas limpias con logo grande.
- Una idea por slide.
- Fotografías reales.
- Números de impacto destacados.
- No saturar con demasiados colores.

## Papelería o documentos

- Header con logo.
- Títulos en azul petróleo.
- Separadores finos en colores acento.
- Pie con contacto e Instagram.

---

## 15. Recomendación final

La identidad de Arte Con Voz debería verse **alegre pero no infantil**, **artística pero clara**, **sensible pero confiable**.

La opción artística con **Quicksand + Source Sans 3** permite que la marca tenga más personalidad visual que una identidad puramente institucional, sin perder profesionalismo.

La clave es que el logo sea el gran elemento expresivo de color, mientras que la web y las piezas gráficas le den aire, orden y calidez.

---

## 16. Instrucciones para Claude Code

Usar este manual como referencia para implementar la identidad visual de la web.

### Reglas de implementación

1. Usar **Quicksand** para títulos y botones.
2. Usar **Source Sans 3** para textos largos.
3. Usar fondo principal `#FFF8EF`.
4. Usar texto principal `#263B3B`.
5. Usar los colores del logo solo como acentos.
6. Mantener bordes redondeados y formas orgánicas.
7. Evitar estética corporativa fría.
8. Evitar saturar la web con todos los colores al mismo tiempo.
9. Priorizar fotografías reales y obras de los chicos.
10. Mantener una experiencia simple, clara y emocional.

### Import de Google Fonts sugerido

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### CSS base sugerido

```css
body {
  margin: 0;
  background: #FFF8EF;
  color: #263B3B;
  font-family: 'Source Sans 3', sans-serif;
}

h1,
h2,
h3,
button,
.cta {
  font-family: 'Quicksand', sans-serif;
}

a {
  color: #168AAD;
}

.primary-button {
  background: #263B3B;
  color: #FFF8EF;
  border-radius: 999px;
  padding: 0.9rem 1.4rem;
  border: none;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
}

.secondary-button {
  background: transparent;
  color: #263B3B;
  border: 1.5px solid #263B3B;
  border-radius: 999px;
  padding: 0.9rem 1.4rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
}
```
