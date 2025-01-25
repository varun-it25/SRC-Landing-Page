import './App.css'
import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import EventSection from './components/TeamSection'
import ContactSection from './components/ContactSection'
import Navbar from './components/Navbar'
import About from './components/About'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
      <Navbar />
      <div className='flex-1 border-2 w-full'>
          <HeroSection />
          <About />
          <EventSection />
          <ContactSection />
      </div>
    </div>
  )
}

export default App;