import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import { X } from 'phosphor-react'
import Link from 'next/link'

import { Modal, ModalHandle } from '@/components/ui/Modal'
import { Logo } from '@/components/ui/Logo'
import { IconButton } from '@/components/ui/IconButton'

import { Container } from './styles'

interface NavigationModalProps {
  navigationModalIsOpen: boolean
  setNavigationModalIsOpen: (value: boolean) => void
}

export const NavigationModal: React.FC<NavigationModalProps> = ({
  navigationModalIsOpen,
  setNavigationModalIsOpen
}) => {
  const modalRef = useRef<ModalHandle>(null)
  const router = useRouter()

  return (
    <Modal
      ref={modalRef}
      modalIsOpen={navigationModalIsOpen}
      setModalIsOpen={setNavigationModalIsOpen}
      closeOnClickOutside={false}
    >
      <Container>
        <header>
          <Logo size="md" />
          <IconButton
            variant="secundary"
            outlined
            size="sm"
            onClick={() => modalRef.current?.closeModal()}
          >
            <X weight="bold" />
          </IconButton>
        </header>
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
      </Container>
    </Modal>
  )
}
