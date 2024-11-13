const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    colors: {
      'blue': '#a6c6ed',
      'gold': '#ffb84d',
      'blue-dark': '#0c2440',
      'white': '#fff',
      'whitesmoke': '#f5f5f5',
      'dark': '#221E20',
      'light': '#221E20AA'
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        georgia: ['Georgia', 'serif'],    // Georgia font family
        arial: ['Arial', 'sans-serif'],   // Arial font family
      },
      spacing: {
        '128': '32rem',
      },
      scale: {
        '75': '0.75',
        '80': '0.80',
        '85': '0.85',
        '95': '0.95',
        '175': '1.75',
        '200': '2',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}