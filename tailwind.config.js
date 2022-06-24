module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsmobile':'320px',
      'mobile':'480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1560px'
    },
    extend: {
      colors: {
        'Greenish': '#10B981',
        'Grayish': '#1F2937',
        'Mettalic': '#E5E5E5'
      }
    }
  },
  plugins: [],
}