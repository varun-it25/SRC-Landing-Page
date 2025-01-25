import Total_Events from '@/components/Total_Events'
import Feedback from '../components/Feedback'
import Recent_Events from '@/components/Recent_Events'
import All_Buttons from '@/components/All_Buttons'
import Container from '@/components/Right'
import { Button } from '@/components/ui/button'

const Dashboard = () => {
  return (
    <Container>
        <div className='w-full h-fit py-4 overflow-auto'>
            <div className='w-full h-fit grid px-6 sm:px-10 grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='w-full h-[26rem] p-4 sm:p-24'>
                    <div className='flex flex-col justify-center items-start space-y-4 sm:space-y-5'>
                        <p className='text-2xl sm:text-5xl'>Find Your Focus</p>
                        <p className='text-2xl sm:text-5xl'>Unlock Your Peace</p>
                        <div className='pt-8'>
                          <Button>Upcoming Events</Button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[26rem] py-8'>
                    <img src='https://thumbs.dreamstime.com/b/group-people-yoga-meditation-class-breathing-exercise-72175279.jpg' className='w-full h-full object-cover rounded-lg' />
                </div>
                <div className=''></div>
            </div>
            <div className='w-full bg-blue-100 px-6 sm:px-10 py-10'>
                <div className='w-full text-3xl font-semibold text-center'><p>About us</p></div>
                <div className='w-full flex space-x-4'>
                <div className='w-full h-[26rem] py-8'>
                    <img src='https://blackhattalent.com/wp-content/uploads/2023/08/BK-shivani-1.jpg' className='w-full h-full object-cover rounded-lg' />
                </div>
                <div className='w-full h-[26rem] py-8'>
                    <img src='https://thumbs.dreamstime.com/b/group-people-yoga-meditation-class-breathing-exercise-72175279.jpg' className='w-full h-full object-cover rounded-lg' />
                </div>

                </div>

            </div>
        </div>
    </Container>
  )
}

export default Dashboard