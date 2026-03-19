"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/common/Icon";
import { SectionTitle } from "@/components/common/SectionTitle";
import type { Skill } from "@/types/portfolio";
import type { CSSProperties } from "react";

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [query, setQuery] = useState("");

  const filteredSkills = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return skills;
    }

    return skills.filter((skill) => {
      return (
        skill.name.toLowerCase().includes(normalized) ||
        skill.category.toLowerCase().includes(normalized)
      );
    });
  }, [query, skills]);

  return (
    <section id="skills" className="section-block">
      <div className="section-container">
        <SectionTitle
          title="Technical Arsenal"
          subtitle="Search through my repertoire of languages, frameworks, and tools."
        />

        <div className="mx-auto mt-10 max-w-3xl">
          <label className="search-shell">
            <Icon name="search" className="h-5 w-5 text-sky-600" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              placeholder="Search skills (e.g., React, Python, AWS)..."
              className="search-input"
              aria-label="Search technical skills"
            />
            {query ? (
              <button
                type="button"
                className="search-clear"
                onClick={() => setQuery("")}
                aria-label="Clear skill search"
              >
                Clear
              </button>
            ) : null}
          </label>
        </div>

        <div className="mt-14">
          {filteredSkills.length === 0 ? (
            <div className="glass-card mx-auto max-w-2xl p-10 text-center text-slate-600">
              <p className="text-lg font-semibold">No skills matched your search.</p>
            </div>
          ) : (
            <div className="skills-grid" role="list" aria-label="Technical skills">
              {filteredSkills.map((skill) => (
                <article
                  key={skill.name}
                  role="listitem"
                  className="hex-skill-card"
                  style={{ "--skill-accent": skill.accent } as CSSProperties}
                >
                  <div className="hex-skill-content">
                    <span className="hex-skill-icon" aria-hidden="true">
                      {skill.shortLabel}
                    </span>
                    <h3 className="hex-skill-name">{skill.name}</h3>
                    <p className="hex-skill-category">{skill.category}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
