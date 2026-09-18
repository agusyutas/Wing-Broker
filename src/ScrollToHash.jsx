import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const elemento = document.querySelector(location.hash)
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}

export default ScrollToHash