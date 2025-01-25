import { Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='p-8 bg-black text-white sm:space-y-0 space-y-5 flex-col sm:flex-row flex justify-between items-center'>
      <p className='text-center text-xl font-bold'>Spiritual Research Cell</p>

      <p className='text-center text-zinc-600 whitespace-nowrap text-sm sm:text-base ml-[-1rem] sm:ml-0'>©2025 All right reserved. <span className='font-semibold text-zinc-500'>Spiritual Research Cell</span></p>

      <div className='flex justify-center items-center space-x-4 pr-0 sm:pr-8'>
        <div className="w-[2.4rem] h-[2.4rem] flex justify-center items-center rounded-full hover:bg-white text-white hover:text-black cursor-pointer">
          <Instagram size={20} />
        </div>
        <div className="w-[2.4rem] h-[2.4rem] flex justify-center items-center rounded-full hover:bg-white text-white hover:text-black cursor-pointer">
          <Facebook size={18} />
        </div>
        <div className="w-[2.4rem] h-[2.4rem] flex justify-center items-center rounded-full hover:bg-white text-white hover:text-black cursor-pointer">
          <Linkedin size={18} />
        </div>
      </div>

    </footer>
  )
}

export default Footer