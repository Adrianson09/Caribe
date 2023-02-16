import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from 'components/Hero'
import Navbar from 'components/Navbar'
import { SliderData } from 'components/SliderData'
import Slider from 'components/Slider'
import Slider2 from 'components/Slider2'
import Mision from 'components/Mision'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Caribe Hospitality</title>
        <meta name="description" content="Caribe Hospitality Costa Rica" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Hero  heading='Caribe Hospitality' mesagge='We bring development and sustainable economic growth to different countries in the region' />
      <Slider slides={SliderData}/>
      <Mision/>
      
    </>  
  )
}
