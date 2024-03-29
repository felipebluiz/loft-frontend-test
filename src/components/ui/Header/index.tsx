import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { List } from 'phosphor-react'
import Link from 'next/link'

import { Logo } from '@/components/ui/Logo'
import { IconButton } from '@/components/ui/IconButton'
import { NavigationModal } from '@/components/modal/NavigationModal'

import { Container } from './styles'

export const Header: React.FC = () => {
  const [navigationModalIsOpen, setNavigationModalIsOpen] = useState(false)
  const router = useRouter()

  return (
    <>
      <Container>
        <div className="main-wrapper">
          <Logo />
          <nav className="navigation-container">
            <ul>
              <li className={router.pathname === '/home' ? 'active' : ''}>
                <Link href="/" data-cy="Comprar Apartamentos">
                  Comprar Apartamentos
                </Link>
              </li>
              <li className={router.pathname === '/contact' ? 'active' : ''}>
                <Link href="/contato" data-cy="Contato">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
          <IconButton
            size="sm"
            variant="secundary"
            outlined
            className="navigation-button"
            onClick={() => setNavigationModalIsOpen(!navigationModalIsOpen)}
          >
            <List weight="bold" />
          </IconButton>
        </div>
      </Container>
      {navigationModalIsOpen && (
        <NavigationModal
          navigationModalIsOpen={navigationModalIsOpen}
          setNavigationModalIsOpen={setNavigationModalIsOpen}
        />
      )}
    </>
  )
}
