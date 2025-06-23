"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // ローカルストレージからテーマを取得
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    // 既存のテーマクラスを削除
    root.classList.remove("light", "dark");

    // 新しいテーマクラスを追加
    if (theme === "dark") {
      root.classList.add("dark");
    }

    // ローカルストレージに保存
    localStorage.setItem("theme", theme);

    // デバッグ用ログ
    console.log("Theme applied:", theme);
    console.log("HTML classes:", root.className);
    console.log("Has dark class:", root.classList.contains("dark"));
  }, [theme, mounted]);

  const toggleTheme = () => {
    console.log("Toggling theme from:", theme);
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // マウント前でも必ずThemeContext.Providerで囲む
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
