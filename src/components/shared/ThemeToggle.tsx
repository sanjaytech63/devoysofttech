"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const activeTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = activeTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="border rounded-full p-2 border-slate-200  cursor-pointer dark:border-slate-700"
    >
      {isDark ? (
        <Sun
          size={18}
          className="text-[#22C55E] transition-transform duration-300"
        />
      ) : (
        <Moon
          size={20}
          className="text-[#22C55E] transition-transform duration-300"
        />
      )}
    </button>
  );
};
