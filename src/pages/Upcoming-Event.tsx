import '@/App.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UpcomingEventSection from '@/components/UpcomingEventSection'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
      <Navbar />
      <div className='flex-1 w-full'>
        <UpcomingEventSection />
      </div>
      <Footer />
    </div>
  )
}

export default App;