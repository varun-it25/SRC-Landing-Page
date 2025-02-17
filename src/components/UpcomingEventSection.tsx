import { Button } from "./ui/button"
import { CalendarRange, Clock, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { backendUrl } from "@/lib/links"
import { useEffect, useState } from "react"
import axios from "axios"

interface EventData {
    eventId: string;
    eventBanner: string;
    eventName: string;
    eventDate: string;
    eventTime: string;
    eventVenue: string;
    eventGuest: string;
    guestImg: string;
}

function Event({ eventId, eventBanner, eventName, eventDate, eventTime, eventVenue, eventGuest, guestImg }: EventData) {
    const nav = useNavigate()

    return (
        <div className='p-4 rounded-md border bg-white shadow-md'>
            <div className='w-full mb-3'>
                <div className='w-full h-28 rounded-md'>
                    <img src={eventBanner} className='object-cover w-full h-full rounded-md' />
                </div>
                <div className='w-full rounded-md h-28 bg-black relative flex space-x-2 mt-[-7rem] bg-opacity-20 p-2 text-white'>
                    <div className='w-7 h-7 rounded-sm bg-white'>
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

            <Button className='w-full bg-red-600 hover:bg-red-500' onClick={() => nav(`/register/${eventId}`)}>Register</Button>
        </div>
    )
}

const EventSection = () => {
  const [events, setEvents] = useState<any[]>([])  
  const [isLoad, setLoad] = useState<boolean>(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${backendUrl}/events/upcoming`)
        setEvents(res.data)
      } catch (error) {
        console.error("Error fetching events:", error)
      } finally {
        setLoad(false)
      }
    }    
    fetchEvents()
  }, [])

  return (
    <section className="min-h-[90vh]">
        <p className='text-3xl pt-10 sm:pt-10 pb-12 sm:pb-10 whitespace-nowrap sm:whitespace-normal sm:text-4xl font-medium text-zinc-600 text-center'>Upcoming <span className='font text-blue-600'>Events</span></p>
        {
          isLoad && <div className="w-full mt-4 h-80 flex justify-center items-center text-2xl">Loading...</div>
        }
        {
          !isLoad && events.length === 0
            ? <div className="w-full mt-4 h-96 sm:h-80 bg-red-50 flex justify-center items-center text-xl sm:text-2xl text-red-500 font-semibold">There is no upcoming events.</div>
            : (
              <div className={`w-full px-6 sm:px-28 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12`}>
                {
                  events.map(({ _id, event_banner, event_name, event_venue, event_date, event_start_time, event_end_time, guest_image, guest_name }) => {
                    return <Event key={_id} eventId={_id} eventName={event_name} eventBanner={event_banner} guestImg={guest_image} eventDate={event_date} eventGuest={guest_name} eventTime={`${event_start_time} to ${event_end_time}`} eventVenue={event_venue} />                        
                  })
                }
              </div>
            )
        }
    </section>
  )
}

export default EventSection