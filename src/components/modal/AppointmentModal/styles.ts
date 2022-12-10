import { styled } from '../../../../stitches.config'

export const Container = styled('div', {
  display: 'grid',
  gap: '30px',
  padding: '30px',
  textAlign: 'center',

  '.content-container': {
    display: 'grid',
    gap: '20px',

    '.days, .hours': {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',

      button: {
        backgroundColor: 'var(--colors-white)',
        border: '1px solid #D5DCE2',
        borderRadius: '12px',
        transition: 'background 0.2s ease 0s, border 0.2s ease 0s',
        cursor: 'pointer',

        '&:hover:not([disabled]), &.active': {
          backgroundColor: '#E5FFFB',
          border: '1px solid var(--colors-secundary)'
        },

        '&:disabled': {
          cursor: 'default'
        }
      }
    },

    '.days button': {
      padding: '10px 18px',

      '.day-name, .month-name': {
        color: 'var(--colors-regular)',
        textTransform: 'uppercase'
      }
    },

    '.hours': {
      flexWrap: 'wrap',

      button: {
        padding: '10px 15px',
        borderRadius: '20px',
        color: 'var(--colors-darker)'
      }
    }
  },

  '.footer-container': {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '10px'
  },

  '@bp375': {
    '.footer-container': {
      flexDirection: 'row',
      marginX: 'auto'
    }
  }
})
