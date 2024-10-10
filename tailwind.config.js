/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#433b7f",
        lightPrimary: "#776ebf",
        secondary: "#dd9933",
        lightSecondary: "#efba6b",
        header: "#f8c15b",
        alttext: "#1e1f4b",
        sometexts: "#1a1a1a",
        teamtexts: "#3e3232",
        footer: "#1d1d1d",
      },
      fontFamily: {
        inter: ["Inter", "serif"],
        manrope: ["Manrope", "serif"],
        opensans: ["Open Sans", "serif"],
        roboto: ["Roboto", "serif"],
        unbounded: ["Unbounded", "serif"],
      },
    },
  },
  plugins: [],
};
