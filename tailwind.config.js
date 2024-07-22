/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      progress: {
        base: {
          '@apply bg-yellow-500 rounded-lg': {},
        },
        bar: {
          '@apply bg-yellow-500 rounded-lg': {},
        },
        value: {
          '@apply bg-blue-500 rounded-lg shadow-md': {},
        },
      }
    },
  },
  plugins: [],
}

