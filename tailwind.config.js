module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'font-color': '#3a394a',
        'secondary-color': '#87ceeb',
        'primary-color': '#161616',
        'accent-color': '#666C61',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
