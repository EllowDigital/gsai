
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "400px",  // Added extra small breakpoint for tiny mobile screens
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },

    extend: {
      screens: {
        'xs': '400px', // New breakpoint for very small mobile devices
      },
      
      colors: {
        // Global tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Theming tokens
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Enhanced GSAI palette with better contrast
        gsai: {
          red: {
            light: "#ff6b7d", // Lighter red for hover states
            DEFAULT: "#ea384c", // Standard GSAI red
            dark: "#c41e30",   // Darker red for pressed states and better contrast
          },
          gold: {
            light: "#f3d98b", // Lighter gold for hover states
            DEFAULT: "#DAA520", // Standard GSAI gold
            dark: "#b88a1b",   // Darker gold for pressed states and better contrast
          },
          gray: {
            50: "#f9f9f9",
            100: "#ededed",
            200: "#d4d4d4",
            300: "#a1a1a1",
            400: "#737373",
            500: "#525252",
            600: "#3f3f3f",
            700: "#2a2a2a",
            800: "#1a1a1a",
            900: "#121212",
          },
          text: {
            light: "#ffffff",   // White text for dark backgrounds
            muted: "#e0e0e0",   // Slightly dimmed text for less emphasis
            dark: "#121212",    // Near-black text for light backgrounds
          },
        },

        // Sidebar custom namespace
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        display: ["Poppins", ...fontFamily.sans],
        mono: ["Fira Code", ...fontFamily.mono],
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        full: "9999px",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-in forwards",
        "fade-out": "fade-out 0.3s ease-out forwards",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
