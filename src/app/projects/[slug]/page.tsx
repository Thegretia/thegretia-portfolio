import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/icons";
import {
  ArrowLeft,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Workflow,
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const getBadgeVariant = (category: string) => {
    switch (category) {
      case "Data Engineering":
        return "emerald" as const;
      case "AI & ML":
        return "teal" as const;
      case "Software Engineering":
        return "cyan" as const;
      default:
        return "neutral" as const;
    }
  };

  return (
    <article className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>

        {/* Header Hero Section */}
        <div className="border-b border-slate-800 pb-10 mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant={getBadgeVariant(project.category)} size="md">
              {project.category}
            </Badge>
            <span className="text-xs font-mono text-slate-500">
              Role: <span className="text-slate-300 font-semibold">{project.role}</span>
            </span>
            <span className="text-xs font-mono text-slate-500">•</span>
            <span className="text-xs font-mono text-slate-400">
              {project.timeline}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-emerald-400 font-mono font-medium leading-relaxed">
            {project.tagline}
          </p>

          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            {project.summary}
          </p>

          {/* Action Links & Tech Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-surface-100 border border-slate-800 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono px-3.5 py-2 rounded-lg bg-surface border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors"
                >
                  <span>Live App</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <section className="mb-14">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
            Performance Metrics & Quantified Impact
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-slate-800/80 bg-surface/80 backdrop-blur-sm flex flex-col justify-between"
              >
                <span className="text-xs font-mono text-slate-500 block mb-1">
                  {metric.label}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                  {metric.value}
                </span>
                {metric.description && (
                  <span className="text-[11px] text-slate-400 mt-2 leading-snug">
                    {metric.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 1: The Challenge & Business Context */}
        <section className="mb-14 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
            Phase 01
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            The Challenge & Core Problem
          </h2>

          <div className="p-6 rounded-2xl border border-slate-800/80 bg-surface/50 space-y-4">
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.challenge.context}
            </p>
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200">
              <strong className="text-white block mb-1 font-mono text-xs uppercase tracking-wider text-emerald-400">
                Core Architectural Bottleneck:
              </strong>
              {project.challenge.coreProblem}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Key Engineering Objectives
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.challenge.objectives.map((obj, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl border border-slate-800/60 bg-surface-100/60 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2: System Architecture & Step-by-Step Flow */}
        <section className="mb-14 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-wider font-semibold">
            <span className="h-2 w-2 rounded-full bg-teal-400 inline-block" />
            Phase 02
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <Workflow className="h-6 w-6 text-teal-400" />
            <span>System Architecture & Pipeline Design</span>
          </h2>

          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            {project.systemArchitecture.overview}
          </p>

          {/* Architecture Visual Topology Box */}
          {project.systemArchitecture.diagramDescription && (
            <div className="p-5 rounded-xl border border-slate-800 bg-surface-200 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-400 mb-2 font-semibold">
                <Layers className="h-3.5 w-3.5 text-teal-400" />
                <span>DATA FLOW TOPOLOGY</span>
              </div>
              <p className="text-emerald-300 bg-slate-950/80 p-3 rounded-lg border border-slate-800/80 leading-relaxed">
                {project.systemArchitecture.diagramDescription}
              </p>
            </div>
          )}

          {/* Step-by-Step Pipeline */}
          <div className="space-y-4 pt-2">
            {project.systemArchitecture.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-5 rounded-xl border border-slate-800/80 bg-surface/70 hover:border-slate-700 transition-all space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-950/80 text-emerald-400 font-mono text-xs font-bold border border-emerald-800/50">
                      0{step.stepNumber}
                    </span>
                    <h3 className="text-base font-bold text-white font-mono">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {step.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Technical Obstacles & Solutions */}
        <section className="mb-14 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
            <span className="h-2 w-2 rounded-full bg-amber-400 inline-block" />
            Phase 03
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Technical Obstacles & Engineering Solutions
          </h2>

          <div className="space-y-4">
            {project.technicalObstacles.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800/80 bg-surface/60 p-5 space-y-3"
              >
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold mb-1">
                      Obstacle #{idx + 1}
                    </h3>
                    <p className="text-sm text-slate-300 font-medium leading-relaxed">
                      {item.obstacle}
                    </p>
                  </div>
                </div>

                <div className="ml-6 pl-3 border-l-2 border-emerald-500/40 mt-3 pt-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                    Engineered Solution
                  </span>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Impact & Key Takeaways */}
        <section className="mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
            <span className="h-2 w-2 rounded-full bg-cyan-400 inline-block" />
            Phase 04
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span>Impact & Key Takeaways</span>
          </h2>

          <div className="p-6 rounded-2xl border border-slate-800 bg-gradient-to-br from-surface to-surface-100 space-y-4">
            <p className="text-base text-slate-200 leading-relaxed font-medium">
              {project.impactAndResults.summary}
            </p>

            <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
              {project.impactAndResults.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next/Contact CTA */}
        <div className="rounded-2xl border border-slate-800 bg-surface/90 p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6 backdrop-blur-sm">
          <div>
            <h3 className="text-lg font-bold text-white">
              Interested in similar architectures for your team?
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Let&apos;s discuss custom Data Pipelines, AI deployment, or high-throughput Python backends.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-4 sm:mt-0 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-colors shrink-0"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
