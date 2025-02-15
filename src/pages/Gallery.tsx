import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const Gallery = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
      <Navbar />
      <div className='flex-1 w-full'>
        <section className="min-h-[90vh]">
          <p className='text-3xl pt-10 sm:pt-10 pb-12 sm:pb-10 whitespace-nowrap sm:whitespace-normal sm:text-4xl font-medium text-zinc-600 text-center'>SRC <span className='font text-blue-600'>Gallery</span></p>
          <div className={`w-full px-6 sm:px-28 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 mb-4`}>
            <div className={'w-full aspect-video h-full bg-zinc-200'}>
              <img className='w-full h-full rounded-xl' src='https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
            </div>
            <div className={'w-full aspect-video grid  grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4'}>
              <div className='w-full rounded-lg aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src='https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?cs=srgb&dl=pexels-pixabay-433452.jpg&fm=jpg' />
              </div>
              <div className='w-full rounded-lg aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src='https://www.hire4event.com/blogs/wp-content/uploads/2019/03/Type-of-events.jpg' />
              </div>
              <div className='w-full rounded-lg aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src='https://theroyalreception.com/assets/img/gallery/events/1.jpg' />
              </div>
              <div className='w-full rounded-lg aspect-video bg-zinc-200'>
                  <img className='w-full h-full rounded-xl' src='https://scandiweb.com/blog/wp-content/uploads/2020/01/ecom360_conference_hosting_successful_event.jpeg' />
              </div>
            </div>
        </div>
        <div className={`w-full px-6 sm:px-28 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 mb-12`}>
            <div className={'w-full aspect-video bg-zinc-200 rounded-xl'}>
              <img className='w-full h-full rounded-xl' src='https://nvpmart.in/wp-content/uploads/2023/02/EventManagement.jpg' />
            </div>
            <div className={'w-full aspect-video bg-zinc-200 rounded-xl'}>
              <img className='w-full h-full rounded-xl' src='https://images.ctfassets.net/3dar4x4x74wk/48LO8M4jbhPFbFIfgNO6nG/89b7b5c992cdf2628b6a047edacaf120/Delux_Tablescape_275.jpg' />
            </div>
            <div className={'w-full aspect-video bg-zinc-200 rounded-xl'}>
              <img className='w-full h-full rounded-xl' src='https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg' />
            </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery