import Image from "next/image";
import { existsSync } from "fs";
import { join } from "path";
import { Project } from "@/data/projects";
import AnimatedCard from "@/components/AnimatedCard";

const PLACEHOLDER_COLORS = [
  "bg-brand-red",
  "bg-brand-green",
  "bg-brand-blue",
  "bg-brand-yellow",
  "bg-brand-orange",
  "bg-brand-violet",
];

function hasRealImage(publicPath: string) {
  return existsSync(join(process.cwd(), "public", publicPath));
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const color = PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length];
  const imageReady = hasRealImage(project.image);

  return (
    <AnimatedCard className="flex cursor-default flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-white/40">
      <div className={`relative aspect-[4/3] w-full ${imageReady ? "bg-foreground/5" : color}`}>
        {imageReady ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-heading text-4xl font-bold text-white/90">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-heading text-lg font-bold">{project.title}</h3>
          {project.years && (
            <span className="shrink-0 text-xs text-foreground-soft">
              {project.years}
            </span>
          )}
        </div>
        {project.subtitle && (
          <p className="text-sm italic text-foreground-soft">
            {project.subtitle}
          </p>
        )}
        <p className="text-sm text-foreground-soft">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-foreground-soft"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </AnimatedCard>
  );
}
