import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Rokkitt", "monospace"],
      },
      colors: {
        primary: "#ff5733",
        secondary: "#fffc33",
        tertiary: "#33ff57",
        quaternary: "#33fffc",
        quinary: "#5733ff",
        senary: "#fc33ff",
      },

      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },

  plugins: [],
};
export default config;
