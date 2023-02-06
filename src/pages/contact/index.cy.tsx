import MockRouter from '../../../cypress/utils/router'
import Contact from './index.page'

describe('Contact form page', () => {
  beforeEach(() => {
    const onChangeSpy = cy.spy().as('onChangeSpy')

    cy.mount(
      <MockRouter>
        <Contact saveData={onChangeSpy} />
      </MockRouter>
    )
  })

  it('should submit correct form data', () => {
    cy.get('input[name="name"]').type('Felipe Luiz')
    cy.get('input[name="email"]').type('felipe@gmail.com')
    cy.get('input[name="phoneNumber"]').type('(11) 91007-7560')
    cy.get('[id="reason-select"]').click()
    cy.get('[id="react-select-selection-field-option-0"]').click()
    cy.get('textarea[name="message"]').type('This is a test message')

    cy.get('[aria-label="Enviar"]').click()

    cy.get('@onChangeSpy').should('have.been.calledWith', {
      email: 'felipe@gmail.com',
      message: 'This is a test message',
      name: 'Felipe Luiz',
      phoneNumber: '(11) 91007-7560',
      reason: { value: 'question', label: 'Dúvida' }
    })
  })

  it('should be able to validate form fields', () => {
    cy.get('[aria-label="Enviar"]').click()

    cy.get('[id="name-error"]').should('have.text', 'Campo obrigatório')
    cy.get('[id="email-error"]').should('have.text', 'Campo obrigatório')
    cy.get('[id="phoneNumber-error"]').should('have.text', 'Campo obrigatório')
    cy.get('[id="reason-error"]').should('have.text', 'Campo obrigatório')
    cy.get('[id="message-error"]').should('have.text', 'Campo obrigatório')
  })

  it('should error when email is invalid', () => {
    cy.get('input[name="email"]').type('felipe@gmail')

    cy.get('[aria-label="Enviar"]').click()

    cy.get('[id="email-error"]').should('have.text', 'E-mail inválido')
  })

  it('should error when phone number is invalid', () => {
    cy.get('input[name="phoneNumber"]').type('(11) 9999-9999')

    cy.get('[aria-label="Enviar"]').click()

    cy.get('[id="phoneNumber-error"]').should(
      'have.text',
      'Número de celular inválido'
    )
  })

  it('should error when message has less than 10 chars', () => {
    cy.get('textarea[name="message"]').type('Teste')

    cy.get('[aria-label="Enviar"]').click()

    cy.get('[id="message-error"]').should(
      'have.text',
      'A mensagem deve conter pelo menos 10 caracteres'
    )
  })

  it('should be able to navigate to apartaments screen by button', () => {
    cy.get('[aria-label="Ver Apartamentos"]').click()

    cy.get('@push').should('have.been.calledWith', '/')
  })

  it('should be able to navigate to apartaments screen by menu', () => {
    cy.get('a[data-cy="Comprar Apartamentos"').click()

    cy.get('@push').should('have.been.calledWith', '/')
  })
})
