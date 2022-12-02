import React from 'react'

import { StyledHeading } from './styles'

type HeadingProps = React.ComponentProps<typeof StyledHeading> & {
  children: React.ReactNode
  size?: string
  weight?: string
}

export const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
  return <StyledHeading {...props}>{children}</StyledHeading>
}
