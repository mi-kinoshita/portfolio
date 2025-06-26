"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
      <div className="max-w-4xl mx-auto px-6 flex items-center bg-transparent justify-start md:justify-between">
        <div className="flex items-center gap-2 z-20 flex-shrink-0 md:justify-start">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full  text-gray-900 dark:text-gray-100 ml-[-0.5rem] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              className="w-5 h-5"
            />
          </button>

          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-amber-100 dark:bg-amber-100 flex items-center justify-center flex-shrink-0 hidden md:flex">
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              unoptimized={true}
            />
          </div>

          <Link
            href="/"
            className="hidden md:block text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            Mia Design Studio
          </Link>
        </div>

        <Link
          href="/"
          className="md:hidden flex-grow text-center text-xl font-bold text-gray-900 dark:text-gray-100"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Mia Design Studio
        </Link>

        {/* デスクトップナビゲーション（中央寄せ、md以上の画面で表示） */}
        {/* md:w-1/3 を削除し、flex-grow を使って残りのスペースを占有し、その中で中央寄せにする */}
        <nav className="hidden md:flex flex-grow justify-center space-x-8">
          {" "}
          {/* md:w-1/3 を削除 */}
          <Link
            href="/about"
            className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/design-process"
            className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            Process
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
        {/* md:w-1/3 を削除し、コンテンツの幅に合わせる */}
        <div className="flex items-center z-20 flex-shrink-0 w-auto md:justify-end">
          {/* md:w-1/3 を削除 */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <FontAwesomeIcon
                icon={faMoon}
                className="w-5 h-5 text-gray-900 dark:text-gray-100  hover:text-neutral-600 dark:hover:text-neutral-700"
              />
            ) : (
              <FontAwesomeIcon
                icon={faSun}
                className="w-5 h-5 text-gray-900 dark:text-gray-100  hover:text-neutral-600 dark:hover:text-neutral-700"
              />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-10 md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <nav
          className="flex flex-col items-center justify-start h-full space-y-8 text-xl font-medium pt-16"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-amber-100 dark:bg-amber-100 flex items-center justify-center flex-shrink-0 mb-4">
              <Image
                src="/images/avatar.png"
                alt="Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                unoptimized={true}
              />
            </div>
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors mb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mia Design Studio
            </Link>
          </div>
          <Link
            href="/about"
            className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/design-process"
            className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Process
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
