import { DEFAULT } from "@react-three/fiber/dist/declarations/src/core/utils";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      screens: {
        w1440: "1440px",
        w1024: "1024px",
        w640: "640px",
        "2xl": "1440px",
        "3xl": "1536px",
        "4xl": "1920px",
        "5xl": "2560px",
      },
      fontSize: {
        "heading-sm": [
          "1.25rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "-0.01em",
          },
        ],
        "heading-md": [
          "1.925rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.015em",
          },
        ],
        "heading-lg": [
          "3.1rem",
          {
            lineHeight: "3rem",
            letterSpacing: "-0.02em",
          },
        ],
        body: [
          "0.85rem",
          {
            lineHeight: "1rem",
            letterSpacing: "-0.01em",
          },
        ],
        caption: [
          "0.7rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.02em",
          },
        ],
        code: [
          "0.7rem",
          {
            lineHeight: "0.7rem",
            letterSpacing: "0.02em",
          },
        ],
        "code--caption": [
          "0.65rem",
          {
            lineHeight: "0.7rem",
            letterSpacing: "0.03em",
          },
        ],
      },
      colors: {
        background: {
          DEFAULT: "#F8F4F2",
          dark: "#0F0F10",
        },
        foreground: {
          DEFAULT: "#120E15",
          dark: "#EDE6E1",
        },
        methyl: {
          DEFAULT: "#7D0D8C",
          dark: "#771584",
        },
        plasma: {
          DEFAULT: "#B90674",
          dark: "#A81770",
        },
        oxide: {
          DEFAULT: "#C90E33",
          dark: "#98253C",
        },
        rust: {
          DEFAULT: "#FA4300",
          dark: "#DE4208",
        },
        molten: {
          DEFAULT: "#FF9000",
          dark: "#F18A03",
        },
        sol: {
          DEFAULT: "#F2F091",
          dark: "#EAE9BC",
        },
      },
      fontFamily: {
        apparat: ["KMR Apparat", "sans-serif"],
        planar: ["GT Planar", "sans-serif"],
        mono: ["Cofo Sans Mono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
