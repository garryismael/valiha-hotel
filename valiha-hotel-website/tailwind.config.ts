import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-serif"],
      },
      colors: {
        "slate-blue": {
          100: "#e5e6e8f0",
          200: "#c5c8cde0",
          300: "#9ea3aad1",
          400: "#6a727dc2",
          500: "#253041b3",
          600: "#19212cc2",
          700: "#11151dd1",
          800: "#0a0d11e0",
          900: "#040608f0",
        },
        dark: {
          100: "#d6d6d9",
          200: "#acaeb4",
          300: "#83858e",
          400: "#595d69",
          500: "#303443",
          600: "#262a36",
          700: "#1d1f28",
          800: "#13151b",
          900: "#0a0a0d",
        },
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
      },
    },
  },
  plugins: [],
};
export default config;
