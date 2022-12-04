import React from 'react'

import { StyledSpinner } from './styles'

type SpinnerProps = React.ComponentProps<typeof StyledSpinner> & {
  size?: string
  color?: string
}

export const Spinner: React.FC<SpinnerProps> = ({ size, color, ...props }) => (
  <StyledSpinner size={size} color={color} {...props} />
)
