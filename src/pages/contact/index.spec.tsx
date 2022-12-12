import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import selectEvent from 'react-select-event'

import Contact from './index.page'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: ''
    }
  }
}))

const getTextField = (name: RegExp) => screen.getByRole('textbox', { name })

describe('Contact form', () => {
  const onSubmit = jest.fn()

  beforeEach(() => {
    onSubmit.mockClear()
    render(<Contact saveData={onSubmit} />)
  })

  it('should submit correct form data', async () => {
    userEvent.type(getTextField(/nome completo/i), 'Felipe Luiz')
    userEvent.type(getTextField(/e-mail/i), 'felipe@gmail.com')
    userEvent.type(getTextField(/número de celular/i), '(11) 91007-7560')
    await selectEvent.select(screen.getByLabelText(/motivo/i), 'Dúvida')
    userEvent.type(getTextField(/mensagem/i), 'This is a test message')

    userEvent.click(screen.getByRole('button', { name: /enviar/i }))

    await waitFor(
      () => {
        expect(onSubmit).toHaveBeenCalledWith({
          email: 'felipe@gmail.com',
          message: 'This is a test message',
          name: 'Felipe Luiz',
          phoneNumber: '(11) 91007-7560',
          reason: { value: 'question', label: 'Dúvida' }
        })
      },
      { timeout: 5000 }
    )
  })

  it('should be able to validate form fields', async () => {
    await act(() => {
      userEvent.click(screen.getByRole('button', { name: /enviar/i }))
    })

    expect(getTextField(/nome completo/i)).toHaveErrorMessage(
      'Campo obrigatório'
    )

    expect(getTextField(/e-mail/i)).toHaveErrorMessage('Campo obrigatório')

    expect(getTextField(/número de celular/i)).toHaveErrorMessage(
      'Campo obrigatório'
    )

    expect(screen.getByLabelText(/motivo/i)).toHaveErrorMessage(
      'Campo obrigatório'
    )

    expect(getTextField(/mensagem/i)).toHaveErrorMessage('Campo obrigatório')
  })

  it('should error when email is invalid', async () => {
    const textField = getTextField(/e-mail/i)

    userEvent.type(textField, 'felipe@gmail')

    await act(() => {
      userEvent.click(screen.getByRole('button', { name: /enviar/i }))
    })

    expect(textField).toHaveErrorMessage('E-mail inválido')
  })

  it('should error when phone number is invalid', async () => {
    const textField = getTextField(/número de celular/i)

    userEvent.type(textField, '(11) 9999-9999')

    await act(() => {
      userEvent.click(screen.getByRole('button', { name: /enviar/i }))
    })

    expect(textField).toHaveErrorMessage('Número de celular inválido')
  })

  it('should error when message has less than 10 chars', async () => {
    const textField = getTextField(/mensagem/i)

    userEvent.type(textField, 'Test')

    await act(() => {
      userEvent.click(screen.getByRole('button', { name: /enviar/i }))
    })

    expect(textField).toHaveErrorMessage(
      'A mensagem deve conter pelo menos 10 caracteres'
    )
  })
})
