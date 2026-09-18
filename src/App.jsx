import { Routes, Route } from 'react-router-dom'
import ScrollToHash from './ScrollToHash'
import './App.css'
import Nav from './components/Nav.jsx'
import Inicio from './components/Inicio.jsx'
import QuienesSomos from './components/QuienesSomos.jsx'
import Seguros from './components/Seguros.jsx'
import Estadisticas from './components/Estadisticas.jsx'
import Testimonios from './components/Testimonios.jsx'
import Preguntas from './components/Preguntas.jsx'
import TestimoniosPreguntas from './components/TestimoniosPreguntas.jsx'
import Contacto from './components/Contacto.jsx'
import Info from './pages/Infoo.jsx'
import Footer from './components/Footer.jsx'


function Landing() {
  return (
    <>
      <Inicio />
      <QuienesSomos />
      <Seguros />
      <Estadisticas />
       <TestimoniosPreguntas />
      <Contacto />
    </>
  )
}

function App() {
  return (
    <>
      <ScrollToHash />

      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/historia" element={<Info />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App