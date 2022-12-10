export type SelectOption = {
  value: string
  label: string
}

export type Apartament = {
  id: string
  address: ApartamentAddress
  price: number
  bookmarked: boolean
  metreage: number
  vacancies: number
  bedroom: number
  nearbySubway: boolean
  constructionYear: number
  picture: ApartamentPicture
  status: string
  amenities: string[]
}

type ApartamentAddress = {
  street: string
  number: string
}

type ApartamentPicture = {
  src: string
  alt: string
}
