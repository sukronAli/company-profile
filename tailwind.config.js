module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans-work': ['Rubik'],
        // 'sans-overpass': ['Overpass']
      },
      colors: {
        'white': 'white',
        'light-green': '#1C64F2',
        'dark-green-1': '#7bae37',
        'dark-green-2': '#7ca841',
        'dark-green-3': '#678b36',
        'light-1': '#F6FAFD',
        'gray-1': '#ADBACF',
        'dark-blue1': '#1A202C',
        'dark-blue2': '#2E3748'
      }
    }
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  },
  plugins: []
};
