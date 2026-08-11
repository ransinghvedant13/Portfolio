/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1A2B",       // deep blueprint navy - dark sections, primary text
        paper: "#F5F6F8",     // cool paper background
        steel: "#5B6472",     // secondary text / muted labels
        blueprint: "#1E5F8C", // primary technical-blue accent
        brass: "#C9A227",     // stamp/seal accent used sparingly
        live: "#2F855A",      // status-live green
        line: "#D8DCE3",      // hairline dividers
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(14,26,43,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,26,43,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};
