"use client"
import Image from 'next/image'
import Home from './pages/Home'

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Home />
    </main>
  )
}
