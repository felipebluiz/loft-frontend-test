import { globalCss } from '../stitches.config'

export const GlobalStyle = globalCss({
  '*': {
    margin: '0',
    boxSizing: 'border-box'
  },

  html: {
    backgroundColor: 'var(--colors-background-primary)'
  },

  'html, body': {
    padding: '0',
    margin: '0',
    height: '100%',
    color: 'var(--colors-regular)',
    fontFamily: 'var(--fonts-default)'
  },

  'h1, h2, h3, p': {
    margin: '0',
    padding: '0'
  },

  a: {
    textDecoration: 'none'
  },

  button: {
    margin: '0',
    padding: '0',
    fontFamily: 'var(--fonts-default)',
    cursor: 'pointer'
  },

  '::selection': {
    color: 'var(--colors-white)',
    background: 'var(--colors-primary)'
  },

  '::-moz-selection': {
    color: 'var(--colors-white)',
    background: 'var(--colors-primary)'
  },

  '::placeholder': {
    color: 'var(--colors-regular)',
    opacity: 'var(--opacity-default)'
  },

  ':-ms-input-placeholder': {
    color: 'var(--colors-regular)'
  },

  '::-ms-input-placeholder': {
    color: 'var(--colors-regular)'
  },

  'input, textarea, button, select, a, div': {
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    WebkitAppearance: 'none',
    outline: 'none'
  }
})
