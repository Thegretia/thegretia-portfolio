"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CaseStudy, ProjectCategory } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/components/icons";
import { ArrowUpRight, Database, Cpu, Code2, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectFilterListProps {
  projects: CaseStudy[];
}

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Data Engineering",
  "AI & ML",
  "Software Engineering",
];

export function ProjectFilterList({ projects }: ProjectFilterListProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Data Engineering":
        return <Database className="h-4 w-4 text-emerald-400" />;
      case "AI & ML":
        return <Cpu className="h-4 w-4 text-teal-400" />;
      case "Software Engineering":
        return <Code2 className="h-4 w-4 text-cyan-400" />;
      default:
        return <Layers className="h-4 w-4 text-slate-400" />;
    }
  };

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
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl border border-slate-800 bg-surface/90 backdrop-blur-sm w-fit">
        {CATEGORIES.map((category) => {
          const count =
            category === "All"
              ? projects.length
              : projects.filter((p) => p.category === category).length;

          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all font-mono cursor-pointer",
                isActive
                  ? "bg-slate-800 text-white shadow-sm border border-slate-700"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
              )}
            >
              <span>{category}</span>
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.2 rounded-full",
                  isActive
                    ? "bg-slate-700 text-slate-200"
                    : "bg-slate-800/80 text-slate-400"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.slug}
            className="group rounded-2xl border border-slate-800/80 bg-surface/60 hover:bg-surface/90 hover:border-slate-700 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-sm relative overflow-hidden"
          >
            {/* Top Accent Gradient on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Header Meta: Category & Timeline */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant={getBadgeVariant(project.category)} size="sm">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </Badge>
                  {project.featured && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 font-semibold px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/40">
                      Featured
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {project.timeline}
                </span>
              </div>

              {/* Title & Tagline */}
              <Link href={`/projects/${project.slug}`} className="block group/link">
                <h3 className="text-xl font-bold text-white group-hover/link:text-emerald-300 transition-colors flex items-center justify-between gap-2">
                  <span>{project.title}</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover/link:text-emerald-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all shrink-0" />
                </h3>
              </Link>
              <p className="text-xs text-emerald-400/90 font-mono mt-1 font-medium">
                {project.tagline}
              </p>

              {/* Problem / Summary */}
              <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-3">
                {project.summary}
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 my-5 p-3 rounded-xl bg-surface-100/80 border border-slate-800/60 font-mono">
                {project.metrics.slice(0, 2).map((metric, i) => (
                  <div key={i} className="px-1">
                    <span className="text-xs text-slate-500 block truncate">
                      {metric.label}
                    </span>
                    <span className="text-base font-bold text-white tracking-tight">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900/60 border border-slate-800/50 text-slate-500">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
              <Link
                href={`/projects/${project.slug}`}
                className="text-xs font-semibold text-white hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors font-mono"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-400 hover:text-emerald-400 flex items-center gap-1 px-2 py-1 rounded bg-slate-900 border border-slate-800 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
