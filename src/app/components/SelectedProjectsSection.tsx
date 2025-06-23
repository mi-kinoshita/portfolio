// SelectedProjectsSection.tsx
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SelectedProjectsSection = () => {
  // 仮のプロジェクトデータ (画像パス、タイトル、説明、subDescriptionはご自身のものに置き換えてください)
  const projects = [
    {
      year: "01", // プロジェクト番号として使用
      title: "Prythm", // タイトル
      description:
        " Discover a gentle way to build daily self-care habits. Prythm helps you stay in tune with your emotions and routines—so you can feel your rhythm, every day. It's a self-care focused To-Do app designed for peace, pacing, and remembering you matter.",
      subDescription:
        "Features include: self-care based task lists, gentle habit tracking with calming calendar views, mood-friendly themes (light, dark, warm beige), fully offline functionality (no accounts, no ads, no pressure), and optional kind reminders. Ideal for those seeking a daily rhythm of kindness to themselves, especially those prone to overwork, overthinking, or burnout.", // サブ説明を詳細に更新
      appStoreLink:
        "https://apps.apple.com/us/app/prythm-self-care-daily/id6747229609", // あなたのApp Storeリンク
      googlePlayLink:
        "https://play.google.com/store/apps/details?id=com.miadesignstudio.prythme", // あなたのGoogle Playリンク
      imageUrl: "/images/prythm-cover.png", // 適切な画像パスに置き換えてください
    },
    {
      year: "02",
      title: "LunaTalk",
      description:
        "LunaTalk is your friendly AI chat partner for practicing real-life Japanese. Talk with Luna in natural conversations, save useful words to your vocabulary list, and customize your learning level and style. Whether you’re a beginner or advanced learner, Luna helps you stay motivated every day!", // LunaTalkの主要な説明
      subDescription:
        "New Features: Choose Your Chat Theme, Switch Learning Levels, Save Vocabulary While You Chat, Get Daily Practice Reminders, “Today’s Chat Theme” for Quick Practice, Fun Messages from Luna to Keep You Going! Whether you're preparing for a trip, a test, or just want to get better at speaking, Luna makes learning Japanese simple, fun, and interactive.",
      appStoreLink: "https://apps.apple.com/us/app/lunatalk/id6744715809", // あなたのApp Storeリンク
      googlePlayLink:
        "https://play.google.com/store/apps/details?id=com.miadesign.lunaTalk", // あなたのGoogle Playリンク
      imageUrl: "/images/lunatalk-cover.png", // 適切な画像パスに置き換えてください
    },
    {
      year: "03",
      title: "Pomodoro App",
      description:
        "Dive into focused study sessions with AquaFlow, a Pomodoro app designed for teenagers. Visualize your concentration as a calming journey into the ocean, accompanied by adorable marine creatures. Its minimalist design eliminates distractions, helping you stay in the zone.", // ポモドーロアプリの主要な説明
      subDescription:
        "Key features include charming marine animations, customizable focus timers, and a serene interface to enhance productivity. Get ready to embark on a delightful and effective study adventure – stay tuned for its release!", // ポモドーロアプリのサブ説明
      imageUrl: "/images/pomo-cover.png", // 適切な画像パスに置き換えてください
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 lg:py-32 px-6 md:px-8 lg:px-12 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100 text-left leading-tight">
        Selected projects
      </h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* 「View all projects」リンクを削除済み */}
    </section>
  );
};

export default SelectedProjectsSection;
