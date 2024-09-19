
/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily":{
        "cursive":["Playwrite CU","sans-serif"],
        "sora":["Sora","sans-serif"]
      }
    },
  },
  plugins: [],
}