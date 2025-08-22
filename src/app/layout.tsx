import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext"; // ThemeProviderをインポート
import Header from "./components/Header"; // Headerをインポート
import Footer from "./components/Footer"; // Footerをインポート

export const metadata: Metadata = {
  title: "Mia Design Studio",
  description:
    "Crafting Clarity at Scale - I design scalable, human-centered experiences that bring clarity to complexity.",
  openGraph: {
    title: "Mia Design Studio", // OGPタイトル（サイトタイトルと合わせるか、異なるものにする）
    description:
      "Crafting Clarity at Scale - I design scalable, human-centered experiences that bring clarity to complexity.",
    url: "https://mia-design-studio.work/", // あなたのウェブサイトのURLに置き換えてください
    siteName: "Mia Design Studio", // サイト名
    images: [
      {
        url: "https://mia-design-studio.work/images/lunatalk-cover.png", // OGP画像のURLに置き換えてください
        width: 1200, // 画像の幅 (px)
        height: 630, // 画像の高さ (px)
        alt: "Mia Design Studio Image", // 画像の代替テキスト
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ThemeProvider>
          <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen">
            <Header /> {/* Headerをここでレンダリング */}
            {children}
            <Footer /> {/* Footerをここでレンダリング */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
