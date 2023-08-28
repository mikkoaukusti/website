export default function RootPage() {
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
    </>
  );
}
