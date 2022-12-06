import { styled } from '../../../../stitches.config'

export const StyledButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: 'none',

  span: {
    fontFamily: 'var(--fonts-default)',
    fontSize: 'var(--fontSizes-md)',
    fontWeight: 'var(--fontWeights-small)'
  },

  '.spinner': {
    display: 'none'
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: 'var(--colors-primary)',
        color: 'var(--colors-white)',

        '&:hover': {
          backgroundColor: 'var(--colors-hover-primary)'
        }
      },
      secundary: {
        backgroundColor: 'var(--colors-darker)',
        color: 'var(--colors-white)',

        '&:hover': {
          backgroundColor: 'rgb(25 31 35 / 90%)'
        }
      }
    },
    size: {
      md: {
        padding: '14px 24px'
      }
    },
    outlined: {
      true: {
        backgroundColor: 'transparent !important'
      }
    },
    radius: {
      rounded: {
        borderRadius: '100px'
      },
      semiRounded: {
        borderRadius: '8px'
      }
    },
    disabled: {
      true: {
        opacity: 'var(--opacity-intense)',
        pointerEvents: 'none'
      }
    },
    full: {
      true: {
        width: '100%'
      }
    },
    loading: {
      true: {
        '.spinner': {
          display: 'initial',
          position: 'absolute'
        },

        span: {
          visibility: 'hidden'
        }
      }
    }
  },

  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,
      css: {
        color: 'var(--colors-primary)',
        boxShadow: 'inset 0 0 0px 1px var(--colors-primary)',

        '&:hover': {
          backgroundColor: 'rgb(217 70 22 / 10%) !important'
        }
      }
    },
    {
      variant: 'secundary',
      outlined: true,
      css: {
        color: 'var(--colors-darker)',
        boxShadow: 'inset 0 0 0px 1px var(--colors-darker)',

        '&:hover': {
          backgroundColor: 'rgb(18 22 25 / 10%) !important'
        }
      }
    },
    {
      variant: 'primary',
      disabled: true,
      css: {
        '&:hover': {
          backgroundColor: 'var(--colors-primary)'
        }
      }
    },
    {
      variant: 'secundary',
      disabled: true,
      css: {
        '&:hover': {
          backgroundColor: 'var(--colors-darker)'
        }
      }
    }
  ],

  defaultVariants: {
    size: 'md',
    radius: 'rounded'
  }
})
