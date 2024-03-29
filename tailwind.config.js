/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "hsl(221, 100%, 96%)",
        "slate-blue": {
          light: "hsl(252, 100%, 67%)",
          dark: "hsl(241, 81%, 54%)",
        },
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "dark-blue": "hsl(224, 30%, 27%)",
        "light-red": {
          default: "hsl(0, 100%, 96%)",
          dark: "hsl(0, 100%, 27%)",
        },
      },
    },
  },
  plugins: [],
};
