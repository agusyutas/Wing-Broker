import { useState, useEffect } from 'react'

const WHATSAPP_URL =
  'https://wa.me/5491155795545?text=' +
  encodeURIComponent(
    'Hola! quiero sumarme al equipo de Wing Broker como productor de seguros.'
  )

const slides = [
  { src: '/banner.png', alt: 'Equipo de Wing Broker', cta: false },
  { src: '/banner-2.png', alt: 'Sumate al equipo de Wing Broker', cta: true },
]

function Inicio() {
    const logos = [
    { src: '/allianz-logo.png', alt: 'Allianz' },
    { src: '/assistance-logo.png', alt: 'Universal Assistance' },
    { src: '/federacion-logo.png', alt: 'Federación Patronal' },
    { src: '/sancor-logo.png', alt: 'Sancor Seguros' },
    { src: '/zurich-logo.png', alt: 'Zurich' },
    { src: '/holando-logo.png', alt: 'La Holando' },
    { src: '/experta-logo.png', alt: 'Experta' },
    { src: '/mapre-logo.png', alt: 'Mapfre' },
  ]

  const [current, setCurrent] = useState(0)

  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length)
  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  
   useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="inicio" className="inicio">

      <div className="inicio-content">
      <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="carousel-slide" key={slide.src}>
                <img src={slide.src} alt={slide.alt} className="banner" />
                  {slide.cta && (
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="banner-cta" tabIndex={current === index ? 0 : -1}>
                    Sumate a nuestro equipo
                  </a>
                )}
              </div>
            ))}

          </div>
            <button
            type="button"
            className="carousel-arrow carousel-arrow-prev"
            onClick={goPrev}
            aria-label="Banner anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-next"
            onClick={goNext}
            aria-label="Banner siguiente"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

           <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`carousel-dot ${current === index ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
                aria-label={`Ir al banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

       <div className="logos-carousel">
        <div className="logos-track">

          <div className="logos-group">
            {logos.map((logo, index) => (
              <img
                key={`logo-1-${index}`}
                src={logo.src}
                alt={logo.alt}
                width="1000"
                height="67"
                loading="eager"
                decoding="async"
              />
            ))}
          </div>

          <div className="logos-group" aria-hidden="true">
            {logos.map((logo, index) => (
              <img
                key={`logo-2-${index}`}
                src={logo.src}
                alt={logo.alt}
                width="1000"
                height="67"
                loading="eager"
                decoding="async"
              />
            ))}
          </div>

        </div>
      </div>
      
      
    </section>
  )
}

export default Inicio