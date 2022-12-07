import { globalCss } from '../stitches.config'

export const GlobalStyle = globalCss({
  '*': {
    margin: '0',
    boxSizing: 'border-box'
  },

  html: {
    backgroundColor: 'var(--colors-white)'
  },

  'html, body': {
    padding: '0',
    margin: '0',
    height: '100%',
    color: 'var(--colors-darker)',
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

  form: {
    'label > p': {
      color: 'var(--colors-darker) !important',
      marginBottom: '5px !important'
    },

    '.required, .error-message': {
      color: 'var(--colors-error-primary) !important'
    },

    '.error-message': {
      marginTop: '5px'
    },

    '.is-invalid': {
      borderColor: 'var(--colors-error-primary)'
    }
  },

  'input, textarea, button, select, a, div': {
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    WebkitAppearance: 'none',
    outline: 'none'
  },

  'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: '0'
  },

  'input[type=number]': {
    MozAppearance: 'textfield'
  },

  textarea: {
    width: '100%',
    padding: '16px',
    minHeight: '120px',
    border: '1px solid var(--colors-regular)',
    borderRadius: '8px',
    fontSize: 'var(--fontSizes-sm)',
    fontFamily: 'var(--fonts-default)',
    color: 'var(--colors-darker)',
    transition: 'border-color 0.2s ease 0s',
    resize: 'none',

    '&:focus': {
      borderColor: 'var(--colors-darker)'
    }
  },

  '.main-wrapper': {
    maxWidth: '1440px',
    width: '100%',
    height: '100%',
    marginX: 'auto',
    paddingX: '20px',
  },

  '.modal-open': {
    overflowY: 'hidden'
  },

  '@bp990': {
    '.main-wrapper': {
      paddingX: '25px',
    },

    '.modal-open': {
      overflowY: 'inherit'
    }
  }
})
