/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '25': 'repeat(25, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

