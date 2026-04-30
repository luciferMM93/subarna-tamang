import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex min-h-[320px] flex-col border border-line bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
        <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
          {project.badge}
        </span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#d5deeb] px-3 py-1 text-xs font-medium text-navy"
          >
            {tag}
          </span>
        ))}
      </div>
      <ul className="mt-6 space-y-3 text-sm leading-6 text-neutral-700">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {project.documents?.length ? (
        <div className="mt-auto flex flex-col gap-2 pt-8">
          {project.documents.map((document) => (
            <a
              key={document.href}
              href={document.href}
              download
              aria-label={`${document.label} for ${project.title}`}
              className="focus-ring text-sm font-semibold text-navy transition hover:text-[#142f59]"
            >
              {document.label}
            </a>
          ))}
        </div>
      ) : (
        <a
          href="#contact"
          className="focus-ring mt-auto pt-8 text-sm font-medium text-neutral-500 transition hover:text-navy"
        >
          Documentation available on request
        </a>
      )}
    </article>
  );
}
