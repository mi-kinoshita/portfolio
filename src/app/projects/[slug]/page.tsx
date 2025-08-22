// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { allProjects } from "../../../../lib/projects";
import ProjectDetailClientContent from "./ProjectDetailClientContent";
import { Metadata } from "next";

// 動的なOGPメタデータを生成
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return {};
  }

  // OGP画像のフルURLを生成
  const ogImageUrl = `https://mia-design-studio.work${project.imageUrl}`;

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [ogImageUrl],
    },
  };
}

// プロジェクトの詳細データを取得するための関数
function getProjectDetails(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

// generateStaticParams 関数
export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

// プロジェクト詳細ページコンポーネント
export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectDetails(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClientContent project={project} />;
}
