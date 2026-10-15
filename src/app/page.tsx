import Link from "next/link";
import { projects } from "@/content/projects";
import { blogPosts } from "@/content/blog";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { GithubIcon } from "@/components/icons";
import { InteractiveHero } from "@/components/InteractiveHero";
import { KiyanzaBentoCard } from "@/components/KiyanzaBentoCard";
import { AkilangBentoCard } from "@/components/AkilangBentoCard";
import {
  Database,
  Cpu,
  Code2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Flame,
  Award,
  Radio,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const secondaryProjects = projects.filter(
    (p) => p.slug === "azure-databricks-lakehouse" || p.slug === "streaming-fraud-detection"
  );
  const latestPosts = blogPosts.slice(0, 2);

  const competencyMatrix = [
    {
      title: "Data Engineering",
      icon: Database,
      badgeColor: "emerald" as const,
      description:
        "Building multi-terabyte Lakehouse ETL/ELT architectures with ACID guarantees, schema evolution, and automated data quality checks.",
      skills: [
        "PySpark & Spark Core",
        "Azure Databricks",
        "Delta Lake (Medallion)",
        "Advanced SQL & Query Tuning",
        "dbt-core / dbt-databricks",
        "Azure Data Factory (ADF)",
        "Great Expectations",
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      badgeColor: "teal" as const,
      description:
        "Training and deploying parameter-efficient NLP/ASR models, optimizing deep learning graphs for sub-100ms low-latency inference.",
      skills: [
        "PyTorch & TorchAudio",
        "Hugging Face Transformers",
        "Whisper & Wav2Vec2 (ASR)",
        "ONNX Graph Quantization (INT8)",
        "LLM Orchestration & RAG",
        "TensorFlow & Scikit-learn",
        "Streamlit Dashboards",
      ],
    },
    {
      title: "Software & Cloud Systems",
      icon: Code2,
      badgeColor: "cyan" as const,
      description:
        "Engineering high-concurrency asynchronous Python backends, containerized microservices, and distributed streaming queues.",
      skills: [
        "Python (Asyncio, Pydantic V2)",
        "FastAPI & REST / WebSockets",
        "Docker & Containerization",
        "Redis Streams & Distributed Locks",
        "Apache Kafka Streaming",
        "Supabase & PostgreSQL",
        "Linux & CI/CD Pipelines",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Interactive Hero Section */}
      <InteractiveHero />

      {/* Core Competencies / Tech Matrix */}
      <section className="py-16 sm:py-24 border-b border-slate-800/80 bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono font-medium uppercase tracking-wider text-emerald-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Technical Capabilities</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Core Engineering Matrix
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              A breakdown of production technologies, frameworks, and architecture patterns applied across client and enterprise systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competencyMatrix.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/80 bg-surface/70 p-6 sm:p-7 space-y-5 backdrop-blur-sm hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-surface-100 border border-slate-700/80">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <Badge variant={item.badgeColor} size="sm">
                        {item.title}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-bold text-white font-mono">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold block mb-2.5">
                      Production Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Bento Grid */}
      <section className="py-16 sm:py-24 border-b border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono font-medium uppercase tracking-wider text-amber-400">
                <Flame className="h-3.5 w-3.5" />
                <span>Flagship Systems & Awards</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Case Studies
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors group"
            >
              <span>View All Systems & Projects</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Asymmetric Modern Bento Grid */}
          <div className="space-y-6">
            {/* Row 1: Flagship Kiyanza (2 cols) + Akilang ASR (1 col) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              <div className="lg:col-span-2">
                <KiyanzaBentoCard />
              </div>
              <div className="lg:col-span-1">
                <AkilangBentoCard />
              </div>
            </div>

            {/* Row 2: Secondary Deep Dives (Lakehouse & Fraud Stream) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryProjects.map((project) => (
                <div
                  key={project.slug}
                  className="group rounded-3xl border border-slate-800/80 bg-surface/60 hover:bg-surface/90 hover:border-slate-700 transition-all duration-300 p-7 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden shadow-xl"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <Badge
                        variant={
                          project.category === "Data Engineering"
                            ? "emerald"
                            : "teal"
                        }
                        size="sm"
                      >
                        {project.category}
                      </Badge>
                      <span className="text-xs font-mono text-slate-500">
                        {project.timeline}
                      </span>
                    </div>

                    <Link href={`/projects/${project.slug}`}>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between gap-2">
                        <span>{project.title}</span>
                        <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                      </h3>
                    </Link>

                    <p className="mt-2 text-xs text-emerald-400/90 font-mono font-medium">
                      {project.tagline}
                    </p>

                    <p className="mt-3 text-sm text-slate-400 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="my-5 p-3.5 rounded-2xl bg-surface-100/80 border border-slate-800/80 font-mono grid grid-cols-2 gap-3">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx}>
                          <span className="text-[11px] text-slate-500 block truncate">
                            {m.label}
                          </span>
                          <span className="text-base font-bold text-white">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-mono font-semibold text-white hover:text-emerald-300 inline-flex items-center gap-1 transition-colors ml-2 shrink-0"
                    >
                      <span>Read Deep Dive</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Technical Insights */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono font-medium uppercase tracking-wider text-purple-400">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Technical Notes</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Latest Architecture Insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-slate-800/80 bg-surface/60 hover:bg-surface/90 hover:border-slate-700 transition-all p-6 sm:p-7 flex flex-col justify-between backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="purple" size="sm">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold text-white hover:text-emerald-300 transition-colors">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Read</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
