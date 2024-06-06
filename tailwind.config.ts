import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "bg-color": "var(--bg-color)",
        "body-bg": "var(--body-bg)",
        white: "var(--color-white)",
        black: "var(--color-black)",
        "rating-color": "var(--rating-color)",
        "body-color": "var(--body-color)",
      },

      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
