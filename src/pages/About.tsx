import '@/App.css'
import Navbar from '@/components/Navbar'
import About from '@/components/AboutSection'
import Footer from '@/components/Footer'
import AboutGalary from '@/components/AboutGalary'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col overflow-auto'>
      <Navbar />
      <div className='flex-1 w-full'>
          <About />
          <AboutGalary />
      </div>
      <Footer />
    </div>
  )
}

export default App;