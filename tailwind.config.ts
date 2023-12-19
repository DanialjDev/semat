import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        base: "#00AEEF",
        200: "#92D1FF",
        400: "#0086BA",
        600: "#003E58",
      },
      white: "#FFFFFF",
      black: "#000",
      gray: {
        100: "#EDEDED",
        200: "#C8CACC",
        300: "#A0A3A7",
        500: "#595A5D",
        600: "#38393B",
        cb: "#CBCBCB",
      },
    },
  },
  plugins: [],
};
export default config;
