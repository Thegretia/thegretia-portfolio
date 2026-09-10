import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "emerald" | "teal" | "cyan" | "purple" | "blue" | "neutral" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "neutral",
  size = "md",
  dot = false,
  ...props
}: BadgeProps) {
  const variantStyles = {
    emerald:
      "bg-emerald-950/50 text-emerald-300 border-emerald-800/40 hover:border-emerald-700/60",
    teal: "bg-teal-950/50 text-teal-300 border-teal-800/40 hover:border-teal-700/60",
    cyan: "bg-cyan-950/50 text-cyan-300 border-cyan-800/40 hover:border-cyan-700/60",
    purple:
      "bg-purple-950/50 text-purple-300 border-purple-800/40 hover:border-purple-700/60",
    blue: "bg-blue-950/50 text-blue-300 border-blue-800/40 hover:border-blue-700/60",
    neutral:
      "bg-slate-900/80 text-slate-300 border-slate-800/80 hover:border-slate-700",
    outline:
      "bg-transparent text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700",
  };

  const dotColor = {
    emerald: "bg-emerald-400",
    teal: "bg-teal-400",
    cyan: "bg-cyan-400",
    purple: "bg-purple-400",
    blue: "bg-blue-400",
    neutral: "bg-slate-400",
    outline: "bg-slate-500",
  };

  const sizeStyles = {
    sm: "text-xs px-2 py-0.5 gap-1.5",
    md: "text-xs font-medium px-2.5 py-1 gap-1.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border transition-colors duration-150 font-mono",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full inline-block", dotColor[variant])}
        />
      )}
      {children}
    </span>
  );
}
