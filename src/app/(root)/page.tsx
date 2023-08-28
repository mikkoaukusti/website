import { db } from "@/lib/db";
import { ProjectCard } from "@/components/project-card";

export default async function RootPage() {
  const projects = await db.project.findMany();

  return (
    <>
      <section className="flex flex-col items-start justify-center gap-y-2">
        <span className="text-xs text-neutral-500 font-medium">
          Health Technology / Software Engineer
        </span>
        <span className="text-sm text-neutral-600 font-medium">
          Hi, I&apos;m 23y/o fourth-year ICT student from Turku! I enjoy
          traveling and building things. In my free time, I focus on modern
          full-stack web development.
        </span>
        <span className="text-sm text-neutral-600 font-medium">
          Currently, I&apos;m searching for a thesis work either in Finland or
          abroad.{" "}
          <a
            href="https://linkedin.com/in/mikko-jokipuu-a22b27264/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 border-b hover:border-b-neutral-600"
          >
            Hit me up!
          </a>
        </span>
      </section>
      <section className="mt-10">
        <span className="text-xs text-neutral-500 font-medium">
          Notable projects
        </span>
        <div className="mt-2 grid gap-y-2 md:grid-cols-2 md:gap-x-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              url={project.url}
            />
          ))}
        </div>
      </section>
    </>
  );
}
