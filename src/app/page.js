"use client"
import Image from 'next/image'
import Home from './pages/Home'
import Timer from './components/Countdown'

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col justify-between align-center justify-center text-center text-3xl font-bold mt-28">
      {/* <Home /> */}
      <div>
        <h2 className='align-center justify-center text-center text-3xl font-bold mt-28'>Em propagação!</h2>
        <h4 className='align-center justify-center text-center text-xl'>Volte em 48h</h4>
        {/* <Timer /> */}
      </div>
    </main>
  )
}
