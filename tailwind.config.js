/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#D9DEDB",
        panel: "#F3F5F3",
        ink: "#0D1A20",
        muted: "#5A6A70",
        pine: "#1D5B4E",
        brass: "#C08A12",
        "brass-ink": "#7A5606",
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "sans-serif"],
        sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
