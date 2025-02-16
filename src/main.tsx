import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Events from './pages/Events'
import Contact from './pages/Contact'
import About from './pages/About'
import UpcomingEvent from './pages/Upcoming-Event'
import Register from './pages/Register'
import Feedback from './pages/Feedback'
import Activities from './pages/Activities'
import Not_found from './pages/Not-Found'
import Gallery from './pages/Gallery'
import Activity_Info from './pages/Activities-Info'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>        
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/events' element={<Events />}/>
          <Route path='/register/:id' element={<Register />}/>
          <Route path='/feedback/:id' element={<Feedback />}/>
          <Route path='/upcoming-events' element={<UpcomingEvent />}/>
          <Route path='/activities' element={<Activities />}/>
          <Route path='/activity-info' element={<Activity_Info />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<Not_found />}/>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
