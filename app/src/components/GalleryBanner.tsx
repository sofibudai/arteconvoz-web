"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const INTERVAL_MS = 2000;

export default function GalleryBanner({ pool }: { pool: string[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % pool.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, pool.length]);

  return (
    <button
      type="button"
      aria-label={paused ? "Reanudar la galería" : "Pausar la galería"}
      onClick={() => setPaused((p) => !p)}
      className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl bg-foreground/5"
    >
      {pool.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Taller, obra o proceso de Arte Con Voz"
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {paused && (
        <span className="absolute right-3 bottom-3 z-10 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white">
          Pausado — click para seguir
        </span>
      )}
    </button>
  );
}
