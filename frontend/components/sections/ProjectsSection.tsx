import { GlassCard } from "@/components/common/GlassCard";
import { Icon } from "@/components/common/Icon";
import { SectionTitle } from "@/components/common/SectionTitle";
import type { Project } from "@/types/portfolio";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section-block">
      <div className="section-container">
        <SectionTitle
          title="Featured Projects"
          subtitle="A sample of projects across full-stack engineering, cloud systems, and AI-enabled product development."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <GlassCard key={project.title} className="flex h-full flex-col p-7">
              <div className="project-card-accent" aria-hidden="true" />

              <h3 className="text-2xl font-extrabold tracking-tight text-slate-800">{project.title}</h3>

              <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
                <Icon name="calendar" className="h-4 w-4 text-sky-600" />
                {project.timeframe}
              </p>

              <p className="mt-4 flex-grow leading-relaxed text-slate-700">{project.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <li key={item} className="rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-bold text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-4 text-slate-700">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold transition hover:text-sky-600"
                  >
                    <Icon name="github" className="h-4 w-4" />
                    Code
                  </a>
                ) : null}

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold transition hover:text-sky-600"
                  >
                    <Icon name="externalLink" className="h-4 w-4" />
                    Live
                  </a>
                ) : null}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
