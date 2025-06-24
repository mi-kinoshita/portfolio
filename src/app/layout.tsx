import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext"; // ThemeProviderをインポート
import Header from "./components/Header"; // Headerをインポート
import Footer from "./components/Footer"; // Footerをインポート

export const metadata: Metadata = {
  title: "Mia Design Studio",
  description:
    "Crafting Clarity at Scale - I design scalable, human-centered experiences that bring clarity to complexity.",
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
