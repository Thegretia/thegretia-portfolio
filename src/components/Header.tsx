"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#090A0F]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo + Availability */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-100 font-bold tracking-tight hover:text-white transition-colors group"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-50 border border-slate-700/80 text-emerald-400 group-hover:border-emerald-500/50 group-hover:text-emerald-300 transition-all">
              <Terminal className="h-4 w-4" />
            </div>
            <span className="font-mono text-base font-semibold tracking-tight text-white">
              Thegretia
            </span>
          </Link>

          {/* Status Badge */}
          <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-900/60 bg-emerald-950/40 px-2.5 py-1 text-xs text-emerald-300 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Available for opportunities</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-1.5 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-white bg-slate-800/60 shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* External Social Links & Quick CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Thegretia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-surface text-slate-400 hover:border-slate-700 hover:text-white hover:bg-slate-800/50 transition-all"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/patrick-mbonjo-etia-46b99b328/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-surface text-slate-400 hover:border-slate-700 hover:text-white hover:bg-slate-800/50 transition-all"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider font-mono rounded-md bg-white text-slate-950 px-3 py-2 hover:bg-slate-200 transition-colors shadow-sm"
          >
            Hire Me
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-surface text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#090A0F] px-4 py-4">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-xs text-emerald-400 font-mono">
              Available for opportunities
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "text-white bg-slate-800/80 font-semibold"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/30"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Thegretia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/patrick-mbonjo-etia-46b99b328/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-semibold uppercase tracking-wider font-mono rounded-md bg-white text-slate-950 px-4 py-2 hover:bg-slate-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
