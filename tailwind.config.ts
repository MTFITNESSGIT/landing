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
        "plan-3": "url('/imgs/plan3.webp')",
        "plan-2": "url('/imgs/plan2.webp')",
        "plan-1": "url('/imgs/plan1.webp')",
      },
      colors: {
        red: "#da0504cc",
        blue: "rgb(41, 105, 176)",
      },
      animation: {
        "fade-out": "fade-out 1s ease-in-out forwards",
      },
      keyframes: {
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
      },
      gradients: {
        "mt-gradient":
          "linear-gradient(90deg, rgba(101,12,12,1) 0%, rgba(218,5,4,1) 100%);",
      },
    },
  },

  plugins: [
    // function ({ addUtilities }: any) {
    //   const newUtilities = {
    //     ".animate-fade-in": {
    //       animation: "fade-in 0.6s ease-in",
    //     },
    //   };
    //   addUtilities(newUtilities, ["responsive", "hover"]);
    // },
    require("tailwindcss-animated"),
  ],
};
export default config;
