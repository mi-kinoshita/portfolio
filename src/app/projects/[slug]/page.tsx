// app/projects/[slug]/page.tsx
// 'use client' はこのファイルから削除し、サーバーコンポーネントとする

import { notFound } from "next/navigation"; // notFoundをインポート
import { allProjects } from "../../../../lib/projects"; // プロジェクトデータをインポート
import ProjectDetailClientContent from "./ProjectDetailClientContent"; // クライアントコンポーネントをインポート

// ページコンポーネントのpropsの型を明示的に定義する代わりに、関数引数に直接型を定義します。
// interface ProjectDetailPageProps {
//   params: {
//     slug: string;
//   };
// }

// プロジェクトの詳細データを取得するための関数 (同期関数として維持)
function getProjectDetails(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

// generateStaticParams 関数 (サーバーサイドで実行され、静的パスを生成)
// `output: 'export'` が設定されている場合、動的ルートで必須
export async function generateStaticParams() {
  // allProjects 配列からすべてのプロジェクトのスラッグを取得し、パスとして返す
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

// プロジェクト詳細ページコンポーネント
// paramsの型を引数に直接定義することで、型エラーを回避する可能性があります。
export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // ここで直接型を定義
  const { slug } = params;
  const project = getProjectDetails(slug); // 同期関数なので await は不要

  // プロジェクトが見つからない場合は404ページを表示
  if (!project) {
    notFound();
  }

  // クライアントコンポーネントにprojectデータを渡してレンダリング
  // サーバーコンポーネントからクライアントコンポーネントへデータを渡す
  return <ProjectDetailClientContent project={project} />;
}
