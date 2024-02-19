import { createThemes } from 'tw-colors';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [createThemes({
    dark: {
      background: "hsl(222, 26%, 31%)",
      keyboard: "hsl(223, 31%, 20%)",
      display: "hsl(224, 36%, 15%)",
      key: {
        primary: "hsl(30, 25%, 89%)",
        secondary: "hsl(225, 21%, 49%)",
        tertiary: "hsl(6, 63%, 50%)",
        shadow: {
          primary: "hsl(28, 16%, 65%)",
          secondary: "hsl(224, 28%, 35%)",
          tertiary: "hsl(6, 70%, 34%)",
        },
        hover: {
          primary: "hsl(30, 25%, 95%)",
          secondary: "hsl(225, 21%, 59%)",
          tertiary: "hsl(6, 63%, 60%)"
        }
      },
      text: {
        primary: "hsl(0, 0%, 100%)",
        secondary: "hsl(221, 14%, 31%)",
        tertiary: "hsl(0, 0%, 100%)",
        quaternary: "hsl(0, 0%, 100%)"
      }
    },
    light: {
      background: "hsl(0, 0%, 90%)",
      keyboard: "hsl(0, 5%, 81%)",
      display: "hsl(0, 0%, 93%)",
      key: {
        primary: "hsl(45, 7%, 89%)",
        secondary: "hsl(185, 42%, 37%)",
        tertiary: "hsl(25, 98%, 40%)",
        shadow: {
          primary: "hsl(35, 11%, 61%)",
          secondary: "hsl(185, 58%, 25%)",
          tertiary: "hsl(25, 99%, 27%)",
        },
        hover: {
          primary: "hsl(45, 7%, 95%)",
          secondary: "hsl(185, 42%, 53%)",
          tertiary: "hsl(25, 98%, 55%)"
        }
      },
      text: {
        primary: "hsl(60, 10%, 19%)",
        secondary: "hsl(60, 10%, 19%)",
        tertiary: "hsl(0, 0%, 100%)",
        quaternary: "hsl(0, 0%, 100%)"
      }
    },
    night: {
      background: "hsl(268, 75%, 9%)",
      keyboard: "hsl(268, 71%, 12%)",
      display: "hsl(268, 71%, 12%)",
      key: {
        primary: "hsl(268, 47%, 21%)",
        secondary: "hsl(281, 89%, 26%)",
        tertiary: "hsl(176, 100%, 44%)",
        shadow: {
          primary: "hsl(290, 70%, 36%)",
          secondary: "hsl(285, 91%, 52%)",
          tertiary: "hsl(177, 92%, 70%)",
        },
        hover: {
          primary: "hsl(268, 48%, 45%)",
          secondary: "hsl(281, 89%, 41%)",
          tertiary: "hsl(176, 100%, 66%)",
        }
      },
      text: {
        primary: "hsl(52, 100%, 62%)",
        secondary: "hsl(52, 100%, 62%)",
        tertiary: "hsl(0, 0%, 100%)",
        quaternary: "hsl(198, 20%, 13%)"
      }
    }
  })],
  safelist: ["bg-key-secondary", "bg-key-hover-secondary", "text-text-tertiary", "bg-key-tertiary", "bg-key-hover-tertiary", "text-text-quaternary", "bg-key-shadow-secondary", "bg-key-shadow-tertiary"],
}

