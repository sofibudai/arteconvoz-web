import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionProps = {
  id: string;
  title?: string;
  eyebrow?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({
  id,
  title,
  eyebrow,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-10 sm:py-14 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          {eyebrow && (
            <p className="mb-1.5 text-sm font-semibold tracking-wide text-brand-orange uppercase">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mb-5 text-4xl font-bold text-foreground sm:text-5xl">
              {title}
            </h2>
          )}
        </Reveal>
        <Reveal delay={0.1}>{children}</Reveal>
      </div>
    </section>
  );
}
