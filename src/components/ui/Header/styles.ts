import { styled } from '../../../../stitches.config'

export const Container = styled('header', {
  position: 'sticky',
  top: '0',
  left: '0',
  right: '0',
  zIndex: '100',
  height: '64px',
  backgroundColor: 'rgb(255 255 255 / 95%)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid #E1E9EF',

  '.main-wrapper': {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    alignItems: 'center',

    '.navigation-container': {
      display: 'none'
    }
  },

  '@bp990': {
    '.main-wrapper': {
      '.navigation-button': {
        display: 'none'
      },

      '.navigation-container': {
        display: 'flex',

        ul: {
          display: 'flex',
          alignItems: 'center',
          padding: '0',
          margin: '0',

          li: {
            listStyle: 'none',
            paddingX: '16px',

            a: {
              display: 'flex',
              alignItems: 'center',
              height: '64px',
              fontSize: 'var(--fontSizes-md)',
              fontWeight: 'var(--fontWeights-regular)',
              color: 'var(--colors-darker)',
              borderBottom: '4px solid transparent'
            },

            '&:hover a, &.active a': {
              borderBottom: '4px solid var(--colors-primary)'
            }
          }
        }
      }
    }
  }
})
