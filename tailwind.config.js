/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000",
        darkOrange: "#F28E05",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
