import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '.page-header': {
    marginTop: '40px',

    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',

      'label[for=address]': {
        flex: 1
      },

      'label[for=bedroom]': {
        minWidth: '205px'
      }
    }
  },

  '.page-content': {
    marginY: '60px',

    '.apartaments-grid': {
      display: 'grid',
      gap: '20px'
    },

    '> h2': {
      textAlign: 'center'
    }
  },

  '@bp768': {
    '.page-header': {
      marginX: 'auto',

      form: {
        width: '580px',
        flexDirection: 'row',
        gap: '30px'
      }
    },

    '.page-content .apartaments-grid': {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  },

  '@bp990': {
    '.page-content .apartaments-grid': {
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  },

  '@bp1280': {
    '.page-content .apartaments-grid': {
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  }
})
