import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    skills: ["Node.js", "REST APIs", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    skills: ["Git", "Docker", "CI/CD", "Vercel", "Figma"],
  },
  {
    id: "domains",
    title: "Focus Areas",
    skills: [
      "Automation",
      "Data Processing",
      "AI Integration",
      "Problem Solving",
      "System Design",
    ],
  },
];
