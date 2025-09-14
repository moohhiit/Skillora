/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        accent: '#393E46',
        neutral: '#00ADB5',
        highlight: '#EEEEEE',
      },
    },
  },
  plugins: [],
}
