import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2DD4BF", // Teal
        primary_dark: "#2dd4bf", // Teal
        secondary: "#A855F7", // Purple
        accent: "#F472B6", // Pink
        highlight: "#1e40af ", // Indigo
        highlight_dark: "#1e3a8a ", // Indigo
      }, 
    },
  },
  plugins: [],
} satisfies Config;
