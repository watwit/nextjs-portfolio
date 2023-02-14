/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#14191f',
        'secondary':'#29333D',
        'tertiary':'#E0E6EB',
        'quaternary':'#A3B3C2'
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif']
      },
    }
  },
  plugins: [require("daisyui")],
});