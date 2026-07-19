"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WavePanel from "@/components/WavePanel";
import { bannerSlides } from "@/data/banner";

function panelBoxClass(side: "left" | "right" = "left") {
  const sideClass = side === "right" ? "right-0" : "left-0";
  return `absolute ${sideClass} top-0 h-[58%] w-full sm:h-full sm:w-[50%]`;
}

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % bannerSlides.length);
    }, 8500);
    return () => clearInterval(id);
  }, []);

  function prev() {
    setCurrent((c) => (c - 1 + bannerSlides.length) % bannerSlides.length);
  }

  function next() {
    setCurrent((c) => (c + 1) % bannerSlides.length);
  }

  return (
    <section
      id="inicio"
      className="relative h-[620px] w-full overflow-hidden sm:h-[480px] lg:h-[560px]"
    >
      {bannerSlides.map((slide, index) => {
        const isRight = slide.panelSide === "right";
        const panelBox = panelBoxClass(slide.panelSide);
        return (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current
                ? "z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.caption ?? slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />

            <WavePanel
              orientation="horizontal"
              colorClassName={slide.panelColorClassName}
              className={`${panelBox} sm:hidden`}
            />
            <WavePanel
              orientation="vertical"
              colorClassName={slide.panelColorClassName}
              flip={isRight}
              className={`hidden sm:block ${panelBox}`}
            />

            <div
              className={`${panelBox} flex flex-col justify-center gap-5 p-6 sm:py-10 sm:pr-10 ${
                isRight ? "sm:pl-[18%]" : "sm:pl-10"
              }`}
            >
              <h2 className="max-w-[75%] font-heading text-2xl leading-tight font-bold text-foreground sm:max-w-[70%] sm:text-3xl lg:text-4xl">
                {slide.title}
              </h2>
              <Link
                href={slide.cta.href}
                className="inline-flex w-fit items-center rounded-lg bg-foreground px-5 py-3 font-heading text-sm font-bold text-background hover:bg-foreground/90"
                {...(/^https?:\/\//.test(slide.cta.href)
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {slide.cta.label}
              </Link>
            </div>

            {slide.caption && (
              <p
                className={`absolute right-4 bottom-4 left-4 z-20 text-sm text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] sm:max-w-xs ${
                  isRight
                    ? "sm:right-auto sm:left-10 sm:text-left"
                    : "sm:right-10 sm:left-auto sm:text-right"
                }`}
              >
                {slide.caption}
              </p>
            )}
          </div>
        );
      })}

      <button
        type="button"
        onClick={prev}
        aria-label="Imagen anterior"
        className="absolute top-1/2 left-2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground hover:bg-background sm:left-4"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Imagen siguiente"
        className="absolute top-1/2 right-2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground hover:bg-background sm:right-4"
      >
        ›
      </button>

      <div className="absolute top-4 right-4 z-20 hidden gap-2 rounded-full bg-black/30 px-3 py-2 sm:flex">
        {bannerSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Ir a la imagen ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
