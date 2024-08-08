import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      screens: {
        lg: "1024px",
        xl: "1024px",
        "2xl": "1024px",
      },
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
