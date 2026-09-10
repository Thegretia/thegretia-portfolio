export type ProjectCategory =
  | "All"
  | "Data Engineering"
  | "AI & ML"
  | "Software Engineering";

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface ArchitectureStep {
  stepNumber: number;
  title: string;
  description: string;
  tech: string[];
}

export interface TechnicalObstacle {
  obstacle: string;
  solution: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  category: "Data Engineering" | "AI & ML" | "Software Engineering";
  featured: boolean;
  summary: string;
  role: string;
  timeline: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics: ProjectMetric[];
  challenge: {
    context: string;
    coreProblem: string;
    objectives: string[];
  };
  systemArchitecture: {
    overview: string;
    diagramDescription?: string;
    steps: ArchitectureStep[];
  };
  technicalObstacles: TechnicalObstacle[];
  impactAndResults: {
    summary: string;
    keyPoints: string[];
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  category: "Data Engineering" | "AI & ML" | "Software Engineering" | "System Design";
  tags: string[];
  content: string;
}

export interface TechSkill {
  name: string;
  highlight?: boolean;
}

export interface TechCategory {
  title: string;
  icon: string;
  description: string;
  skills: TechSkill[];
}
