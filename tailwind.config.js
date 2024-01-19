/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "rgb(var(--color-accent-1) / <alpha-value>)",
          2: "rgb(var(--color-accent-2) / <alpha-value>)",
        },
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      },
      backgroundImage: {
        texture1: `url('/src/assets/logo_officiel_1_n.png')`,
        texture2: `url('/src/assets/logo_officiel_2_n.png')`,
      },
    },
  },
  plugins: [],
};
