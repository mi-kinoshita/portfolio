// app/projects/[slug]/page.tsx
// 'use client' はこのファイルから削除し、サーバーコンポーネントとする

import { notFound } from "next/navigation"; // notFoundをインポート
import { allProjects } from "../../../../lib/projects"; // プロジェクトデータをインポート
import ProjectDetailClientContent from "./ProjectDetailClientContent"; // クライアントコンポーネントをインポート

// ページコンポーネントのpropsの型を明示的に定義
// searchParams も含めることで、Next.jsのPagePropsの完全な型シグネチャに合わせる
interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined }; // Optional: クエリパラメータ
}

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
export default async function ProjectDetailPage({
  params,
  searchParams, // searchParams も受け取るようにする
}: ProjectDetailPageProps) {
  // 明示的に定義したインターフェースを使用
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
