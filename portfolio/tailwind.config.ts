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
        secondary: "#A855F7", // Purple
        accent: "#F472B6", // Pink
        dark: "#0F172A", // Navy
      }, 
    },
  },
  plugins: [],
} satisfies Config;
