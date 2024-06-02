/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yesteryear: ["Yesteryear", "cursive"],
      },
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.15) 0px 2px 8px;",
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)", opacity: 1 },
          "25%": { transform: "scale(1.1)", opacity: 0.9 },
          "50%": { transform: "scale(1.2)", opacity: 0.8 },
          "75%": { transform: "scale(1.1)", opacity: 0.9 },
        },
      },
      animation: {
        heartbeat: "heartbeat 1.5s infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    },
  ],
};
