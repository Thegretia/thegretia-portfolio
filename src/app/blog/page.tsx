import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Engineering Blog & System Notes",
  description:
    "In-depth articles on Data Engineering, Delta Lake performance tuning, deep learning model quantization, and resilient Python microservice design.",
};

export default function BlogIndexPage() {
  const getBadgeVariant = (category: string) => {
    switch (category) {
      case "Data Engineering":
        return "emerald" as const;
      case "AI & ML":
        return "teal" as const;
      case "Software Engineering":
        return "cyan" as const;
      default:
        return "purple" as const;
    }
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Insights & Notes"
          title="System Architecture & Engineering Articles"
          description="Detailed technical writeups, benchmarks, and architectural patterns distilled from real-world data pipelines and machine learning deployments."
        />

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-slate-800/80 bg-surface/60 hover:bg-surface/90 hover:border-slate-700 transition-all duration-300 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant={getBadgeVariant(post.category)} size="sm">
                    {post.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.publishedAt)}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readingTime}
                  </span>
                </div>
              </div>

              <Link href={`/blog/${post.slug}`} className="block group/title">
                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover/title:text-emerald-300 transition-colors tracking-tight flex items-start justify-between gap-4">
                  <span>{post.title}</span>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover/title:text-emerald-300 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all shrink-0 mt-1" />
                </h2>
              </Link>

              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Read Article</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
