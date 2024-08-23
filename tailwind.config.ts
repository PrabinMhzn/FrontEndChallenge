import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
    },
    extend: {
      colors: {
        customyellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        "gray-light": "hsl(0, 0%, 42%)",
        "gray-dark": "hsl(0, 0%, 7%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
