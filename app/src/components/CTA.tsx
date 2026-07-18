import Link from "next/link";
import { ReactNode } from "react";

type CTAProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function CTA({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-brand-red text-white hover:bg-brand-red/90"
      : "bg-transparent text-foreground border-2 border-foreground/20 hover:border-foreground/40";

  // Los links externos (ej. Instagram) abren en pestaña nueva para que la
  // web nunca se cierre y la persona pueda volver.
  const isExternal = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </Link>
  );
}
