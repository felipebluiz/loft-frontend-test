import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
  maxWidth: '480px',
  paddingY: '50px',
  marginX: 'auto',

  '.page-header': {
    textAlign: 'center',

    p: {
      lineHeight: 'var(--lineHeights-short)',
      marginTop: '10px',
      color: 'var(--colors-darker)'
    }
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',

    '.buttons-container': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '20px',
      marginTop: '10px'
    }
  },

  '@bp768': {
    'form .buttons-container': {
      flexDirection: 'row'
    }
  }
})
