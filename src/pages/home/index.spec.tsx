import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import selectEvent from 'react-select-event'

import Home from './index.page'
import apartaments from '../../__mocks__/apartaments.json'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: ''
    }
  }
}))

const getTextField = (name: RegExp) => screen.getByRole('textbox', { name })

describe('Home page', () => {
  beforeEach(() => {
    render(<Home apartaments={apartaments} />)
  })

  it('should be able to open appointment modal', async () => {
    userEvent.click(screen.getAllByRole('heading', { name: /800.000,00/i })[0])

    expect(
      screen.getByRole('heading', { name: /agendar visita/i })
    ).toBeInTheDocument()
  })

  it('should be able to filter by address', () => {
    userEvent.type(getTextField(/pesquisar por endereço/i), 'Augusta')

    expect(screen.getAllByLabelText('apartament-card')).toHaveLength(6)
  })

  it('should be able to filter by bedroom', async () => {
    await selectEvent.select(
      screen.getByLabelText(/dormitórios/i),
      '+3 dormitórios'
    )

    expect(screen.getAllByLabelText('apartament-card')).toHaveLength(4)
  })

  it('should be able to filter by address and bedroom at the same time', async () => {
    userEvent.type(getTextField(/pesquisar por endereço/i), 'Consolação')

    await selectEvent.select(
      screen.getByLabelText(/dormitórios/i),
      '2 dormitórios'
    )

    expect(screen.getAllByLabelText('apartament-card')).toHaveLength(1)
  })
})
