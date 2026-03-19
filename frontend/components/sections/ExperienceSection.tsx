import Image from "next/image";
import { GlassCard } from "@/components/common/GlassCard";
import { Icon } from "@/components/common/Icon";
import { SectionTitle } from "@/components/common/SectionTitle";
import type { Experience } from "@/types/portfolio";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-block">
      <div className="section-container">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey is focused on resilient, user-centric applications and scalable cloud infrastructure in healthcare and research environments."
        />

        <div className="timeline mt-16">
          {experiences.map((experience) => (
            <article key={experience.id} className="timeline-item">
              <span className="timeline-dot" aria-hidden="true">
                <Icon name="briefcase" className="h-5 w-5" />
              </span>

              <GlassCard className="timeline-card p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/uthealth-logo.png"
                    alt="UTHealth logo"
                    width={58}
                    height={58}
                    className="mt-1 rounded-xl border border-slate-200/70 bg-white p-1"
                  />
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-800">{experience.role}</h3>
                    <p className="text-xl font-bold text-slate-600">{experience.company}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <Icon name="calendar" className="h-4 w-4 text-sky-600" />
                    {experience.period}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Icon name="mapPin" className="h-4 w-4 text-sky-600" />
                    {experience.location}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" aria-hidden="true" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <details className="mt-6 border-t border-slate-200/70 pt-4 text-sm text-slate-600" open>
                  <summary className="cursor-pointer select-none font-bold text-slate-700 transition hover:text-sky-600">
                    More Info
                  </summary>
                  <p className="mt-3 leading-relaxed">{experience.details}</p>
                </details>
              </GlassCard>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
