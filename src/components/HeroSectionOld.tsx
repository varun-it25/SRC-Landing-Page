import React from 'react'
import { Button } from './ui/button'
import Banner_Image from '@/assets/Banner_Image.png'

const HeroSectionOld = () => {
  return (
    <section className='flex-col flex-col-reverse justify-between items-center sm:flex-row flex space-x-6 px-5 md:px-20 sm:px-12 py-7 sm:py-8'>
      <div className='w-full flex flex-col justify-center items-start pl-0 lg:pl-10'>
        <p className='text-4xl whitespace-nowrap sm:whitespace-normal sm:text-5xl font-medium text-zinc-500 mb-3'>Improve your <span className='font-bold text-zinc-600'>Focus</span></p>
        <p className='text-4xl sm:text-5xl font-medium text-zinc-600 mb-5'>Find your <span className='font-bold text-blue-600'>Peace</span></p>
        <p className='text-zinc-400 text-sm mb-6'>Join Spiritual Research Cell to discover the power of mindfulness and inner peace. Transform your life and self-discovery.</p>
        <div className='flex space-x-3'>
          <Button>Upcoming Events</Button>
          <Button variant={`outline`}>Learn More</Button>
        </div>
      </div>
      <div className='w-full mb-4 sm:mb-0'>
        <div className='w-full h-72 sm:h-96 flex justify-center'>
          <img src={Banner_Image} className='h-full mr-[1rem] sm:mr-0 whitespace-nowrap object-cover' />
        </div>
        {/* <img src={Banner_Image} className='object-fit border'/> */}
      </div>
    </section>
  )
}

export default HeroSectionOld