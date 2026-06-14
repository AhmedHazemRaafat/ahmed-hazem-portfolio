export interface Project {
  id: string;
  name: string;
  problem: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}
