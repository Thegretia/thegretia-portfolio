import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variantStyles = {
    primary:
      "bg-white text-slate-950 hover:bg-slate-200 shadow-sm hover:shadow active:bg-slate-300 font-semibold",
    secondary:
      "bg-slate-900 text-slate-200 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 hover:text-white",
    outline:
      "bg-transparent text-slate-300 border border-slate-800 hover:bg-slate-900 hover:border-slate-700 hover:text-white",
    ghost:
      "bg-transparent text-slate-400 hover:text-white hover:bg-slate-900/60",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  };

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
