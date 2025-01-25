import '@/App.css'
import ContactSection from '@/components/ContactSection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
      <Navbar />
      <div className='flex-1 w-full'>
          <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

export default App;