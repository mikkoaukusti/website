import type { ProjectCardProps } from "@/types";

export function ProjectCard({
  title,
  description,
  technologies,
  url,
}: ProjectCardProps) {
  return (
    <div className="border p-6 rounded bg-zinc-100 dark:bg-[#080808]">
      <div className="flex flex-col items-start gap-y-4">
        <header className="text-sm text-neutral-600 font-medium dark:text-neutral-400">
          {title}
        </header>
        <span className="text-sm text-neutral-500 font-medium dark:text-neutral-500">
          {description}
        </span>
        <span className="text-xs text-neutral-400 font-medium dark:text-neutral-600">
          {technologies}
        </span>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-600 font-medium border-b hover:border-b-neutral-600 dark:text-neutral-400 dark:hover:border-b-neutral-400"
          >
            Read more &gt;
          </a>
        ) : (
          <span className="cursor-default text-xs text-neutral-300 font-medium dark:text-neutral-800">
            Non-Disclosure Agreement
          </span>
        )}
      </div>
    </div>
  );
}
