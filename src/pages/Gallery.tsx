import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { backendUrl } from '@/lib/links'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Gallery = () => {
  const [res, setRes] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function call() {
      try {
        const r = await axios.get(`${backendUrl}/gallery/all`)
        setRes(r.data)
      } catch (err) {
        setError('Error loading gallery images.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    call()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="w-screen h-screen flex flex-col overflow-auto">
      <Navbar />
      <div className="flex-1 w-full">
        <section className="min-h-[90vh]">
          <p className="text-3xl pt-10 sm:pt-10 pb-12 sm:pb-10 whitespace-nowrap sm:whitespace-normal sm:text-4xl font-medium text-zinc-600 text-center">
            SRC <span className="font text-blue-600">Gallery</span>
          </p>

          <div className="w-full px-6 sm:px-28 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-5 mb-8 sm:mb-5">
            {res.length >= 5 && (
              <>
                <div className="w-full aspect-video rounded-xl h-full bg-zinc-200">
                  <img className="w-full h-full rounded-xl object-cover" src={res[0].cloudinaryUrl} alt="Gallery image 1" />
                </div>
                <div className="w-full aspect-video grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-5">
                  {res.slice(1, 5).map((image, index) => (
                    <div key={index} className="w-full rounded-xl aspect-video bg-zinc-200">
                      <img className="w-full h-full rounded-xl object-cover" src={image.cloudinaryUrl} alt={`Gallery image ${index + 2}`} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="w-full px-6 sm:px-28 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-5 mb-12">
            {res.length >= 8 && (
              <>
                {res.slice(5, 8).map((image, index) => (
                  <div key={index} className="w-full aspect-video bg-zinc-200 rounded-xl">
                    <img className="w-full h-full rounded-xl object-cover" src={image.cloudinaryUrl} alt={`Gallery image ${index + 6}`} />
                  </div>
                ))}
              </>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery