/* eslint-disable no-unmodified-loop-condition */
type Appointment = {
  id: string | undefined
  date: Date
}

export const getAppointmentDays = (): Date[] => {
  const today = new Date()
  const current = new Date(today)
  const end = new Date()

  current.setDate(current.getDate() + 1)
  end.setDate(current.getDate() + 5)

  const dates = []

  while (current <= end) {
    if (current.getDay() !== 6 && current.getDay() !== 0) {
      dates.push(new Date(current))
    }

    current.setDate(current.getDate() + 1)
  }

  return dates.slice(0, 3)
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
