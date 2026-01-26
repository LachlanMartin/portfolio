"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa6";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch by mounting after client-side hydration
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Return button with same structure to prevent hydration mismatch
  // Use light theme icon as default until mounted
  return (
    <button
      id="theme-toggle"
      aria-label={mounted ? `Switch to ${theme === "light" ? "dark" : "light"} mode` : "Toggle theme"}
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
      title={mounted ? `Switch to ${theme === "light" ? "dark" : "light"} mode` : "Toggle theme"}
    >
      {!mounted || theme === "light" ? (
        <FaSun
          className="h-5 w-5 text-neutral-700 dark:text-neutral-300"
        />
      ) : (
        <FaMoon
          className="h-5 w-5 text-neutral-700 dark:text-neutral-300"
        />
      )}
    </button>
  );
};
