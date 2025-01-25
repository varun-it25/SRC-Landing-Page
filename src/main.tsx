import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Events from './pages/Events'
import Contact from './pages/Contact'
import About from './pages/About'
import UpcomingEvent from './pages/UpcomingEvent'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>        
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/events' element={<Events />}/>
          <Route path='/upcoming-events' element={<UpcomingEvent />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
