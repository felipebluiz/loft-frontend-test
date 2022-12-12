import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowsOutSimple, Bed, Car, Heart } from 'phosphor-react'

import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { IconButton } from '@/components/ui/IconButton'
import { currencyFormat } from '@/utils/format'
import { Apartament } from '@/global/types'

import { Container } from './styles'

type ApartamentCardProps = {
  apartament: Apartament
  openAppointmentModal: (apartament: Apartament) => void
}

export const ApartamentCard: React.FC<ApartamentCardProps> = ({
  apartament,
  openAppointmentModal
}) => {
  const [isLiked, setIsLiked] = useState(apartament.bookmarked)

  return (
    <Container
      aria-label="apartament-card"
      onClick={() => openAppointmentModal(apartament)}
    >
      <div className="image-container">
        <Image
          src={`${apartament.picture.src}.png`}
          alt={apartament.picture.alt}
          sizes="100"
          fill
          priority
        />
      </div>
      <div className="content-container">
        <div className="heading">
          <div>
            <Heading size="sm">
              {currencyFormat.format(apartament.price)}
            </Heading>
            <Text size="sm">
              {apartament.address.street.concat(
                ', ',
                apartament.address.number
              )}
            </Text>
          </div>
          <IconButton
            size="md"
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation()
              setIsLiked(!isLiked)
            }}
          >
            <Heart
              weight={isLiked ? 'fill' : 'bold'}
              className={isLiked ? 'is-liked' : ''}
            />
          </IconButton>
        </div>
        <div className="features">
          <div>
            <ArrowsOutSimple />
            <Text size="sm">{`${apartament.metreage}m²`}</Text>
          </div>
          <div>
            <Bed />
            <Text size="sm">{`${apartament.bedroom} ${
              apartament.bedroom === 1 ? 'dorm' : 'dorms'
            }`}</Text>
          </div>
          <div>
            <Car />
            <Text size="sm">
              {apartament.vacancies
                ? `${apartament.vacancies} ${
                    apartament.vacancies === 1 ? 'vaga' : 'vagas'
                  }`
                : 'Sem vaga'}
            </Text>
          </div>
        </div>
      </div>
    </Container>
  )
}
