import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom2C2C2C:"#2C2C2C",
        customF9F9F9:"#F9F9F9",
        customEAEAEA:"#EAEAEA",
        customF6F6F6:"#F6F6F6",
        custom8B8B8B:"#8B8B8B",
        customFAFAFA:"#FAFAFA",
        custom353535:"#353535",
        customEDEDED:"#EDEDED",
        customF5F5F5:"#F5F5F5",
        customB5B5B5 :"#B5B5B5",
        CustomSec1Black:"#211C24",
        customFFFFFF :"#FFFFFF",
        custom909090 :"#909090",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
