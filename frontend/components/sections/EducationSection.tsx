import Image from "next/image";
import { GlassCard } from "@/components/common/GlassCard";
import { Icon } from "@/components/common/Icon";
import { SectionTitle } from "@/components/common/SectionTitle";
import type { EducationRecord } from "@/types/portfolio";

interface EducationSectionProps {
  education: EducationRecord;
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="section-block">
      <div className="section-container">
        <SectionTitle title="Education" />

        <GlassCard className="mx-auto mt-12 max-w-4xl p-7 sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <Image
              src="/images/utd-logo.png"
              alt="The University of Texas at Dallas logo"
              width={72}
              height={72}
              className="rounded-2xl border border-slate-200/70 bg-white p-1"
            />

            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
                {education.degree}
              </h3>
              <p className="mt-1 text-lg font-bold text-slate-600">{education.school}</p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <Icon name="calendar" className="h-4 w-4 text-sky-600" />
                  {education.period}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Icon name="mapPin" className="h-4 w-4 text-sky-600" />
                  {education.location}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-7 border-t border-slate-200/70 pt-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
              Relevant Coursework
            </p>

            <ul className="mt-4 grid gap-x-5 gap-y-2 text-sm font-semibold text-slate-700 sm:grid-cols-2">
              {education.coursework.map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
