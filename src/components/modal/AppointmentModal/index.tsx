import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'

import { Modal, ModalHandle } from '@/components/ui/Modal'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'

import { Button } from '@/components/ui/Button'
import { currencyFormat } from '@/utils/format'
import {
  getAppointmentDays,
  getAppointment,
  createAppointment,
  deleteAppointment
} from '@/utils/appointment'
import { Apartament } from '@/global/types'

import { Container } from './styles'

export type AppointmentModalHandle = {
  openModal: (data: Apartament) => void
}

export const AppointmentModal = forwardRef<AppointmentModalHandle>(
  (props, ref) => {
    const modalRef = useRef<ModalHandle>(null)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [apartament, setApartament] = useState<Apartament>()
    const [hasAppointment, setHasAppointment] = useState(false)
    const appointmentDays = getAppointmentDays()
    const appointmentHours = ['14:00', '14:30', '15:00', '15:30']
    const [selectedDay, setSelectedDay] = useState('')
    const [selectedHour, setSelectedHour] = useState('')
    const [loading, setLoading] = useState(false)

    const handleAppointment = () => {
      if (selectedDay && selectedHour) {
        setLoading(true)

        setTimeout(() => {
          const hours = selectedHour.split(':')
          const date = new Date(selectedDay)
          date.setHours(+hours[0], +hours[1], 0)

          createAppointment({ id: apartament?.id, date })

          modalRef.current?.closeModal()

          setLoading(false)
        }, 2000)
      }
    }

    const cancelAppointment = () => {
      setLoading(true)

      setTimeout(() => {
        deleteAppointment(apartament?.id)

        modalRef.current?.closeModal()

        setLoading(false)
      }, 2000)
    }

    useImperativeHandle(ref, () => ({
      openModal(data) {
        setApartament(data)

        const appointment = getAppointment(data.id)

        if (appointment) {
          const date = new Date(appointment.date)
          const hours = date.getHours()
          const minutes = date.getMinutes().toString().padStart(2, '0')

          setSelectedDay(date.toDateString())
          setSelectedHour(`${hours}:${minutes}`)
          setHasAppointment(true)
        } else {
          setSelectedDay('')
          setSelectedHour('')
          setHasAppointment(false)
        }

        setModalIsOpen(true)
      }
    }))

    if (!modalIsOpen) return null

    return (
      <Modal
        ref={modalRef}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      >
        <Container>
          <header className="header-container">
            <Heading>
              {!hasAppointment ? 'Agendar Visita' : 'Visita Agendada'}
            </Heading>
          </header>
          <div className="content-container">
            <div>
              <Text>{currencyFormat.format(apartament?.price || 0)}</Text>
              <Text>
                {`${apartament?.address.street}, ${apartament?.address.number}`}
              </Text>
            </div>
            <div className="days">
              {appointmentDays.map((day, i) => (
                <button
                  key={i}
                  disabled={hasAppointment}
                  onClick={() => setSelectedDay(day.toDateString())}
                  className={selectedDay === day.toDateString() ? 'active' : ''}
                >
                  <Text size="xs" className="day-name">
                    {moment(day).format('ddd')}
                  </Text>
                  <Text size="lg" weight="bold" className="day-number">
                    {moment(day).format('DD')}
                  </Text>
                  <Text size="xs" className="month-name">
                    {moment(day).format('MMM')}
                  </Text>
                </button>
              ))}
            </div>
            <div className="hours">
              {appointmentHours.map((hour, i) => (
                <button
                  key={i}
                  disabled={hasAppointment}
                  onClick={() => setSelectedHour(hour)}
                  className={selectedHour === hour ? 'active' : ''}
                >
                  {hour}
                </button>
              ))}
            </div>
          </div>
          <footer className="footer-container">
            <Button
              variant="secundary"
              radius="semiRounded"
              outlined
              onClick={() => modalRef.current?.closeModal()}
            >
              Voltar
            </Button>
            <Button
              variant="primary"
              radius="semiRounded"
              aria-label={!hasAppointment ? 'Agendar Visita' : 'Cancelar'}
              disabled={loading}
              loading={loading}
              onClick={!hasAppointment ? handleAppointment : cancelAppointment}
            >
              {!hasAppointment ? 'Agendar Visita' : 'Cancelar'}
            </Button>
          </footer>
        </Container>
      </Modal>
    )
  }
)
