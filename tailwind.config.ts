import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "gallery": "repeat(auto-fit, minmax(275px, 1fr))",
      },
      backgroundImage: {
        custom: "url('/img/hhholographic.webp')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      minHeight: {
        view: "calc(100vh - 10rem)"
      },
    },
    screens: {
        'tablet': '556px',
        'desktop': '574px',
    }, 
  },
  plugins: [],
};
export default config;
