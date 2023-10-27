import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "reddish-orange": {
          100: "#fcddd9",
          200: "#f9bab2",
          300: "#f6988c",
          400: "#f37565",
          500: "#f0533f",
          600: "#c04232",
          700: "#903226",
          800: "#602119",
          900: "#30110d",
        },
        "bright-red": {
          100: "#fed6d6",
          200: "#feadad",
          300: "#fd8585",
          400: "#fd5c5c",
          500: "#fc3333",
          600: "#ca2929",
          700: "#971f1f",
          800: "#651414",
          900: "#320a0a",
        },
        "dark-muted": {
          100: "#d6d6d9",
          200: "#acaeb4",
          300: "#687693",
          400: "#595d69",
          500: "#303443",
          600: "#262a36",
          700: "#1d1f28",
          800: "#13151b",
          900: "#0a0a0d",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
