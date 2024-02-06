/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    extend: {
      colors: {
        black: "#1E1E1E", 
        white: "#FFFFFF",
        blue: "#5FB2F7",
      },
      fontFamily: ["Poppins"],
    },
  },
  plugins: [],
}

