import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { backendUrl } from '@/lib/links'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Gallery = () => {
  const [res, setRes] = useState<any[]>([])

  useEffect(()=>{
    async function call(){
      const r = await axios.get(`${backendUrl}/gallery/all`)
      setRes(r.data)
    }
    call()
  },[])

  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
      <Navbar />
      <div className='flex-1 w-full'>
        <section className="min-h-[90vh]">
          <p className='text-3xl pt-10 sm:pt-10 pb-12 sm:pb-10 whitespace-nowrap sm:whitespace-normal sm:text-4xl font-medium text-zinc-600 text-center'>SRC <span className='font text-blue-600'>Gallery</span></p>
          <div className={`w-full px-6 sm:px-28 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 mb-4`}>
            <div className={'w-full aspect-video rounded-xl h-full bg-zinc-200'}>
              <img className='w-full h-full rounded-xl' src={res[0].cloudinaryUrl} />
            </div>
            <div className={'w-full aspect-video grid  grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4'}>
              <div className='w-full rounded-xl aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src={res[1].cloudinaryUrl} />
              </div>
              <div className='w-full rounded-xl aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src={res[2].cloudinaryUrl} />
              </div>
              <div className='w-full rounded-xl aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src={res[3].cloudinaryUrl} />
              </div>
              <div className='w-full rounded-xl aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src={res[4].cloudinaryUrl}/>
              </div>
            </div>
          </div>

          <div className={`w-full px-6 sm:px-28 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 mb-12`}>
            <div className={'w-full aspect-video bg-zinc-200 rounded-xl'}>
              <img className='w-full h-full rounded-xl' src={res[5].cloudinaryUrl} />
            </div>
            <div className={'w-full aspect-video bg-zinc-200 rounded-xl'}>
              <img className='w-full h-full rounded-xl' src={res[6].cloudinaryUrl} />
            </div>
            <div className={'w-full aspect-video bg-zinc-200 rounded-xl'}>
              <img className='w-full h-full rounded-xl' src={res[7].cloudinaryUrl} />
            </div>
          </div>
      </section>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery