module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      colors: {
        'surface': '#121212',
        'base': '#ffffff',
        'surface-low': '#888888',
        'back': '#ececec',
        'surface-high': '#d0d0d0',
        'neutral': '#f5f6f8',
        'primary-neutral-low': '#7b7c7d',
        'primary-neutral-high': '#323947',
        'primary-neutral-lowest': '#b1b2b4',
        'primary': '#1a1b1f',
        'primary-base-low': '#5f6063',
        'primary-base-lowest': '#b8b8b8'
      },
    },
  },
  plugins: [],
}
