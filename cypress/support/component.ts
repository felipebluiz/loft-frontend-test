import './commands'
import { mount } from 'cypress/react18'
import { GlobalStyle } from '../../styles/global'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line no-undef
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)

GlobalStyle()
