import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-14",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-px w-4 bg-emerald-500/60 inline-block" />
          <span className="text-xs font-mono font-medium tracking-wider uppercase text-emerald-400">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
