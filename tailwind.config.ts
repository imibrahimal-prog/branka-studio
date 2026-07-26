import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#090909",
          white: "#F8F8F6",
          gold: "#C7A46A",
          "gold-light": "#D4B88A",
          "gold-dark": "#A8884F",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Segoe UI",
          "IBM Plex Sans Arabic",
          "Tahoma",
          "Arial",
          "sans-serif",
        ],
        display: ["Georgia", "Times New Roman", "serif"],
        arabic: ["IBM Plex Sans Arabic", "Tahoma", "Arial", "sans-serif"],
      },
      fontSize: {
        "hero-sm": [
          "clamp(3rem,8vw,5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.03em" },
        ],
        "hero-md": [
          "clamp(4rem,10vw,7rem)",
          { lineHeight: "0.92", letterSpacing: "-0.04em" },
        ],
        "hero-lg": [
          "clamp(5rem,12vw,9rem)",
          { lineHeight: "0.9", letterSpacing: "-0.04em" },
        ],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        shimmer: "shimmer 2.5s infinite linear",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scroll-line": "scrollLine 2s ease-in-out infinite",
        "orb-float": "orbFloat 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scrollLine: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        orbFloat: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 15px) scale(0.95)" },
        },
      },
      backgroundImage: {
        "luxury-gradient":
          "linear-gradient(135deg, #090909 0%, #1a1a1a 50%, #090909 100%)",
        "gold-shimmer":
          "linear-gradient(90deg, transparent, rgba(199,164,106,0.15), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
