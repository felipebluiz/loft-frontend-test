import React from 'react'

import { Spinner } from '@/components/ui/Spinner'

import { StyledButton } from './styles'

type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  children: React.ReactNode
  variant: string
  size?: string
  outlined?: boolean
  radius?: string
  disabled?: boolean
  full?: boolean
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>
    <span>{children}</span>
    <Spinner className="spinner" />
  </StyledButton>
)
