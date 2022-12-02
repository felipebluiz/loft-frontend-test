import { styled } from '../../../../stitches.config'

export const StyledLogo = styled('div', {
  a: {
    display: 'inline-block',

    svg: {
      width: '1em',
      height: '1em',
      verticalAlign: 'bottom',
      fill: 'var(--colors-primary)'
    }
  },

  variants: {
    size: {
      sm: {
        'a svg': {
          fontSize: '32px'
        }
      },
      md: {
        'a svg': {
          fontSize: '40px'
        }
      }
    }
  },

  defaultVariants: {
    size: 'md'
  }
})
