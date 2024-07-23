/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "text-security": ["text-security-disc"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-security": {
          "-webkit-text-security": "disc",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
