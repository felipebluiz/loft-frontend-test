import { styled } from '../../../../stitches.config'

export const StyledModal = styled('div', {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
  overflowY: 'auto',
  zIndex: '9999',

  '.modal-container': {
    width: '100vw',
    minHeight: '100%',
    backgroundColor: 'var(--colors-white)',
    display: 'flex',
    flexDirection: 'column'
  },

  '@bp990': {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',

    '.modal-container': {
      height: 'fit-content',
      maxWidth: '580px',
      minHeight: 'initial',
      borderRadius: '20px'
    }
  },

  variants: {
    opened: {
      true: {
        opacity: '1'
      }
    },
    overlay: {
      true: {
        '@bp990': {
          background: 'rgb(0 0 0 / 30%)',
          backdropFilter: 'blur(6px)',
          overflowY: 'auto'
        }
      }
    }
  },

  defaultVariants: {
    overlay: true
  }
})
