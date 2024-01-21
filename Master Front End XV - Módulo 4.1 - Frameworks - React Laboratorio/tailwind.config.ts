import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      color: {
        100: "#fbcd05",
        200: "red",
        300: "#03a9f4",
        400: "#00c853",
        500: "#ffbe06",
        600: "#f44336",
        700: "#9E9E9E",
        800: "black",
        900: "green",
        1000: "orange",
        1001: "#009879",
        1002: "#f9f9f9",
        1003: "#eae8e8",
      },
      boxShadow: {
        custom: "0 0 20px rgba(0, 0, 0, 0.15)",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
