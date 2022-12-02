import React from 'react'

import { StyledText } from './styles'

type TextProps = React.ComponentProps<typeof StyledText> & {
  children: React.ReactNode
  size?: string
  weight?: string
}

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>
}
