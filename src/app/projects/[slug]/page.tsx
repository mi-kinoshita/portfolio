// app/projects/[slug]/page.tsx

import { allProjects } from "../../../../lib/projects"; // プロジェクトデータをインポート
import ProjectDetailClientContent from "./ProjectDetailClientContent";
async function getProjectDetails(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

export async function generateStaticParams() {
  // allProjects 配列からすべてのプロジェクトのスラッグを取得し、パスとして返す
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
  const project = await getProjectDetails(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 font-sans">
        <p className="text-xl md:text-2xl font-bold">Project not found.</p>
      </div>
    );
  }

  // クライアントコンポーネントにprojectデータを渡してレンダリング
  return <ProjectDetailClientContent project={project} />;
}
