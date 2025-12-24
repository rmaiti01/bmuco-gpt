module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: 'hsl(var(--obsidian))',
        charcoal: 'hsl(var(--charcoal))',
        paper: 'hsl(var(--paper))',
        'oxford-green': 'hsl(var(--oxford-green))',
        'sage-mist': 'hsl(var(--sage-mist))',
        'cosmic-blue': 'hsl(var(--cosmic-blue))',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
