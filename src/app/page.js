"use client"
import Image from 'next/image'
import Home from './pages/Home'
import Timer from './components/Countdown'

export default function Index() {
  return (
    <figure id="container">
      <Image
      src="/bg.jpg"
      width={1920}
      height={1280}
      / >
      <figcaption>RNA Seguros</figcaption>
    </figure>
  )
}
