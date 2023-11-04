/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "var(--bg-color)",
        "text-color": "var(--text-color)",
        "option-color": "var(--option-color)",
        "border-color": "var(--hover-border)",
      },
      backgroundImage: {
        "meshy-pattern": "url(/public/peak_background.svg)",
      },
    },
  },
  plugins: [],
};
