/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'progress-bg': '#000000', // Example background color
        'progress-bar': '#00FF00', // Example progress bar color
      },
      spacing: {
        'progress': '0.5rem', // Example spacing for progress bar
      },
      borderRadius: {
        'progress': '0.25rem', // Example border-radius for progress bar
      },
    },
  },
  plugins: [],
}