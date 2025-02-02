import '@/App.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ActivitiesSection from '@/components/ActivitiesSection'

const Activities = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
      <Navbar />
      <div className='flex-1 w-full'>
          <ActivitiesSection />
      </div>
      <Footer />
    </div>
  )
}

export default Activities;