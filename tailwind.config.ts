import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "888px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      base: "14px",
      sm: "18px",
      md: "20px",
      lg: "24px",
      xl: "32px",
      "2xl": "40px",
    },
    colors: {
      white: '#FFFFFF',
      black: '#101828',
      blue: '#175CD3',
      grey: '#475467',
      grey1: '#667085',
      grey3: '#F2F4F7',
      grey4: '#D0D5DD',
      blue2: '#528BFF',
      blue3: '#004EEB',
      transparent: 'transparent',

    },
    extend: {
      fontFamily: {

      },
    },
  },
  plugins: [],
};
export default config;
