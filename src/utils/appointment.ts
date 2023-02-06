import { addDays, format, startOfWeek, isWeekend } from 'date-fns'

/* eslint-disable no-unmodified-loop-condition */
type Appointment = {
  id: string | undefined
  date: Date
}

export const getAppointmentDays = (): Date[] => {
  const firstDOW = startOfWeek(new Date())

  return Array.from(Array(7))
    .map((e, i) => new Date(format(addDays(firstDOW, i), 'P')))
    .filter((day) => !isWeekend(day))
    .slice(1, 4)
}

export const getAppointment = (id: string): Appointment | undefined => {
  const appointments = localStorage.getItem('appointments')

  if (appointments) {
    const parsedAppointments = JSON.parse(appointments)

    return parsedAppointments.find(
      (appointment: Appointment) => appointment.id === id
    )
  }
}

export const createAppointment = (data: Appointment): void => {
  const appointments = localStorage.getItem('appointments')

  if (appointments) {
    const parsedAppointments = JSON.parse(appointments)

    localStorage.setItem(
      'appointments',
      JSON.stringify([...parsedAppointments, data])
    )
  } else {
    localStorage.setItem('appointments', JSON.stringify([data]))
  }
}

export const deleteAppointment = (id: string | undefined): void => {
  const appointments = localStorage.getItem('appointments')

  if (appointments) {
    const parsedAppointments = JSON.parse(appointments)
    const newAppointments = parsedAppointments.filter(
      (appointment: Appointment) => appointment.id !== id
    )

    localStorage.setItem('appointments', JSON.stringify(newAppointments))
  }
}
