"use client"; // クライアントコンポーネントとしてマーク

import { ReactNode } from "react";
import { ThemeProvider } from "../contexts/ThemeContext"; // ThemeProviderをインポート

interface ThemeWrapperProps {
  children: ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
