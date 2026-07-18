// Selección curada de una primera pasada sobre las 49 fotos en
// public/images/galeria/ (ver docs/decisiones.md, "Assets de hero y galería
// cargados, e interacción de galería definida"). Es un primer corte a mano,
// no las 49 — el resto queda disponible en la carpeta para sumar o cambiar
// más adelante.
export const galleryPool = [
  "cimg5764.jpg",
  "cimg5788.jpg",
  "7-5-13-9.jpg",
  "7-5-13-4.jpg",
  "img_5918.jpg",
  "img_5940.jpg",
  "img_6013.jpg",
  "img_6055.jpg",
  "dsc_0250.jpg",
  "dsc_0075.jpg",
  "escuela-12-may-jun-jul-2013-36.jpg",
  "1-3.jpg",
  "1-84.jpg",
  "1-35.jpg",
].map((file) => `/images/galeria/${file}`);
