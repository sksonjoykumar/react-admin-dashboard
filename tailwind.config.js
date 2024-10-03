/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridAutoRows: {
        "min-158": "minmax(158px, auto)",
      },
    },
  },
  plugins: [],
};
