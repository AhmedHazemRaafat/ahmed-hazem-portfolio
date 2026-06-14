"use client";

import { motion } from "framer-motion";
import { Code2, Globe, GraduationCap, Wrench } from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";

const highlights = [
  {
    icon: GraduationCap,
    title: "CS Graduate",
    description:
      "Strong academic foundation in algorithms, software engineering, and systems thinking.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Wrench,
    title: "Implementation Engineer",
    description:
      "Experienced in deploying real solutions — from API integrations to workflow automation.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Code2,
    title: "Builder Mindset",
    description:
      "Passionate about turning ideas into working software that people actually use.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Germany Journey",
    description:
      "Preparing for Master's studies in Germany, building tools that support academic and personal growth.",
    color: "from-emerald-500 to-teal-500",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 section-glow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Introduction"
          title="About Me"
          subtitle="Engineering practical solutions at the intersection of software, data, and real-world impact."
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m{" "}
              <span className="font-medium text-foreground">Ahmed Hazem</span>,
              a Computer Science graduate and Implementation Engineer with a
              passion for building software that makes a tangible difference.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground/90">
              My work spans full-stack development, API integrations, automation
              pipelines, and AI-assisted tooling. Currently preparing for
              Master&apos;s studies in Germany, I combine technical depth with a
              practical, problem-first approach.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground/90">
              This portfolio showcases the projects I&apos;ve built — each
              addressing a real need, from academic planning to professional
              productivity.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["TypeScript", "React", "Node.js", "Python", "Three.js"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group glass-card relative overflow-hidden p-6 transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              >
                <div
                  className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-2.5 shadow-lg`}
                >
                  <item.icon className="size-4 text-white" />
                </div>
                <h3 className="font-display mb-2 font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
