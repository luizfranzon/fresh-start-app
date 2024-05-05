/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Ubuntu Mono"],
      },
      colors: {
        white: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
