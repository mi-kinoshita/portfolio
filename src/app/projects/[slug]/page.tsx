// app/projects/[slug]/page.tsx
// 'use client' はこのファイルから削除し、サーバーコンポーネントとする

import { notFound } from "next/navigation"; // notFoundをインポート
import { allProjects } from "../../../../lib/projects"; // プロジェクトデータをインポート
import ProjectDetailClientContent from "./ProjectDetailClientContent"; // クライアントコンポーネントをインポート

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
// Next.js 15では params は Promise になったため、型定義を修正
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>; // Promise型に変更
}) {
  // Next.js 15では params を await する必要がある
  const { slug } = await params;
  const project = getProjectDetails(slug); // 同期関数なので await は不要

  // プロジェクトが見つからない場合は404ページを表示
  if (!project) {
    notFound();
  }

  // クライアントコンポーネントにprojectデータを渡してレンダリング
  // サーバーコンポーネントからクライアントコンポーネントへデータを渡す
  return <ProjectDetailClientContent project={project} />;
}
