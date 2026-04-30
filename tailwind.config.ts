import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        navy: "#1B3A6B",
        tint: "#E8EEF7",
        line: "#E5E7EB"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        lift: "0 20px 50px -28px rgba(17, 24, 39, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
