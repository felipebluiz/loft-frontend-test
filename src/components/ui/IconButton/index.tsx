import React from 'react'

import { StyledIconButton } from './styles'

type IconButtonProps = React.ComponentProps<typeof StyledIconButton> & {
  children: React.ReactNode
  size: string
  variant: string
  outlined?: boolean
  radius?: string
  disabled?: boolean
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  ...props
}) => <StyledIconButton {...props}>{children}</StyledIconButton>
