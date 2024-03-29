/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      fontPoppins: ['Poppins', 'sans-serif'],
      
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake", "acid", "cmyk"],
  },
};
