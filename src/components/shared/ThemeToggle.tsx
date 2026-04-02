"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const activeTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = activeTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      style={{
        border: "0.574px solid #C0DCCA",
      }}
      className="border rounded-full cursor-pointer p-1 border-slate-200 dark:border-slate-700"
    >
      {isDark ? (
        <Sun
          size={18}
          className="text-yellow-500 transition-transform duration-300"
        />
      ) : (
        <Moon size={20} className="text-[#22C55E]" />
      )}

      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
