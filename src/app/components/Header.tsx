"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Imageコンポーネントをインポート
import { useTheme } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 relative z-10">
      {/* メインヘッダーコンテナのFlexboxの振る舞いをモバイルとデスクトップで分ける */}
      {/* モバイルではjustify-startにし、タイトルはflex-growで中央に。デスクトップではjustify-betweenを維持 */}
      <div className="max-w-4xl mx-auto px-6 flex items-center bg-transparent justify-start md:justify-between">
        {/* 左側のグループ: モバイルメニューボタン (アバターとサイト名はモバイル時にトグル内へ移動) */}
        <div className="flex items-center gap-2 z-20 flex-shrink-0 md:w-1/3 md:justify-start">
          {/* モバイルメニューボタン (mdより小さい画面で表示) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full  text-gray-900 dark:text-gray-100 ml-[-0.5rem] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              className="w-5 h-5"
            />
          </button>

          {/* アバター画像 (デスクトップでのみ表示) */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-amber-100 dark:bg-amber-100 flex items-center justify-center flex-shrink-0 hidden md:flex">
            <Image
              src="/images/avatar.png" // publicディレクトリ直下に画像を配置
              alt="Avatar"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          {/* サイト名またはロゴ (デスクトップでのみ表示) */}
          <Link
            href="/"
            className="hidden md:block text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            Mia Design Studio
          </Link>
        </div>

        {/* モバイルタイトル (モバイルでのみ表示し、中央に配置) */}
        {/* flex-grow を使って中央のスペースを占有し、text-center でテキストを中央寄せ */}
        <Link
          href="/"
          className="md:hidden flex-grow text-center text-xl font-bold text-gray-900 dark:text-gray-100"
          onClick={() => setIsMobileMenuOpen(false)} // クリックでメニューを閉じる
        >
          Mia Design Studio
        </Link>

        {/* デスクトップナビゲーション（中央寄せ、md以上の画面で表示） */}
        <nav className="hidden md:flex flex-grow justify-center space-x-8 md:w-1/3">
          <Link
            href="/about"
            className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/#projects"
            className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* 右側の要素: ダークモード切り替えボタン (デスクトップ用) */}
        <div className="flex items-center z-20 flex-shrink-0 w-auto md:w-1/3 md:justify-end">
          {/* flex-shrink-0 を追加 */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full  hover:bg-gray-200 hover:text-white dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <FontAwesomeIcon
                icon={faMoon}
                className="w-5 h-5 text-gray-900 dark:text-gray-100"
              />
            ) : (
              <FontAwesomeIcon
                icon={faSun}
                className="w-5 h-5 text-gray-900 dark:text-gray-100"
              />
            )}
          </button>
        </div>
      </div>

      {/* モバイルナビゲーション (メニューが開いている時に表示) */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-10 md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav className="flex flex-col items-center justify-start h-full space-y-8 text-xl font-medium pt-16">
          {/* モバイルメニュー内のアバターとサイトタイトルはそのまま維持（メニューのヘッダーとして機能） */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-amber-100 dark:bg-amber-100 flex items-center justify-center flex-shrink-0 mb-4">
              <Image
                src="/images/avatar.png"
                alt="Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <Link
            href="/about"
            className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#projects"
            className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
