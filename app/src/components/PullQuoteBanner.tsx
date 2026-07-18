import Reveal from "@/components/Reveal";

export default function PullQuoteBanner({ text }: { text: string }) {
  return (
    <div className="overflow-hidden px-6 py-10 sm:py-14">
      <Reveal>
        <p className="mx-auto max-w-4xl -rotate-1 text-center font-heading text-3xl font-bold text-foreground sm:text-5xl">
          {text}
        </p>
      </Reveal>
    </div>
  );
}
