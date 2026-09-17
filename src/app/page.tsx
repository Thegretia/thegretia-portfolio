import Link from "next/link";
import { projects } from "@/content/projects";
import { blogPosts } from "@/content/blog";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { GithubIcon } from "@/components/icons";
import {
  Database,
  Cpu,
  Code2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Flame,
} from "lucide-react";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
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
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-32 border-b border-slate-800/80 bg-grid-pattern">
        {/* Glow ambient spots */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Identity & Status Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-surface/90 px-3.5 py-1.5 backdrop-blur-md mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-slate-300">
              Patrick Thomas MBONJO ETIA • <span className="text-emerald-400 font-semibold">Thegretia</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Scale-Ready Data</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">AI Systems</span>.
          </h1>

          {/* Subtitle / Value Pitch */}
          <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Data Engineer, AI/ML Specialist, and Python Systems Architect. I build high-throughput PySpark Lakehouse pipelines, low-latency deep learning inference engines, and resilient distributed backends.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-all font-mono shadow-sm"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-surface border border-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white hover:border-slate-700 transition-all font-mono"
            >
              <span>Get in Touch</span>
            </Link>

            <a
              href="https://github.com/Thegretia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-surface border border-slate-800 px-4 py-3 text-sm text-slate-400 hover:text-white hover:border-slate-700 transition-all"
            >
              <GithubIcon className="h-4 w-4" />
              <span className="font-mono text-xs">Thegretia</span>
            </a>
          </div>

          {/* Stat highlights banner */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 font-mono">
            <div className="p-3">
              <span className="text-xs text-slate-500 block">Daily Data Pipeline</span>
              <span className="text-2xl font-bold text-white tracking-tight">2.4+ TB</span>
            </div>
            <div className="p-3">
              <span className="text-xs text-slate-500 block">Inference Latency</span>
              <span className="text-2xl font-bold text-emerald-400 tracking-tight">&lt; 140ms</span>
            </div>
            <div className="p-3">
              <span className="text-xs text-slate-500 block">Streaming Throughput</span>
              <span className="text-2xl font-bold text-teal-400 tracking-tight">14K txn/s</span>
            </div>
            <div className="p-3">
              <span className="text-xs text-slate-500 block">Availability SLA</span>
              <span className="text-2xl font-bold text-cyan-400 tracking-tight">99.98%</span>
            </div>
          </div>
        </div>
      </section>

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

      {/* Featured Projects Section */}
      <section className="py-16 sm:py-24 border-b border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono font-medium uppercase tracking-wider text-teal-400">
                <Flame className="h-3.5 w-3.5" />
                <span>Selected Deep Dives</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Featured Case Studies
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="group rounded-2xl border border-slate-800/80 bg-surface/60 hover:bg-surface/90 hover:border-slate-700 transition-all duration-300 p-6 flex flex-col justify-between backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge
                      variant={
                        project.category === "Data Engineering"
                          ? "emerald"
                          : project.category === "AI & ML"
                          ? "teal"
                          : "cyan"
                      }
                      size="sm"
                    >
                      {project.category}
                    </Badge>
                    <span className="text-[11px] font-mono text-slate-500">
                      {project.timeline}
                    </span>
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="mt-2 text-xs text-emerald-400/90 font-mono">
                    {project.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="my-4 p-3 rounded-xl bg-surface-100 border border-slate-800 font-mono grid grid-cols-2 gap-2">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <span className="text-[10px] text-slate-500 block truncate">
                          {m.label}
                        </span>
                        <span className="text-sm font-bold text-white">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs font-mono font-semibold text-white hover:text-emerald-300 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Read Deep Dive</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white p-1"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
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
