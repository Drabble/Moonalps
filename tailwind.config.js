module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#ffffff",
        secondary: "#000000",
        tertiary: "#222222",
        quaternary: "#eeeeee",
        menu: "#0a0a0a",
        'dark': {
          100: '#FEF6E4',
          200: '#FCE8C4',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
        'light': {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      backgroundImage: {
        'home': "url('/home.jpg')",
        'footer': "url('/footer.jpg')"
      },
      grayscale: {
        50: '50%',
      },
      fontFamily: {
        'sans': ['TT Hoves', 'ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'migra-bold': ['Migra Bold'],
        'migra-light': ['Migra Light'],
      }
    },
  },
  plugins: [],
};
