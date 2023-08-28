import type { ProjectCardProps } from "@/types";

export function ProjectCard({
  title,
  description,
  technologies,
  url,
}: ProjectCardProps) {
  return (
    <div className="border p-6 rounded bg-zinc-100">
      <div className="flex flex-col items-start gap-y-4">
        <header className="text-sm text-neutral-700 font-medium">
          {title}
        </header>
        <span className="text-sm text-neutral-600 font-medium">
          {description}
        </span>
        <span className="text-xs text-neutral-500 font-medium">
          {technologies}
        </span>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-600 font-medium border-b hover:border-b-neutral-600"
          >
            Read more &gt;
          </a>
        ) : (
          <span className="text-xs text-neutral-400 font-medium">
            Non-Disclosure Agreement
          </span>
        )}
      </div>
    </div>
  );
}
