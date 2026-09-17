import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Get in Touch — Contact Patrick Thomas MBONJO ETIA",
  description:
    "Reach out to discuss Data Engineering pipelines, AI & Machine Learning deployments, high-performance Python architectures, or full-time / contract roles.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Initiate Collaboration"
          title="Let's Build Something High-Impact"
          description="Whether you have an upcoming data engineering initiative, need custom AI/ML model deployment, or are looking for a senior engineer for your team, I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Channels & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-800/80 bg-surface/60 p-6 space-y-6 backdrop-blur-sm">
              <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span>Direct Contact Channels</span>
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:thomsp2001@gmail.com?subject=Contact%20depuis%20le%20Portfolio"
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-800 bg-surface-100/60 hover:border-emerald-500/40 hover:bg-surface-100 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-surface border border-slate-700 text-emerald-400 group-hover:border-emerald-500/50">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 block">Email Address</span>
                    <span className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">
                      thomsp2001@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/patrick-mbonjo-etia-46b99b328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-800 bg-surface-100/60 hover:border-blue-500/40 hover:bg-surface-100 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-surface border border-slate-700 text-blue-400 group-hover:border-blue-500/50">
                    <LinkedinIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 block">LinkedIn Profile</span>
                    <span className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                      linkedin.com/in/patrick-mbonjo-etia                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/Thegretia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-800 bg-surface-100/60 hover:border-slate-600 hover:bg-surface-100 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-surface border border-slate-700 text-slate-300 group-hover:border-slate-500">
                    <GithubIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 block">GitHub Organization</span>
                    <span className="text-sm font-medium text-white group-hover:text-slate-200 transition-colors">
                      github.com/Thegretia
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-3 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Response Time: Typically within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Available for Full-Time & Select Contracts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
