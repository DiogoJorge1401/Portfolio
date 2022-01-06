module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dc-blue': '#5165f6',
        'ld-blue': '#0a66c2',
        'al-blue': '#19212d',
      },
      keyframes: {
        bouce2: {
          '0%, 100%': {
            transform: 'translateY(-100%)',
            'animation-timing-function': 'cubic-bezier(1,0,1,1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0,1)',
          },
        },
      },
      animation: {
        'bounce-2': 'bouce2 1s infinite',
      },
      screens: {
        sm: '600px',
      },
    },
  },
  plugins: [],
}
