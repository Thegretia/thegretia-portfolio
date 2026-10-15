"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Cpu, Volume2, Sparkles, Mic } from "lucide-react";

export function AkilangBentoCard() {
  const cardRef = useRef<HTMLDivElement>(null);

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
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl p-7 sm:p-9 border border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-teal-500/50 hover:shadow-teal-500/10 hover:shadow-2xl flex flex-col justify-between"
    >
      {/* Dynamic Cursor Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]: any[]) =>
              `radial-gradient(550px circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(20, 184, 166, 0.15), transparent 45%)`
          ),
        }}
      />

      {/* Top Edge Accent */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />

      <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
        {/* Header Badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/40 text-teal-300 text-xs font-mono font-semibold">
            <Mic className="h-3.5 w-3.5 text-teal-400" />
            <span>AI & Speech Recognition</span>
          </div>

          <span className="text-xs font-mono text-slate-500">6 Months • 2025</span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-2">
          <Link href="/projects/akilang-speech-translation" className="group/title block">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover/title:text-teal-300 transition-colors flex items-center justify-between gap-3">
              <span>Akilang Speech & Translation</span>
              <div className="h-9 w-9 rounded-full border border-slate-700 bg-slate-800/80 flex items-center justify-center shrink-0 group-hover/title:bg-teal-400 group-hover/title:text-slate-950 transition-all duration-300 group-hover/title:rotate-12">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </h3>
          </Link>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Moteur ASR & NMT haute performance spécialisé pour les langues et dialectes africains peu dotés. Inférence quantifiée sous ONNX Runtime avec latence sub-140ms.
          </p>
        </div>

        {/* Waveform Audio Visualizer Simulation */}
        <div className="p-4 rounded-2xl border border-slate-800/80 bg-slate-950/70 space-y-3 font-mono">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Volume2 className="h-3.5 w-3.5 text-teal-400" />
              <span className="text-[11px]">Audio Waveform SpecAugment</span>
            </div>
            <span className="text-teal-400 text-[11px] font-bold">&lt; 140ms P95</span>
          </div>

          {/* Animated sound wave bars */}
          <div className="flex items-center gap-1 h-8 px-1">
            {[40, 70, 30, 90, 60, 100, 45, 80, 55, 95, 35, 75, 60, 85, 50, 65, 90, 40, 70, 50].map(
              (height, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: [`${height}%`, `${Math.max(20, (height * 1.3) % 100)}%`, `${height}%`],
                  }}
                  transition={{
                    duration: 1.2 + (i % 4) * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.05,
                  }}
                  className="flex-1 rounded-full bg-gradient-to-t from-teal-500/40 via-teal-400 to-cyan-300"
                />
              )
            )}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2.5 font-mono">
          <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/70">
            <span className="text-[10px] text-slate-500 block">WER Reduction</span>
            <span className="text-lg font-bold text-teal-400">-28.4%</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/70">
            <span className="text-[10px] text-slate-500 block">Audio Corpus</span>
            <span className="text-lg font-bold text-white">450+ Hours</span>
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
          {["PyTorch", "Whisper", "ONNX INT8", "FastAPI"].map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/60 text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
