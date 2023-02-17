import Head from 'next/head'
import Hero2 from 'components/Hero2'
import React from 'react'
import { SliderData } from 'components/SliderData'
import Slider from 'components/Slider'
import Corporate from 'components/Corporate'

const index = () => {
  return (
    < >
       <Head>
        <title>Caribe Hospitality</title>
        <meta name="description" content="Caribe Hospitality Costa Rica" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Hero2  heading='About Us' mesagge='We develop and manage hotel investments of superior standards in a sustainable, profitable manner and with a high-level team.' />
      <Corporate/>
    </>
  )
}

export default index