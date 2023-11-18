/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/src/keep-preset.js";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D99904",
        primaryShadow: "#EEFF25",
        secondary: "#151515",
        body: "#737373",
      },
      fontFamily: {
        primary: "'Cinzel', serif",
        secondary: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
  presets: [keepPreset],
};
