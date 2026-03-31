module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#5CB85C',
        'green-hover': '#4CAF50',
        'green-light': '#e8f5e9',
        'border-color': '#e0e0dc',
        'text-primary': '#0a0a0a',
        'text-secondary': '#555555',
        'text-muted': '#999999',
        'off-white': '#fafaf8',
        'dark-bg': '#111111',
        'dark-surface': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
