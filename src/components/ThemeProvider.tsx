
import { createContext, useContext, ReactNode } from 'react';

type ThemeContextType = {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    // Extended palette for better contrast options
    neutral: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    },
    // Enhanced accent colors
    red: {
      light: string;
      DEFAULT: string;
      dark: string;
    },
    gold: {
      light: string;
      DEFAULT: string;
      dark: string;
    },
  };
};

const defaultTheme = {
  colors: {
    primary: '#ea384c',    // GSAI Red - slightly more vibrant for better contrast
    secondary: '#DAA520',  // GSAI Gold
    accent: '#ffffff',     // White
    background: '#000000', // Black
    text: '#ffffff',       // White
    // Neutral gray scale for better design options
    neutral: {
      100: '#f8f9fa',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
    // Enhanced red palette
    red: {
      light: '#ff6b7d', // Lighter red for hover states
      DEFAULT: '#ea384c', // Standard GSAI red
      dark: '#c41e30',  // Darker red for pressed states and better contrast
    },
    // Enhanced gold palette
    gold: {
      light: '#f3d98b', // Lighter gold for hover states
      DEFAULT: '#DAA520', // Standard GSAI gold
      dark: '#b88a1b',  // Darker gold for pressed states and better contrast
    },
  },
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
