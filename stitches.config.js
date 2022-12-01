import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      primary: '#FF774A',
      secundary: '#20A483',
      white: '#FFFFFF',
      regular: '#697077',
      darker: '#191F23',
      black: '#000000',
      'sucess-primary': '#28B833',
      'error-primary': '#FF0000',
      'warning-primary': '#FACA07',
      'background-primary': '#FFFFFF',
      'hover-primary': '#D94616'
    },
    fonts: {
      default: 'Roboto, sans-serif'
    },
    fontSizes: {
      xxs: '0.625rem',
      xs: '0.8rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      '2xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '6rem'
    },
    fontWeights: {
      small: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%'
    },
    opacity: {
      default: '100%',
      semiOpaque: '90%',
      intense: '80%',
      medium: '50%',
      light: '25%',
      semiTransparent: '10%'
    }
  },
  media: {
    bp768: '(min-width: 768px)',
    bp990: '(min-width: 990px)'
  }
})
