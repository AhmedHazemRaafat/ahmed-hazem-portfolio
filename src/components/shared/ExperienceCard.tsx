"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

import type { Experience } from "@/types/portfolio";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative pl-10"
    >
      <div className="absolute top-0 left-3 h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
      <div className="absolute top-6 left-0 flex size-7 items-center justify-center rounded-full border border-primary/30 bg-background shadow-lg shadow-primary/10 transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-primary/25">
        <Briefcase className="size-3 text-primary" />
      </div>

      <div className="glass-card p-6 transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-primary/5">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold">
              {experience.role}
            </h3>
            <p className="mt-0.5 text-sm font-medium text-primary">
              {experience.company}
            </p>
          </div>
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            {experience.period}
          </span>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          {experience.description}
        </p>
        <ul className="space-y-2.5">
          {experience.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 text-sm text-foreground/85"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-violet-400 glow-dot" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
