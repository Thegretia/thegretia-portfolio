import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: "none" | "emerald" | "cyan" | "purple";
}

export function Card({
  children,
  className,
  hover = true,
  glow = "none",
  ...props
}: CardProps) {
  const glowStyles = {
    none: "",
    emerald: "hover:border-emerald-500/30 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)]",
    cyan: "hover:border-cyan-500/30 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]",
    purple: "hover:border-purple-500/30 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)]",
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-slate-800/80 bg-surface/80 backdrop-blur-sm p-6 text-slate-300 transition-all duration-300",
        hover && "hover:border-slate-700 hover:bg-surface-100/90",
        glow !== "none" && glowStyles[glow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
