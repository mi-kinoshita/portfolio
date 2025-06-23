"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SelectedProjectsSection from "./components/SelectedProjectsSection";
import NewsletterSection from "./components/NewsletterSection"; // NewsletterSectionをインポート
import Footer from "./components/Footer"; // Footerをインポート

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <SelectedProjectsSection />
        {/* <ArticlesSection />  */}
        {/* <NewsletterSection /> */}
      </main>
      <Footer /> {/* フッターを配置 */}
    </div>
  );
}
