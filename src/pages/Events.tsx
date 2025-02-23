import '@/App.css'
import Navbar from '@/components/Navbar'
import EventSection from '@/components/EventSection'
import Footer from '@/components/Footer'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
      <Navbar />
      <div className='flex-1 w-full'>
        <EventSection />
      </div>
      <Footer />
    </div>
  )
}

export default App;