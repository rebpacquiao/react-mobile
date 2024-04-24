/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1DA1F2",
        "custom-green": "#17BF63",
        "custom-red": "#E0245E",
      },
    },
  },
  plugins: [],
};
