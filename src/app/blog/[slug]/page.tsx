import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} — Thegretia Engineering Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Articles</span>
        </Link>

        {/* Post Header */}
        <header className="border-b border-slate-800 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="emerald" size="sm">
              {post.category}
            </Badge>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(post.publishedAt)}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-50 border border-slate-700 text-emerald-400">
                <Terminal className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Patrick Thomas MBONJO ETIA</p>
                <p className="text-[11px] font-mono text-slate-500">Thegretia • Data & AI Engineer</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-surface border border-slate-800 text-slate-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Post Content Body */}
        <div className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-base prose-strong:text-white prose-code:text-emerald-300 prose-code:font-mono prose-code:bg-surface-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-800/90 prose-pre:p-4 prose-pre:rounded-xl prose-li:text-slate-300">
          <div className="space-y-6 text-slate-300 text-base leading-relaxed">
            {post.content.split("\n\n").map((block, idx) => {
              const trimmed = block.trim();
              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-xl font-bold text-white pt-4 pb-1 border-b border-slate-800/80 font-mono">
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }
              if (trimmed.startsWith("#### ")) {
                return (
                  <h4 key={idx} className="text-base font-bold text-emerald-300 pt-2 font-mono">
                    {trimmed.replace("#### ", "")}
                  </h4>
                );
              }
              if (trimmed.startsWith("```")) {
                const codeLines = trimmed.split("\n");
                const language = codeLines[0].replace("```", "").trim();
                const codeBody = codeLines.slice(1, -1).join("\n");
                return (
                  <div key={idx} className="my-6 rounded-xl border border-slate-800 bg-slate-950/90 overflow-hidden font-mono text-xs sm:text-sm">
                    {language && (
                      <div className="px-4 py-2 border-b border-slate-800/80 bg-surface flex items-center justify-between text-xs text-slate-400">
                        <span>{language}</span>
                        <span className="text-[10px] text-slate-500">snippet</span>
                      </div>
                    )}
                    <pre className="p-4 overflow-x-auto text-slate-200">
                      <code>{codeBody}</code>
                    </pre>
                  </div>
                );
              }
              if (trimmed.startsWith("- ")) {
                const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-2 text-slate-300">
                    {items.map((it, i) => (
                      <li key={i}>{it.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              if (trimmed.startsWith("---")) {
                return <hr key={idx} className="my-8 border-slate-800" />;
              }
              return (
                <p key={idx} className="text-slate-300 leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/blog"
            className="text-xs font-mono text-slate-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Articles</span>
          </Link>

          <Link
            href="/contact"
            className="text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Have thoughts or questions? Contact me</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
