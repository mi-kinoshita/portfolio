// app/projects/[slug]/page.tsx
// 'use client' はこのファイルから削除し、サーバーコンポーネントとする

import { allProjects } from "../../../../lib/projects"; // プロジェクトデータをインポート
import ProjectDetailClientContent from "./ProjectDetailClientContent"; // 新しいクライアントコンポーネントをインポート

// プロジェクトの詳細データを取得するための関数
// 実際には、slugに基づいてデータベースやファイルシステムからデータを取得しますが、
// 今回はインポートしたallProjects配列から検索します
async function getProjectDetails(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

// generateStaticParams 関数 (サーバーサイドで実行され、静的パスを生成)
// `output: 'export'` が設定されている場合、動的ルートで必須です
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
