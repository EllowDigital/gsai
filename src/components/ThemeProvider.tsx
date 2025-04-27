
import { createContext, useContext, ReactNode } from 'react';

type ThemeContextType = {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
};

const ThemeContext = createContext<ThemeContextType>({
  colors: {
    primary: '#ea384c',    // GSAI Red
    secondary: '#DAA520',  // GSAI Gold
    accent: '#ffffff',     // White
    background: '#000000', // Black
    text: '#ffffff',       // White
  },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = {
    colors: {
      primary: '#ea384c',    // GSAI Red
      secondary: '#DAA520',  // GSAI Gold
      accent: '#ffffff',     // White
      background: '#000000', // Black
      text: '#ffffff',       // White
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
