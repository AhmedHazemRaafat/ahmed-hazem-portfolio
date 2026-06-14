"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Code, Database, Layers } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { TechBadge } from "@/components/shared/TechBadge";
import { skillCategories } from "@/data/skills";

const categoryIcons: Record<string, typeof Code> = {
  frontend: Brain,
  backend: Database,
  tools: Cloud,
  domains: Layers,
};

const categoryGradients: Record<string, string> = {
  frontend: "from-violet-500/20 to-fuchsia-500/10",
  backend: "from-blue-500/20 to-cyan-500/10",
  tools: "from-emerald-500/20 to-teal-500/10",
  domains: "from-amber-500/20 to-orange-500/10",
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills"
          subtitle="Technologies and domains I work with to deliver end-to-end solutions."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.id] ?? Code;
            const gradient =
              categoryGradients[category.id] ?? "from-primary/20 to-primary/5";

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group glass-card relative overflow-hidden p-7 transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <TechBadge key={skill} label={skill} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
