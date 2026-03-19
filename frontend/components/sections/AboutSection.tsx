import { GlassCard } from "@/components/common/GlassCard";
import { Icon } from "@/components/common/Icon";
import { SectionTitle } from "@/components/common/SectionTitle";
import type { AboutData } from "@/types/portfolio";

interface AboutSectionProps {
  about: AboutData;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightTerms(text: string, terms: string[]) {
  if (terms.length === 0) {
    return text;
  }

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");

  return text.split(pattern).map((segment, index) => {
    const matchedTerm = terms.find((term) => term.toLowerCase() === segment.toLowerCase());
    if (!matchedTerm) {
      return <span key={`${segment}-${index}`}>{segment}</span>;
    }

    return (
      <strong key={`${segment}-${index}`} className="font-extrabold text-sky-600">
        {segment}
      </strong>
    );
  });
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="section-block">
      <div className="section-container">
        <SectionTitle title="About Me" />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-7">
            <div className="mx-auto flex w-44 justify-center rounded-full border-4 border-white/70 bg-gradient-to-br from-slate-300 to-slate-500 p-1 shadow-[0_16px_32px_rgba(15,23,42,0.25)] lg:mx-0">
              <div className="h-40 w-40 rounded-full bg-gradient-to-br from-slate-400 via-slate-300 to-slate-500" />
            </div>

            <GlassCard className="p-8 text-lg leading-relaxed text-slate-700">
              <div className="space-y-6">
                {about.bio.map((paragraph) => (
                  <p key={paragraph} className="text-pretty">
                    {highlightTerms(paragraph, about.highlightTerms)}
                  </p>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="space-y-4">
            {about.softSkills.map((item) => (
              <GlassCard key={item.title} className="p-5">
                <div className="flex items-start gap-4">
                  <div className="icon-tile mt-1">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-slate-800">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
