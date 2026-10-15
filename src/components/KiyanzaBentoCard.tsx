"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Trophy,
  ArrowUpRight,
  Radio,
  Cpu,
  Activity,
  Sparkles,
  Layers,
  CheckCircle2,
  Volume2,
} from "lucide-react";

export function KiyanzaBentoCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate tracker for spotlight & 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl p-7 sm:p-9 border border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-amber-500/50 hover:shadow-amber-500/10 hover:shadow-2xl flex flex-col justify-between"
    >
      {/* 1. Dynamic Cursor Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]: any[]) =>
              `radial-gradient(650px circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(245, 158, 11, 0.15), transparent 45%)`
          ),
        }}
      />

      {/* 2. Amber Accent Top Edge Beam */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

      {/* 3. Subtle Animated Ambient Glow in corner */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-700" />

      <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
        {/* Top Bar: Award Badge & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Award Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold shadow-inner">
              <Trophy className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>1er Prix • Orange Summer Challenge 2026</span>
            </div>

            {/* Live Processing Pill */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Live Ingestion & ASR</span>
            </div>
          </div>

          <span className="text-xs font-mono text-slate-400">
            Lead Data & AI Engineer
          </span>
        </div>

        {/* Title & Core Value Proposition */}
        <div className="space-y-3">
          <Link href="/projects/kiyanza" className="group/title block">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover/title:text-amber-300 transition-colors flex items-center justify-between gap-4">
              <span>Kiyanza — Real-Time Media Intelligence SaaS</span>
              <div className="h-10 w-10 rounded-full border border-slate-700 bg-slate-800/80 flex items-center justify-center shrink-0 group-hover/title:bg-amber-400 group-hover/title:text-slate-950 transition-all duration-300 group-hover/title:rotate-12 group-hover/title:scale-110">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </h3>
          </Link>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
            Plateforme SaaS de veille média en continu alimentée par l&apos;IA. Elle ingère, transcrit et analyse sémantiquement des flux audiovisuels (radio, TV, web) pour détecter tendances, sentiments et signaux faibles d&apos;opinion publique en temps réel.
          </p>
        </div>

        {/* Live Multimodal Pipeline Preview Card */}
        <div className="p-4 rounded-2xl border border-slate-800/80 bg-slate-950/70 backdrop-blur-md grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <Radio className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Ingestion Multi-Flux</span>
              <span className="font-bold text-slate-200">Audio 24/7 + VAD</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Moteur IA Multimodal</span>
              <span className="font-bold text-slate-200">Whisper + NER + Polarité</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
              <Activity className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Latence Restitution</span>
              <span className="font-bold text-emerald-300">&lt; 3 Minutes</span>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/70 flex flex-col justify-between">
            <span className="text-[11px] font-mono text-slate-400 block mb-1">Jury Orange</span>
            <span className="text-xl font-bold font-mono text-amber-400">1er Prix</span>
            <span className="text-[10px] text-slate-500 mt-1">Sur 30+ projets</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/70 flex flex-col justify-between">
            <span className="text-[11px] font-mono text-slate-400 block mb-1">Latence E2E</span>
            <span className="text-xl font-bold font-mono text-white">&lt; 180s</span>
            <span className="text-[10px] text-slate-500 mt-1">Broadcast ➔ Insights</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/70 flex flex-col justify-between">
            <span className="text-[11px] font-mono text-slate-400 block mb-1">Précision NER</span>
            <span className="text-xl font-bold font-mono text-white">89.4%</span>
            <span className="text-[10px] text-slate-500 mt-1">Entités & Marques</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/70 flex flex-col justify-between">
            <span className="text-[11px] font-mono text-slate-400 block mb-1">Optimisation VAD</span>
            <span className="text-xl font-bold font-mono text-emerald-400">-40% GPU</span>
            <span className="text-[10px] text-slate-500 mt-1">Filtre silences & blancs</span>
          </div>
        </div>

        {/* Footer: Tags & Action Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
          <div className="flex flex-wrap gap-1.5">
            {["Whisper (ASR)", "Hugging Face", "FastAPI", "Docker", "pgvector", "Python 3.12"].map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-300 transition-colors hover:border-amber-500/40"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href="/projects/kiyanza"
            className="text-xs font-mono font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 transition-all group-hover:translate-x-1"
          >
            <span>Explorer l&apos;architecture & les résultats</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
