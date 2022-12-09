import { styled } from '../../../../stitches.config'

export const StyledHeading = styled('h2', {
  fontFamily: 'var(--fonts-default)',
  lineHeight: 'var(--lineHeights-shorter)',
  color: 'var(--colors-darker)',
  margin: '0',

  variants: {
    size: {
      sm: { fontSize: 'var(--fontSizes-lg)' },
      md: { fontSize: 'var(--fontSizes-2xl)' },
      lg: { fontSize: 'var(--fontSizes-4xl)' },
      xl: { fontSize: 'var(--fontSizes-6xl)' },
      '2xl': { fontSize: 'var(--fontSizes-7xl)' }
    },
    weight: {
      small: { fontWeight: 'var(--fontWeights-small)' },
      regular: { fontWeight: 'var(--fontWeights-regular)' },
      medium: { fontWeight: 'var(--fontWeights-medium)' },
      bold: { fontWeight: 'var(--fontWeights-bold)' }
    }
  },

  defaultVariants: {
    size: 'md',
    weight: 'bold'
  }
})
