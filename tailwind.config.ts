import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0c0c0e",
        surface: "#141417",
        charcoal: {
          DEFAULT: "#27272a",
          dark: "#121215",
          card: "#1f1f23",
          light: "#3f3f46",
          border: "#52525b",
          accent: "#71717a",
          glow: "rgba(160, 160, 175, 0.25)",
        },
        primary: {
          DEFAULT: "#3f3f46",
          hover: "#52525b",
          light: "#71717a",
          dark: "#27272a",
        },
        paragraph: "#a1a1aa",
        secondaryText: "#e4e4e7",
      },
      fontFamily: {
        sans: ["var(--font-figtree)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "charcoal-glow": "radial-gradient(circle, rgba(160, 160, 175, 0.25) 0%, rgba(12, 12, 14, 0) 70%)",
        "card-gradient": "linear-gradient(180deg, rgba(45, 45, 52, 0.7) 0%, rgba(24, 24, 28, 0.85) 100%)",
        "charcoal-gradient": "linear-gradient(135deg, #3f3f46 0%, #1f1f23 100%)",
      },
      boxShadow: {
        glow: "0 0 35px rgba(255, 255, 255, 0.15)",
        card: "0 8px 32px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
