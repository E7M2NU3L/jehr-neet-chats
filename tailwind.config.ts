import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      dark: { 'dark_purple': { DEFAULT: '#270722', 100: '#080107', 200: '#10030e', 300: '#170415', 400: '#1f061b', 500: '#270722', 600: '#761567', 700: '#c523ac', 800: '#e361d0', 900: '#f1b0e7' }, 'french_violet': { DEFAULT: '#731dd8', 100: '#17062b', 200: '#2e0c56', 300: '#461281', 400: '#5d18ac', 500: '#731dd8', 600: '#9044e6', 700: '#ab73ec', 800: '#c7a2f2', 900: '#e3d0f9' }, 'jordy_blue': { DEFAULT: '#89bbfe', 100: '#01224e', 200: '#02449c', 300: '#0266e9', 400: '#3d90fd', 500: '#89bbfe', 600: '#a2cafe', 700: '#b9d7fe', 800: '#d1e4ff', 900: '#e8f2ff' }, 'honeydew': { DEFAULT: '#f1ffe7', 100: '#286100', 200: '#51c200', 300: '#7fff24', 400: '#b8ff85', 500: '#f1ffe7', 600: '#f3ffeb', 700: '#f6fff0', 800: '#f9fff5', 900: '#fcfffa' }, 'honeydew_light': { DEFAULT: '#f0fff1', 100: '#006307', 200: '#00c60d', 300: '#2aff38', 400: '#8dff94', 500: '#f0fff1', 600: '#f3fff4', 700: '#f6fff6', 800: '#f9fff9', 900: '#fcfffc' }},
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config