import { Outfit, Young_Serif } from "next/font/google";
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
        green: "hsl(75,94%,57%)",
        "gray-3900": " hsl(0, 0%, 8%)",
        "gray-3800": "hsl(0, 0%, 12%)",
        "gray-3700": "hsl(0, 0%, 20%)",

        "stone-100": "hsl(30,54%,90%)",
        "stone-150": "hsl(30,18%,87%)",
        "stone-600": "hsl(30,10%,34%)",
        "stone-900": "hsl(24,5%,18%)",

        "Brown-800": "hsl(14,45%,36%)",
        "Rose-800": "hsl(332,51%,32%)",
        "Rose-50": "hsl(330,100%,98%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "young-serif": ['"Young Serif"', "serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
