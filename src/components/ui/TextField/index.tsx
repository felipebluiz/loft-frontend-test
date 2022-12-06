import React, { InputHTMLAttributes } from 'react'

import { StyledTextField } from './styles'

type TextFieldRootProps = React.ComponentProps<typeof StyledTextField> & {
  children: React.ReactNode
  error?: boolean
}

const TextFieldRoot: React.FC<TextFieldRootProps> = ({
  children,
  ...props
}) => {
  const hasLeftIcon = React.Children.toArray(children).length === 2

  return (
    <StyledTextField {...props} hasLeftIcon={hasLeftIcon}>
      {children}
    </StyledTextField>
  )
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

export const TextFieldInput = React.forwardRef<
  HTMLInputElement,
  TextFieldInputProps
>((props, ref) => <input ref={ref} {...props} />)

TextFieldInput.displayName = 'TextField.Input'

export const TextField = {
  Root: TextFieldRoot,
  Icon: TextFieldIcon,
  Input: TextFieldInput
}
