import React, { InputHTMLAttributes } from 'react'

import { StyledTextField } from './styles'

type TextFieldRootProps = React.ComponentProps<typeof StyledTextField> & {
  children: React.ReactNode
}

const TextFieldRoot: React.FC<TextFieldRootProps> = ({ children }) => {
  const hasLeftIcon = React.Children.toArray(children).length === 2

  return <StyledTextField hasLeftIcon={hasLeftIcon}>{children}</StyledTextField>
}

TextFieldRoot.displayName = 'TextField.Root'

type TextFieldIconProps = {
  children: React.ReactNode
}

const TextFieldIcon: React.FC<TextFieldIconProps> = ({ children }) => (
  <>{children}</>
)

TextFieldIcon.displayName = 'TextField.Icon'

type TextFieldInputProps = InputHTMLAttributes<HTMLInputElement>

const TextFieldInput: React.FC<TextFieldInputProps> = (props) => (
  <input {...props} />
)

TextFieldInput.displayName = 'TextField.Input'

export const TextField = {
  Root: TextFieldRoot,
  Icon: TextFieldIcon,
  Input: TextFieldInput
}
