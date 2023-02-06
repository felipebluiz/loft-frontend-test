import { format } from 'date-fns'
import MockRouter from '../../../cypress/utils/router'
import apartaments from '../../../cypress/fixtures/apartaments.json'
import Home from './index.page'
import { getAppointmentDays } from '@/utils/appointment'

describe('Contact form page', () => {
  beforeEach(() => {
    cy.mount(
      <MockRouter>
        <Home apartaments={apartaments} />
      </MockRouter>
    )
  })

  it('should be able to open appointment modal', () => {
    cy.get(`[aria-label="apartament-card"]`).first().click()

    cy.get('.modal-container').find('h2').contains('Agendar Visita')
  })

  it('should be able to show only weekdays', () => {
    const appointmentDays = getAppointmentDays()
      .filter((date) => date.getDay() !== 6 && date.getDay() !== 0)
      .map((date) => format(new Date(date), 'dd'))
      .join('')

    cy.get(`[aria-label="apartament-card"]`).first().click()

    cy.get(`.modal-container`)
      .find('.day-number')
      .should('have.length', 3)
      .should('have.text', appointmentDays)
  })

  it('should be able to store appointments in local storage', () => {
    cy.get(`[aria-label="apartament-card"]`).first().click()

    cy.get(`.modal-container`).find('.day-number').first().click()
    cy.get(`.modal-container`).find('.hour').first().click()

    cy.get('[aria-label="Agendar Visita"]').click({ timeout: 10000 })

    cy.get(`[aria-label="apartament-card"]`).first().click()

    cy.get('.modal-container').find('h2').contains('Visita Agendada')
  })

  it('should be able to filter by address', () => {
    cy.get('input[name="address"]').type('Augusta')

    cy.get(`[aria-label="apartament-card"]`).should('have.length', 6)
  })

  it('should be able to filter by bedroom', () => {
    cy.get('[id="bedroom"]').click()
    cy.get('[id="react-select-selection-field-option-2"]').click()

    cy.get(`[aria-label="apartament-card"]`).should('have.length', 4)
  })

  it('should be able to filter by address and bedroom at the same time', () => {
    cy.get('input[name="address"]').type('Augusta')

    cy.get('[id="bedroom"]').click()
    cy.get('[id="react-select-selection-field-option-2"]').click()

    cy.get(`[aria-label="apartament-card"]`).should('have.length', 1)
  })
})
