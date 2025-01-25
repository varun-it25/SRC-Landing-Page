import { eventData } from "@/data/eventCard"
import { Button } from "./ui/button"
import { CalendarRange, Clock, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface eventData{
    evendId : string,
    eventBanner : string,
    eventName : string,
    eventDate : string,
    eventTime : string,
    eventVenue : string,
    eventGuest : string,
    guestImg : string
}

function Event({ evendId, eventBanner, eventName, eventDate, eventTime, eventVenue, eventGuest, guestImg }: eventData){
    const nav = useNavigate()

    return(
        <div className='p-4 rounded-md border bg-white shadow-md'>
            <div className='w-full mb-3'>
                <div className='w-full h-28 rounded-md'>
                    <img src={eventBanner} className='object-cover w-full h-full rounded-md' />
                </div>
                <div className='w-full rounded-md h-28 bg-black relative flex space-x-2 mt-[-7rem] bg-opacity-20 p-2 text-white'>
                    <div className='w-7 h-7 rounded-sm'>
                        <img src={guestImg} className='object-cover w-full h-full rounded-md' />
                    </div>
                    <p className='sm font-semibold'>{eventGuest}</p>
                </div>
            </div>

            <div className='space-y-3 text-zinc-700 px-2 mb-5'>
                <p className='text-xl font-bold'>{eventName}</p>

                <div className='flex items-center space-x-2 px-1'>
                    <MapPin size={20} />
                    <p className='font-medium text-sm'>{eventVenue}</p>
                </div>

                <div className='flex items-center space-x-2 px-1'>
                    <CalendarRange size={20} />
                    <p className='font-medium text-sm'>{eventDate}</p>
                </div>

                <div className='flex items-center space-x-2 px-1'>
                    <Clock size={20} />
                    <p className='font-medium text-sm'>{eventTime}</p>
                </div>
            </div>

            <Button className='w-full bg-red-600 hover:bg-red-500' onClick={() => nav(`/${evendId}`)}>Register</Button>
        </div>
    )
}

const EventSection = () => {
  return (
    <section className="pt-10 sm:pt-12 pb-8 sm:pb-20">
        <p className='text-3xl mb-10 sm:mb-14 whitespace-nowrap sm:whitespace-normal sm:text-4xl font-medium text-zinc-600 text-center'>Upcoming <span className='font text-blue-600'>Events</span></p>
        <div className="w-full px-6 sm:px-28 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12">
          {
              eventData.map(({ evendId, eventBanner, eventName, eventDate, eventTime, eventVenue, eventGuest, guestImg }) => {
                return <Event key={evendId} evendId={evendId} eventName={eventName} eventBanner={eventBanner}  guestImg={guestImg} eventDate={eventDate} eventGuest={eventGuest} eventTime={eventTime} eventVenue={eventVenue} />                        
              })
          }
          {
              eventData.map(({ evendId, eventBanner, eventName, eventDate, eventTime, eventVenue, eventGuest, guestImg }) => {
                return <Event key={evendId} evendId={evendId} eventName={eventName} eventBanner={eventBanner}  guestImg={guestImg} eventDate={eventDate} eventGuest={eventGuest} eventTime={eventTime} eventVenue={eventVenue} />                        
              })
          }
          {
              eventData.map(({ evendId, eventBanner, eventName, eventDate, eventTime, eventVenue, eventGuest, guestImg }) => {
                return <Event key={evendId} evendId={evendId} eventName={eventName} eventBanner={eventBanner}  guestImg={guestImg} eventDate={eventDate} eventGuest={eventGuest} eventTime={eventTime} eventVenue={eventVenue} />                        
              })
          }
          {
              eventData.map(({ evendId, eventBanner, eventName, eventDate, eventTime, eventVenue, eventGuest, guestImg }) => {
                return <Event key={evendId} evendId={evendId} eventName={eventName} eventBanner={eventBanner}  guestImg={guestImg} eventDate={eventDate} eventGuest={eventGuest} eventTime={eventTime} eventVenue={eventVenue} />                        
              })
          }
        </div>
    </section>
  )
}

export default EventSection