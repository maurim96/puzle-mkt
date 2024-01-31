import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          900: '#030D1C',
          800: '#031022',
          700: '#041429',
          600: '#041730',
          500: '#051A37',
          400: '#2D3F57',
          300: '#556377',
          200: '#7D8897',
          100: '#A5ADB7',
          50: '#CDD1D7'
        },
        brandPink: {
          900: '#805D5C',
          800: '#9F7473',
          700: '#BF8B8A',
          600: '#DFA2A1',
          500: '#FFB9B8',
          400: '#FFC4C3',
          300: '#FFCFCF',
          200: '#FFDBDA',
          100: '#FFE6E5',
          50: '#FFF1F1'
        }
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px'
        }
      },
      fontFamily: {
        gagalin: ['Gagalin', 'sans-serif'],
        kollektif: ['Kollektif', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      screens: {
        xs: '200px',
        sm: '475px',
        md: '768px',
        lg: '1024px'
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' }
        },
        unflip: {
          '0%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(0deg)' }
        }
      },
      animation: {
        flip: 'flip 0.4s ease-in-out',
        unflip: 'unflip 0.4s ease-in-out'
      },
      transformOrigin: {
        card: 'center'
      },
      backfaceVisibility: {
        hidden: 'hidden'
      }
    }
  },
  plugins: []
};
export default config;
