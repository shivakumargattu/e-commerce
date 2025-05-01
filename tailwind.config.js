module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#FFD699',
          DEFAULT: '#FFA500',
          dark: '#CC8400',
        },
        background: '#FFF8F0',
        card: '#FFFFFF',
        text: '#333333',
        secondary: '#666666',
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 16px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}