/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        black: "#1E1E1E",
        white: "#FFFFFF",
        blue: "#5FB2F7",
      },
      fontFamily: ["Poppins", sans-serif],
    },
  },
  plugins: [],
}

