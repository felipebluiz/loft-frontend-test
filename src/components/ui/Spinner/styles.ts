import { keyframes } from '@stitches/react'
import { styled } from '../../../../stitches.config'

const animation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

export const StyledSpinner = styled('div', {
  position: 'relative',
  width: '20px',
  height: '20px',
  margin: 'auto',
  borderTop: '1.3em solid',
  borderRight: '1.3em solid',
  borderBottom: '1.3em solid',
  borderLeft: '1.3em solid',
  borderRadius: '50%',
  transform: 'translateZ(0)',
  animation: `${animation} 0.5s infinite linear`,

  '&:after': {
    borderRadius: '50%',
    width: '20px',
    height: '20px'
  },

  variants: {
    size: {
      sm: { fontSize: '1.6px' },
      md: { fontSize: '1.92px' },
      lg: { fontSize: '2.4px' },
      xl: { fontSize: '2.88px' }
    },
    color: {
      white: {
        borderTopColor: 'rgba(255, 255, 255, 0.2)',
        borderRightColor: 'rgba(255, 255, 255, 0.2)',
        borderBottomColor: 'rgba(255, 255, 255, 0.2)',
        borderLeftColor: 'var(--colors-white)'
      }
    }
  },

  defaultVariants: {
    size: 'md',
    color: 'white'
  }
})
