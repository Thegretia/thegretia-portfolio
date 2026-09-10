import { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectFilterList } from "@/components/ProjectFilterList";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Engineering Projects & Case Studies",
  description:
    "Production-grade Data Engineering pipelines, AI/ML architectures, and distributed Python software systems engineered by Patrick Thomas MBONJO ETIA.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies & Systems"
          title="Engineering Portfolio & Architectures"
          description="Explore production-tested systems spanning distributed Lakehouse ETL pipelines, parameter-efficient multilingual AI models, and real-time streaming fraud engines."
        />

        <ProjectFilterList projects={projects} />
      </div>
    </div>
  );
}
