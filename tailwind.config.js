/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.5s ease-in-out infinite",
        fadeinbouncedown: 'fade-in-bouncedown 1s ease-in-out 0.25s 1',
        fadeout: 'fade-out  ease-out 0.25s 1',
        flyoutdown: 'fly-out-down 0.6s ease-in-out 0.25s 1',
        fadeoutup: 'fade-out-up .3s ease-in-out 0.25s 1',
        fadein: 'fade-in ease-in-out 0.25s 1',
        tada: 'tada 1s ease-in-out ',
        draw: 'draw 1s ease-in-out',
      },
      keyframes: {
        draw: {
          from: {
            strokeDashoffset: 240,
          },
          to: {
            strokeDashoffset: 0,
          },
        },
        tada: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "10%, 20%": {
            transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },
          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          },
        },
        "fade-out-up": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-5deg)",
          },
          "50%": {
            transform: "rotate(5deg)",
          },
        },
        "fly-out-down": {
          "0%": {
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
            transform: "translate3d(0, -10px, 0)",
          },
          "40%, 45%": {
            opacity: "1",
            transform: "translate3d(0, 20px, 0)",
          },
          "100%": {
            opacity: "0",
            transform: "translate3d(0, -2000px, 0)",
          },
        },
        "fade-in-bouncedown": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0%, -100%, 0)",
          },
          "33%": {
            opacity: "0.5",
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: "0.7",
            transform: "translate3d(0%, -20%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1
          },
          "100%": {
            opacity: 0
          },
        },

      },
    },
  },
  plugins: [],
}

