import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const Gallery = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
      <Navbar />
      <div className='flex-1 w-full'>
        <section className="min-h-[90vh]">
          <p className='text-3xl pt-10 sm:pt-10 pb-12 sm:pb-10 whitespace-nowrap sm:whitespace-normal sm:text-4xl font-medium text-zinc-600 text-center'>SRC <span className='font text-blue-600'>Gallery</span></p>
          <div className={`w-full px-6 sm:px-28 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12`}>
          {/* {
              events.map(({ _id, event_banner, event_name, event_venue, event_date, event_start_time, event_end_time, guest_image, guest_name }) => {
                return <Event key={_id} evendId={_id} eventName={event_name} eventBanner={event_banner}  guestImg={guest_image} eventDate={event_date} eventGuest={guest_name} eventTime={`${event_start_time} to ${event_end_time}`} eventVenue={event_venue} />                        
              })
          } */}
        </div>
      </section>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery