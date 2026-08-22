/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0A0B0D", // Deep Obsidian Basalt
        surface: {
          DEFAULT: "#121418", // Charcoal Slate
          subtle: "#181B20",
          border: "rgba(244, 242, 235, 0.08)",
          "border-hover": "rgba(244, 242, 235, 0.16)",
        },
        ivory: {
          DEFAULT: "#F4F2EB", // Warm Bone / Ivory
          dim: "#C8C6BD",
        },
        stone: {
          DEFAULT: "#8E929A", // Muted Linen
          muted: "#4B515D", // Dark Slate Silver
          dark: "#2A2D35",
        },
        accent: {
          DEFAULT: "#D97706", // Warm Ochre / Amber
          subtle: "rgba(217, 119, 6, 0.12)",
          hover: "#E08A3C",
        },
        amberAccent: {
          DEFAULT: "#D97706", // Warm Ochre / Amber
          subtle: "rgba(217, 119, 6, 0.12)",
          hover: "#E08A3C",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
