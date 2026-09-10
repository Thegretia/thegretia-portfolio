import React from "react";
import Link from "next/link";
import { Mail, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#090A0F] text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Newsletter Card Section */}
        <div className="mb-14 rounded-2xl border border-slate-800/80 bg-surface/70 p-6 sm:p-8 lg:p-10 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono font-medium uppercase tracking-wider text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Technical Newsletter
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Stay Updated on Data & AI Engineering Insights
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-md">
                Practical breakdowns on Lakehouse architectures, distributed PySpark
                optimization, PyTorch model deployment, and real-time streaming ML.
              </p>
            </div>

            <div className="lg:col-span-6">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Navigation & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800/60">
          {/* Identity & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface-50 border border-slate-700 text-emerald-400">
                <Terminal className="h-3.5 w-3.5" />
              </div>
              <span className="font-mono text-base font-bold text-white">
                Patrick Thomas MBONJO ETIA
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Data Engineer & AI / Machine Learning Engineer building high-throughput
              data pipelines, scalable ML architectures, and robust Python software systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Thegretia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-surface text-slate-400 hover:border-slate-700 hover:text-white hover:bg-slate-800/50 transition-all"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/patrick-mbonjo-etia-46b99b328/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-surface text-slate-400 hover:border-slate-700 hover:text-white hover:bg-slate-800/50 transition-all"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:thomsp2001@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-surface text-slate-400 hover:border-slate-700 hover:text-white hover:bg-slate-800/50 transition-all"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors"
                >
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Technical Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About & Background
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Domain Expertise */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Focus Areas
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" />
                Data Engineering & Lakehouse
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400 inline-block" />
                AI & Machine Learning (NLP/ASR)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 inline-block" />
                High-Performance Python Backends
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 inline-block" />
                Real-Time Streaming Systems
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright and Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Patrick Thomas MBONJO ETIA (Thegretia). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built with Next.js & Tailwind CSS</span>
            <span>•</span>
            <span className="text-emerald-400">Production Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
