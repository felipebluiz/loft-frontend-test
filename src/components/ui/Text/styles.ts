import { styled } from '../../../../stitches.config'

export const StyledText = styled('p', {
  fontFamily: 'var(--fonts-default)',
  lineHeight: 'var(--lineHeights-base)',
  color: 'var(--colors-darker)',
  margin: '0',

  variants: {
    size: {
      xs: { fontSize: 'var(--fontSizes-xs)' },
      sm: { fontSize: 'var(--fontSizes-sm)' },
      md: { fontSize: 'var(--fontSizes-md)' },
      lg: { fontSize: 'var(--fontSizes-lg)' }
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
    weight: 'regular'
  }
})
