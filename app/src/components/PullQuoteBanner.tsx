import Reveal from "@/components/Reveal";

export default function PullQuoteBanner({ text }: { text: string }) {
  return (
    <div className="overflow-hidden px-6 pt-16 pb-4 sm:pt-20 sm:pb-6">
      <Reveal>
        <p className="animate-float mx-auto max-w-2xl text-center font-heading text-2xl font-bold text-foreground sm:text-4xl">
          {text}
        </p>
      </Reveal>
    </div>
  );
}
