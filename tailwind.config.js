/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "banner-bg" : "url('https://i.ibb.co/vsCzxsk/banner.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui : {
    darkTheme : 'light'
  }
}

