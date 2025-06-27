// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation"; // notFoundをインポート
import { allProjects } from "../../../../lib/projects"; // プロジェクトデータをインポート
import ProjectDetailClientContent from "./ProjectDetailClientContent"; // クライアントコンポーネントをインポート

// ページコンポーネントのpropsの型を明示的に定義
interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

// プロジェクトの詳細データを取得するための関数
// allProjects配列からslugに基づいてプロジェクトを検索
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
// paramsとして現在のスラッグを受け取る
export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  // 明示的に定義したインターフェースを使用
  const { slug } = params;
  const project = getProjectDetails(slug); // awaitは不要、同期関数なので

  // プロジェクトが見つからない場合は404ページを表示
  if (!project) {
    notFound();
  }

  // クライアントコンポーネントにprojectデータを渡してレンダリング
  // サーバーコンポーネントからクライアントコンポーネントへデータを渡す
  return <ProjectDetailClientContent project={project} />;
}
