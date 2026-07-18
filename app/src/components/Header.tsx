"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav, contacto } from "@/data/site";
import Floating from "@/components/Floating";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#inicio" className="flex items-center gap-3">
          <Floating distance={3} duration={3.5}>
            <Image
              src="/logo/arteconvoz.png"
              alt="Arte Con Voz"
              width={36}
              height={36}
              className="h-9 w-9"
            />
          </Floating>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            ARTE CON VOZ
          </span>
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-heading text-xs font-bold tracking-wide text-foreground uppercase hover:text-brand-red"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={contacto.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand-red px-5 py-2.5 font-heading text-xs font-bold tracking-wide text-white uppercase hover:bg-brand-red/90 lg:inline-block"
          >
            Sumate
          </a>

          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-0.5 w-6 bg-foreground" />
            <span className="h-0.5 w-6 bg-foreground" />
            <span className="h-0.5 w-6 bg-foreground" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-foreground/10 bg-background px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="font-heading text-sm font-bold tracking-wide text-foreground uppercase hover:text-brand-red"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={contacto.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-brand-red px-5 py-2.5 font-heading text-sm font-bold tracking-wide text-white uppercase"
                onClick={() => setOpen(false)}
              >
                Sumate
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
