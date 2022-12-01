import React from 'react'
import Head from 'next/head'

import { Header } from '@/components/ui/Header'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Loft - Comprar e vender imóvel pode ser descomplicado e seguro
        </title>
      </Head>
      <Header />
    </>
  )
}

export default Home
