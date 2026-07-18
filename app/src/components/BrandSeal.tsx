import Image from "next/image";
import Reveal from "@/components/Reveal";
import Floating from "@/components/Floating";

export default function BrandSeal() {
  return (
    <div className="px-6 py-6 sm:py-8">
      <Reveal className="mx-auto flex max-w-md flex-col items-center gap-3 text-center">
        <Floating distance={6} duration={4}>
          <Image
            src="/logo/arteconvoz.png"
            alt="Arte Con Voz"
            width={140}
            height={140}
            className="h-24 w-24 sm:h-32 sm:w-32"
          />
        </Floating>

        <p className="text-sm font-bold tracking-[0.3em] text-foreground-soft uppercase">
          Fundación
        </p>

        <Image
          src="/logo/texto_logo_arteconvoz.png"
          alt="arteconvoz"
          width={2172}
          height={724}
          className="h-14 w-auto sm:h-20"
        />

        <p className="max-w-sm text-sm font-semibold tracking-wide text-foreground-soft uppercase">
          Cambiando paradigmas en la educación a través del arte
        </p>
      </Reveal>
    </div>
  );
}
