import React from 'react'
import Head from 'next/head'

import { Header } from '@/components/ui/Header'

import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>
          Loft - Comprar e vender imóvel pode ser descomplicado e seguro
        </title>
      </Head>
      <Header />
    </Container>
  )
}

export default Home
