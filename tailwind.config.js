/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        primary: {
          0: "#232A46",
          hover: "#1B2135",
        },
        secondary: ["#EFFEFB"],
        tertiary: ["#5BA596"],
      },
      fontFamily: {
        body: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
