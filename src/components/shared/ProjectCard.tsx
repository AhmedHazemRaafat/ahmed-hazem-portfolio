"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

import { TechBadge } from "@/components/shared/TechBadge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/types/portfolio";

const ACCENT_GRADIENTS = [
  "from-indigo-500/80 via-violet-500/60 to-purple-600/80",
  "from-blue-500/80 via-cyan-500/50 to-indigo-600/80",
  "from-violet-500/80 via-fuchsia-500/50 to-pink-600/70",
  "from-emerald-500/60 via-teal-500/50 to-cyan-600/70",
  "from-amber-500/50 via-orange-500/40 to-rose-600/60",
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const gradient = ACCENT_GRADIENTS[index % ACCENT_GRADIENTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <Card className="gradient-border relative h-full overflow-hidden border-0 bg-card/80 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
        <div
          className={`relative h-28 bg-gradient-to-br ${gradient} overflow-hidden`}
        >
          <div className="absolute inset-0 grid-overlay opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <span className="absolute top-4 right-4 font-mono text-xs text-white/40">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="absolute bottom-4 left-5">
            <div className="size-10 rounded-xl border border-white/20 bg-black/20 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:border-white/40" />
          </div>
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="font-display text-lg transition-colors duration-300 group-hover:text-primary">
            {project.name}
          </CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto gap-2 pt-0">
          <Button
            asChild
            variant="default"
            size="sm"
            className="shadow-md shadow-primary/15"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink />
              Live Demo
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-white/10 bg-white/5"
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              GitHub
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
