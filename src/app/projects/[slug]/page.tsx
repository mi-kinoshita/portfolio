import { notFound } from "next/navigation";
import { allProjects } from "../../../../lib/projects";
import ProjectDetailClientContent from "./ProjectDetailClientContent";

function getProjectDetails(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = getProjectDetails(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClientContent project={project} />;
}
