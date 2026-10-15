"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Trophy,
  Activity,
  Terminal,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function InteractiveHero() {
  const [activeTab, setActiveTab] = useState<"ai" | "data">("ai");

  return (
    <section className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-32 border-b border-slate-800/80 bg-grid-pattern">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 sm:h-[500px] sm:w-[500px] rounded-full bg-gradient-to-tr from-amber-500/10 via-emerald-500/15 to-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Badges Bar: Identity + Award Winner */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-surface/90 px-3.5 py-1.5 backdrop-blur-md shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono text-slate-300">
                  Patrick Thomas MBONJO ETIA • <span className="text-emerald-400 font-semibold">Thegretia</span>
                </span>
              </div>

              {/* Award Trophy Pill */}
              <Link
                href="/projects/kiyanza"
                className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-950/40 px-3 py-1 text-xs font-mono font-semibold text-amber-300 hover:bg-amber-950/60 transition-all hover:scale-105 shadow-sm"
              >
                <Trophy className="h-3.5 w-3.5 text-amber-400" />
                <span>1er Prix • Orange Summer Challenge 2026</span>
              </Link>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Architecting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Scale-Ready Data
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-amber-300">
                AI Systems
              </span>
              .
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Lead Data & AI Engineer. Je conçois des plateformes Lakehouse multi-téraoctets, des moteurs d&apos;inférence IA multimodale temps réel et des backends distribués robustes à fort impact business.
            </p>

            {/* Actions / CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-slate-200 transition-all font-mono shadow-lg hover:shadow-white/10 hover:scale-105"
              >
                <span>Explorer les Études de Cas</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-surface/90 border border-slate-800 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white hover:border-slate-700 transition-all font-mono hover:scale-105"
              >
                <span>Démarrer une Collaboration</span>
              </Link>

              <a
                href="https://github.com/Thegretia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-surface/90 border border-slate-800 px-4 py-3.5 text-sm text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              >
                <GithubIcon className="h-4 w-4" />
                <span className="font-mono text-xs">Thegretia</span>
              </a>
            </div>

            {/* Quick Trust Signals */}
            <div className="pt-4 flex items-center gap-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Disponible pour missions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-teal-400" />
                <span>Architecture & IA Production</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live Interactive Architecture Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-slate-800/90 bg-gradient-to-b from-surface-100/90 to-surface/90 p-6 sm:p-7 backdrop-blur-xl shadow-2xl space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Widget Header with Interactive Switch */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400 font-semibold">
                  <Activity className="h-4 w-4 text-emerald-400 animate-pulse" />
                  <span>LIVE ARCHITECTURE ENGINE</span>
                </div>

                <div className="flex items-center p-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab("ai")}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      activeTab === "ai"
                        ? "bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    AI Multimodal
                  </button>
                  <button
                    onClick={() => setActiveTab("data")}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      activeTab === "data"
                        ? "bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Lakehouse
                  </button>
                </div>
              </div>

              {activeTab === "ai" ? (
                /* AI Multimodal Pipeline (Kiyanza / Akilang) */
                <div className="space-y-4 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-2 text-amber-400">
                        <Terminal className="h-3.5 w-3.5" />
                        <span>Input Stream: Continuous Broadcast</span>
                      </span>
                      <span className="text-emerald-400 text-[10px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40 font-bold">
                        VAD Active
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Radio / TV audio streams decoded with Voice Activity Detection (silence cut -40%).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-2 text-indigo-400">
                        <Cpu className="h-3.5 w-3.5" />
                        <span>Neural Inference Worker</span>
                      </span>
                      <span className="text-white text-[10px] bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                        ONNX INT8
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-300">
                      <Zap className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                      <span>Whisper ASR + NER + Sentiment scoring under &lt; 3 min.</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/30 to-slate-900/80 border border-amber-500/30 space-y-2">
                    <div className="flex items-center justify-between text-amber-300">
                      <span className="flex items-center gap-2 font-bold">
                        <Trophy className="h-3.5 w-3.5 text-amber-400" />
                        <span>Winner Recognition</span>
                      </span>
                      <span className="text-[10px] bg-amber-500/20 border border-amber-500/40 text-amber-300 px-2 py-0.5 rounded font-bold">
                        Orange Summer Challenge
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Solution primée 1er Prix par le jury d&apos;Orange pour son architecture et son potentiel SaaS.
                    </p>
                  </div>
                </div>
              ) : (
                /* Lakehouse Pipeline (PySpark / Delta Lake) */
                <div className="space-y-4 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-2 text-emerald-400">
                        <Database className="h-3.5 w-3.5" />
                        <span>Bronze Layer: Auto Loader Ingestion</span>
                      </span>
                      <span className="text-white text-[10px] bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                        2.4 TB/Day
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Continuous raw JSON/Parquet streaming with automatic schema rescue.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-2 text-teal-400">
                        <Layers className="h-3.5 w-3.5" />
                        <span>Silver Layer: PySpark Deduplication</span>
                      </span>
                      <span className="text-emerald-400 text-[10px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40 font-bold">
                        Delta ACID
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      SCD Type-2 merges, Z-Order file compaction and PII sanitization.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="flex items-center gap-2 text-cyan-400">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Gold Layer: dbt Dimensional Marts</span>
                      </span>
                      <span className="text-cyan-400 text-[10px] bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40 font-bold">
                        99.98% SLA
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Star schema aggregation for Power BI dashboards with 4.8x query speedup.
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom live ticker */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Infrastructure: Docker + FastAPI</span>
                <span className="text-emerald-400 font-bold">100% Operational</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Key Figures Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 font-mono">
          <div className="p-3.5 rounded-2xl bg-surface/60 border border-slate-800/60 backdrop-blur-sm">
            <span className="text-xs text-slate-500 block mb-1">Prix & Distinction</span>
            <span className="text-2xl font-extrabold text-amber-400 tracking-tight">1er Prix OSC</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Orange Summer Challenge 2026</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface/60 border border-slate-800/60 backdrop-blur-sm">
            <span className="text-xs text-slate-500 block mb-1">Daily Lakehouse Data</span>
            <span className="text-2xl font-extrabold text-white tracking-tight">2.4+ TB</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Continuous Ingestion</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface/60 border border-slate-800/60 backdrop-blur-sm">
            <span className="text-xs text-slate-500 block mb-1">Inference Latency</span>
            <span className="text-2xl font-extrabold text-emerald-400 tracking-tight">&lt; 140ms</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">ONNX Quantized Models</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface/60 border border-slate-800/60 backdrop-blur-sm">
            <span className="text-xs text-slate-500 block mb-1">Streaming Throughput</span>
            <span className="text-2xl font-extrabold text-teal-400 tracking-tight">14K txn/s</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Kafka / Redis Anomaly Engine</span>
          </div>
        </div>
      </div>
    </section>
  );
}
