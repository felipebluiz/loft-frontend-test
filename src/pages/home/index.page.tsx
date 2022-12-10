import React, { useRef } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useForm, Controller } from 'react-hook-form'

import { Header } from '@/components/ui/Header'
import { Text } from '@/components/ui/Text'
import { Heading } from '@/components/ui/Heading'
import { TextField } from '@/components/ui/TextField'
import { SelectionField } from '@/components/ui/SelectionField'
import { ApartamentCard } from '@/components/ui/ApartamentCard'
import {
  AppointmentModal,
  AppointmentModalHandle
} from '@/components/modal/AppointmentModal'
import { Apartament, SelectOption } from '@/global/types'

import { Container } from './styles'

type HomeProps = {
  apartaments: Apartament[]
}

type FormValues = {
  address: string
  bedroom: SelectOption
}

const bedrooms = [
  { value: '1', label: '1 dormitório' },
  { value: '2', label: '2 dormitórios' },
  { value: '3', label: '+3 dormitórios' }
]

const Home: React.FC<HomeProps> = ({ apartaments }) => {
  const appointmentModalRef = useRef<AppointmentModalHandle>(null)
  const { register, control, watch } = useForm<FormValues>()
  const watchFields = watch()

  const filteredApartaments =
    watchFields.address || watchFields.bedroom
      ? apartaments
          .filter(({ address }) =>
            address.street
              .concat(' ', address.number)
              .toLowerCase()
              .includes(watchFields.address.toLowerCase().replace(',', ''))
          )
          .filter(({ bedroom }) => {
            if (!watchFields.bedroom?.value) return bedroom
            if (watchFields.bedroom.value === '3') return bedroom >= 3

            return bedroom === +watchFields.bedroom.value
          })
      : apartaments

  const openAppointmentModal = (data: Apartament) => {
    appointmentModalRef.current?.openModal(data)
  }

  return (
    <>
      <Head>
        <title>
          Loft - Comprar e vender imóvel pode ser descomplicado e seguro
        </title>
      </Head>
      <Header />
      <div className="main-wrapper">
        <Container>
          <div className="page-header">
            <form>
              <label htmlFor="address">
                <Text>Pesquisar por endereço</Text>
                <TextField.Root>
                  <TextField.Input {...register('address')} type="text" />
                </TextField.Root>
              </label>
              <label htmlFor="bedroom">
                <Text>Dormitórios</Text>
                <Controller
                  control={control}
                  name="bedroom"
                  render={({ field: { ref, value, onChange } }) => (
                    <SelectionField
                      inputRef={ref}
                      isClearable
                      options={bedrooms}
                      value={bedrooms.find((c) => c.value === value?.value)}
                      onChange={onChange}
                    />
                  )}
                />
              </label>
            </form>
          </div>
          <div className="page-content">
            {!filteredApartaments.length && (
              <Heading weight="small">Nenhum apartamento encontrado :/</Heading>
            )}
            {!!filteredApartaments.length && (
              <div className="apartaments-grid">
                {filteredApartaments.map((apartament) => (
                  <ApartamentCard
                    key={apartament.id}
                    apartament={apartament}
                    openAppointmentModal={openAppointmentModal}
                  />
                ))}
              </div>
            )}
          </div>
        </Container>
      </div>
      <AppointmentModal ref={appointmentModalRef} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apartaments = await fetch('https://loft-br.github.io/api/listings.json')
    .then((response) => response.json())
    .then((data) =>
      data.filter((apartament: Apartament) => apartament.status !== 'SOLD')
    )

  return {
    props: {
      apartaments
    }
  }
}

export default Home
