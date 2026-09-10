import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import {
  Database,
  Cpu,
  Code2,
  Terminal,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  GitBranch,
  Server,
  Layers,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Patrick Thomas MBONJO ETIA (Thegretia)",
  description:
    "Mid-level Data Engineer, AI & Machine Learning Engineer, and Python Software Developer with a track record of building resilient Lakehouse pipelines and deploying low-latency AI systems.",
};
const EXPERIENCES = [
  {
    role: "Solutions Architect & Solution Trainer",
    company: "GEMULA",
    period: "Apr 2026 — Present",
    description:
      "Designing robust technical architectures, leading hands-on technical demonstrations, and delivering comprehensive technical training programs while contributing to high-level strategic decisions.",
    highlights: [
      "Architected end-to-end technical solutions aligned with client requirements and strategic business goals.",
      "Delivered live technical demonstrations and solution walkthroughs to key stakeholders.",
      "Developed interactive training materials, practical coding labs, and technical documentation to upskill teams.",
    ],
  },
  {
    role: "Software Engineer & Partner",
    company: "The Intelligent Eyeglass for the Blind (IEGB)",
    period: "Jul 2025 — Present",
    description:
      "Designing and deploying embedded assistive technology solutions powered by AI, Machine Learning, Cloud Foundations, and Python to empower visually impaired individuals.",
    highlights: [
      "Architected and deployed an embedded platform for smart eyeglasses providing real-time sensory assistance to non-sighted users.",
      "Engineered machine learning pipelines and cloud backend integrations using Python and robust cloud foundation services.",
      "Collaborated across multidisciplinary teams to translate accessibility requirements into high-impact, user-centric software features.",
    ],
  },
  {
    role: "Data Engineer (Freelance)",
    company: "Orange Cameroun",
    period: "Jun 2026 — Present",
    description:
      "Engineering end-to-end data pipelines for multilingual voice AI systems, specializing in the collection, curation, and preprocessing of audio and linguistic datasets for Speech-to-Text, Machine Translation, and Text-to-Speech models.",
    highlights: [
      "Designed robust ingestion and ETL pipelines in Python to transform raw, heterogeneous speech recordings into clean, model-ready datasets for local languages.",
      "Curated and structured high-quality audio corpora tailored for training Speech-to-Text (STT) and Text-to-Speech (TTS) neural architectures.",
      "Collaborated within a cross-functional team to integrate local language data into scalable production-grade AI solutions.",
    ],
  },
];

const SKILL_CATEGORIES = [
  {
    title: "Data Engineering & Lakehouse",
    icon: Database,
    color: "text-emerald-400",
    skills: [
      "PySpark & Apache Spark",
      "Azure Databricks",
      "Delta Lake (Medallion Architecture)",
      "dbt-core / dbt-databricks",
      "SQL (Advanced Optimization & Tuning)",
      "ETL / ELT Pipeline Architecture",
      "Azure Data Factory (ADF)",
      "Great Expectations & Data Quality",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    color: "text-teal-400",
    skills: [
      "PyTorch & TorchAudio",
      "Hugging Face Transformers & PEFT",
      "Whisper & Wav2Vec2 (ASR / NLP)",
      "ONNX Runtime & INT8 Quantization",
      "LLM Orchestration & Embeddings",
      "Scikit-learn & XGBoost",
      "Real-Time Streaming ML & Anomaly Detection",
      "Model Profiling & Latency Optimization",
    ],
  },
  {
    title: "Software & Cloud Infrastructure",
    icon: Code2,
    color: "text-cyan-400",
    skills: [
      "Python (Asyncio, Pydantic, Modern 3.12+)",
      "FastAPI & High-Concurrency APIs",
      "Docker & Container Orchestration",
      "Redis (Streams, Caching, Lua)",
      "Apache Kafka & Streaming Events",
      "PostgreSQL & Supabase",
      "Linux Server Administration",
      "Git & GitHub Actions CI/CD",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Intro & Philosophy */}
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Identity & Specialization"
            title="Patrick Thomas MBONJO ETIA"
            description="Pseudonym: Thegretia • Data Engineer, AI & Machine Learning Specialist, and Python Software Architect."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                I am a technical architect and builder operating at the intersection of{" "}
                <strong className="text-emerald-300 font-semibold">
                  large-scale data systems
                </strong>
                ,{" "}
                <strong className="text-teal-300 font-semibold">
                  production AI/ML inference
                </strong>
                , and{" "}
                <strong className="text-cyan-300 font-semibold">
                  high-concurrency Python backends
                </strong>
                .
              </p>
              <p>
                Over the years, I have architected multi-terabyte Lakehouse pipelines on Azure
                Databricks, engineered low-latency speech recognition and translation engines
                for under-represented African dialects, and constructed sub-50ms financial
                streaming anomaly engines.
              </p>
              <p>
                My engineering philosophy is rooted in{" "}
                <span className="text-white font-medium">measurable business impact</span>:
                eliminating cloud compute waste, guaranteeing pipeline data freshness, and
                deploying AI models that operate reliably without unbounded server infrastructure costs.
              </p>
            </div>

            {/* Quick Facts Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl border border-slate-800 bg-surface/80 backdrop-blur-sm space-y-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider pb-3 border-b border-slate-800">
                <Terminal className="h-4 w-4" />
                <span>Quick Snapshot</span>
              </div>
              <div>
                <span className="text-slate-500 block">Focus:</span>
                <span className="text-white font-medium">Data Pipelines & AI Engines</span>
              </div>
              <div>
                <span className="text-slate-500 block">Primary Languages:</span>
                <span className="text-white font-medium">Python, SQL, TypeScript</span>
              </div>
              <div>
                <span className="text-slate-500 block">Core Frameworks:</span>
                <span className="text-white font-medium">PySpark, PyTorch, FastAPI, Delta Lake</span>
              </div>
              <div>
                <span className="text-slate-500 block">Status:</span>
                <span className="text-emerald-400 font-medium">Available for select projects</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Technical Matrix */}
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono font-medium uppercase tracking-wider text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Technical Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Core Competencies & Tooling
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800/80 bg-surface/60 p-6 space-y-4 backdrop-blur-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="p-2 rounded-lg bg-surface-100 border border-slate-700/80">
                        <Icon className={`h-5 w-5 ${cat.color}`} />
                      </div>
                      <h3 className="text-base font-bold text-white font-mono">
                        {cat.title}
                      </h3>
                    </div>

                    <ul className="space-y-2">
                      {cat.skills.map((skill, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-mono"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0 mt-1.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono font-medium uppercase tracking-wider text-teal-400">
              <Layers className="h-3.5 w-3.5" />
              <span>Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Professional Experience & Milestones
            </h2>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800/80 bg-surface/50 p-6 sm:p-8 space-y-4 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-emerald-400 font-medium font-mono">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded bg-surface border border-slate-800 w-fit">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-2">
                  {exp.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-400"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Bar */}
        <div className="rounded-2xl border border-slate-800 bg-surface/90 p-8 sm:p-10 text-center space-y-4 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white">
            Ready to build high-performance data & AI systems?
          </h3>
          <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            Whether you need to scale Lakehouse ETL pipelines, deploy custom AI models, or architect resilient Python backends, let&apos;s collaborate.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-colors font-mono shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-surface border border-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white hover:border-slate-700 transition-colors font-mono"
            >
              <span>View Case Studies</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
