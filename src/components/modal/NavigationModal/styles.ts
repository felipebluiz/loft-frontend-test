import { styled, keyframes } from '../../../../stitches.config'

export const revealLinks = keyframes({
  from: { transform: 'translateY(20px)' },
  to: {
    opacity: '1',
    transform: 'none'
  }
})

export const Container = styled('div', {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '20px',
  paddingRight: '20px',

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
    minHeight: '64px'
  },

  '.navigation-container': {
    flex: '1',

    ul: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0',
      margin: '0',

      li: {
        listStyle: 'none',
        opacity: '0',
        animation: `${revealLinks} .5s forwards`,

        a: {
          display: 'block',
          paddingTop: '20px',
          paddingBottom: '20px',
          borderBottom: '1px solid #E1E9EF',
          fontSize: 'var(--fontSizes-md)',
          fontWeight: 'var(--fontWeights-regular)',
          color: 'var(--colors-darker)'
        },

        '&:last-child a': {
          borderBottom: 'none'
        },

        '&:hover > a, &.active > a': {
          color: 'var(--colors-primary)'
        }
      }
    }
  }
})
