
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ColorPalette = {
  red: {
    DEFAULT: string;
    light: string;
    dark: string;
  };
  gold: {
    DEFAULT: string;
    light: string;
    dark: string;
  };
  black: {
    DEFAULT: string;
    light: string;
  };
  white: {
    DEFAULT: string;
    muted: string;
  };
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  systemTheme: "dark" | "light";
  resolvedTheme: "dark" | "light";
  colors: ColorPalette;
};

// Standard color palette for the app
const colorPalette: ColorPalette = {
  red: {
    DEFAULT: "#bd0000",
    light: "#e83030",
    dark: "#8a0000",
  },
  gold: {
    DEFAULT: "#d4af37",
    light: "#f4d45f",
    dark: "#a58829",
  },
  black: {
    DEFAULT: "#000000",
    light: "#333333",
  },
  white: {
    DEFAULT: "#ffffff",
    muted: "#f1f1f1",
  },
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  systemTheme: "dark", // Default to dark if system theme can't be detected
  resolvedTheme: "dark", // Default to dark if system theme can't be detected
  colors: colorPalette,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  // Calculate the resolved theme (actual applied theme) based on system and user preferences
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  // Apply theme to document element
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
  }, [resolvedTheme]);

  // Update theme in localStorage when it changes
  useEffect(() => {
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  // Listen for system theme changes
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onMediaChange = () => {
      setSystemTheme(mql.matches ? "dark" : "light");
    };

    // Check for modern event listener method or fall back to old approach
    if (mql.addEventListener) {
      mql.addEventListener("change", onMediaChange);
      return () => mql.removeEventListener("change", onMediaChange);
    } else if (mql.addListener) {
      // Legacy method (Safari < 14, IE, etc)
      mql.addListener(onMediaChange);
      return () => mql.removeListener(onMediaChange);
    }
  }, []);

  // Create memoized context value to prevent unnecessary re-renders
  const value = {
    theme,
    setTheme,
    systemTheme,
    resolvedTheme,
    colors: colorPalette,
  };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
    
  return context;
};
