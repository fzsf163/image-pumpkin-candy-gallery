/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "var(--bg-color)",
        "text-color": "var(--text-color)",
        "option-color": "var(--option-color)",
        "hover-border": "var(--hover-border)",
      },
    },
  },
  plugins: [],
};
