module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#1856FE',
        'blue-hover': '#1449e0',
        'blue-light': '#eff4ff',
        'border-color': '#d1d1d1',
        'border-hover': '#e2e3e4',
        'text-primary': '#0d1216',
        'text-secondary': '#4b5563',
        'text-muted': '#9ca3af',
        'off-white': '#f8f9fa',
        'light-gray': '#f3f4f6',
      },
      fontFamily: {
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
