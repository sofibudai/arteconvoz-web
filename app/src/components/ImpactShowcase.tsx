import Image from "next/image";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";
import Floating from "@/components/Floating";

type ImpactBlock = {
  title: string;
  description: string;
  image: string;
};

export default function ImpactShowcase({
  eyebrow,
  title,
  intro,
  blocks,
  cierre,
}: {
  eyebrow: string;
  title: string;
  intro?: string[];
  blocks: ImpactBlock[];
  cierre?: string;
}) {
  return (
    <div>
      <WaveDivider colorClassName="text-brand-violet/15" />
      <section id="impacto" className="scroll-mt-20 bg-brand-violet/15 px-6 py-6 sm:py-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="mb-1.5 text-sm font-semibold tracking-wide text-brand-orange uppercase">
              {eyebrow}
            </p>
            <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
              {title}
            </h2>
            {intro && intro.length > 0 && (
              <div className="mb-8 flex flex-col gap-3 text-foreground-soft">
                {intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            )}
          </Reveal>

          <div className="flex flex-col gap-10">
            {blocks.map((block, index) => (
              <Reveal
                key={block.title}
                delay={index * 0.1}
                className={`flex flex-col items-center gap-8 sm:flex-row ${
                  index % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <Floating
                  distance={8}
                  duration={4 + index * 0.6}
                  delay={index * 0.3}
                  className="relative aspect-square w-48 shrink-0 overflow-hidden rounded-full sm:w-56"
                >
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </Floating>
                <div className="text-center sm:text-left">
                  <h3 className="font-heading text-xl font-bold">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-foreground-soft">
                    {block.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {cierre && (
            <Reveal delay={blocks.length * 0.1}>
              <p className="mt-10 text-center font-heading text-lg font-bold text-foreground">
                {cierre}
              </p>
            </Reveal>
          )}
        </div>
      </section>
      <WaveDivider colorClassName="text-brand-violet/15" flip />
    </div>
  );
}
