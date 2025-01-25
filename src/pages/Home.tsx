import '@/App.css'
import HeroSection from '@/components/HeroSection'
import TeamSection from '@/components/TeamSection'
import ContactSection from '@/components/ContactSection'
import Navbar from '@/components/Navbar'
import About from '@/components/AboutSection'
import Events from '@/components/UpcomingEventSection'
import Footer from '@/components/Footer'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
      <Navbar />
      <div className='flex-1 w-full'>
          <HeroSection />
          <About />
          <Events />
          <TeamSection />
          <ContactSection />
          <Footer />
      </div>
    </div>
  )
}

export default App;