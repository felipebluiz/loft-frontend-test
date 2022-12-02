import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react'

import { StyledModal } from './styles'

export interface ModalHandle {
  closeModal: () => void
}

type ModalProps = React.ComponentProps<typeof StyledModal> & {
  modalIsOpen: boolean
  setModalIsOpen: (value: boolean) => void
  children: React.ReactNode
  width?: string
  overlay?: boolean
  closeOnClickOutside?: boolean
}

export const Modal = forwardRef<ModalHandle, ModalProps>(
  (
    {
      modalIsOpen,
      setModalIsOpen,
      children,
      width,
      closeOnClickOutside = true,
      ...props
    },
    ref
  ) => {
    const [opened, setOpened] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    const closeModal = () => {
      setOpened(false)
      setTimeout(() => {
        setModalIsOpen(false)

        document.documentElement.classList.remove('modal-open')
        document.body.style.removeProperty('overflow-y')
      }, 200)
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node

      if (modalRef.current && !modalRef.current?.contains(target)) {
        closeModal()
      }
    }

    useEffect(() => {
      if (closeOnClickOutside) {
        document.addEventListener('mousedown', handleClickOutside)

        return () =>
          document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])

    useEffect(() => {
      if (modalIsOpen) {
        setOpened(true)

        document.documentElement.classList.add('modal-open')
        document.body.style.overflowY = 'hidden'
      }
    }, [modalIsOpen])

    useEffect(() => {
      return () => closeModal()
    }, [])

    useImperativeHandle(ref, () => ({
      closeModal() {
        closeModal()
      }
    }))

    return (
      <StyledModal
        opened={opened}
        {...props}
        css={{
          '@bp990': {
            '.modal-container': {
              maxWidth: `${width}px`
            }
          }
        }}
      >
        <div ref={modalRef} className="modal-container">
          {children}
        </div>
      </StyledModal>
    )
  }
)
