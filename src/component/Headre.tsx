import Image from 'next/image'
import React from 'react'
import img from '@/assets/1.jpg'
// import TexturedMaskView from './TextVideo'
// import ParticleView from './TextVideo'


export default function Headre() {
  return (
    <div className='flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white'>
        <div className='border-amber-50 border-2 rounded-full'>
             <Image src={img} alt="Logo" width={50} height={50} className="rounded-full" />
        </div>
       
       <h1 className='text-6xl font-bold text-amber-50   '>YAMANI CHAT</h1>
       
        <nav className='space-x-4'>  <a href="#" className='px-3 py-1 rounded-lg backdrop-blur-lg bg-white/80 dark:bg-black/90 text-black dark:text-white hover:bg-white/100'>projects</a></nav>
           
    </div>
  )
}
