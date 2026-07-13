import type { Config } from "tailwindcss";

/**
 * TruthTap AI design tokens — matches the approved mockup:
 * Primary Blue #2563EB · Cyan #06B6D4 · Success #10B981
 * Warning #F59E0B · Danger #EF4444 · Ink #0F172A
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        accent: { DEFAULT: "#06B6D4", 50: "#ECFEFF" },
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
        ink: "#0F172A",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgb(37 99 235 / 0.08), 0 2px 8px -2px rgb(15 23 42 / 0.06)",
        lift: "0 14px 34px -10px rgb(37 99 235 / 0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "scale-in": "scale-in 0.35s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
