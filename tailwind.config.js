/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        "10px": "10px",
      },
      backgroundImage: {
        "home-mobile-header": "url('src/assets/home/mobile/image-header.jpg')",
        "home-mobile-zx7":
          "url('src/assets/home/mobile/image-speaker-zx7.jpg')",
      },
      fontFamily: {
        manrope: ["manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
