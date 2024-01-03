/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        "10px": "10px",
      },

      fontFamily: {
        manrope: ["manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
