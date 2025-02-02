import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import Banner_Image from '@/assets/Banner_Image.png'

const HeroSection = () => {
  return (
    <section className='flex-col flex-col-reverse h-[90vh] justify-between items-center sm:flex-row flex space-x-6 px-5 md:px-20 sm:px-12 pt-7 sm:pt-8 pb-12 sm:pb-8'>
      <div className='w-full flex flex-col justify-center items-start pl-0 lg:pl-10'>
        <p className='text-[2rem] whitespace-nowrap sm:whitespace-normal sm:text-5xl w-full text-center font-medium text-zinc-500 mb-2 sm:mb-5'>Improve your <span className='font-bold text-zinc-600'>Focus</span></p>
        <p className='text-4xl sm:text-5xl font-medium text-zinc-600 mb-7 w-full text-center'>Find your <span className='font-bold text-blue-600'>Peace</span></p>
        <p className='text-zinc-400 text-center xt-start text-sm mb-8'>Join Spiritual Research Cell to discover the power of mindfulness and inner peace. Transform your life and self-discovery.</p>

        <div className='flex justify-center fy-start space-x-5 w-full'>
          <Link to={`/activities`}><Button>Activities</Button></Link>
          <Link to={`/upcoming-events`}><Button variant={`outline`}>Upcoming Events</Button></Link>
        </div>
      </div>
      <div className='w-full mb-4 sm:mb-0'>
        <div className='w-full h-72 sm:h-96 flex justify-center'>
          <img src={Banner_Image} className='h-full mr-[1rem] mt-5 sm:mt-0 sm:mr-0 whitespace-nowrap object-cover' />
        </div>
      </div>
    </section>
  )
}

export default HeroSection