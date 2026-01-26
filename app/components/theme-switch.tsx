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
      aria-label={mounted ? `${theme} mode` : "Toggle theme"}
      onClick={toggleTheme}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90 cursor-pointer"
    >
      {!mounted || theme === "light" ? (
        <FaSun
          className="h-[14px] w-[14px] text-[#1c1c1c]"
        />
      ) : (
        <FaMoon
          className="h-[14px] w-[14px] text-[#D4D4D4]"
        />
      )}
    </button>
  );
};
