import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "espresso-darker": "#7f5539",
        "espresso-dark": "#9c6644",
        espresso: "#b08968",
        "espresso-light": "#ddb892",
        "espresso-lighter": "#e6ccb2",
        "espresso-lightest": "#ede0d4",
      },
    },
  },

  plugins: [require("daisyui")],
} satisfies Config;
