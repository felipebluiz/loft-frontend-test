import { styled } from '../../../../stitches.config'

export const StyledTextField = styled('div', {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  border: '1px solid var(--colors-regular)',
  transition: 'border-color 0.2s ease 0s',

  '&:focus-within': {
    borderColor: 'var(--colors-darker)',

    svg: {
      color: 'var(--colors-darker)'
    }
  },

  svg: {
    width: '20px',
    height: '20px',
    marginLeft: '14px',
    color: 'var(--colors-regular)',
    transition: 'color 0.2s ease 0s'
  },

  input: {
    width: '100%',
    height: '48px',
    padding: '16px',
    background: 'transparent',
    border: 'none',
    fontSize: 'var(--fontSizes-sm)',
    fontFamily: 'var(--fonts-default)',
    color: 'var(--colors-darker)'
  },

  variants: {
    hasLeftIcon: {
      true: {
        input: {
          paddingLeft: '12px'
        }
      }
    },
    error: {
      true: {
        borderColor: 'var(--colors-error-primary)',

        svg: {
          color: 'var(--colors-error-primary)'
        }
      }
    }
  }
})
