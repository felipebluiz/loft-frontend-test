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
          <Logo size="md" />
          <nav className="navigation-container">
            <ul>
              <li className={router.pathname === '/' ? 'active' : ''}>
                <Link href="/">Comprar Apartamentos</Link>
              </li>
              <li className={router.pathname === '/contato' ? 'active' : ''}>
                <Link href="/contato">Contato</Link>
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
