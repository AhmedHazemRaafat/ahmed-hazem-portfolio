"use client";

import { ExperienceCard } from "@/components/shared/ExperienceCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative bg-background/30 py-28 backdrop-blur-[2px] section-glow"
    >
      <div className="absolute inset-0 grid-overlay opacity-15" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          subtitle="A journey through engineering, academia, and preparation for what's next."
        />

        <div className="mx-auto max-w-3xl space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
