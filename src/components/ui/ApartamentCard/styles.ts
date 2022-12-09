import { styled } from '../../../../stitches.config'

export const Container = styled('div', {
  cursor: 'pointer',
  transition: 'transform 0.15s ease-in-out 0s',

  '&:hover': {
    transform: 'translateY(-4px)',

    '.image-container img': {
      opacity: 'var(--opacity-semiOpaque)'
    }
  },

  '.image-container': {
    position: 'relative',
    height: '280px',
    backgroundColor: '#DDDDDD',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    verticalAlign: 'bottom',

    img: {
      objectFit: 'cover',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
      transition: 'opacity 0.15s ease-in-out 0s'
    }
  },

  '.content-container': {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '20px',
    border: '1px solid #D5DCE2',
    borderTop: 'none',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',

    '.heading, .features': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      'h2, p, svg': {
        color: 'var(--colors-darker)'
      }
    },

    '.heading': {
      gap: '10px',

      '> div': {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      },

      '.is-liked': {
        color: 'var(--colors-error-primary)'
      }
    },

    '.features': {
      gap: '10px',

      '> div': {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',

        svg: {
          marginBottom: '2px'
        }
      }
    }
  }
})
