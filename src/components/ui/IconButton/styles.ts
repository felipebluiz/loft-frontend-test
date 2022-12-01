import { styled } from '../../../../stitches.config'

export const StyledIconButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    width: '20px',
    height: '20px'
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: 'var(--colors-primary)',
        border: 'none',
        color: 'var(--colors-white)',

        '&:hover': {
          backgroundColor: 'var(--colors-hover-primary)'
        }
      },
      secundary: {
        backgroundColor: 'var(--colors-darker)',
        border: 'none',
        color: 'var(--colors-white)',

        '&:hover': {
          backgroundColor: 'rgb(25 31 35 / 90%)'
        }
      }
    },
    size: {
      sm: {
        width: '36px',
        height: '36px'
      },
      md: {
        width: '40px',
        height: '40px'
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
        cursor: 'not-allowed',

        '&:hover': {
          opacity: 'var(--opacity-intense)'
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
    }
  ],

  defaultVariants: {
    radius: 'rounded'
  }
})
