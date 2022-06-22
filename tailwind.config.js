module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      "1/2": "50%",
    },
    extend: {
      colors: {
        "font-color": "#3a394a",
        "secondary-color": "#87ceeb",
        "primary-color": "#161616",
        "accent-color": "#3c3c7c",
        "hover-color": "#2a2a57",
      },
    },
  },
  plugins: [],
};
