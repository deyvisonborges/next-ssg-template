/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  fontFamily: {
    sans: ['var(--font-poppins)']
  },
  screens: {
    xsmall: '450px',
    small: '768px',
    medium: '992px',
    large: '1024px',
    xlarge: '1440px'
  },
  theme: {
    extend: {
      animation: {
        appearFromRight: 'appearFromRight 0.75s ease-in forwards',
        fadeIn: 'fadeIn 0.75s ease-in forwards'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      keyframes: {
        appearFromLeft: {
          from: {
            opacity: 0,
            transform: 'translateX(0)'
          },
          to: {
            opacity: 1,
            transform: 'translate(100px)'
          }
        },
        appearFromRight: {
          from: {
            opacity: 0,
            transform: 'translate(100px)'
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
